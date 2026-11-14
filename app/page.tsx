import { SmoothScrollProvider } from '@/components/providers/smooth-scroll'
import { ScrollProgress } from '@/components/layout/scroll-progress'
import { Navbar } from '@/components/layout/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/layout/Footer'
import { FloatingActions } from '@/components/ui/FloatingActions'

export default function Page() {
  return (
    <SmoothScrollProvider>
      <ScrollProgress />
      <div className="relative w-full min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] transition-colors duration-200">
        <Navbar />
        <main className="w-full">
          <HeroSection />
          <ServicesSection />
          <ProcessSection />
          <AboutSection />
          <FaqSection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </SmoothScrollProvider>
  )
}
