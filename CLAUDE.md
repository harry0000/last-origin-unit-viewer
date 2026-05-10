# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Unit viewer for the Japanese version of the game "Last Origin". Displays unit stats, skills, equipment, core links, and squad simulation. Deployed to GitHub Pages at harry0000.github.io/last-origin-unit-viewer/.

## Development Policy

- Avoid reverse engineering; implement based on values observable in-game.
- Full reproduction of skill effect labels (tags) is out of scope. Only reproduce tags that serve as activation conditions for other skill effects.

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build` (runs `tsc && vite build`)
- **Lint:** `npm run lint`
- **Lint fix:** `npm run lint:fix`
- **Test:** `npm test`
- **Single test:** `npx jest <path-or-pattern>`
- **Type check only:** `npx tsc --noEmit`

Node 20. Install deps with `npm ci`.

## Architecture

**Stack:**

- Vite
- TypeScript
- React 18 
- Recoil (state management)
- React Bootstrap 1.x (Bootstrap 4)
- react-i18next
- react-dnd
- react-router-dom v6
- Emotion (CSS-in-JS)

**Layer structure:**

- `src/data/` — Static game data (unit stats, skills, equipment, core link bonuses) as large TypeScript object literals. Values use `milliPercentage` (integer thousandths of a percent) for precision.
- `src/domain/` — Pure domain logic and types. No React imports. Contains calculators, matchers, and data models for skills, equipment, squads, and status parameters. Tests live alongside source (`.test.ts`).
- `src/state/` — Recoil atoms/selectors and custom hooks (`*Hook.ts` / `*State.ts` pairs). Manages unit selection, equipment, core links, skill state, squad composition, and status parameters.
- `src/component/` — React UI components organized by feature: `unit/` (list/selector), `skill/` (skill display), `status/` (parameters, equipment, core links), `squad/` (grid, action order, sharing), `header/`, `common/`, `icon/`.
- `src/i18n/` — Japanese-only i18n with namespaced JSON files (common, unit, effect, skill, equipment).

**Key patterns:**

- State hooks in `src/state/` expose Recoil state to components; domain logic in `src/domain/` is framework-agnostic.
- Squad simulation (`src/domain/squad/simulator/`) calculates battle effects, matching conditions, and comparing effect priorities.
- Unit data is keyed by `UnitNumber`.
