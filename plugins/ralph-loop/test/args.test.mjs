import assert from "node:assert/strict";
import test from "node:test";
import { parseCli, parseOptions } from "../scripts/lib/args.mjs";

test("parseOptions supports options before and after prompt", () => {
  const options = parseOptions([
    "--max-iterations",
    "3",
    "Fix",
    "tests",
    "--completion-promise",
    "DONE"
  ]);

  assert.equal(options.maxIterations, 3);
  assert.equal(options.completionPromise, "DONE");
  assert.equal(options.prompt, "Fix tests");
});

test("parseOptions supports prompt separator", () => {
  const options = parseOptions(["--max-iterations", "2", "--", "Explain", "--not-an-option"]);
  assert.equal(options.maxIterations, 2);
  assert.equal(options.prompt, "Explain --not-an-option");
});

test("parseOptions maps unlimited to zero max iterations", () => {
  const options = parseOptions(["--unlimited", "--", "Run forever"]);
  assert.equal(options.maxIterations, 0);
});

test("parseOptions rejects invalid integer", () => {
  assert.throws(() => parseOptions(["--max-iterations", "-1", "Task"]), /non-negative integer/);
  assert.throws(() => parseOptions(["--max-iterations", "1.5", "Task"]), /non-negative integer/);
});

test("parseCli extracts command and options", () => {
  const parsed = parseCli(["start", "--completion-promise", "DONE", "--", "Fix bug"]);
  assert.equal(parsed.command, "start");
  assert.equal(parsed.options.completionPromise, "DONE");
  assert.equal(parsed.options.prompt, "Fix bug");
});
