import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { buildCodexExecArgs, runCodexExec } from "../scripts/lib/codex-exec.mjs";
import { parseOptions } from "../scripts/lib/args.mjs";
import { startLoop } from "../scripts/ralph-codex.mjs";
import { readEvents, readState, resolveStatePaths } from "../scripts/lib/state.mjs";

const fakeCodex = path.resolve("plugins/ralph-loop/test/fixtures/fake-codex.mjs");

test("buildCodexExecArgs passes stable codex exec arguments", () => {
  const args = buildCodexExecArgs({
    workspace: "/tmp/project",
    state: {
      sandbox: "workspace-write",
      model: "gpt-test",
      reasoning: "high",
      ephemeral: true
    },
    paths: {
      lastMessage: "/tmp/project/.codex/ralph-loop/last-message.md"
    }
  });

  assert.deepEqual(args.slice(0, 5), ["exec", "--cd", "/tmp/project", "--sandbox", "workspace-write"]);
  assert.ok(args.includes("--model"));
  assert.ok(args.includes("gpt-test"));
  assert.ok(args.includes("-c"));
  assert.ok(args.includes('model_reasoning_effort="high"'));
  assert.ok(args.includes("--ephemeral"));
  assert.equal(args.at(-1), "-");
  assert.equal(args.includes("--ask-for-approval"), false);
});

test("runCodexExec captures final message from fake codex", async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), "ralph-run-"));
  const paths = resolveStatePaths(dir);
  await fs.chmod(fakeCodex, 0o755);
  process.env.FAKE_CODEX_OUTPUT = "done <promise>DONE</promise>";

  const result = await runCodexExec({
    workspace: dir,
    prompt: "hello",
    state: { sandbox: "workspace-write" },
    paths,
    codexBin: fakeCodex,
    inheritOutput: false,
    timeoutMs: 5000
  });

  assert.equal(result.exitCode, 0);
  assert.equal(await fs.readFile(paths.lastMessage, "utf8"), "done <promise>DONE</promise>");
  delete process.env.FAKE_CODEX_OUTPUT;
});

test("startLoop completes when fake codex emits promise", async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), "ralph-loop-"));
  await fs.chmod(fakeCodex, 0o755);
  process.env.FAKE_CODEX_OUTPUT = "All set.\n<promise>DONE</promise>";

  const options = parseOptions([
    "--workspace",
    dir,
    "--completion-promise",
    "DONE",
    "--max-iterations",
    "3",
    "--codex-bin",
    fakeCodex,
    "--",
    "Write a file"
  ]);

  await startLoop(options);

  const paths = resolveStatePaths(dir);
  const state = await readState(paths.state);
  const events = await readEvents(paths.events);

  assert.equal(state.status, "completed");
  assert.equal(state.iteration, 1);
  assert.equal(events.some((event) => event.type === "completed"), true);
  await assert.rejects(() => fs.access(paths.lockDir));
  delete process.env.FAKE_CODEX_OUTPUT;
});

test("startLoop stops at max iterations without promise", async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), "ralph-loop-"));
  await fs.chmod(fakeCodex, 0o755);
  process.env.FAKE_CODEX_OUTPUT = "Not done yet.";

  const options = parseOptions([
    "--workspace",
    dir,
    "--completion-promise",
    "DONE",
    "--max-iterations",
    "1",
    "--codex-bin",
    fakeCodex,
    "--",
    "Try once"
  ]);

  await startLoop(options);

  const paths = resolveStatePaths(dir);
  const state = await readState(paths.state);
  assert.equal(state.status, "max_iterations_reached");
  assert.equal(state.iteration, 1);
  delete process.env.FAKE_CODEX_OUTPUT;
});
