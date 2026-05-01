# Ralph Prompt Patterns

Good Ralph prompts are objective, bounded, and verifiable.

## Feature Implementation

```text
Implement [FEATURE].

Requirements:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

Verification:
- Run [exact command]
- Confirm [expected output or behavior]

Output <promise>DONE</promise> only when the implementation, tests, and docs are complete.
```

## Test-Driven Fix

```text
Fix bug: [DESCRIPTION].

Process:
1. Reproduce the bug.
2. Add a regression test.
3. Implement the minimal fix.
4. Run [exact test command].
5. Refactor only if tests remain green.

Output <promise>FIXED</promise> only when the regression test fails before the fix and passes after it.
```

## Refactor

```text
Refactor [COMPONENT] for [GOAL].

Constraints:
- Preserve external behavior.
- Keep all existing tests passing.
- Avoid unrelated formatting churn.

Verification:
- Run [exact command].
- Compare before/after behavior where relevant.

Output <promise>REFACTORED</promise> only when behavior is preserved and verification passes.
```

## Stuck Handling

Include stuck handling in the prompt:

```text
If blocked after 3 attempts, write .codex/ralph-loop/blocker.md with:
- root cause hypothesis
- commands already run
- files inspected
- next recommended human decision
Continue until max iterations unless the completion promise is true.
```
