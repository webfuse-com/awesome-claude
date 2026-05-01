# Ralph Loop

Ralph Loop runs persistent iterative AI development loops. This package keeps the Claude Code `ralph-loop` behavior functional and adds a Codex-native runner for Codex CLI and Codex App.

## What It Does

- Stores the original task, progress summary, state, and event history in the workspace.
- Runs bounded Codex iterations with `codex exec`.
- Stops when `<promise>TEXT</promise>` is detected, max iterations are reached, cancellation is requested, or an iteration fails.
- Keeps Claude Code compatibility through `.claude-plugin/`, `hooks/`, and `scripts/setup-ralph-loop.sh`.

## Codex CLI Install

From this repository:

```bash
codex plugin marketplace add /Users/andersonlimadev/Projects/IA/awesome-codex
```

If manual enablement is needed, add this to `~/.codex/config.toml`:

```toml
[plugins."ralph-loop@awesome-codex"]
enabled = true
```

Validate:

```bash
node /Users/andersonlimadev/Projects/IA/awesome-codex/plugins/ralph-loop/scripts/ralph-codex.mjs doctor
```

## Codex CLI Usage

Slash command:

```text
/ralph-loop:ralph-loop "Run tests, fix failures, and update docs. Output <promise>DONE</promise> only when all tests pass." --completion-promise DONE --max-iterations 10
```

Direct runner:

```bash
node /Users/andersonlimadev/Projects/IA/awesome-codex/plugins/ralph-loop/scripts/ralph-codex.mjs start \
  --workspace /path/to/project \
  --completion-promise DONE \
  --max-iterations 5 \
  -- "Fix failing tests. Output <promise>DONE</promise> only when green."
```

Status:

```bash
node plugins/ralph-loop/scripts/ralph-codex.mjs status
```

Cancel:

```bash
node plugins/ralph-loop/scripts/ralph-codex.mjs cancel
```

Clear inactive state:

```bash
node plugins/ralph-loop/scripts/ralph-codex.mjs clear
```

## Codex App Usage

Open the workspace:

```bash
codex app /path/to/workspace
```

In the composer:

```text
/ralph-loop:ralph-loop "Implement the narrow task and verify it. Output <promise>DONE</promise> only when done." --completion-promise DONE --max-iterations 5
```

The app runs the same plugin command and local runner. Use `/ralph-loop:ralph-status`, `/ralph-loop:cancel-ralph`, and `/ralph-loop:ralph-doctor` from the composer.

## Claude Code Usage

Install or load this plugin through Claude Code's plugin system. Claude uses:

- `.claude-plugin/plugin.json`
- `commands/ralph-loop.md`
- `commands/cancel-ralph.md`
- `hooks/hooks.json`
- `hooks/stop-hook.sh`
- `scripts/setup-ralph-loop.sh`

Claude command:

```text
/ralph-loop:ralph-loop "Build a REST API for todos. Output <promise>COMPLETE</promise> when done." --completion-promise COMPLETE --max-iterations 20
```

Cancel:

```text
/ralph-loop:cancel-ralph
```

## State Files

Codex state is workspace-local:

```text
.codex/ralph-loop/state.json
.codex/ralph-loop/events.jsonl
.codex/ralph-loop/prompt.md
.codex/ralph-loop/summary.md
.codex/ralph-loop/last-message.md
.codex/ralph-loop/cancel
.codex/ralph-loop/lock/
```

The runner writes `.codex/ralph-loop/.gitignore` with `*`, so loop state is not committed.

Claude state remains separate:

```text
.claude/ralph-loop.local.md
```

## Persistence Model

Codex uses JSON as authoritative state, JSONL as an audit log, and Markdown for prompt and compact summary.

SQLite was intentionally not used. One active loop per workspace does not need a database, and JSON keeps the plugin dependency-free.

## Token Strategy

The default Codex mode is fresh iteration:

- Each iteration calls `codex exec`.
- The original task stays in `.codex/ralph-loop/prompt.md`.
- Progress is compacted into `.codex/ralph-loop/summary.md`.
- Full transcripts are not replayed.

Use `--summary-max-chars`, `--model`, `--reasoning`, and `--max-iterations` to control cost.

## Safety Defaults

- `--max-iterations` defaults to `10`.
- Unlimited loops require `--unlimited`.
- `--sandbox` defaults to `workspace-write`.
- Completion requires exact XML-style output, such as `<promise>DONE</promise>`.
- The runner does not pass `--dangerously-bypass-approvals-and-sandbox`.

## Troubleshooting

Run:

```bash
node plugins/ralph-loop/scripts/ralph-codex.mjs doctor
```

Common fixes:

- Install or update Codex CLI if `codex --version` fails.
- Install Node.js 20+.
- Remove a stale lock with `node plugins/ralph-loop/scripts/ralph-codex.mjs clear --force` only after confirming no loop is running.
- Use `--max-iterations` to prevent runaway cost.

## Upstream

The Claude Code implementation is adapted from the official Anthropic plugin:

```text
https://github.com/anthropics/claude-plugins-official/tree/main/plugins/ralph-loop
```
