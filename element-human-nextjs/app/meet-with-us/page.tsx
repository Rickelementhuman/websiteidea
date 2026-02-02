import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Meet With Us',
  description: 'See the product, learn what we do, partner with us',
}

export default function MeetWithUsPage() {
  return (
    <main className="pt-20 min-h-screen bg-gradient-to-br from-brand-navy/5 to-brand-magenta/5">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6">
              Meet With Our Team
            </h1>
            <p className="text-2xl text-brand-magenta font-semibold mb-4">
              Seeing is believing
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Give your brand measurement a lift. Tour the product, learn more about what we do, and explore partnership opportunities.
            </p>
          </div>

          {/* Contact Card */}
          <div className="glass-panel-light p-12 rounded-2xl mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">
                Let's Start a Conversation
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our team is here to help you understand how Element Human can transform your creative testing process.
              </p>
              <div className="flex justify-center items-center space-x-3 mb-8">
                <svg className="w-6 h-6 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@elementhuman.com" className="text-xl text-brand-cyan hover:text-brand-magenta transition-colors">
                  hello@elementhuman.com
                </a>
              </div>
            </div>

            {/* What to Expect */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-3">📊</div>
                <h3 className="font-bold text-brand-navy mb-2">Product Demo</h3>
                <p className="text-sm text-gray-600">See the HX Workbench in action</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🔬</div>
                <h3 className="font-bold text-brand-navy mb-2">Methodology Review</h3>
                <p className="text-sm text-gray-600">Understand our science</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="font-bold text-brand-navy mb-2">Partnership Options</h3>
                <p className="text-sm text-gray-600">Explore how we can work together</p>
              </div>
            </div>

            <div className="text-center">
              <Button variant="solid" size="lg">
                Schedule a Meeting
              </Button>
            </div>
          </div>

          {/* Trusted By */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">Trusted by 472+ brands including</p>
            <div className="flex flex-wrap justify-center gap-6">
              {['Amazon', 'Nike', 'BMW', 'Spotify', 'BBC Studios'].map((brand) => (
                <span key={brand} className="text-brand-navy font-semibold">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
