# StellarRemit

Cross-border remittance platform built on the Stellar blockchain.

## Overview

StellarRemit is a modern web application that enables fast, low-cost international money transfers using the Stellar blockchain. Connect your Freighter wallet, view your balances, send money to anyone with a Stellar address, and track your transaction history — all from a clean, responsive interface.

## Features

- **Wallet Integration** — Connect via the Freighter browser extension
- **Real-time Balances** — View XLM and USDC balances fetched from Horizon
- **Send Money** — Transfer assets to any Stellar address with form validation
- **Transaction History** — Browse and filter your past transfers
- **Responsive UI** — Works on desktop, tablet, and mobile
- **Error Boundaries** — Graceful error handling across pages
- **Loading States** — Skeletons and spinners for smooth UX

## Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **API Client:** Axios
- **Wallet:** Freighter API + Stellar SDK
- **Validation:** Zod + react-hook-form
- **Notifications:** react-hot-toast
- **Testing:** Jest + React Testing Library
- **Linting:** ESLint + Prettier

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn
- [Freighter Wallet](https://www.freighter.app/) browser extension

### Installation

```bash
# Clone the repository
git clone https://github.com/HorizonBridgeLabs/StellarRemit-Frontend.git
cd StellarRemit-Frontend

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
```

### Environment Variables

| Variable | Description | Example |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | Backend API base URL | `https://api.stellarremit.com` |
| `NEXT_PUBLIC_STELLAR_NETWORK` | Stellar network to use | `testnet` or `mainnet` |

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/              # Next.js App Router pages & layouts
│   ├── page.tsx      # Landing page
│   ├── layout.tsx    # Root layout
│   ├── error.tsx     # Global error boundary
│   ├── loading.tsx   # Global loading state
│   ├── not-found.tsx # 404 page
│   ├── dashboard/    # Dashboard page
│   ├── send/         # Send money page
│   └── history/      # Transaction history page
├── components/       # Reusable UI components
│   ├── Navbar.tsx
│   ├── Sidebar.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── FormInput.tsx
│   ├── Table.tsx
│   ├── Footer.tsx
│   ├── Spinner.tsx
│   ├── Badge.tsx
│   ├── Alert.tsx
│   ├── Skeleton.tsx
│   ├── Avatar.tsx
│   ├── Breadcrumb.tsx
│   ├── Modal.tsx
│   └── Tooltip.tsx
├── hooks/            # Custom React hooks
│   ├── useWallet.ts
│   └── useTransactions.ts
├── store/            # Zustand state stores
│   ├── walletStore.ts
│   └── transactionStore.ts
├── services/         # API service layer
│   ├── api.ts
│   ├── walletService.ts
│   ├── transactionService.ts
│   └── walletApiService.ts
├── types/            # TypeScript type definitions
│   ├── index.ts
│   └── wallet.ts
├── utils/            # Helper utilities
│   ├── formatters.ts
│   ├── validators.ts
│   └── index.ts
└── __tests__/        # Unit and component tests
    ├── components/
    └── utils/
```

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests in watch mode |
| `npm run test:ci` | Run tests with coverage (CI) |
| `npm run test:watch` | Run tests in watch mode |

## Testing

Tests are written with Jest and React Testing Library. Run the test suite:

```bash
npm run test:ci
```

Coverage is collected from all `src/**/*.{ts,tsx}` files except type declarations and app router pages.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Make your changes and ensure tests pass
4. Commit with clear messages: `git commit -m "feat: add new feature"`
5. Push to your fork: `git push origin feat/your-feature`
6. Open a Pull Request against `main`

### Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — New feature
- `fix:` — Bug fix
- `docs:` — Documentation
- `style:` — Formatting (no code change)
- `refactor:` — Code refactoring
- `test:` — Tests
- `chore:` — Build/config changes

### Code Style

- TypeScript strict mode enabled
- ESLint + Prettier for formatting
- Components should be typed with explicit interfaces
- Use `clsx` for conditional class names

## CI/CD

GitHub Actions runs lint, test, and build on every push to `main` and `fix/**`/`feat/**` branches, and on every pull request.

## License

[MIT](LICENSE)
