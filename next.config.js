/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['api.repsreceipt.com', 'www.repsreceipt.com'],
  },
  async redirects() {
    return [
      // Old domain path redirects (repsreceipts.com → repsreceipt.com already handled at DNS level)
      // These handle URL structure changes that caused 119 404s in Google Search Console

      // Old /brands paths that might have used different slugs
      { source: '/brands/de-bijenkorf', destination: '/brands/debijenkorf', permanent: true },
      { source: '/brands/flight-club', destination: '/brands/flight_club', permanent: true },
      { source: '/brands/canada-goose', destination: '/brands/canada_goose', permanent: true },
      { source: '/brands/louis-vuitton', destination: '/brands/louis_vuitton', permanent: true },
      { source: '/brands/off-white', destination: '/brands/off_white', permanent: true },
      { source: '/brands/acne-studios', destination: '/brands/acne_studios', permanent: true },
      { source: '/brands/best-secret', destination: '/brands/best_secret', permanent: true },
      { source: '/brands/broken-planet', destination: '/brands/broken_planet', permanent: true },
      { source: '/brands/culture-kings', destination: '/brands/culture_kings', permanent: true },
      { source: '/brands/denim-tears', destination: '/brands/denim_tears', permanent: true },
      { source: '/brands/end-clothing', destination: '/brands/end', permanent: true },
      { source: '/brands/gallery-dept', destination: '/brands/gallery_dept', permanent: true },
      { source: '/brands/jd-sports', destination: '/brands/jd_sports', permanent: true },
      { source: '/brands/john-lewis', destination: '/brands/john_lewis', permanent: true },
      { source: '/brands/loro-piana', destination: '/brands/loro_piana', permanent: true },
      { source: '/brands/maison-margiela', destination: '/brands/maison_margiela', permanent: true },
      { source: '/brands/neiman-marcus', destination: '/brands/neiman_marcus', permanent: true },
      { source: '/brands/north-face', destination: '/brands/north_face', permanent: true },
      { source: '/brands/saint-laurent', destination: '/brands/saint_laurent', permanent: true },
      { source: '/brands/taylor-made-golf', destination: '/brands/taylor_made_golf', permanent: true },
      { source: '/brands/vivienne-westwood', destination: '/brands/vivienne_westwood', permanent: true },

      // receipt and email-receipt variants
      { source: '/receipt/de-bijenkorf', destination: '/receipt/debijenkorf', permanent: true },
      { source: '/receipt/flight-club', destination: '/receipt/flight_club', permanent: true },
      { source: '/receipt/canada-goose', destination: '/receipt/canada_goose', permanent: true },
      { source: '/receipt/louis-vuitton', destination: '/receipt/louis_vuitton', permanent: true },
      { source: '/receipt/off-white', destination: '/receipt/off_white', permanent: true },
      { source: '/receipt/acne-studios', destination: '/receipt/acne_studios', permanent: true },
      { source: '/receipt/best-secret', destination: '/receipt/best_secret', permanent: true },
      { source: '/receipt/broken-planet', destination: '/receipt/broken_planet', permanent: true },
      { source: '/receipt/culture-kings', destination: '/receipt/culture_kings', permanent: true },
      { source: '/receipt/denim-tears', destination: '/receipt/denim_tears', permanent: true },
      { source: '/receipt/end-clothing', destination: '/receipt/end', permanent: true },
      { source: '/receipt/gallery-dept', destination: '/receipt/gallery_dept', permanent: true },
      { source: '/receipt/jd-sports', destination: '/receipt/jd_sports', permanent: true },
      { source: '/receipt/john-lewis', destination: '/receipt/john_lewis', permanent: true },
      { source: '/receipt/loro-piana', destination: '/receipt/loro_piana', permanent: true },
      { source: '/receipt/maison-margiela', destination: '/receipt/maison_margiela', permanent: true },
      { source: '/receipt/neiman-marcus', destination: '/receipt/neiman_marcus', permanent: true },
      { source: '/receipt/north-face', destination: '/receipt/north_face', permanent: true },
      { source: '/receipt/saint-laurent', destination: '/receipt/saint_laurent', permanent: true },
      { source: '/receipt/taylor-made-golf', destination: '/receipt/taylor_made_golf', permanent: true },
      { source: '/receipt/vivienne-westwood', destination: '/receipt/vivienne_westwood', permanent: true },

      { source: '/email-receipt/de-bijenkorf', destination: '/email-receipt/debijenkorf', permanent: true },
      { source: '/email-receipt/flight-club', destination: '/email-receipt/flight_club', permanent: true },
      { source: '/email-receipt/canada-goose', destination: '/email-receipt/canada_goose', permanent: true },
      { source: '/email-receipt/louis-vuitton', destination: '/email-receipt/louis_vuitton', permanent: true },
      { source: '/email-receipt/off-white', destination: '/email-receipt/off_white', permanent: true },
      { source: '/email-receipt/acne-studios', destination: '/email-receipt/acne_studios', permanent: true },
      { source: '/email-receipt/best-secret', destination: '/email-receipt/best_secret', permanent: true },
      { source: '/email-receipt/broken-planet', destination: '/email-receipt/broken_planet', permanent: true },
      { source: '/email-receipt/culture-kings', destination: '/email-receipt/culture_kings', permanent: true },
      { source: '/email-receipt/denim-tears', destination: '/email-receipt/denim_tears', permanent: true },
      { source: '/email-receipt/end-clothing', destination: '/email-receipt/end', permanent: true },
      { source: '/email-receipt/gallery-dept', destination: '/email-receipt/gallery_dept', permanent: true },
      { source: '/email-receipt/jd-sports', destination: '/email-receipt/jd_sports', permanent: true },
      { source: '/email-receipt/john-lewis', destination: '/email-receipt/john_lewis', permanent: true },
      { source: '/email-receipt/loro-piana', destination: '/email-receipt/loro_piana', permanent: true },
      { source: '/email-receipt/maison-margiela', destination: '/email-receipt/maison_margiela', permanent: true },
      { source: '/email-receipt/neiman-marcus', destination: '/email-receipt/neiman_marcus', permanent: true },
      { source: '/email-receipt/north-face', destination: '/email-receipt/north_face', permanent: true },
      { source: '/email-receipt/saint-laurent', destination: '/email-receipt/saint_laurent', permanent: true },
      { source: '/email-receipt/taylor-made-golf', destination: '/email-receipt/taylor_made_golf', permanent: true },
      { source: '/email-receipt/vivienne-westwood', destination: '/email-receipt/vivienne_westwood', permanent: true },
    ]
  },
}

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Clickjacking protection (fixes XFO Lighthouse warning)
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // Prevent MIME sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Referrer policy
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // HSTS (fixes Lighthouse HSTS warning)
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          // Cross-Origin-Opener-Policy (fixes COOP warning)
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
          // Cross-Origin-Resource-Policy
          { key: 'Cross-Origin-Resource-Policy', value: 'same-site' },
          // Permissions policy
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          // Content Security Policy — permissive enough for GTM/GA/Ahrefs/PayPal,
          // but locks down object/base/frame-ancestors against XSS and clickjacking
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:",
              "style-src 'self' 'unsafe-inline' https:",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data: https:",
              "connect-src 'self' https:",
              "frame-src https:",
              "object-src 'none'",
              "base-uri 'self'",
              "frame-ancestors 'self'",
              "form-action 'self' https:",
              'upgrade-insecure-requests',
            ].join('; '),
          },
        ],
      },
      // Cache static assets aggressively
      {
        source: '/(.*)\\.(png|jpg|jpeg|webp|svg|ico|woff|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}

module.exports = nextConfig