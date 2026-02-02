'use client'

import { motion } from 'framer-motion'
import { NeonGlassBoxV2 } from '@/components/ui/NeonGlassBoxV2'
import { BackgroundCircles } from '@/components/ui/BackgroundCircles'
import Link from 'next/link'
import '../neon-glass.css'

// OPTION A: Gradient Dividers + Increased Spacing
// Clean & subtle approach

function GradientDivider() {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="max-w-2xl mx-auto h-px bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent" />
    </div>
  )
}

export default function LandingPageA() {
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
      <div className="fixed top-4 left-4 z-50 px-3 py-1.5 rounded-full bg-brand-cyan/20 border border-brand-cyan/30 text-brand-cyan text-xs font-medium">
        Style A: Gradient Dividers
      </div>

      <div className="relative z-10">
        {/* Hero */}
        <section className="container mx-auto px-4 pt-32 pb-32">
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

        <GradientDivider />

        {/* Features */}
        <section className="container mx-auto px-4 py-32">
          <div className="max-w-5xl mx-auto">
            <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FF2198] to-[#E01580]">Behavioral AI</span>?
              </h2>
              <p className="text-xl text-white/50">Move beyond vanity metrics</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                { icon: '🚫', title: 'Stop Flying Blind', description: 'We reveal why content resonates using biometric System 1 analytics.', accent: '#12B8C9' },
                { icon: '🎯', title: 'In-Context Simulation', description: 'Ads tested in simulated environments like TikTok and Netflix.', accent: '#FF2198' },
                { icon: '👁️❤️🧠', title: 'See, Feel, Remember', description: 'One model blending attention, emotion, and memory.', accent: '#54E42B' },
                { icon: '📊', title: 'Category Benchmarks', description: 'Deep benchmarks for Wellness, Beauty, and FMCG.', accent: '#F9BE00' },
              ].map((feature, index) => (
                <motion.div key={feature.title} className="flex gap-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: `${feature.accent}15`, border: `1px solid ${feature.accent}30` }}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/50">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <GradientDivider />

        {/* Testimonial */}
        <section className="container mx-auto px-4 py-32">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="text-6xl mb-6 opacity-20">❝</div>
              <blockquote className="text-2xl md:text-3xl text-white/80 font-light leading-relaxed mb-8">
                We proved our second-place creator had a <span className="text-brand-magenta font-semibold">99% uplift</span> because they commanded the highest emotional memory.
              </blockquote>
              <p className="text-white/40">— Influencer Agency Lead</p>
            </motion.div>
          </div>
        </section>

        <GradientDivider />

        {/* CTA */}
        <section className="container mx-auto px-4 py-32">
          <div className="max-w-3xl mx-auto">
            <NeonGlassBoxV2 topHue={183} bottomHue={320} glowBlur={18} glowOpacity={0.5} backdropBlur={10} glowPosition="all-sides">
              <div className="p-12 md:p-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#12B8C9] to-[#FF2198]">Reveal the Unseen</span>?
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
