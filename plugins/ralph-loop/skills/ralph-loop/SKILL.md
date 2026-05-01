---
name: ralph-loop
description: Use when the user wants Codex to run an iterative self-improving development loop, automate repeated codex exec attempts, continue until tests pass, use a completion promise, cancel or inspect a Ralph loop, or adapt the Ralph Wiggum technique for Codex CLI or Codex App.
---

# Ralph Loop

Use Ralph Loop for well-scoped work where repeated Codex attempts can improve the repo state until an objective condition is true.

## Use When

- The task has clear success criteria.
- Verification can be run from the shell.
- The user wants repeated autonomous attempts.
- The work can persist through files, git diff, logs, and `.codex/ralph-loop/summary.md`.

## Avoid When

- The task needs subjective human judgment every iteration.
- The user needs a single quick answer.
- The success condition is vague.
- External approval, production access, or secrets are required.

## Safety Defaults

- Default max iterations is `10`.
- Unlimited loops require `--unlimited`.
- Default sandbox is `workspace-write`.
- Completion requires an exact `<promise>TEXT</promise>` block.
- Do not output the completion promise unless it is fully true.

## Commands

- `/ralph-loop:ralph-loop "task" --completion-promise DONE --max-iterations 10`
- `/ralph-loop:ralph-status`
- `/ralph-loop:cancel-ralph`
- `/ralph-loop:ralph-doctor`

Direct runner:

```bash
node plugins/ralph-loop/scripts/ralph-codex.mjs start --completion-promise DONE --max-iterations 5 -- "Fix tests. Output <promise>DONE</promise> only when green."
```

## Prompt Pattern

Read `references/prompt-patterns.md` when writing or improving Ralph prompts.

Minimum effective prompt:

```text
Implement [specific task].

Success criteria:
- [objective condition]
- Tests pass with [exact command]
- Docs updated if behavior changes

Output <promise>DONE</promise> only when all criteria are true.
```

## Token Control

Ralph Loop for Codex starts fresh `codex exec` processes by default. It persists the original task in `.codex/ralph-loop/prompt.md` and compact progress in `.codex/ralph-loop/summary.md` instead of replaying a full transcript.

Use these options for cost control:

- `--max-iterations N`
- `--model MODEL`
- `--reasoning low|medium|high|xhigh`
- `--summary-max-chars N`

## Troubleshooting

Run:

```bash
node plugins/ralph-loop/scripts/ralph-codex.mjs doctor
```

Check:

- Codex CLI available on PATH.
- Node.js is version 20 or newer.
- `.codex/ralph-loop/lock` is not stale.
- Workspace is writable.

State files are under `.codex/ralph-loop/` and ignored by git through a generated local `.gitignore`.
