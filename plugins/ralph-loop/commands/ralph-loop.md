---
description: "Start Ralph Loop in the current workspace"
argument-hint: "PROMPT [--max-iterations N] [--completion-promise TEXT]"
allowed-tools: ["Bash(${CLAUDE_PLUGIN_ROOT}/scripts/setup-ralph-loop.sh:*)", "Bash(node:*)", "Bash(find:*)", "Bash(command:*)"]
hide-from-slash-command-tool: "true"
---

# Ralph Loop

Start an iterative Ralph loop for the current workspace.

## Claude Code Runtime

If this command is running in Claude Code, execute the Claude setup script:

```!
"${CLAUDE_PLUGIN_ROOT}/scripts/setup-ralph-loop.sh" $ARGUMENTS
```

Then work on the task. The Claude Stop hook will feed the same prompt back until the completion promise is true, max iterations are reached, or `/cancel-ralph` is used.

## Codex Runtime

If this command is running in Codex CLI or Codex App, resolve the Codex runner and execute it:

```bash
RALPH_RUNNER="$(
  find ./plugins "$HOME/.codex/plugins/cache" -path '*/ralph-loop*/scripts/ralph-codex.mjs' -type f -print 2>/dev/null | head -1
)"

if [ -z "$RALPH_RUNNER" ] && command -v ralph-loop-codex >/dev/null 2>&1; then
  ralph-loop-codex start $ARGUMENTS
elif [ -n "$RALPH_RUNNER" ]; then
  node "$RALPH_RUNNER" start $ARGUMENTS
else
  echo "Ralph Loop runner not found. Run /ralph-loop:ralph-doctor for installation diagnostics." >&2
  exit 1
fi
```

Prefer bounded loops:

```text
/ralph-loop:ralph-loop "Run tests, fix failures, and update docs. Output <promise>DONE</promise> only when all tests pass." --completion-promise DONE --max-iterations 10
```

Only output the completion promise when it is completely true.
