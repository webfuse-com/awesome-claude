---
description: "Validate Ralph Loop Codex installation and runtime"
argument-hint: "[--json]"
---

# Ralph Doctor

Validate Node, Codex CLI, workspace write access, lock state, and runner path.

```bash
RALPH_RUNNER="$(
  find ./plugins "$HOME/.codex/plugins/cache" -path '*/ralph-loop*/scripts/ralph-codex.mjs' -type f -print 2>/dev/null | head -1
)"

if [ -z "$RALPH_RUNNER" ] && command -v ralph-loop-codex >/dev/null 2>&1; then
  ralph-loop-codex doctor $ARGUMENTS
elif [ -n "$RALPH_RUNNER" ]; then
  node "$RALPH_RUNNER" doctor $ARGUMENTS
else
  echo "Ralph Loop runner not found in ./plugins, Codex plugin cache, or PATH." >&2
  exit 1
fi
```
