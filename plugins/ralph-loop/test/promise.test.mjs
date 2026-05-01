import assert from "node:assert/strict";
import test from "node:test";
import { extractPromise, normalizePromiseText, promiseMatches } from "../scripts/lib/promise.mjs";

test("extractPromise returns first promise block", () => {
  assert.equal(extractPromise("ok <promise>DONE</promise> later <promise>NO</promise>"), "DONE");
});

test("extractPromise supports multiline promise content", () => {
  assert.equal(extractPromise("<promise>\nTASK   COMPLETE\n</promise>"), "TASK COMPLETE");
});

test("promiseMatches requires promise tags", () => {
  assert.equal(promiseMatches("DONE", "DONE"), false);
  assert.equal(promiseMatches("<promise>DONE</promise>", "DONE"), true);
});

test("normalizePromiseText collapses whitespace", () => {
  assert.equal(normalizePromiseText("  A\n  B\tC  "), "A B C");
});
