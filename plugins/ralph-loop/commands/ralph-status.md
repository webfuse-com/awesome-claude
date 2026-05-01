---
description: "Show Ralph Loop status for the current workspace"
argument-hint: "[--json]"
---

# Ralph Status

Show current Ralph loop state and recent events.

```bash
RALPH_RUNNER="$(
  find ./plugins "$HOME/.codex/plugins/cache" -path '*/ralph-loop*/scripts/ralph-codex.mjs' -type f -print 2>/dev/null | head -1
)"

if [ -z "$RALPH_RUNNER" ] && command -v ralph-loop-codex >/dev/null 2>&1; then
  ralph-loop-codex status $ARGUMENTS
elif [ -n "$RALPH_RUNNER" ]; then
  node "$RALPH_RUNNER" status $ARGUMENTS
else
  echo "Ralph Loop runner not found. Run /ralph-loop:ralph-doctor for installation diagnostics." >&2
  exit 1
fi
```
