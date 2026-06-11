'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useWallet } from '@/hooks/useWallet';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/send', label: 'Send Money' },
  { href: '/history', label: 'History' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { publicKey, connected, loading, connect, disconnect } = useWallet();

  const truncated = publicKey
    ? `${publicKey.slice(0, 4)}...${publicKey.slice(-4)}`
    : null;

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-xl font-bold text-brand">
          StellarRemit
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm text-gray-600 hover:text-brand transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Wallet button */}
        <div className="hidden md:block">
          {connected && truncated ? (
            <button
              onClick={disconnect}
              className="text-sm px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              aria-label="Disconnect wallet"
            >
              {truncated} · Disconnect
            </button>
          ) : (
            <button
              onClick={connect}
              disabled={loading}
              className="text-sm px-4 py-2 rounded-lg bg-brand text-white hover:opacity-90 transition-opacity disabled:opacity-50"
              aria-label="Connect wallet"
            >
              {loading ? 'Connecting...' : 'Connect Wallet'}
            </button>
          )}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 pb-2 border-t border-gray-100">
          <ul className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-4 pt-2">
            {connected && truncated ? (
              <button
                onClick={() => { disconnect(); setMenuOpen(false); }}
                className="w-full text-sm px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
              >
                {truncated} · Disconnect
              </button>
            ) : (
              <button
                onClick={() => { connect(); setMenuOpen(false); }}
                disabled={loading}
                className="w-full text-sm px-4 py-2 rounded-lg bg-brand text-white hover:opacity-90 disabled:opacity-50"
              >
                {loading ? 'Connecting...' : 'Connect Wallet'}
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
