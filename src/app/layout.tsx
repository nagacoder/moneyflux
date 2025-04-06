import type { Metadata } from 'next';
import { AppProvider } from '@/context/AppContext';
import Footer from '@/components/Footer'
import '../styles/globals.css';
import '../styles/footer.css';
import '../styles/table.css';

export const metadata: Metadata = {
  title: 'MoneyFlux Dashboard',
  description: 'A personal finance tracking app',
  viewport: 'width=device-width, initial-scale=1.0',
  themeColor: '#1a1a1a',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'MoneyFlux'
  },
  icons: {
    apple: '/pwa/icon-192.png',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/fa.min.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </head>
      <body>
        <AppProvider>
          {children}
          <Footer/>
        </AppProvider>
      </body>
    </html>
  );
}