# Contributing to StellarRemit

Thank you for your interest in contributing! We welcome issues, feature requests, and pull requests.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/StellarRemit-Frontend.git`
3. Create a branch: `git checkout -b feat/your-feature`

## Development Workflow

```bash
npm install
npm run dev
```

Run tests and lint before committing:

```bash
npm run lint
npm run test:ci
```

## Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — New feature
- `fix:` — Bug fix
- `docs:` — Documentation changes
- `style:` — Code style changes
- `refactor:` — Refactoring
- `test:` — Tests
- `chore:` — Build or config changes

## Code Style

- TypeScript strict mode
- ESLint + Prettier
- Use `clsx` for conditional classes
- Prefer named exports for components

## Pull Requests

- Ensure CI passes (lint, test, build)
- Add tests for new features
- Update documentation if needed
