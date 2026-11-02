import type {Metadata, Viewport} from 'next';
import {Caveat, Fraunces, Nunito} from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  variable: '--font-fraunces',
});
const caveat = Caveat({subsets: ['latin'], variable: '--font-caveat'});
const nunito = Nunito({subsets: ['latin'], variable: '--font-nunito'});

export const metadata: Metadata = {
  // The deployed address (e.g. https://mimo.app), so link previews get absolute image URLs.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Mimo – Download for Android',
  description:
    'Mimo is a cosy budget app with a bunny who listens. Say what you spent, snap a receipt, and save for your bucket list.',
  icons: {icon: '/icon.png', apple: '/icon.png'},
  openGraph: {
    title: 'Mimo – your little budget journal',
    description: 'Track your money, one tiny carrot at a time. Free for Android.',
    images: ['/icon.png'],
  },
};

export const viewport: Viewport = {themeColor: '#F2E8D5'};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${caveat.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
