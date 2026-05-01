import { readTextIfExists, writeTextAtomic } from "./state.mjs";

export function buildUpdatedSummary(previousSummary, state, lastMessage, maxChars = 6000) {
  const cleanedMessage = String(lastMessage ?? "").trim();
  const clippedMessage = clipMiddle(cleanedMessage, 2000);
  const entry = [
    `## Iteration ${state.iteration}`,
    "",
    `Completed at: ${new Date().toISOString()}`,
    "",
    clippedMessage || "(No final message captured.)",
    ""
  ].join("\n");

  const base = previousSummary?.trim()
    ? `${previousSummary.trim()}\n\n${entry}`
    : ["# Ralph Loop Progress Summary", "", entry].join("\n");

  return clipStart(base, maxChars);
}

export async function updateSummary(paths, state, lastMessage) {
  const previous = await readTextIfExists(paths.summary, "");
  const next = buildUpdatedSummary(previous, state, lastMessage, state.summaryMaxChars);
  await writeTextAtomic(paths.summary, next.endsWith("\n") ? next : `${next}\n`);
  return next;
}

function clipStart(text, maxChars) {
  if (text.length <= maxChars) return text;
  return [
    "# Ralph Loop Progress Summary",
    "",
    "(Older summary content clipped to control token use.)",
    "",
    text.slice(text.length - maxChars)
  ].join("\n");
}

function clipMiddle(text, maxChars) {
  if (text.length <= maxChars) return text;
  const head = text.slice(0, Math.floor(maxChars / 2));
  const tail = text.slice(text.length - Math.floor(maxChars / 2));
  return `${head}\n\n[... clipped ...]\n\n${tail}`;
}
