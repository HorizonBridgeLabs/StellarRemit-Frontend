import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Send money across borders <span className="text-brand">instantly</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            StellarRemit is a fast, secure, and low-cost cross-border payment platform built on the Stellar network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg bg-brand text-white hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
            <Link
              href="/send"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Send Money
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why StellarRemit?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Transfers</h3>
              <p className="text-gray-600">Send money globally in seconds with Stellar&apos;s lightning-fast settlement.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Transparent</h3>
              <p className="text-gray-600">Every transaction is recorded on the Stellar blockchain for full transparency.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Low Cost</h3>
              <p className="text-gray-600">Enjoy minimal fees compared to traditional remittance services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to send money?</h2>
          <p className="text-gray-600 mb-8">
            Connect your Stellar wallet and start sending money to anyone, anywhere in the world.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg bg-brand text-white hover:opacity-90 transition-opacity"
          >
            Go to Dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}
