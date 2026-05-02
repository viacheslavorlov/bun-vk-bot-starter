# AGENTS.md

## Build & Run

- **Dev**: `bun run dev` (watches src/index.ts)
- **Build**: `bun run build` → outputs to dist/
- **Run production**: `bun run start` (runs dist/index.js) or `./bot` for binary

## Required Env Vars

- `VK_GROUP_TOKEN` - VK group token
- `VK_ADMIN_TOKEN` - VK admin token
- `VK_GROUP_ID` - VK group ID (number, coerce from string)

## Dev Commands

```bash
bun run typecheck   # TSC
bun run fmt         # oxfmt
bun run fmt:check  # oxfmt check
bun run test       # bun test
```

## Release

```bash
bun run release:patch  # bump patch
bun run release:minor  # bump minor
bun run release:major  # bump major
```

## Project Structure

- `src/index.ts` - bot entry
- `src/api/index.ts` - VK API wrapper
- `src/logger/index.ts` - pino logger
- `src/config.ts` - env validation (Zod)
- `src/types/env-types.ts` - env types
