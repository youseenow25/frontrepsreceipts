import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | RepsReceipts',
  description: 'RepsReceipts privacy policy. Learn how we collect, use, and protect your personal information when you use our receipt generation service.',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
}

export default function PrivacyPolicy() {
  return (
    <>
      <main style={{ minHeight: '100vh', background: '#fff' }}>
        <Header />

        <section style={{ maxWidth: 740, margin: '0 auto', padding: '60px 20px' }}>
          <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#111', marginBottom: 8 }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: 40 }}>Last updated: June 2026</p>

          <div style={{ color: '#444', lineHeight: 1.8, fontSize: '1rem' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111', marginTop: 32, marginBottom: 8 }}>1. Information We Collect</h2>
            <p>When you use RepsReceipts, we may collect the following types of information:</p>
            <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
              <li>Account information such as your email address when you register.</li>
              <li>Payment information processed securely through our payment provider (Stripe). We do not store card numbers.</li>
              <li>Usage data such as which brand templates you access and how often you use the generator.</li>
              <li>Technical data including IP address, browser type, and device type collected automatically via analytics.</li>
            </ul>

            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111', marginTop: 32, marginBottom: 8 }}>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
              <li>Provide and improve the RepsReceipts receipt generation service.</li>
              <li>Process payments and manage your subscription.</li>
              <li>Send transactional emails such as order confirmations and subscription receipts.</li>
              <li>Analyse usage patterns to improve the platform.</li>
              <li>Comply with legal obligations.</li>
            </ul>

            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111', marginTop: 32, marginBottom: 8 }}>3. Cookies</h2>
            <p>We use cookies to maintain your session, remember your preferences, and collect analytics data. You can disable cookies in your browser settings, but this may affect the functionality of the service. We use Google Analytics to understand how visitors interact with our site.</p>

            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111', marginTop: 32, marginBottom: 8 }}>4. Data Sharing</h2>
            <p>We do not sell your personal data. We share data only with:</p>
            <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
              <li>Payment processors (Stripe) to handle transactions.</li>
              <li>Analytics providers (Google Analytics, Vercel Analytics) under data processing agreements.</li>
              <li>Law enforcement or regulatory bodies if required by law.</li>
            </ul>

            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111', marginTop: 32, marginBottom: 8 }}>5. Data Retention</h2>
            <p>We retain your account data for as long as your account is active. If you delete your account, we will delete your personal data within 30 days, except where we are required to retain it for legal or financial compliance purposes.</p>

            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111', marginTop: 32, marginBottom: 8 }}>6. Your Rights</h2>
            <p>Depending on your location, you may have the right to access, correct, or delete your personal data, object to processing, or request data portability. To exercise these rights, contact us at the email address below.</p>

            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111', marginTop: 32, marginBottom: 8 }}>7. Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or disclosure. All data is transmitted over HTTPS.</p>

            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111', marginTop: 32, marginBottom: 8 }}>8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by email or by posting a notice on the website. Continued use of RepsReceipts after changes constitutes acceptance of the updated policy.</p>

            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111', marginTop: 32, marginBottom: 8 }}>9. Contact</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <strong>support@repsreceipt.com</strong>.</p>
          </div>

          <div style={{ marginTop: 48, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/terms" style={{ color: '#5462ea', fontSize: '0.9rem' }}>Terms of Service</Link>
            <Link href="/refund" style={{ color: '#5462ea', fontSize: '0.9rem' }}>Refund Policy</Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
