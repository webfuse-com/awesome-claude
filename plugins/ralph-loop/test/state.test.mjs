import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import {
  acquireLock,
  appendEvent,
  ensureStateDir,
  readEvents,
  readState,
  releaseLock,
  resolveStatePaths,
  writeStateAtomic
} from "../scripts/lib/state.mjs";

test("ensureStateDir creates ignored state directory", async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), "ralph-state-"));
  const paths = resolveStatePaths(dir);

  await ensureStateDir(paths);

  assert.equal(await fs.readFile(paths.gitignore, "utf8"), "*\n");
});

test("writeStateAtomic writes valid JSON", async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), "ralph-state-"));
  const paths = resolveStatePaths(dir);
  const state = { status: "active", iteration: 1 };

  await ensureStateDir(paths);
  await writeStateAtomic(paths.state, state);

  assert.deepEqual(await readState(paths.state), state);
});

test("appendEvent writes JSONL events", async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), "ralph-state-"));
  const paths = resolveStatePaths(dir);

  await ensureStateDir(paths);
  await appendEvent(paths.events, { type: "started", iteration: 1 });
  await appendEvent(paths.events, { type: "completed", iteration: 1 });

  const events = await readEvents(paths.events);
  assert.equal(events.length, 2);
  assert.equal(events[0].type, "started");
  assert.equal(events[1].type, "completed");
});

test("acquireLock prevents second acquisition", async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), "ralph-state-"));
  const paths = resolveStatePaths(dir);

  await ensureStateDir(paths);
  await acquireLock(paths.lockDir);
  await assert.rejects(() => acquireLock(paths.lockDir), /lock already exists/);
  await releaseLock(paths.lockDir);
  await acquireLock(paths.lockDir);
  await releaseLock(paths.lockDir);
});

test("readState returns null for missing state", async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), "ralph-state-"));
  const paths = resolveStatePaths(dir);
  assert.equal(await readState(paths.state), null);
});
