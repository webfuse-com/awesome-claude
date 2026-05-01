#!/usr/bin/env node

import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseCli } from "./lib/args.mjs";
import { runCodexExec } from "./lib/codex-exec.mjs";
import { formatDoctorReport, runDoctor } from "./lib/doctor.mjs";
import { promiseMatches } from "./lib/promise.mjs";
import {
  acquireLock,
  appendEvent,
  archiveCurrentState,
  ensureStateDir,
  isCancelRequested,
  readEvents,
  readState,
  readTextIfExists,
  releaseLock,
  requestCancel,
  resolveStatePaths,
  workspaceRelative,
  writeStateAtomic,
  writeTextAtomic
} from "./lib/state.mjs";
import { updateSummary } from "./lib/summary.mjs";

const RUNNER_PATH = fileURLToPath(import.meta.url);

async function main() {
  const { command, options } = parseCli(process.argv.slice(2));

  if (options.help || command === "help") {
    printHelp();
    return;
  }

  switch (command) {
    case "start":
      await startLoop(options);
      break;
    case "status":
      await printStatus(options);
      break;
    case "cancel":
      await cancelLoop(options);
      break;
    case "doctor":
      await doctor(options);
      break;
    case "clear":
      await clearLoop(options);
      break;
    default:
      throw new Error(`Unknown command: ${command}`);
  }
}

export async function startLoop(options) {
  if (!options.prompt) {
    throw new Error("start requires a prompt. Use -- before prompts that contain option-like text.");
  }

  if (options.mode !== "fresh") {
    throw new Error("--mode resume is reserved for a future Codex session-resume implementation");
  }

  const workspace = path.resolve(options.workspace);
  const paths = resolveStatePaths(workspace);
  await ensureStateDir(paths);
  await acquireLock(paths.lockDir, { clearStaleLock: options.clearStaleLock });

  try {
    const existing = await readState(paths.state);
    if (existing?.status === "active") {
      throw new Error(`An active Ralph loop already exists at iteration ${existing.iteration}`);
    }

    const state = buildInitialState(options, paths, workspace);
    await writeTextAtomic(paths.prompt, `${options.prompt}\n`);
    await writeTextAtomic(paths.summary, "# Ralph Loop Progress Summary\n\nNo completed iterations yet.\n");
    await writeTextAtomic(paths.events, "");
    await fs.rm(paths.lastMessage, { force: true });
    await fs.rm(paths.cancel, { force: true });
    await writeStateAtomic(paths.state, state);
    await appendEvent(paths.events, {
      loopId: state.loopId,
      type: "started",
      iteration: state.iteration,
      maxIterations: state.maxIterations
    });

    console.log(`Ralph Loop started: ${state.loopId}`);
    console.log(`Workspace: ${workspace}`);
    console.log(`Max iterations: ${state.maxIterations === 0 ? "unlimited" : state.maxIterations}`);
    if (state.completionPromise) {
      console.log(`Completion promise: <promise>${state.completionPromise}</promise>`);
    }
    console.log("");

    while (true) {
      const current = await readState(paths.state);
      if (!current) throw new Error("Ralph state disappeared during execution");

      if (await isCancelRequested(paths.cancel)) {
        await finishLoop(paths, current, "cancelled");
        console.log("Ralph Loop cancelled.");
        return;
      }

      if (current.maxIterations > 0 && current.iteration > current.maxIterations) {
        await finishLoop(paths, current, "max_iterations_reached");
        console.log(`Ralph Loop reached max iterations (${current.maxIterations}).`);
        return;
      }

      console.log(`--- Ralph iteration ${current.iteration}${current.maxIterations ? `/${current.maxIterations}` : ""} ---`);
      const iterationPrompt = await renderIterationPrompt(paths, current);
      const result = await runCodexExec({
        workspace,
        prompt: iterationPrompt,
        state: current,
        paths,
        codexBin: options.codexBin || process.env.RALPH_CODEX_BIN || "codex",
        timeoutMs: current.iterationTimeoutSec * 1000,
        inheritOutput: true
      });

      const lastMessage = await readTextIfExists(paths.lastMessage, "");
      const promiseDetected = current.completionPromise
        ? promiseMatches(lastMessage, current.completionPromise)
        : false;

      await appendEvent(paths.events, {
        loopId: current.loopId,
        type: "iteration_completed",
        iteration: current.iteration,
        exitCode: result.exitCode,
        signal: result.signal,
        timedOut: result.timedOut,
        durationMs: result.durationMs,
        promiseDetected
      });

      if (result.exitCode !== 0 || result.timedOut) {
        await finishLoop(paths, current, "failed", {
          lastExitCode: result.exitCode,
          lastSignal: result.signal,
          timedOut: result.timedOut
        });
        console.error(`Ralph Loop failed at iteration ${current.iteration}.`);
        process.exitCode = result.exitCode || 1;
        return;
      }

      if (promiseDetected) {
        await finishLoop(paths, current, "completed", { completionPromise: current.completionPromise });
        console.log(`Ralph Loop completed at iteration ${current.iteration}.`);
        return;
      }

      if (current.maxIterations > 0 && current.iteration >= current.maxIterations) {
        await updateSummary(paths, current, lastMessage);
        await finishLoop(paths, current, "max_iterations_reached");
        console.log(`Ralph Loop reached max iterations (${current.maxIterations}).`);
        return;
      }

      await updateSummary(paths, current, lastMessage);
      await writeStateAtomic(paths.state, {
        ...current,
        iteration: current.iteration + 1,
        updatedAt: new Date().toISOString(),
        lastExitCode: result.exitCode
      });
    }
  } finally {
    await releaseLock(paths.lockDir);
  }
}

