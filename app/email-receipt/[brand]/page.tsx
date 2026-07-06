import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero2'
import BrandReceiptGenerator from '@/components/BrandReceiptGenerator'
import brandsSchema from '@/components/brands'
import Link from 'next/link'
import ReceiptExamplesHero from '@/components/ReceiptExamplesHero'
import { brandContent } from '@/lib/brandContent'

type Props = {
  params: { brand: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

function toLabel(name: string): string {
  const special: Record<string, string> = {
    zip_code: 'ZIP Code',
    product_id: 'Product ID',
    order_number: 'Order Number',
    phone_number: 'Phone Number',
    brand_name: 'Brand Name',
    taxes_percentatge: 'Taxes Percentatge',
    currency: 'Currency',
  }
  if (special[name]) return special[name]
  return name
    .split('_')
    .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ')
}

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const brand = params.brand
  const brandData = brandsSchema.brands[brand]

  if (!brandData) {
    return {
      title: 'Brand Not Found - RepReceipts',
    }
  }

  const brandName = toLabel(brand)
  const description = `Build ${brandName} email receipts with correct layout, branding, and fields for customer confirmations.`
  const logoUrl = `https://www.repsreceipt.com/brand-logos/${brand.toLowerCase().replace(/[^a-z0-9]/g, '_')}.png`

  return {
    title: `${brandName} Email Receipt Generator - Order Confirmation | RepReceipts`,
    description,
    keywords: [
      `${brandName} email receipt`,
      `${brandName} order confirmation`,
      `${brandName} e-receipt`,
      `${brandName} digital receipt`,
      `${brandName} purchase confirmation email`,
      'email receipt generator',
      'order confirmation template',
    ],
    openGraph: {
      title: `${brandName} Email Receipt Generator | RepReceipts`,
      description,
      type: 'website',
      locale: 'en_US',
      url: `https://www.repsreceipt.com/email-receipt/${brand}`,
      siteName: 'RepReceipts',
      images: [
        {
          url: logoUrl,
          width: 200,
          height: 200,
          alt: `${brandName} Logo`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${brandName} Email Receipt - RepReceipts`,
      description,
      images: [logoUrl],
    },
    alternates: {
      canonical: `https://www.repsreceipt.com/email-receipt/${brand}`,
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
  }
}

function EmailReceiptLoading() {
  return (
    <div className="brand-receipt-generator">
      <div className="brand-header">
        <h1>Loading..</h1>
      </div>
    </div>
  )
}

export default function EmailReceiptBrandPage({ params }: Props) {
  const brand = params.brand
  const brandData = brandsSchema.brands[brand]

  if (!brandData) {
    notFound()
  }

  const brandName = toLabel(brand)
  const logoUrl = `https://www.repsreceipt.com/brand-logos/${brand.toLowerCase().replace(/[^a-z0-9]/g, '_')}.png`

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${brandName} Email Receipt Generator`,
    description: `Create digital ${brandName} email receipts for orders with branded formatting.`,
    image: logoUrl,
    provider: {
      '@type': 'Organization',
      name: 'RepReceipts',
      url: 'https://www.repsreceipt.com',
    },
    areaServed: 'Worldwide',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="main">
        <div className="luxury-radial" aria-hidden />
        <Header />
        <ReceiptExamplesHero />
        <Hero brandName={`${brandName} Email Receipt`} />

        <div style={{ width: '100%' }}>
          <Suspense fallback={<EmailReceiptLoading />}>
            <BrandReceiptGenerator
              preSelectedBrand={brand}
            />
          </Suspense>
        </div>

        {/* SEO content - unique per brand */}
        <section className="brand-seo-rich">
          <div className="brand-seo-inner">
            {(() => {
              const content = brandContent[brand]
              if (!content) return (
                <>
                  <h2>{brandName} Email Receipt and Order Confirmation Generator</h2>
                  <p>Create {brandName} email receipts formatted for digital delivery with branded headers, order summaries, and shipping details.</p>
                  <p className="brand-links">
                    <Link href={`/brands/${brand}`}>{brandName} receipt generator</Link> ·{' '}
                    <Link href={`/receipt/${brand}`}>{brandName} PDF template</Link> ·{' '}
                    <Link href="/brands">browse all brands</Link>
                  </p>
                </>
              )
              return (
                <>
                  <h2>{content.emailAngle}</h2>
                  <p>{content.emailBody}</p>
                  <h3>What the {brandName} email receipt includes</h3>
                  <ul>
                    {content.emailFeatures.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                  <p className="brand-links">
                    More {brandName} tools: <Link href={`/brands/${brand}`}>{brandName} receipt generator</Link> ·{' '}
                    <Link href={`/receipt/${brand}`}>{brandName} PDF template</Link> ·{' '}
                    <Link href="/brands">browse all brands</Link> ·{' '}
                    <Link href="/contact">contact us</Link>
                  </p>
                </>
              )
            })()}
          </div>
        </section>
      </main>

      <style>{`
        .luxury-radial {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 600px 400px at 20% 100px, rgba(212, 175, 55, 0.1), transparent 70%),
            radial-gradient(ellipse 800px 500px at 80% 300px, rgba(201, 176, 55, 0.08), transparent 70%),
            radial-gradient(ellipse 1000px 600px at center, rgba(0, 0, 0, 0.03), transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .main {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          padding-top: 12px;
        }

        @media (max-width: 768px) {
          .brand-hero-title {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </>
  )
}

// Generate all email receipt pages at build time for Google indexing
export async function generateStaticParams() {
  const brands = Object.keys(brandsSchema.brands || {})
  return brands.map((brand) => ({ brand }))
}

// Revalidate every 24 hours instead of force-dynamic
export const revalidate = 86400
export const dynamicParams = true
