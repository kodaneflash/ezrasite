import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { ContextProvider } from '@/components/context-provider';
import { Toaster } from 'sonner';
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jamesarcher.io/'),
  title: { default: 'James Archer', template: '%s | James Archer' },
  description: 'James Archer | Solo Entrepreneur | Founder',
  openGraph: {
    title: 'James Archer | Solo Entrepreneur | Founder',
    description: 'I teach solo entrepreneurs how to build and scale successful online businesses.',
    url: 'https://www.jamesarcher.io/',
    siteName: 'James Archer',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'James Archer',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="70a7850b-edaf-4953-97de-9552a8e7b9d9"
          async
        ></script>
      </head>
      <body
        className={`bg-primary text-secondary text-sm md:text-base ${inter.className}`}
      >
        <ContextProvider>
          <main className="min-h-screen flex flex-col items-center">
            <Toaster richColors position="bottom-center" />
            <div className="flex-1 w-full flex flex-col gap-8 items-center max-w-7xl px-4 md:px-8">
              {children}
            </div>
          </main>
        </ContextProvider>
        <div className="pointer-events-none bg-primary fixed bottom-0 left-0 h-28 [mask-image:linear-gradient(transparent,#000000)] w-full"></div>
        <Analytics />
      </body>
    </html>
  );
}