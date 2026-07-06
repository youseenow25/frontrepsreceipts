import type { Metadata } from 'next'

// Force dynamic rendering to prevent build timeout (client component pages need this)
export const dynamic = 'force-dynamic'
export const dynamicParams = true

export const metadata: Metadata = {
  title: 'Pricing - Receipt Generator Plans | RepsReceipts',
  description: 'Simple, transparent pricing. Generate 1 receipt for $5.99, unlimited receipts for 1 month at $14.99, or lifetime access for $24.99. No subscription required.',
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'Pricing - Receipt Generator Plans | RepsReceipts',
    description: 'Generate receipts for 64+ brands. From $5.99 for a single receipt to $24.99 lifetime access.',
    url: 'https://www.repsreceipt.com/pricing',
    siteName: 'RepsReceipts',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children
}
