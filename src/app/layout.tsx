import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import ReactQueryProvider from './_lib/queryProvider';

const nunito = Nunito({ subsets: ['cyrillic', 'latin'] });

export const metadata: Metadata = {
  title: 'LogicLike',
  description: 'LogicLike courses for kids 5-12 years',
  openGraph: {
    title: 'LogicLike courses',
    type: 'website',
    description: 'LogicLike courses for kids 5-12 years',
    siteName: 'LogicLike courses',
    url: 'https://logic-kids.vercel.app/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <ReactQueryProvider>
        <body className={nunito.className}>{children}</body>
      </ReactQueryProvider>
    </html>
  );
}
