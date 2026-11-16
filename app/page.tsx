import Navbar from '@/components/Navbar'
import ExecutiveHero from '@/components/hero/ExecutiveHero'
import EnterpriseBento from '@/components/bento/EnterpriseBento'
import ProcessTimeline from '@/components/process/ProcessTimeline'
import IndustrySectors from '@/components/sectors/IndustrySectors'
import ExecutiveDirectorate from '@/components/about/ExecutiveDirectorate'
import FaqSection from '@/components/faq/FaqSection'
import ContactSection from '@/components/contact/ContactSection'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] transition-colors duration-300">
      {/* Pinned Executive Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="w-full">
        {/* Full-Viewport Modern Hero (#home) */}
        <ExecutiveHero />

        {/* Core Capabilities Magic Bento Grid (#services) */}
        <EnterpriseBento />

        {/* 4-Phase Roadmap Stepper (#process) */}
        <ProcessTimeline />

        {/* Industry Verticals & Accuracy Scorecard */}
        <IndustrySectors />

        {/* Executive Directorate & Trust Pillars (#about) */}
        <ExecutiveDirectorate />

        {/* Statutory & Advisory FAQs (#faq) */}
        <FaqSection />

        {/* Confidential Consultation Booking Form (#contact) */}
        <ContactSection />
      </main>

      {/* Stacked Card Executive Footer */}
      <Footer />
    </div>
  )
}
