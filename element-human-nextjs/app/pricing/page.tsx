import type { Metadata } from 'next'
import { PricingCalculator } from '@/components/sections/PricingCalculator'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for creative testing',
}

export default function PricingPage() {
  return (
    <main className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600">
            Calculate your custom pricing with our interactive calculator
          </p>
        </div>
      </div>

      {/* Interactive Pricing Calculator */}
      <PricingCalculator />

      {/* CTA */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-brand-navy mb-4">Ready to get started?</h3>
          <Button variant="solid" size="lg">
            Contact Sales
          </Button>
        </div>
      </div>
    </main>
  )
}
