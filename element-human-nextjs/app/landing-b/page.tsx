'use client'

import { motion } from 'framer-motion'
import { NeonGlassBoxV2 } from '@/components/ui/NeonGlassBoxV2'
import { BackgroundCircles } from '@/components/ui/BackgroundCircles'
import Link from 'next/link'
import '../neon-glass.css'

// OPTION B: Section Numbers + Offset Layouts
// Editorial & bold approach

function SectionHeader({ number, title, gradient, align = 'left' }: { number: string; title: string; gradient: string; align?: 'left' | 'right' }) {
  return (
    <div className={`flex items-start gap-6 mb-12 ${align === 'right' ? 'flex-row-reverse text-right' : ''}`}>
      <span className={`text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br ${gradient} opacity-20 leading-none`}>
        {number}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-white pt-4">{title}</h2>
    </div>
  )
}

export default function LandingPageB() {
  return (
    <main className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #13202F 0%, #0A0E1A 50%, #000000 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      <BackgroundCircles />

      {/* Style Label */}
      <div className="fixed top-4 left-4 z-50 px-3 py-1.5 rounded-full bg-brand-magenta/20 border border-brand-magenta/30 text-brand-magenta text-xs font-medium">
        Style B: Section Numbers + Offset
      </div>

      <div className="relative z-10">
        {/* Hero - Centered */}
        <section className="container mx-auto px-4 pt-32 pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Reveal the </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#F9BE00] to-[#E0A800]">Unseen</span>
                <span className="text-white">!</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 mb-8 max-w-3xl mx-auto">
                The <span className="text-brand-cyan">Subconscious Measurement Framework</span> that proves Brand ROI in <span className="text-brand-magenta">48 hours</span>.
              </p>
              <Link href="/meet-with-us">
                <motion.button
                  className="px-10 py-5 rounded-full font-semibold text-lg"
                  style={{ background: 'linear-gradient(135deg, #12B8C9, #0E98A5)', color: 'white', boxShadow: '0 0 30px rgba(16, 168, 183, 0.4)' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get My First Report
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features - Left aligned with number */}
        <section className="container mx-auto px-4 py-24">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SectionHeader number="01" title="Why Behavioral AI?" gradient="from-[#12B8C9] to-[#0E98A5]" align="left" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10 md:pl-24">
              {[
                { icon: '🚫', title: 'Stop Flying Blind', description: 'We reveal why content resonates using biometric System 1 analytics.', accent: '#12B8C9' },
                { icon: '🎯', title: 'In-Context Simulation', description: 'Ads tested in simulated environments like TikTok and Netflix.', accent: '#FF2198' },
                { icon: '👁️❤️🧠', title: 'See, Feel, Remember', description: 'One model blending attention, emotion, and memory.', accent: '#54E42B' },
                { icon: '📊', title: 'Category Benchmarks', description: 'Deep benchmarks for Wellness, Beauty, and FMCG.', accent: '#F9BE00' },
              ].map((feature, index) => (
                <motion.div key={feature.title} className="flex gap-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: `${feature.accent}15`, border: `1px solid ${feature.accent}30` }}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-white/50 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial - Right aligned with number */}
        <section className="container mx-auto px-4 py-24">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SectionHeader number="02" title="What They Say" gradient="from-[#FF2198] to-[#E01580]" align="right" />
            </motion.div>

            <div className="md:pr-24 md:text-right">
              <blockquote className="text-2xl md:text-3xl text-white/80 font-light leading-relaxed mb-6">
                "We proved our second-place creator had a <span className="text-brand-magenta font-semibold">99% uplift</span> because they commanded the highest emotional memory."
              </blockquote>
              <p className="text-white/40">— Influencer Agency Lead</p>
            </div>
          </div>
        </section>

        {/* Offer - Left aligned with number */}
        <section className="container mx-auto px-4 py-24">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SectionHeader number="03" title="What's Included" gradient="from-[#54E42B] to-[#3DB820]" align="left" />
            </motion.div>

            <div className="md:pl-24 space-y-4">
              {[
                { icon: '⚡', title: '24-48 Hour Speed to Results' },
                { icon: '📈', title: 'Unseen Impact Report (Essentials)' },
                { icon: '🎓', title: '"Subconscious Marketer" Academy' },
                { icon: '🤝', title: 'Live Strategy Onboarding' },
              ].map((item, index) => (
                <motion.div key={item.title} className="flex items-center gap-4" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-white">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Centered */}
        <section className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto">
            <NeonGlassBoxV2 topHue={183} bottomHue={320} glowBlur={18} glowOpacity={0.5} backdropBlur={10} glowPosition="all-sides">
              <div className="p-12 md:p-16 text-center">
                <span className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#F9BE00] to-[#E0A800] opacity-20">04</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 -mt-4">
                  Ready to Start?
                </h2>
                <Link href="/meet-with-us">
                  <motion.button
                    className="px-12 py-6 rounded-full font-semibold text-xl"
                    style={{ background: 'linear-gradient(135deg, #12B8C9, #0E98A5)', color: 'white', boxShadow: '0 0 50px rgba(16, 168, 183, 0.5)' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get My First Report
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
