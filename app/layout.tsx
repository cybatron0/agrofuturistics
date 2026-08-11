import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AgroFuturistics | Quality Seedlings. Stronger Futures.',
  description: 'Order healthy tree and vegetable seedlings from AgroFuturistics in Bunda, Lilongwe. Planting today, harvesting tomorrow.',
  generator: 'AgroFuturistics',
  keywords: ['seedlings', 'Malawi', 'Lilongwe', 'Bunda', 'vegetable seedlings', 'AgroFuturistics'],
  openGraph: { title: 'AgroFuturistics | Quality Seedlings. Stronger Futures.', description: 'Healthy, ready-to-grow seedlings for farmers, families, and gardens across Malawi.', type: 'website', locale: 'en_MW' },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#1B5E20', userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-MW" className="bg-background"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
