import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Receipt Generator — StockX, Nike, Farfetch & 70+ Brands | RepsReceipts',
  description: 'Instantly generate 1:1 email receipts for StockX, Nike, Louis Vuitton, Farfetch, Canada Goose, Gucci, Dior & 70+ luxury and streetwear brands. Fast, accurate receipt templates.',
  metadataBase: new URL('https://www.repsreceipt.com'),
  alternates: {
    canonical: '/',
  },
  
  openGraph: {
    title: 'Receipt Generator — StockX, Nike, Farfetch & 70+ Brands | RepsReceipts',
    description: 'Instantly generate 1:1 email receipts for StockX, Nike, Louis Vuitton, Farfetch & 70+ luxury and streetwear brands.',
    url: 'https://www.repsreceipt.com',
    siteName: 'RepsReceipts',
    images: [
      {
        url: '/og-image.jpg',
        width: 1150,
        height: 600,
        alt: 'RepsReceipts - Receipt Generator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Receipt Generator — StockX, Nike, Farfetch & 70+ Brands | RepsReceipts',
    description: 'Instantly generate 1:1 email receipts for StockX, Nike, Louis Vuitton, Farfetch & 70+ luxury and streetwear brands.',
    images: ['/og-image.jpg'],
  },

  keywords: [
    'receipt generator',
    'email receipt generator',
    'luxury brand receipts',
    'receipt template',
    'invoice generator',
    'stockx receipt generator',
    'nike receipt generator',
    'farfetch receipt',
    'louis vuitton receipt',
    'canada goose receipt',
    'receipt maker',
    'streetwear receipt generator',
    'luxury fashion receipts',
    'brand receipt template',
  ],
  authors: [{ name: 'RepsReceipts' }],
  creator: 'RepsReceipts',
  publisher: 'RepsReceipts',
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
  
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'BusinessSoftware',
  classification: 'SaaS Receipt Generator',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ UPDATED GOOGLE TAG (GTAG.JS) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17728207333"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17728207333');
          `}
        </Script>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        {/* FAVICONS */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/android-chrome-192x192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/android-chrome-512x512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* THEME COLORS */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* ADDITIONAL OG TAGS */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="RepsReceipts - Professional Receipt Generator for Luxury Brands" />
        
        {/* TWITTER ADDITIONAL TAGS */}
        <meta name="twitter:image:alt" content="RepsReceipts Generate receipts for luxury brands" />

        {/* ✅ SCHEMA MARKUP FOR SaaS */}

        {/* 1. Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite", 
              "name": "RepsReceipts",
              "url": "https://www.repsreceipt.com",
              "description": "SaaS platform for generating authentic receipts for 100+ luxury and streetwear brands",
              "thumbnailUrl": "https://www.repsreceipt.com/og-image.jpg",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.repsreceipt.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* 2. Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "RepsReceipts",
              "url": "https://www.repsreceipt.com",
              "logo": "https://www.repsreceipt.com/logo.png",
              "description": "SaaS platform providing professional receipt generation services for luxury brands",
              "sameAs": [],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
       
                "contactType": "customer service",
                "areaServed": "US",
                "availableLanguage": ["English", "Spanish", "French"]
              }
            })
          }}
        />

        {/* 3. SoftwareApplication Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "RepsReceipts receipt generator",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web Browser",
              "permissions": "InternetConnection",
              "description": "SaaS platform for generating authentic receipts for 100+ luxury and streetwear brands",
              "url": "https://www.repsreceipt.com",
              "image": "https://www.repsreceipt.com/og-image.jpg",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "priceValidUntil": "2027-12-31"
              },
              "author": {
                "@type": "Organization",
                "name": "RepsReceipts"
              }
            })
          }}
        />

        {/* 4. Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Digital Receipt Generation",
              "image": "https://www.repsreceipt.com/og-image.jpg",
              "provider": {
                "@type": "Organization",
                "name": "RepsReceipt"
              },
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Receipt Generation Plans",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Receipt Generator",
                      "description": "Generate receipts of. brands"
                    },
                    "price": "0",
                    "priceCurrency": "USD"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Premium Receipt Generation",
                      "description": "Generate receipts with advanced features and premium templates"
                    },
                    "price": "4.99",
                    "priceCurrency": "USD"
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
