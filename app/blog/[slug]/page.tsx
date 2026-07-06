import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { posts, getPostBySlug } from '@/lib/posts'

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: `${post.title} | RepsReceipts Blog`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.repsreceipt.com/blog/${post.slug}`,
      siteName: 'RepsReceipts',
      images: [{ url: '/og-image.jpg', width: 1150, height: 600, alt: post.title }],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['/og-image.jpg'],
    },
  }
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'RepsReceipts' },
    publisher: {
      '@type': 'Organization',
      name: 'RepsReceipts',
      logo: { '@type': 'ImageObject', url: 'https://www.repsreceipt.com/logo.png' },
    },
    url: `https://www.repsreceipt.com/blog/${post.slug}`,
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.repsreceipt.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.repsreceipt.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.repsreceipt.com/blog/${post.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <main style={{ minHeight: '100vh', background: '#fff' }}>
        <Header />

        <article style={{ maxWidth: 740, margin: '0 auto', padding: '60px 20px' }}>
          <nav style={{ fontSize: '0.85rem', color: '#888', marginBottom: 24 }}>
            <Link href="/" style={{ color: '#888' }}>Home</Link>
            {' / '}
            <Link href="/blog" style={{ color: '#888' }}>Blog</Link>
            {' / '}
            <span>{post.title}</span>
          </nav>

          <time style={{ fontSize: '0.85rem', color: '#888' }} dateTime={post.date}>
            {formatDate(post.date)}
          </time>

          <h1 style={{
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            fontWeight: 700,
            color: '#111',
            margin: '8px 0 32px',
            lineHeight: 1.3,
          }}>
            {post.title}
          </h1>

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div style={{
            marginTop: 48,
            padding: '24px',
            background: '#f8f8ff',
            borderRadius: 12,
            border: '1px solid #e8e8ff',
          }}>
            <p style={{ fontWeight: 700, color: '#111', marginBottom: 8 }}>
              Ready to generate your receipt?
            </p>
            <p style={{ color: '#555', marginBottom: 16, fontSize: '0.95rem' }}>
              Choose from 70+ brand templates and create your receipt in seconds.
            </p>
            <Link
              href="/brands"
              style={{
                display: 'inline-block',
                padding: '10px 24px',
                background: '#5462ea',
                color: '#fff',
                fontWeight: 600,
                borderRadius: 8,
                textDecoration: 'none',
                fontSize: '0.95rem',
              }}
            >
              Browse all brands →
            </Link>
          </div>
        </article>

        <Footer />
      </main>

      <style>{`
        .blog-content h2 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #111;
          margin: 32px 0 12px;
        }
        .blog-content p {
          color: #444;
          line-height: 1.75;
          margin-bottom: 16px;
        }
        .blog-content ul,
        .blog-content ol {
          color: #444;
          line-height: 1.75;
          padding-left: 24px;
          margin-bottom: 16px;
        }
        .blog-content li {
          margin-bottom: 6px;
        }
        .blog-content a {
          color: #5462ea;
          text-decoration: underline;
        }
        .blog-content strong {
          color: #111;
          font-weight: 600;
        }
      `}</style>
    </>
  )
}

export const revalidate = 86400
