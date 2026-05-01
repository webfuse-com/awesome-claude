import { spawn } from "node:child_process";

export function buildCodexExecArgs({ workspace, promptPath, state, paths }) {
  const args = [
    "exec",
    "--cd",
    workspace,
    "--sandbox",
    state.sandbox || "workspace-write",
    "-o",
    paths.lastMessage
  ];

  if (state.model) {
    args.push("--model", state.model);
  }

  if (state.reasoning) {
    args.push("-c", `model_reasoning_effort="${state.reasoning}"`);
  }

  if (state.ephemeral) {
    args.push("--ephemeral");
  }

  if (state.includeApprovalFlag && state.approvalPolicy) {
    args.push("--ask-for-approval", state.approvalPolicy);
  }

  args.push("-");
  return args;
}

export async function runCodexExec({
  workspace,
  prompt,
  promptPath,
  state,
  paths,
  codexBin = process.env.RALPH_CODEX_BIN || "codex",
  timeoutMs = 30 * 60 * 1000,
  inheritOutput = true
}) {
  const args = buildCodexExecArgs({ workspace, promptPath, state, paths });
  const startedAt = Date.now();

  return new Promise((resolve, reject) => {
    const child = spawn(codexBin, args, {
      cwd: workspace,
      env: process.env,
      stdio: ["pipe", "pipe", "pipe"]
    });

    let stdout = "";
    let stderr = "";
    let timedOut = false;

    const timer = setTimeout(() => {
      timedOut = true;
      child.kill("SIGTERM");
    }, timeoutMs);

    child.stdout.on("data", (chunk) => {
      const text = chunk.toString();
      stdout += text;
      if (inheritOutput) process.stdout.write(text);
    });

    child.stderr.on("data", (chunk) => {
      const text = chunk.toString();
      stderr += text;
      if (inheritOutput) process.stderr.write(text);
    });

    child.on("error", (error) => {
      clearTimeout(timer);
      reject(error);
    });

    child.on("close", (exitCode, signal) => {
      clearTimeout(timer);
      resolve({
        exitCode,
        signal,
        timedOut,
        durationMs: Date.now() - startedAt,
        stdout,
        stderr
      });
    });

    child.stdin.end(prompt);
  });
}
