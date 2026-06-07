Commit the current changes. Follow these steps strictly:

1. Run `git status` to determine which files have changed.
2. Determine whether lint and tests need to run:
   - Both `pnpm lint` and `pnpm test` only target `src/`, so they are required only when changes include files under `src/`, or config files that affect them (`eslint.config.mjs`, `jest.config.js`, `babel.config.js`, `tsconfig*.json`, `package.json`, `pnpm-lock.yaml`, `.npmrc`).
   - If no such files changed (e.g. only docs, `.claude/`, GitHub workflows, public assets), skip steps 3 and 4.
3. Run `pnpm lint:fix` to auto-fix lint issues. If lint errors remain after the fix, report them and stop.
4. Run `pnpm test`. If tests fail, report the failures and stop.
5. Run `git diff --staged` and `git diff` to review all changes.
6. Compose a commit message following this repository's conventions:
   - Write entirely in English
   - Use imperative mood, capitalized first word (e.g. "Add", "Fix", "Update", "Refactor")
   - No prefix tags (no `feat:`, `fix:`, etc.) and no trailing period
   - Keep the title concise (under 72 characters)
   - Only add a body if the change is complex enough to warrant explanation; most commits are title-only
7. Stage the relevant changed files (do NOT use `git add -A` or `git add .`) and create the commit.
