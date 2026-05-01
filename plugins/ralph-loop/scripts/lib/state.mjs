import { constants } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";

export function resolveStatePaths(workspace) {
  const root = path.resolve(workspace);
  const stateDir = path.join(root, ".codex", "ralph-loop");
  return {
    workspace: root,
    stateDir,
    state: path.join(stateDir, "state.json"),
    events: path.join(stateDir, "events.jsonl"),
    prompt: path.join(stateDir, "prompt.md"),
    summary: path.join(stateDir, "summary.md"),
    lastMessage: path.join(stateDir, "last-message.md"),
    cancel: path.join(stateDir, "cancel"),
    gitignore: path.join(stateDir, ".gitignore"),
    lockDir: path.join(stateDir, "lock"),
    archiveDir: path.join(stateDir, "archive")
  };
}

export function workspaceRelative(workspace, filePath) {
  return path.relative(path.resolve(workspace), path.resolve(filePath)).split(path.sep).join("/");
}

export async function ensureStateDir(paths) {
  await fs.mkdir(paths.stateDir, { recursive: true });
  await fs.writeFile(paths.gitignore, "*\n", { flag: "a" });
  await ensureFileExact(paths.gitignore, "*\n");
}

export async function acquireLock(lockDir, options = {}) {
  const stateDir = path.dirname(lockDir);
  await fs.mkdir(stateDir, { recursive: true });

  try {
    await fs.mkdir(lockDir);
  } catch (error) {
    if (error?.code !== "EEXIST") throw error;
    if (options.clearStaleLock && !(await lockOwnerAlive(lockDir))) {
      await fs.rm(lockDir, { recursive: true, force: true });
      await fs.mkdir(lockDir);
    } else {
      const owner = await readJsonIfExists(path.join(lockDir, "owner.json"));
      const detail = owner?.pid ? ` pid ${owner.pid}` : "";
      const err = new Error(`Ralph loop lock already exists${detail}: ${lockDir}`);
      err.code = "RALPH_LOCK_EXISTS";
      throw err;
    }
  }

  await writeJsonAtomic(path.join(lockDir, "owner.json"), {
    pid: process.pid,
    createdAt: new Date().toISOString()
  });
}

export async function releaseLock(lockDir) {
  await fs.rm(lockDir, { recursive: true, force: true });
}

export async function readState(statePath) {
  return readJsonIfExists(statePath);
}

export async function writeStateAtomic(statePath, state) {
  await writeJsonAtomic(statePath, state);
}

export async function writeTextAtomic(filePath, text) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  const tempPath = `${filePath}.${process.pid}.${Date.now()}.tmp`;
  const handle = await fs.open(tempPath, "w");
  try {
    await handle.writeFile(text);
    await handle.sync();
  } finally {
    await handle.close();
  }
  await fs.rename(tempPath, filePath);
  await fsyncDirectory(path.dirname(filePath));
}

export async function readTextIfExists(filePath, fallback = "") {
  try {
    return await fs.readFile(filePath, "utf8");
  } catch (error) {
    if (error?.code === "ENOENT") return fallback;
    throw error;
  }
}

export async function appendEvent(eventsPath, event) {
  await fs.mkdir(path.dirname(eventsPath), { recursive: true });
  const line = JSON.stringify({
    ts: new Date().toISOString(),
    ...event
  });
  await fs.appendFile(eventsPath, `${line}\n`);
}

export async function readEvents(eventsPath) {
  const text = await readTextIfExists(eventsPath, "");
  return text
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line));
}

export async function requestCancel(cancelPath) {
  await writeTextAtomic(cancelPath, `cancelled_at=${new Date().toISOString()}\n`);
}

export async function isCancelRequested(cancelPath) {
  try {
    await fs.access(cancelPath, constants.F_OK);
    return true;
  } catch (error) {
    if (error?.code === "ENOENT") return false;
    throw error;
  }
}

export async function archiveCurrentState(paths, state, options = {}) {
  if (state?.status === "active" && !options.force) {
    throw new Error("Refusing to clear an active Ralph loop without --force");
  }

  const archiveName = state?.loopId || new Date().toISOString().replace(/[:.]/g, "-");
  const targetDir = path.join(paths.archiveDir, archiveName);
  await fs.mkdir(targetDir, { recursive: true });

  for (const filePath of [paths.state, paths.events, paths.prompt, paths.summary, paths.lastMessage, paths.cancel]) {
    const basename = path.basename(filePath);
    try {
      await fs.rename(filePath, path.join(targetDir, basename));
    } catch (error) {
      if (error?.code !== "ENOENT") throw error;
    }
  }

  await releaseLock(paths.lockDir);
  return targetDir;
}

async function writeJsonAtomic(filePath, value) {
  await writeTextAtomic(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

async function readJsonIfExists(filePath) {
  try {
    const text = await fs.readFile(filePath, "utf8");
    return JSON.parse(text);
  } catch (error) {
    if (error?.code === "ENOENT") return null;
    throw error;
  }
}

async function ensureFileExact(filePath, expected) {
  const current = await fs.readFile(filePath, "utf8");
  if (current !== expected) {
    await writeTextAtomic(filePath, expected);
  }
}

async function lockOwnerAlive(lockDir) {
  const owner = await readJsonIfExists(path.join(lockDir, "owner.json"));
  if (!owner?.pid) return false;
  try {
    process.kill(owner.pid, 0);
    return true;
  } catch {
    return false;
  }
}

async function fsyncDirectory(dirPath) {
  let handle;
  try {
    handle = await fs.open(dirPath, "r");
    await handle.sync();
  } catch {
    // Directory fsync is best effort across platforms.
  } finally {
    await handle?.close();
  }
}
