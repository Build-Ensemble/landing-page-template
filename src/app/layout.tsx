import '@/app/globals.css';
import { Toaster } from 'sonner';
import Script from 'next/script';
import { PostHogProvider } from './providers';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Ensemble AI</title>
        <link rel="icon" href="/icon.ico" />
        <meta
          name="description"
          content="Ensemble AI is a platform for managing your accounting firm."
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
      <body>
        <PostHogProvider>
          <Toaster />
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
};

export default RootLayout;
