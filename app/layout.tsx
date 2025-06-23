import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Revolution AI Automations - Transform Your Business with AI',
  description: 'Leading AI automation platform providing custom machine learning models, intelligent workflows, and cutting-edge artificial intelligence solutions for modern businesses.',
  keywords: ['AI automation', 'machine learning', 'artificial intelligence', 'business automation', 'workflow optimization', 'intelligent systems'],
  authors: [{ name: 'Revolution AI Team' }],
  openGraph: {
    title: 'Revolution AI Automations - Transform Your Business with AI',
    description: 'Leading AI automation platform providing custom solutions and intelligent workflows.',
    url: 'https://revolution-ai.co.uk',
    siteName: 'Revolution AI Automations',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revolution AI Automations - AI Solutions for Modern Business',
    description: 'Transform your business with our cutting-edge AI automation platform and custom solutions.',
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
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}