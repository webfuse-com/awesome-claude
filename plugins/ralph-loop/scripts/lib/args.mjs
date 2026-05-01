const INTEGER_OPTIONS = new Set([
  "--max-iterations",
  "--iteration-timeout-sec",
  "--summary-max-chars"
]);

const VALUE_OPTIONS = new Set([
  "--workspace",
  "--max-iterations",
  "--completion-promise",
  "--mode",
  "--model",
  "--reasoning",
  "--sandbox",
  "--approval",
  "--iteration-timeout-sec",
  "--summary-max-chars",
  "--codex-bin"
]);

const BOOLEAN_OPTIONS = new Set([
  "--unlimited",
  "--ephemeral",
  "--clear-stale-lock",
  "--force",
  "--json",
  "--help"
]);

export const DEFAULT_OPTIONS = Object.freeze({
  workspace: process.cwd(),
  maxIterations: 10,
  completionPromise: null,
  mode: "fresh",
  model: null,
  reasoning: null,
  sandbox: "workspace-write",
  approvalPolicy: "never",
  iterationTimeoutSec: 1800,
  summaryMaxChars: 6000,
  ephemeral: false,
  clearStaleLock: false,
  force: false,
  json: false,
  help: false,
  codexBin: null,
  prompt: ""
});

export function parseCli(argv) {
  if (!Array.isArray(argv)) {
    throw new TypeError("argv must be an array");
  }

  const [rawCommand, ...rest] = argv;
  const command = rawCommand && !rawCommand.startsWith("-") ? rawCommand : "help";
  const optionTokens = command === "help" && rawCommand?.startsWith("-") ? argv : rest;
  return {
    command,
    options: parseOptions(optionTokens)
  };
}

export function parseOptions(argv) {
  const options = { ...DEFAULT_OPTIONS };
  const promptParts = [];
  let afterSeparator = false;

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (afterSeparator) {
      promptParts.push(token);
      continue;
    }

    if (token === "--") {
      afterSeparator = true;
      continue;
    }

    if (VALUE_OPTIONS.has(token)) {
      const value = argv[index + 1];
      if (value == null || value === "") {
        throw new Error(`${token} requires a value`);
      }
      assignValueOption(options, token, value);
      index += 1;
      continue;
    }

    if (BOOLEAN_OPTIONS.has(token)) {
      assignBooleanOption(options, token);
      continue;
    }

    if (token.startsWith("--")) {
      throw new Error(`Unknown option: ${token}`);
    }

    promptParts.push(token);
  }

  if (options.unlimited) {
    options.maxIterations = 0;
  }

  options.prompt = promptParts.join(" ").trim();
  validateOptions(options);
  return options;
}

function assignValueOption(options, token, value) {
  if (INTEGER_OPTIONS.has(token)) {
    value = parseNonNegativeInteger(token, value);
  }

  switch (token) {
    case "--workspace":
      options.workspace = value;
      break;
    case "--max-iterations":
      options.maxIterations = value;
      break;
    case "--completion-promise":
      options.completionPromise = value;
      break;
    case "--mode":
      options.mode = value;
      break;
    case "--model":
      options.model = value;
      break;
    case "--reasoning":
      options.reasoning = value;
      break;
    case "--sandbox":
      options.sandbox = value;
      break;
    case "--approval":
      options.approvalPolicy = value;
      break;
    case "--iteration-timeout-sec":
      options.iterationTimeoutSec = value;
      break;
    case "--summary-max-chars":
      options.summaryMaxChars = value;
      break;
    case "--codex-bin":
      options.codexBin = value;
      break;
    default:
      throw new Error(`Unhandled option: ${token}`);
  }
}

function assignBooleanOption(options, token) {
  switch (token) {
    case "--unlimited":
      options.unlimited = true;
      break;
    case "--ephemeral":
      options.ephemeral = true;
      break;
    case "--clear-stale-lock":
      options.clearStaleLock = true;
      break;
    case "--force":
      options.force = true;
      break;
    case "--json":
      options.json = true;
      break;
    case "--help":
      options.help = true;
      break;
    default:
      throw new Error(`Unhandled option: ${token}`);
  }
}

function parseNonNegativeInteger(option, rawValue) {
  if (!/^(0|[1-9][0-9]*)$/.test(String(rawValue))) {
    throw new Error(`${option} must be a non-negative integer, got: ${rawValue}`);
  }
  return Number(rawValue);
}

function validateOptions(options) {
  if (!["fresh", "resume"].includes(options.mode)) {
    throw new Error(`--mode must be "fresh" or "resume", got: ${options.mode}`);
  }

  if (!["read-only", "workspace-write", "danger-full-access"].includes(options.sandbox)) {
    throw new Error(`Unsupported --sandbox value: ${options.sandbox}`);
  }

  if (!["never", "on-request", "on-failure", "untrusted"].includes(options.approvalPolicy)) {
    throw new Error(`Unsupported --approval value: ${options.approvalPolicy}`);
  }

  if (options.completionPromise?.includes("\0")) {
    throw new Error("--completion-promise cannot contain null bytes");
  }

  if (options.summaryMaxChars < 1000) {
    throw new Error("--summary-max-chars must be at least 1000");
  }

  if (options.iterationTimeoutSec < 1) {
    throw new Error("--iteration-timeout-sec must be at least 1");
  }
}
