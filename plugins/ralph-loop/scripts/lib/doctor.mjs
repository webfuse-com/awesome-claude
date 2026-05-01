import { spawnSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { ensureStateDir, releaseLock, resolveStatePaths, writeTextAtomic } from "./state.mjs";

export async function runDoctor({ workspace = process.cwd(), runnerPath = null, codexBin = "codex" } = {}) {
  const checks = [];
  const paths = resolveStatePaths(workspace);

  checks.push(checkNodeVersion());
  checks.push(checkCommand(codexBin, ["--version"], "Codex CLI"));

  if (runnerPath) {
    checks.push(await checkFile(runnerPath, "Ralph runner"));
  }

  try {
    await ensureStateDir(paths);
    const probe = path.join(paths.stateDir, ".doctor.tmp");
    await writeTextAtomic(probe, "ok\n");
    await fs.rm(probe, { force: true });
    checks.push(pass("Workspace state directory writable"));
  } catch (error) {
    checks.push(fail("Workspace state directory writable", error.message));
  }

  try {
    await fs.access(paths.lockDir);
    checks.push(warn("No active lock", `Lock exists at ${paths.lockDir}`));
  } catch (error) {
    if (error?.code === "ENOENT") checks.push(pass("No active lock"));
    else checks.push(fail("No active lock", error.message));
  }

  const features = spawnSync(codexBin, ["features", "list"], { encoding: "utf8" });
  if (features.status === 0) {
    const line = features.stdout.split("\n").find((item) => item.trim().startsWith("plugin_hooks"));
    checks.push(warn("Codex plugin_hooks", line?.trim() || "feature not reported"));
  } else {
    checks.push(warn("Codex plugin_hooks", "could not inspect feature list"));
  }

  await releaseLock(path.join(paths.stateDir, ".doctor-lock")).catch(() => {});

  return {
    ok: checks.every((check) => check.level !== "fail"),
    checks
  };
}

export function formatDoctorReport(report) {
  const lines = ["Ralph Loop doctor", ""];
  for (const check of report.checks) {
    const marker = check.level === "pass" ? "PASS" : check.level === "warn" ? "WARN" : "FAIL";
    lines.push(`${marker}: ${check.name}${check.detail ? ` - ${check.detail}` : ""}`);
  }
  lines.push("");
  lines.push(report.ok ? "Result: usable" : "Result: fix failures before running Ralph Loop");
  return lines.join("\n");
}

function checkNodeVersion() {
  const major = Number(process.versions.node.split(".")[0]);
  return major >= 20
    ? pass("Node.js >= 20", process.version)
    : fail("Node.js >= 20", process.version);
}

function checkCommand(command, args, name) {
  const result = spawnSync(command, args, { encoding: "utf8" });
  if (result.error) return fail(name, result.error.message);
  if (result.status !== 0) return fail(name, result.stderr.trim() || `exit ${result.status}`);
  return pass(name, result.stdout.trim());
}

async function checkFile(filePath, name) {
  try {
    await fs.access(filePath);
    return pass(name, filePath);
  } catch (error) {
    return fail(name, error.message);
  }
}

function pass(name, detail = "") {
  return { level: "pass", name, detail };
}

function warn(name, detail = "") {
  return { level: "warn", name, detail };
}

function fail(name, detail = "") {
  return { level: "fail", name, detail };
}
