import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ThemeManager } from '@/components/theme-manager';
import { title, description, website } from '@/data/metadata';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title,
  description,
  url: website,
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@surgeharb',
    images: [`${website}/icons/twitter-card-image.png`],
  },
  manifest: '/icons/site.webmanifest',
  themeColor: '#1e293b',
  icons: {
    apple: '/icons/apple-touch-icon.png',
    favicon: [
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/icons/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isDarkMode =
    typeof window !== 'undefined' ? window.localStorage.getItem('theme') === 'dark' : 'light';

  return (
    <html lang="en">
      <body className={cn(inter.className, isDarkMode && 'dark')}>
        {children}
        <Analytics />
        <ThemeManager showStickyButton />
      </body>
    </html>
  );
}
