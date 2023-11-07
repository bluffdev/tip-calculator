import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tip Calculator',
  description: 'Calculate tips for restaurants and bars.',
  authors: [{ name: 'Brandon Rubio', url: 'https://bluff.dev' }],
  keywords: ['tip', 'calculator', 'restaurant', 'bar', 'service', 'gratuity', 'tip calculator'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
