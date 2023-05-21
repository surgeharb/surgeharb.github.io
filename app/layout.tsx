import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Serge Harb - Full Stack Software Engineer',
  description:
    'Serge Harb, Full Stack Software Engineer with a demonstrated history of working in the software industry. Mainly expert in backend and frontend web development, as well as modern mobile and web apps development.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
