import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'FLORA — Intelligent creation for the whole team',
  icons: { icon: '/assets/flora-logo.svg' },
  description:
    'A collaborative creative workspace. FLORA Teams page recreation in TypeScript and Next.js.',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
