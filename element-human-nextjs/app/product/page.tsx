import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product - HX Workbench',
  description: 'Test your creatives with behavioral measurement technology',
}

export default function ProductPage() {
  return (
    <main className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6">
            The HX Workbench
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Test your creative and measure the drivers of human behavior through attention, emotion, and memory
          </p>
        </div>

        {/* Product Overview */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="glass-panel p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-brand-magenta mb-4">Pre-Campaign Testing</h2>
            <p className="text-gray-700 mb-6">
              Test before you launch. Understand how your creative performs across attention, emotion, and memory metrics before it goes live.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-brand-green mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>CTV and influencer content testing</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-brand-green mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Full behavioral metrics suite</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-brand-green mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Optimize before launch</span>
              </li>
            </ul>
          </div>

          <div className="glass-panel p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-brand-cyan mb-4">Mid-Flight Optimization</h2>
            <p className="text-gray-700 mb-6">
              Real-time creative tweaks for influencer and social content. Make data-driven decisions while campaigns are live.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-brand-green mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Influencer and social only</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-brand-green mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Rapid results in 24 hours</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-brand-green mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Optimize in real-time</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Methodology */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-navy mb-6">
            Measuring What Matters
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We measure the three critical drivers of purchase decisions: Attention, Emotion, and Memory
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card-accent p-8 text-center">
            <div className="text-5xl mb-4">👁️</div>
            <h3 className="text-2xl font-bold text-brand-navy mb-3">Attention</h3>
            <p className="text-gray-600">
              Eye-tracking technology captures where viewers look and for how long
            </p>
          </div>

          <div className="glass-card-accent p-8 text-center">
            <div className="text-5xl mb-4">😊</div>
            <h3 className="text-2xl font-bold text-brand-navy mb-3">Emotion</h3>
            <p className="text-gray-600">
              Facial coding reveals genuine emotional reactions to your creative
            </p>
          </div>

          <div className="glass-card-accent p-8 text-center">
            <div className="text-5xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold text-brand-navy mb-3">Memory</h3>
            <p className="text-gray-600">
              Implicit association tests measure deep memory encoding
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
