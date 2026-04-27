import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StellarRemit",
  description: "Cross-border remittance powered by Stellar",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
