import '@/app/globals.css';
import { Toaster } from 'sonner';
import Script from 'next/script';
import { PostHogProvider } from './providers';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Findre - Property Owner Sourcing',
  description: 'Find and connect with property owners efficiently',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Findre</title>
        <link rel="icon" href="/icon.ico" />
        <meta
          name="description"
          content="Find Off-Market Sellers Before Anyone Else. Identify high-likelihood sellers and get verified owner contacts"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5QHJNN7N5R"
          strategy="afterInteractive"
        />

        {/* Inline script to define gtag and configure GA */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){
              window.dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-5QHJNN7N5R');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <div className="min-h-screen">
            <main className="pt-16">
              <PostHogProvider>
                <Toaster />
                {children}
              </PostHogProvider>
            </main>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
};

export default RootLayout;
