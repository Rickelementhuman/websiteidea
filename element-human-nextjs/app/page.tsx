'use client'

import { motion } from 'framer-motion'
import { NeonGlassBoxV2 } from '@/components/ui/NeonGlassBoxV2'
import { BackgroundCircles } from '@/components/ui/BackgroundCircles'
import Link from 'next/link'
import './neon-glass.css'

export default function HomePage() {
  return (
    <main className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #13202F 0%, #0A0E1A 50%, #000000 100%)',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated Background Circles */}
      <BackgroundCircles />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-6xl mx-auto">
            <NeonGlassBoxV2
              className="mb-20"
              topHue={183}
              bottomHue={320}
              glowBlur={13}
              glowBrightBlur={4}
              glowOpacity={0.5}
              shineBrightness={0.2}
              backdropBlur={8}
              glowPosition="corners"
            >
              <div className="text-center p-12 md:p-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    <span className="text-white">Reveal the </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#12B8C9] to-[#0E98A5]">
                      Why
                    </span>
                    <br />
                    <span className="text-white">Behind Every </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FFC920] to-[#E0A800]">
                      Impression
                    </span>
                  </h1>

                  <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl mx-auto">
                    Transform your creative into something audiences never forget through
                    <span className="text-brand-cyan"> behavioral science </span>
                    and
                    <span className="text-brand-magenta"> emotion tracking</span>.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/meet-with-us">
                      <motion.button
                        className="px-8 py-4 rounded-full font-semibold text-lg"
                        style={{
                          background: 'linear-gradient(135deg, #12B8C9, #0E98A5)',
                          color: 'white',
                          boxShadow: '0 0 30px rgba(16, 168, 183, 0.4)',
                        }}
                        whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(16, 168, 183, 0.6)' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Start Measuring
                      </motion.button>
                    </Link>
                    <Link href="/product">
                      <motion.button
                        className="px-8 py-4 rounded-full font-semibold text-lg border-2"
                        style={{
                          borderColor: '#10A8B7',
                          color: 'white',
                          background: 'rgba(16, 168, 183, 0.1)',
                        }}
                        whileHover={{ scale: 1.05, background: 'rgba(16, 168, 183, 0.2)' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </NeonGlassBoxV2>

            {/* Three Pillars */}
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              <NeonGlassBoxV2
                topHue={183}
                bottomHue={160}
                glowBlur={13}
                glowBrightBlur={4}
                glowOpacity={0.5}
                shineBrightness={0.2}
                backdropBlur={8}
                glowPosition="top-left"
              >
                <div className="p-8">
                  <div className="text-5xl mb-4">👁️</div>
                  <h3 className="text-2xl font-bold text-white mb-3">Attention</h3>
                  <p className="text-white/60">
                    Track where eyes go and what holds focus with precision eye-tracking technology
                  </p>
                </div>
              </NeonGlassBoxV2>

              <NeonGlassBoxV2
                topHue={320}
                bottomHue={270}
                glowBlur={13}
                glowBrightBlur={4}
                glowOpacity={0.5}
                shineBrightness={0.2}
                backdropBlur={8}
                glowPosition="top-bottom"
              >
                <div className="p-8">
                  <div className="text-5xl mb-4">😊</div>
                  <h3 className="text-2xl font-bold text-white mb-3">Emotion</h3>
                  <p className="text-white/60">
                    Capture genuine emotional reactions through advanced facial coding analysis
                  </p>
                </div>
              </NeonGlassBoxV2>

              <NeonGlassBoxV2
                topHue={120}
                bottomHue={60}
                glowBlur={13}
                glowBrightBlur={4}
                glowOpacity={0.5}
                shineBrightness={0.2}
                backdropBlur={8}
                glowPosition="top-right"
              >
                <div className="p-8">
                  <div className="text-5xl mb-4">🧠</div>
                  <h3 className="text-2xl font-bold text-white mb-3">Memory</h3>
                  <p className="text-white/60">
                    Measure deep memory encoding with implicit association testing
                  </p>
                </div>
              </NeonGlassBoxV2>
            </div>
          </div>
        </section>

        {/* The Funnel - Full Width */}
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-7xl mx-auto">
            <NeonGlassBoxV2
              topHue={60}
              bottomHue={183}
              glowBlur={13}
              glowBrightBlur={4}
              glowOpacity={0.5}
              shineBrightness={0.2}
              backdropBlur={8}
              glowPosition="left-right"
            >
              <div className="p-10 md:p-16">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Measure Across The Full{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#12B8C9] to-[#0E98A5]">
                      Funnel
                    </span>
                  </h2>
                  <p className="text-xl text-white/60">
                    From awareness to action, we measure what matters
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      title: 'Upper Funnel',
                      color: '#F9BE00',
                      items: ['Attention in Feed', 'Brand Recall', 'Awareness'],
                    },
                    {
                      title: 'Mid Funnel',
                      color: '#FF2198',
                      items: ['Emotional Response', 'Brand Favorability', 'Consideration'],
                    },
                    {
                      title: 'Lower Funnel',
                      color: '#54E42B',
                      items: ['Purchase Intent', 'Recommendation', 'Conversion'],
                    },
                  ].map((funnel, index) => (
                    <motion.div
                      key={funnel.title}
                      className="p-6 rounded-2xl"
                      style={{
                        background: `linear-gradient(135deg, ${funnel.color}15, ${funnel.color}05)`,
                        border: `1px solid ${funnel.color}30`,
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <h4 className="text-xl font-bold text-white mb-4">{funnel.title}</h4>
                      <div className="space-y-2 text-sm text-white/70">
                        {funnel.items.map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <span
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: funnel.color }}
                            />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </NeonGlassBoxV2>
          </div>
        </section>

        {/* Use Cases */}
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: '🧪',
                  title: 'Pre-Testing',
                  description: 'Validate creative before launch',
                  highlight: 'before launch',
                  topHue: 120,
                  bottomHue: 183,
                  position: 'bottom-left',
                },
                {
                  icon: '🚀',
                  title: 'In-Flight',
                  description: 'Optimize while campaign is live',
                  highlight: 'while live',
                  topHue: 320,
                  bottomHue: 270,
                  position: 'corners',
                },
                {
                  icon: '📊',
                  title: 'Evaluation',
                  description: 'Turn analysis into action',
                  highlight: 'post-campaign',
                  topHue: 183,
                  bottomHue: 120,
                  position: 'bottom-right',
                },
              ].map((useCase, index) => (
                <NeonGlassBoxV2
                  key={useCase.title}
                  topHue={useCase.topHue}
                  bottomHue={useCase.bottomHue}
                  glowBlur={13}
                  glowBrightBlur={4}
                  glowOpacity={0.5}
                  shineBrightness={0.2}
                  backdropBlur={8}
                  glowPosition={useCase.position as any}
                >
                  <motion.div
                    className="p-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4 text-3xl">
                      {useCase.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{useCase.title}</h3>
                    <p className="text-white/60">
                      {useCase.description}{' '}
                      <span className="text-brand-yellow font-semibold">{useCase.highlight}</span>
                    </p>
                  </motion.div>
                </NeonGlassBoxV2>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-5xl mx-auto">
            <NeonGlassBoxV2
              topHue={270}
              bottomHue={183}
              glowBlur={13}
              glowBrightBlur={4}
              glowOpacity={0.5}
              shineBrightness={0.2}
              backdropBlur={8}
              glowPosition="all-sides"
            >
              <div className="p-12 text-center">
                <h3 className="text-3xl font-bold text-white mb-10">
                  The proof:{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#12B8C9] to-[#0E98A5]">
                    Data & Brands
                  </span>
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { value: '2.3k+', label: 'Creatives tested', gradient: 'from-[#FFC920] to-[#E0A800]' },
                    { value: '325k+', label: 'Consumers measured', gradient: 'from-[#FF4AB8] to-[#E01580]' },
                    { value: '6', label: 'Environments created', gradient: 'from-[#12B8C9] to-[#0E98A5]' },
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className={`text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} mb-2`}>
                        {stat.value}
                      </div>
                      <p className="text-white/60">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </NeonGlassBoxV2>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 pb-32">
          <div className="max-w-4xl mx-auto">
            <NeonGlassBoxV2
              topHue={183}
              bottomHue={320}
              glowBlur={13}
              glowBrightBlur={4}
              glowOpacity={0.5}
              shineBrightness={0.2}
              backdropBlur={8}
              glowPosition="corners"
            >
              <div className="p-12 md:p-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to unlock{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#12B8C9] to-[#0E98A5]">
                    deeper insights
                  </span>
                  ?
                </h2>
                <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                  Join the brands using behavioral AI to transform creative performance.
                </p>
                <Link href="/meet-with-us">
                  <motion.button
                    className="px-10 py-5 rounded-full font-semibold text-lg"
                    style={{
                      background: 'linear-gradient(135deg, #12B8C9, #0E98A5)',
                      color: 'white',
                      boxShadow: '0 0 40px rgba(16, 168, 183, 0.5)',
                    }}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(16, 168, 183, 0.7)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started Today
                  </motion.button>
                </Link>
              </div>
            </NeonGlassBoxV2>
          </div>
        </section>
      </div>
    </main>
  )
}
