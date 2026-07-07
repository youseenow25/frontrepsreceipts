import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { posts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Receipt Generator Blog — Tips, Guides & Brand Receipts | RepsReceipts',
  description: 'Guides and tips on generating receipts for StockX, Nike, Louis Vuitton, Farfetch, Gucci, Supreme and 60+ brands. Learn what each receipt format looks like and how to recreate it.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Receipt Generator Blog | RepsReceipts',
    description: 'Guides on generating receipts for StockX, Nike, Louis Vuitton, Farfetch, Gucci, Supreme and 60+ brands.',
    url: 'https://www.repsreceipt.com/blog',
    siteName: 'RepsReceipts',
    images: [{ url: '/og-image.jpg', width: 1150, height: 600, alt: 'RepsReceipts Blog' }],
    locale: 'en_US',
    type: 'website',
  },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogIndex() {
  return (
    <>
      <main style={{ minHeight: '100vh', background: '#fff' }}>
        <Header />

        <section style={{ maxWidth: 820, margin: '0 auto', padding: '60px 20px' }}>
          <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#111', marginBottom: 8 }}>
            Receipt Generator Blog
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#555', marginBottom: 48 }}>
            Guides on generating receipts for StockX, Nike, Louis Vuitton, Farfetch and 60+ brands.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {posts.map((post) => (
              <article
                key={post.slug}
                style={{
                  borderBottom: '1px solid #eee',
                  paddingBottom: 32,
                }}
              >
                <time style={{ fontSize: '0.85rem', color: '#888' }} dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#111', margin: '6px 0 8px' }}>
                  <Link href={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {post.title}
                  </Link>
                </h2>
                <p style={{ color: '#555', lineHeight: 1.6, marginBottom: 12 }}>{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  style={{ fontSize: '0.9rem', fontWeight: 600, color: '#5462ea', textDecoration: 'none' }}
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
