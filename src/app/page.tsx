import Image from 'next/image'
import HeroSection from '@/components/hero-section'

import WarnerSection from '@/components/warner-section'
import CariocaSection from '@/components/carioca-section'
import FaturamentoSection from '@/components/faturamento-section'

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-x-hidden">
      <HeroSection />
      <WarnerSection />
      <CariocaSection />
      <FaturamentoSection />
    </main>
  )
}
