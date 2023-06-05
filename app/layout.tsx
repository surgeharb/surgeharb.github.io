import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ThemeManager } from '@/components/theme-manager';
import { title, description, website, twitterHandle } from '@/data/metadata';
import { Header } from '@/components/ui/simple/header';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title,
  description,
  url: website,
  themeColor: '#1e293b',
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: twitterHandle,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isDarkMode =
    typeof window !== 'undefined' ? window.localStorage.getItem('theme') === 'dark' : 'light';

  return (
    <html lang="en">
      <body className={cn(inter.className, isDarkMode && 'dark')}>
        <Header />
        {children}
        <Analytics />
        <ThemeManager showStickyButton />
      </body>
    </html>
  );
}
