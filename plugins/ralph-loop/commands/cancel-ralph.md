---
description: "Cancel active Ralph Loop"
allowed-tools: ["Bash(node:*)", "Bash(test:*)", "Bash(rm:*)", "Read(.codex/ralph-loop/state.json)", "Read(.claude/ralph-loop.local.md)"]
hide-from-slash-command-tool: "true"
---

# Cancel Ralph

Cancel an active Ralph loop in the current workspace.

## Codex Runtime

Resolve and run the Codex runner:

```bash
RALPH_RUNNER="$(
  find ./plugins "$HOME/.codex/plugins/cache" -path '*/ralph-loop*/scripts/ralph-codex.mjs' -type f -print 2>/dev/null | head -1
)"

if [ -z "$RALPH_RUNNER" ] && command -v ralph-loop-codex >/dev/null 2>&1; then
  ralph-loop-codex cancel $ARGUMENTS
elif [ -n "$RALPH_RUNNER" ]; then
  node "$RALPH_RUNNER" cancel $ARGUMENTS
else
  echo "Ralph Loop runner not found." >&2
  exit 1
fi
```

## Claude Code Runtime

If `.claude/ralph-loop.local.md` exists:

1. Read the `iteration:` field.
2. Remove `.claude/ralph-loop.local.md`.
3. Report `Cancelled Ralph loop (was at iteration N)`.

If no state file exists, say `No active Ralph loop found.`
