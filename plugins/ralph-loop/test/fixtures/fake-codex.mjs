#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

let stdin = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => {
  stdin += chunk;
});

process.stdin.on("end", () => {
  const args = process.argv.slice(2);
  const outputPath = valueAfter(args, "-o") || valueAfter(args, "--output-last-message");
  const output = process.env.FAKE_CODEX_OUTPUT || "Fake Codex completed one iteration.";
  const exitCode = Number(process.env.FAKE_CODEX_EXIT_CODE || "0");

  if (process.env.FAKE_CODEX_CAPTURE_PROMPT) {
    fs.mkdirSync(path.dirname(process.env.FAKE_CODEX_CAPTURE_PROMPT), { recursive: true });
    fs.writeFileSync(process.env.FAKE_CODEX_CAPTURE_PROMPT, stdin);
  }

  if (outputPath) {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, output);
  }

  process.stdout.write(`fake codex args: ${args.join(" ")}\n`);
  process.exit(exitCode);
});

function valueAfter(args, name) {
  const index = args.indexOf(name);
  if (index === -1) return null;
  return args[index + 1] || null;
}
