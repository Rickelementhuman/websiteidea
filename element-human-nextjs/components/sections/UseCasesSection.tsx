'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const useCases = [
  {
    icon: '📊',
    title: 'Pre-Testing',
    headline: "Don't Risk Going Live with Guesswork",
    subtitle: 'Optimize before launch to ensure your creative delivers performance and protects your brand.',
    keyActions: [
      'Test storyboards and scripts before production',
      'Validate creative direction for emotional fit',
      'Optimize messaging to drive impact early',
    ],
    useFor: 'CTV ads, influencer content, and any campaign with real-world consequences.',
    whyMatters: "You're not just testing for engagement you're checking for brand safety.",
    image: 'https://cdn.prod.website-files.com/5e943092459693077575d420/689dab54775a71fd67e64cce_pre-campaign.png',
    reverse: false,
  },
  {
    icon: '🚀',
    title: 'In-Flight Optimization',
    headline: "Fix Creative While It's Live",
    subtitle: 'Why wait for post-mortems when you can tweak in real time?',
    keyActions: [
      'Real-time performance tracking',
      'Creative tweaks mid-flight',
      'SSP score to benchmark scroll-stopping power and emotional resonance',
    ],
    useFor: 'Social and influencer activations that demand agility.',
    whyMatters: 'Real-time data lets you save budget and boost ROI without a full relaunch.',
    image: 'https://cdn.prod.website-files.com/5e943092459693077575d420/689dab54b92486bab68b067f_mid-flight.png',
    reverse: true,
  },
  {
    icon: '🔍',
    title: 'Campaign Wrap-up',
    headline: "Post-Campaign Doesn't Mean Post-Opportunity",
    subtitle: 'Turn campaign data into a creative blueprint for better future results.',
    keyActions: [
      'Full-funnel creative performance insights',
      'Learn what worked and why',
      'Get actionable recs for next time',
    ],
    useFor: 'End-of-flight reviews, creative testing summaries, and planning cycles.',
    whyMatters: 'Every campaign leaves clues. We help you find them.',
    image: 'https://cdn.prod.website-files.com/5e943092459693077575d420/689da3f31baa0146e2f35431_ChatGPT%20Image%20Aug%2014%2C%202025%2C%2010_52_24%20AM.png',
    reverse: false,
  },
]

export function UseCasesSection() {
  return (
    <section className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className={`grid md:grid-cols-2 gap-0 ${useCase.reverse ? 'md:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={`p-12 ${useCase.reverse ? 'md:order-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-cyan flex items-center justify-center text-3xl shadow-lg">
                      {useCase.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-brand-navy">{useCase.title}</h3>
                  </div>

                  <h4 className="text-2xl font-bold text-brand-navy mb-4">{useCase.headline}</h4>
                  <p className="text-lg text-neutral-600 mb-8">{useCase.subtitle}</p>

                  <div className="glass-panel-light rounded-2xl p-6 mb-8">
                    <div className="flex items-center gap-2 text-brand-navy font-semibold mb-4">
                      <span>✓</span>
                      <span>Key Actions</span>
                    </div>
                    <ul className="space-y-3">
                      {useCase.keyActions.map((action, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-lg bg-brand-navy text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                            ✓
                          </span>
                          <span className="text-neutral-700">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="glass-panel rounded-xl p-4 border border-neutral-200">
                      <div className="flex items-center gap-2 text-brand-navy font-semibold mb-2 text-sm">
                        <span>📈</span>
                        <span>Use this for</span>
                      </div>
                      <p className="text-sm text-neutral-600">{useCase.useFor}</p>
                    </div>
                    <div className="glass-panel rounded-xl p-4 border border-neutral-200">
                      <div className="flex items-center gap-2 text-brand-navy font-semibold mb-2 text-sm">
                        <span>🔒</span>
                        <span>Why it matters</span>
                      </div>
                      <p className="text-sm text-neutral-600">{useCase.whyMatters}</p>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative bg-neutral-100 min-h-[400px] flex items-center justify-center p-8 ${useCase.reverse ? 'md:order-1' : ''}`}>
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
