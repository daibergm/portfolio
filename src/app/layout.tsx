import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import './custom.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Daiber Gonzalez',
  description: 'Software Developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
