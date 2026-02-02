'use client'

import { motion } from 'framer-motion'
import { NeonGlassBoxV2 } from '@/components/ui/NeonGlassBoxV2'
import { BackgroundCircles } from '@/components/ui/BackgroundCircles'
import Link from 'next/link'
import '../neon-glass.css'

// OPTION D: Glow Orbs + Gradient Dividers
// Futuristic, matches neon aesthetic

function GlowDivider({ color = '#12B8C9', align = 'center' }: { color?: string; align?: 'left' | 'center' | 'right' }) {
  const alignClass = align === 'left' ? 'mr-auto' : align === 'right' ? 'ml-auto' : 'mx-auto'
  return (
    <div className="container mx-auto px-4 py-8">
      <div className={`relative w-64 h-32 ${alignClass}`}>
        {/* Glow orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full opacity-30 blur-3xl"
          style={{ background: color }}
        />
        {/* Line through */}
        <div
          className="absolute top-1/2 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${color}80, transparent)` }}
        />
      </div>
    </div>
  )
}

function FloatingOrb({ color, size, top, left, delay = 0 }: { color: string; size: number; top: string; left: string; delay?: number }) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl opacity-20 pointer-events-none"
      style={{
        background: color,
        width: size,
        height: size,
        top,
        left,
      }}
      animate={{
        y: [0, -20, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: 'easeInOut'
      }}
    />
  )
}

export default function LandingPageD() {
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

      {/* Additional floating orbs between sections */}
      <FloatingOrb color="#12B8C9" size={300} top="20%" left="10%" delay={0} />
      <FloatingOrb color="#FF2198" size={250} top="45%" left="85%" delay={2} />
      <FloatingOrb color="#54E42B" size={200} top="70%" left="5%" delay={4} />
      <FloatingOrb color="#F9BE00" size={280} top="85%" left="80%" delay={1} />

      {/* Style Label */}
      <div className="fixed top-4 left-4 z-50 px-3 py-1.5 rounded-full bg-brand-yellow/20 border border-brand-yellow/30 text-brand-yellow text-xs font-medium">
        Style D: Glow Orbs + Dividers
      </div>

      <div className="relative z-10">
        {/* Hero */}
        <section className="container mx-auto px-4 pt-32 pb-16">
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

        <GlowDivider color="#12B8C9" align="left" />

        {/* Features */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FF2198] to-[#E01580]">Behavioral AI</span>?
              </h2>
              <p className="text-xl text-white/50">Move beyond vanity metrics</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10">
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

        <GlowDivider color="#FF2198" align="right" />

        {/* Testimonial */}
        <section className="container mx-auto px-4 py-16">
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

        <GlowDivider color="#54E42B" align="center" />

        {/* Offer */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                What's <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#54E42B] to-[#3DB820]">Included</span>
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: '⚡', title: '24-48 Hour Results' },
                { icon: '📈', title: 'Impact Report' },
                { icon: '🎓', title: 'Academy Access' },
                { icon: '🤝', title: 'Strategy Onboarding' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-white text-sm">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <GlowDivider color="#F9BE00" align="left" />

        {/* CTA */}
        <section className="container mx-auto px-4 py-24">
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
