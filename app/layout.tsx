import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { profile } from '@/data/portfolio';
import './globals.css';

const spaceGrotesk = localFont({
  src: '../assets/fonts/space-grotesk-latin.woff2',
  variable: '--font-space-grotesk',
  weight: '300 700',
  display: 'swap',
});
const jetbrainsMono = localFont({
  src: '../assets/fonts/jetbrains-mono-latin.woff2',
  variable: '--font-jetbrains-mono',
  weight: '100 800',
  display: 'swap',
});

const title = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.website),
  title,
  description: profile.description,
  alternates: { canonical: '/' },
  openGraph: { title, description: profile.description, url: '/', siteName: profile.name, type: 'website', locale: 'en_US' },
  twitter: { card: 'summary_large_image', title, description: profile.description, creator: '@surgeharb' },
};

export const viewport: Viewport = { themeColor: '#080f0b', colorScheme: 'dark' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
