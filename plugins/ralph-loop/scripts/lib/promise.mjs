export function normalizePromiseText(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

export function extractPromise(message) {
  const text = String(message ?? "");
  const match = text.match(/<promise>([\s\S]*?)<\/promise>/);
  if (!match) return null;
  return normalizePromiseText(match[1]);
}

export function promiseMatches(message, expected) {
  if (expected == null || expected === "") return false;
  const actual = extractPromise(message);
  return actual !== null && actual === normalizePromiseText(expected);
}
