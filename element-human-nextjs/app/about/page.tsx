import type { Metadata } from 'next'
import { TeamCarouselSection } from '@/components/sections/TeamCarouselSection'
import { WhatWeStandForSection } from '@/components/sections/WhatWeStandForSection'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Turning human behaviors into machine-learned empathy',
}

export default function AboutPage() {
  return (
    <main className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6">
            About Element Human
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Our mission is to turn human behaviors into machine-learned empathy
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We believe in bringing empathy to digital interactions. By understanding what people see, feel, and remember, we help brands create experiences that truly resonate.
          </p>
        </div>
      </div>

      {/* The 3 E's */}
      <WhatWeStandForSection />

      {/* Team Carousel */}
      <TeamCarouselSection />

      {/* Company Info */}
      <div className="container mx-auto px-4 py-16">
        <div className="glass-panel p-8 rounded-2xl text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-brand-navy mb-4">Company Information</h3>
          <p className="text-gray-700">
            Element Human Limited<br />
            7 Savoy Court, London, WC2R 0EX<br />
            Company No: 08587003
          </p>
        </div>
      </div>
    </main>
  )
}
