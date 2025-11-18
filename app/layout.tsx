import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Harrison Martin | Biomedical Engineering + Data Science',
  description: 'Portfolio of Harrison Martin - Biomedical Engineering and Data Science student specializing in ML Research & Full-Stack Development',
  keywords: ['Harrison Martin', 'Biomedical Engineering', 'Data Science', 'Machine Learning', 'Full-Stack Development', 'Portfolio'],
  authors: [{ name: 'Harrison Martin' }],
  openGraph: {
    title: 'Harrison Martin | Biomedical Engineering + Data Science',
    description: 'ML Research & Full-Stack Development Portfolio',
    type: 'website',
    url: 'https://harrisonmartin.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harrison Martin | Biomedical Engineering + Data Science',
    description: 'ML Research & Full-Stack Development Portfolio',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

