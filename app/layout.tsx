import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CognifyAI - Transforming Business with AI Solutions',
  description: 'Leading AI consultancy providing custom machine learning models, NLP integration, and cutting-edge artificial intelligence solutions for modern businesses.',
  keywords: ['AI consulting', 'machine learning', 'artificial intelligence', 'NLP', 'computer vision', 'data science'],
  authors: [{ name: 'CognifyAI Team' }],
  openGraph: {
    title: 'CognifyAI - Transforming Business with AI Solutions',
    description: 'Leading AI consultancy providing custom machine learning models and cutting-edge solutions.',
    url: 'https://cognifyai.com',
    siteName: 'CognifyAI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CognifyAI - AI Solutions for Modern Business',
    description: 'Transform your business with our cutting-edge AI consulting and custom solutions.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen pt-16 lg:pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}