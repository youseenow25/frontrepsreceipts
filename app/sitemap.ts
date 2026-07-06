import { MetadataRoute } from 'next'
import brandsSchema from '@/components/brands'
import { posts } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.repsreceipt.com'

  const siteLastMod = '2026-07-06'
  const brandsLastMod = '2026-07-06'

  const brands = Object.keys(brandsSchema.brands || {})

  // Core pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: siteLastMod,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/brands`,
      lastModified: siteLastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: siteLastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: siteLastMod,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // Trust / legal pages
  const trustPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/about`,
      lastModified: siteLastMod,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: siteLastMod,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: siteLastMod,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: siteLastMod,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: siteLastMod,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: siteLastMod,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/refund`,
      lastModified: siteLastMod,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // /brands/[brand] — primary brand generator pages
  const brandPages: MetadataRoute.Sitemap = brands.map((brand) => ({
    url: `${baseUrl}/brands/${brand}`,
    lastModified: brandsLastMod,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // /receipt/[brand] — receipt template pages
  const receiptTemplatePages: MetadataRoute.Sitemap = brands.map((brand) => ({
    url: `${baseUrl}/receipt/${brand}`,
    lastModified: brandsLastMod,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // /email-receipt/[brand] — email receipt pages
  const emailReceiptPages: MetadataRoute.Sitemap = brands.map((brand) => ({
    url: `${baseUrl}/email-receipt/${brand}`,
    lastModified: brandsLastMod,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...corePages,
    ...trustPages,
    ...blogPages,
    ...brandPages,
    ...receiptTemplatePages,
    ...emailReceiptPages,
  ]
}
