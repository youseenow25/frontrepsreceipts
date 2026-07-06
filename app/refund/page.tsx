import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Refund Policy | RepsReceipts',
  description: 'RepsReceipts refund policy. Learn about our refund and cancellation terms for subscriptions and one-time purchases.',
  alternates: { canonical: '/refund' },
  robots: { index: true, follow: true },
}

export default function RefundPolicy() {
  return (
    <>
      <main style={{ minHeight: '100vh', background: '#fff' }}>
        <Header />

        <section style={{ maxWidth: 740, margin: '0 auto', padding: '60px 20px' }}>
          <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#111', marginBottom: 8 }}>
            Refund Policy
          </h1>
          <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: 40 }}>Last updated: June 2026</p>

          <div style={{ color: '#444', lineHeight: 1.8, fontSize: '1rem' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111', marginTop: 32, marginBottom: 8 }}>1. Overview</h2>
            <p>At RepsReceipts, we want you to be satisfied with the service. This policy explains the circumstances under which we provide refunds for subscriptions and one-time purchases.</p>

            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111', marginTop: 32, marginBottom: 8 }}>2. Subscription Refunds</h2>
            <p>Subscription payments are billed in advance for the upcoming billing period. If you cancel your subscription before the renewal date, your access will continue until the end of the paid period and no further charges will occur. We do not provide pro-rated refunds for partial billing periods.</p>
            <p>If you experience a technical issue that prevents you from using the service and we are unable to resolve it within 72 hours, you may be eligible for a refund of the affected billing period. Please contact support to report the issue.</p>

            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111', marginTop: 32, marginBottom: 8 }}>3. One-Time Purchase Refunds</h2>
            <p>If you have purchased a one-time receipt generation credit and have not yet used it, you may request a full refund within 7 days of purchase. Once a receipt has been generated using a credit, the purchase is considered complete and non-refundable.</p>

            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111', marginTop: 32, marginBottom: 8 }}>4. How to Request a Refund</h2>
            <p>To request a refund, email <strong>support@repsreceipt.com</strong> with the subject line "Refund Request" and include:</p>
            <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
              <li>Your account email address.</li>
              <li>The date of the charge.</li>
              <li>The reason for your refund request.</li>
            </ul>
            <p>We will respond within 3 business days. Approved refunds are processed within 5–10 business days and returned to the original payment method.</p>

            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111', marginTop: 32, marginBottom: 8 }}>5. Chargebacks</h2>
            <p>If you initiate a chargeback without first contacting us, we reserve the right to suspend your account pending resolution. Please contact support first — we are happy to resolve any billing issues directly.</p>

            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111', marginTop: 32, marginBottom: 8 }}>6. Contact</h2>
            <p>For refund requests or billing questions, contact us at <strong>support@repsreceipt.com</strong>.</p>
          </div>

          <div style={{ marginTop: 48, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/privacy-policy" style={{ color: '#5462ea', fontSize: '0.9rem' }}>Privacy Policy</Link>
            <Link href="/terms-of-service" style={{ color: '#5462ea', fontSize: '0.9rem' }}>Terms of Service</Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
