import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://agrofuturistics.vercel.app'),
  title: {
    default: 'AgroFuturistics | Quality Seedlings - Bunda, Lilongwe',
    template: '%s | AgroFuturistics',
  },
  description: 'Planting Today, Harvesting Tomorrow. Quality seedlings for stronger futures. Anyezi (Onions), Kabichi (Cabbage), Rape, Mustard, Chinese Cabbage & Bird\'s Eye Chilli available in Bunda, Lilongwe.',
  keywords: ['seedlings', 'Malawi', 'Lilongwe', 'Bunda', 'onions', 'cabbage', 'chilli', 'agriculture', 'AgroFuturistics'],
  authors: [{ name: 'AgroFuturistics' }],
  openGraph: {
    title: 'AgroFuturistics | Quality Seedlings',
    description: 'Planting Today, Harvesting Tomorrow. Quality seedlings from Bunda, Lilongwe.',
    url: 'https://agrofuturistics.vercel.app',
    siteName: 'AgroFuturistics',
    images: [
      {
        url: '/IMG-20260810-WA0003.jpg',
        width: 800,
        height: 800,
        alt: 'AgroFuturistics Logo',
      },
    ],
    locale: 'en_MW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgroFuturistics | Quality Seedlings',
    description: 'Planting Today, Harvesting Tomorrow. Quality seedlings from Bunda, Lilongwe.',
    images: ['/IMG-20260810-WA0003.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