export async function printStatus(options) {
  const paths = resolveStatePaths(options.workspace);
  const state = await readState(paths.state);
  const events = await readEvents(paths.events).catch(() => []);
  const claudeState = await readTextIfExists(path.join(path.resolve(options.workspace), ".claude", "ralph-loop.local.md"), null);

  if (options.json) {
    console.log(JSON.stringify({ state, events: events.slice(-10), claudeActive: Boolean(claudeState) }, null, 2));
    return;
  }

  if (!state) {
    console.log("No Codex Ralph loop state found.");
  } else {
    console.log("Codex Ralph loop");
    console.log(`  loopId: ${state.loopId}`);
    console.log(`  status: ${state.status}`);
    console.log(`  iteration: ${state.iteration}`);
    console.log(`  maxIterations: ${state.maxIterations === 0 ? "unlimited" : state.maxIterations}`);
    console.log(`  completionPromise: ${state.completionPromise || "none"}`);
    console.log(`  updatedAt: ${state.updatedAt}`);
  }

  if (events.length) {
    console.log("");
    console.log("Recent events:");
    for (const event of events.slice(-10)) {
      console.log(`  ${event.ts} ${event.type} iteration=${event.iteration ?? "-"}`);
    }
  }

  if (claudeState) {
    const iteration = claudeState.match(/^iteration:\s*(.+)$/m)?.[1] || "unknown";
    console.log("");
    console.log(`Claude Ralph loop state found at .claude/ralph-loop.local.md (iteration ${iteration}).`);
  }
}

export async function cancelLoop(options) {
  const workspace = path.resolve(options.workspace);
  const paths = resolveStatePaths(workspace);
  const state = await readState(paths.state);
  let cancelled = false;

  if (state?.status === "active") {
    await requestCancel(paths.cancel);
    console.log(`Cancellation requested for Codex Ralph loop at iteration ${state.iteration}.`);
    cancelled = true;
  }

  const claudePath = path.join(workspace, ".claude", "ralph-loop.local.md");
  const claudeState = await readTextIfExists(claudePath, null);
  if (claudeState) {
    const iteration = claudeState.match(/^iteration:\s*(.+)$/m)?.[1] || "unknown";
    await fs.rm(claudePath, { force: true });
    console.log(`Cancelled Claude Ralph loop (was at iteration ${iteration}).`);
    cancelled = true;
  }

  if (!cancelled) {
    console.log("No active Ralph loop found.");
  }
}

export async function clearLoop(options) {
  const paths = resolveStatePaths(options.workspace);
  await ensureStateDir(paths);
  const state = await readState(paths.state);
  if (!state) {
    console.log("No Codex Ralph loop state found.");
    return;
  }
  const archiveDir = await archiveCurrentState(paths, state, { force: options.force });
  console.log(`Archived Ralph loop state to ${archiveDir}`);
}

