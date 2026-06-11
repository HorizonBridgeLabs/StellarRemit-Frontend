import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} StellarRemit. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm text-gray-500 hover:text-brand transition-colors">
            Home
          </Link>
          <Link href="/dashboard" className="text-sm text-gray-500 hover:text-brand transition-colors">
            Dashboard
          </Link>
          <Link href="/send" className="text-sm text-gray-500 hover:text-brand transition-colors">
            Send
          </Link>
          <Link href="/history" className="text-sm text-gray-500 hover:text-brand transition-colors">
            History
          </Link>
        </div>
      </div>
    </footer>
  );
}
