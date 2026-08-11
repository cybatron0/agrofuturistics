import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AgroFuturistics | Quality Seedlings - Bunda, Lilongwe',
  description: 'Planting Today, Harvesting Tomorrow. Quality seedlings for stronger futures. Anyezi, Kabichi, Rape, Mustard, Chinese & Bird\'s Eye Chilli available in Bunda, Lilongwe.',
  openGraph: {
    title: 'AgroFuturistics | Quality Seedlings',
    description: 'Planting Today, Harvesting Tomorrow. Quality seedlings from Bunda, Lilongwe.',
    images: ['/logo.jpg'],
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
