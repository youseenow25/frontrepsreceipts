import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/login',
          '/register',
          '/payment',
          '/success',
          '/admin23456ergdfxdzrdm5',
        ],
      },
    ],
    sitemap: 'https://www.repsreceipt.com/sitemap.xml',
    host: 'https://www.repsreceipt.com',
  }
}