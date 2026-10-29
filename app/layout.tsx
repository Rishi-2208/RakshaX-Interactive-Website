import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'RakshaX — Always Ready, Always Protected | Seva First Innovation Challenge',
  description: 'Official showcase for RakshaX, a personal emergency safety assistant mobile application for Android. Built for the Seva First Innovation Challenge by Rishi Upadhyay.',
  authors: [{ name: 'Rishi Upadhyay' }],
  keywords: [
    'RakshaX',
    'Personal Emergency Safety Assistant',
    'Seva First Innovation Challenge',
    'Emergency SOS',
    'Android Safety App',
    'Live Location SMS',
    'Emergency Contacts',
    'Jarvis Voice Assistant'
  ],
  icons: {
    icon: '/images/logo/rakshax-shield.svg',
    shortcut: '/images/logo/rakshax-shield.svg',
    apple: '/images/logo/rakshax-shield.svg',
  },
  openGraph: {
    title: 'RakshaX — Always Ready, Always Protected',
    description: 'Personal Emergency Safety Assistant for Android with instant SOS, live location alerts via SMS and Email, and Jarvis Voice Assistant.',
    type: 'website',
    locale: 'en_US',
    siteName: 'RakshaX Showcase',
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0814',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('rakshax-theme');
                  var theme = saved || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
