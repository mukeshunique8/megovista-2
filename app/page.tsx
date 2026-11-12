import { SmoothScrollProvider } from '@/components/providers/smooth-scroll'
import { ScrollProgress } from '@/components/layout/scroll-progress'
import { ScrollToTop } from '@/components/layout/scroll-to-top'
import { Hero } from '@/components/sections/hero'
import { GrowthStory } from '@/components/sections/GrowthStory'
import { Offer } from '@/components/sections/Offer'
import { Blueprint } from '@/components/sections/blueprint'
import { People } from '@/components/sections/People'
import { FaqContact } from '@/components/sections/FaqContact'
import { SiteFooter } from '@/components/layout/site-footer'

export default function Page() {
  return (
    <SmoothScrollProvider>
      <ScrollProgress />
      <div className="relative w-full min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] selection:bg-[#FFB800] selection:text-[#0C0B14] transition-colors duration-200">
        <main className="w-full">
          <Hero />
          <GrowthStory />
          <Offer />
          <Blueprint />
          <People />
          <FaqContact />
        </main>
        <SiteFooter />
        <ScrollToTop />
      </div>
    </SmoothScrollProvider>
  )
}
