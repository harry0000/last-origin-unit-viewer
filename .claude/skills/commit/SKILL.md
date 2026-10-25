---
name: commit
description: Commit the current working tree changes following this repository's conventions (conditional lint/test, English imperative title-only message, explicit file staging). Use when the user asks to commit changes.
allowed-tools: Bash(git status *), Bash(git diff *), Bash(git log *), Bash(git switch *), Bash(git add *), Bash(git commit *), Bash(pnpm lint:fix *), Bash(pnpm lint *), Bash(pnpm test *)
---

Commit the current changes. Follow these steps strictly:

1. Inspect the current changes:
   - Run `git status --short --branch --untracked-files=all` to determine the current branch and identify staged, unstaged, and untracked files.
   - If a merge, rebase, cherry-pick, or revert is in progress, or HEAD is detached (`## HEAD (no branch)`), report it and stop.
   - Already staged changes are part of the commit by default. If the user asked to commit only some of the changes and other files are already staged, report them and stop. Do not alter the existing staging state.
   - If there are no changes to commit, report that and stop.
2. Direct commits to `master` are prohibited. If the current branch is `master`, switch to the next version branch before continuing:
   - Read `version` from `package.json` and bump the patch number (e.g. `1.0.0` → `feature-1_0_1`).
   - Confirm the branch name with the user via `AskUserQuestion`: offer the patch bump as the recommended option and the minor bump (e.g. `feature-1_1_0`) as the alternative. Use the name the user chooses (including a custom name entered via "Other").
   - Run `git switch <branch>` first; only if it fails because the branch does not exist, run `git switch -c <branch>`. Do not use `git branch` to check existence. Do not use `-f` or `--discard-changes`. Uncommitted changes carry over.
   - If the switch fails, report the error and stop.
3. Determine whether lint and tests need to run:
   - Both `pnpm lint` and `pnpm test` only target `src/`, so they are required only when changes (staged, unstaged, or untracked) include files under `src/`, or config files that affect them (`eslint.config.mjs`, `jest.config.js`, `babel.config.js`, `tsconfig*.json`, `package.json`, `pnpm-lock.yaml`, `.npmrc`).
   - If no such files changed (e.g. only docs, `.claude/`, GitHub workflows, public assets), skip step 4. When in doubt, run step 4.
4. Run checks in this order:
   - Run `pnpm lint:fix` to auto-fix lint issues.
   - Run `pnpm lint`. `lint:fix` does not enforce `--max-warnings=0` or `--report-unused-disable-directives`, so this step is required. If it fails, report the errors and stop.
   - Run `pnpm test`. If tests fail, report the failures and stop.
   - Rerun `git status` and check the changes introduced by `lint:fix`. Fixes to files already in the change set are part of the commit; if other files were modified, do not stage them and report them.
5. Stage and review the commit:
   - Stage the relevant files with explicit paths: `git add -- <path>...`. Do NOT use `git add -A`, `git add .`, or other repository-wide staging.
   - Do not `git add` a file that has both staged and unstaged changes (status `MM`); the partial staging is the user's intent. Report its unstaged changes instead.
   - Do not stage `.env*` files or files containing credentials or secrets; report them instead.
   - Run `git diff --cached` to review the exact staged content, including newly added files.
   - Verify that all staged changes belong to the intended commit and nothing relevant is missing. If not, stop without committing.
6. Compose a commit message following this repository's conventions:
   - Write entirely in English
   - Use imperative mood, capitalized first word (e.g. "Add", "Fix", "Update", "Refactor")
   - No prefix tags (no `feat:`, `fix:`, etc.) and no trailing period
   - Keep the title concise (under 72 characters)
   - Only add a body if the change is complex enough to warrant explanation; most commits are title-only
7. Create the commit:
   - Pass the message with plain `-m` arguments in single quotes (e.g. `git commit -m '<title>'`, or `git commit -m '<title>' -m '<body or trailer>'`), escaping any `'` in the message as `'\''`. Double quotes would expand backticks and `$`.
   - Do not use `-a`, `--amend`, `--no-verify`, heredocs, or `$(...)` command substitution.
   - If the commit fails, report the error and stop.
   - Run `git log -1 --oneline` and `git status --short`, then report the commit hash, title, branch, and any remaining uncommitted changes.