export async function doctor(options) {
  const report = await runDoctor({
    workspace: options.workspace,
    runnerPath: RUNNER_PATH,
    codexBin: options.codexBin || "codex"
  });

  if (options.json) {
    console.log(JSON.stringify(report, null, 2));
  } else {
    console.log(formatDoctorReport(report));
  }

  if (!report.ok) process.exitCode = 1;
}

function buildInitialState(options, paths, workspace) {
  const now = new Date().toISOString();
  const loopId = `${now.replace(/[:.]/g, "-")}-ralph-${crypto.randomBytes(3).toString("hex")}`;
  return {
    schemaVersion: 1,
    runtime: "codex",
    loopId,
    workspace,
    status: "active",
    mode: options.mode,
    iteration: 1,
    maxIterations: options.maxIterations,
    completionPromise: options.completionPromise,
    startedAt: now,
    updatedAt: now,
    model: options.model,
    reasoning: options.reasoning,
    sandbox: options.sandbox,
    approvalPolicy: options.approvalPolicy,
    includeApprovalFlag: false,
    iterationTimeoutSec: options.iterationTimeoutSec,
    summaryMaxChars: options.summaryMaxChars,
    ephemeral: options.ephemeral,
    lastExitCode: null,
    lastMessagePath: workspaceRelative(workspace, paths.lastMessage),
    promptPath: workspaceRelative(workspace, paths.prompt),
    summaryPath: workspaceRelative(workspace, paths.summary),
    eventsPath: workspaceRelative(workspace, paths.events)
  };
}

async function renderIterationPrompt(paths, state) {
  const maxText = state.maxIterations === 0 ? "unlimited" : String(state.maxIterations);
  const promiseText = state.completionPromise
    ? [
        "If and only if the completion promise is completely true, end your final answer with:",
        `<promise>${state.completionPromise}</promise>`,
        "",
        "Do not output the promise to escape the loop. The promise must be true."
      ].join("\n")
    : "No completion promise is set. Continue until max iterations or cancellation.";

  return [
    "You are running Ralph Loop for Codex.",
    "",
    `Workspace: ${state.workspace}`,
    `Iteration: ${state.iteration} of ${maxText}`,
    `Original task: read ${state.promptPath}`,
    `Progress summary: read ${state.summaryPath} if present`,
    "",
    "Continue the same task. Inspect the repo state, run relevant verification, fix failures, and update files.",
    "Use the workspace files as persistent memory. Keep changes focused on the original task.",
    "",
    promiseText,
    ""
  ].join("\n");
}

async function finishLoop(paths, current, status, extra = {}) {
  const next = {
    ...current,
    ...extra,
    status,
    updatedAt: new Date().toISOString()
  };
  await writeStateAtomic(paths.state, next);
  await appendEvent(paths.events, {
    loopId: current.loopId,
    type: status,
    iteration: current.iteration,
    ...extra
  });
  await fs.rm(paths.cancel, { force: true });
}

function printHelp() {
  console.log(`Ralph Loop for Codex

Usage:
  ralph-codex.mjs start [options] -- <prompt>
  ralph-codex.mjs status [--workspace path] [--json]
  ralph-codex.mjs cancel [--workspace path]
  ralph-codex.mjs clear [--workspace path] [--force]
  ralph-codex.mjs doctor [--workspace path] [--json]

Start options:
  --workspace <path>             default: current directory
  --max-iterations <n>           default: 10
  --unlimited                    run until cancelled or promise detected
  --completion-promise <text>    expected text inside <promise> tags
  --model <model>                pass model to codex exec
  --reasoning <level>            pass model_reasoning_effort to codex exec
  --sandbox <mode>               read-only, workspace-write, danger-full-access
  --iteration-timeout-sec <n>    default: 1800
  --summary-max-chars <n>        default: 6000
  --ephemeral                    pass --ephemeral to codex exec
  --codex-bin <path>             override codex binary, mainly for tests
`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === RUNNER_PATH) {
  main().catch((error) => {
    console.error(`Ralph Loop error: ${error.message}`);
    process.exitCode = 1;
  });
}
