'use client'

import { motion } from 'framer-motion'
import { NeonGlassBoxV2 } from '@/components/ui/NeonGlassBoxV2'
import { BackgroundCircles } from '@/components/ui/BackgroundCircles'
import Link from 'next/link'
import '../neon-glass.css'

function GradientDivider({ color = '#12B8C9' }: { color?: string }) {
  return (
    <div className="container mx-auto px-4 py-6">
      <div
        className="max-w-xl mx-auto h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${color}50, transparent)` }}
      />
    </div>
  )
}

export default function LandingPage2() {
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

      <BackgroundCircles />

      <div className="relative z-10">

        {/* 1. HERO SECTION */}
        <section className="container mx-auto px-4 pt-32 pb-28">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="text-brand-cyan text-sm font-medium">NEW</span>
                <span className="text-white/50 text-sm">Subconscious Measurement Framework</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Prove Brand ROI in </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#12B8C9] to-[#0E98A5]">
                  48 Hours
                </span>
                <br />
                <span className="text-white">Not 6 Weeks</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-white/60 mb-10 max-w-3xl mx-auto">
                The behavioral AI platform that reveals <em className="text-white/80">why</em> your creative works—measuring attention, emotion, and memory so you can stop guessing and start knowing.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Link href="/meet-with-us">
                  <motion.button
                    className="px-10 py-5 rounded-full font-semibold text-lg"
                    style={{
                      background: 'linear-gradient(135deg, #12B8C9, #0E98A5)',
                      color: 'white',
                      boxShadow: '0 0 30px rgba(16, 168, 183, 0.4)',
                    }}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(16, 168, 183, 0.6)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get My First Report Free
                  </motion.button>
                </Link>
                <motion.button
                  className="px-10 py-5 rounded-full font-semibold text-lg border border-white/20"
                  style={{
                    color: 'white',
                    background: 'rgba(255,255,255,0.03)',
                  }}
                  whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.08)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('problem-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See How It Works
                </motion.button>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap items-center justify-center gap-8 text-white/40 text-sm">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {['#FF2198', '#12B8C9', '#54E42B', '#F9BE00'].map((color, i) => (
                      <div key={i} className="w-7 h-7 rounded-full border-2 border-[#13202F]" style={{ background: color }} />
                    ))}
                  </div>
                  <span>2,300+ creatives tested</span>
                </div>
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-brand-yellow text-sm">★</span>
                  ))}
                  <span>Trusted by Netflix & Amazon Ads</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <GradientDivider color="#54E42B" />

        {/* 2. SUCCESS SECTION */}
        <section className="container mx-auto px-4 py-28">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-full bg-brand-green/10 border border-brand-green/30 flex items-center justify-center">
                <span className="text-brand-green text-2xl">✓</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">You're In Good Hands</h3>
                <p className="text-white/50">Here's exactly what happens next</p>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { step: '1', text: 'Schedule your 15-min strategy call', time: 'Today' },
                { step: '2', text: 'Submit your creative assets', time: 'Day 1' },
                { step: '3', text: 'We run behavioral testing with 300+ consumers', time: 'Day 1-2' },
                { step: '4', text: 'Receive your Unseen Impact Report', time: '48 Hours' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-9 h-9 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan font-bold text-sm">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm">{item.text}</p>
                    <p className="text-brand-green text-xs">{item.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <GradientDivider color="#F60000" />

        {/* 3. PROBLEM-AGITATE SECTION */}
        <section id="problem-section" className="container mx-auto px-4 py-28">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                You're Flying{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#F60000] to-[#FF2198]">
                  Blind
                </span>
              </h2>
              <p className="text-xl text-white/50">
                And it's costing you more than you realize
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10 mb-16">
              {[
                { icon: '📊', problem: 'Vanity Metrics Lie', agitation: 'Clicks and likes tell you nothing about brand impact. You\'re optimizing for the wrong signals.', color: '#F60000' },
                { icon: '⏰', problem: '6-Week Reports Are Useless', agitation: 'By the time legacy vendors deliver, your campaign is over. You\'re always behind.', color: '#FF2198' },
                { icon: '🎯', problem: 'Generic Benchmarks Mislead', agitation: 'Comparing beauty to "general consumer goods" is meaningless. You need real category data.', color: '#8F21A1' },
              ].map((item, index) => (
                <motion.div
                  key={item.problem}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center text-3xl"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.problem}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.agitation}</p>
                </motion.div>
              ))}
            </div>

            {/* Personal Transition */}
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-2xl md:text-3xl text-white/80 font-light leading-relaxed">
                What if you could <span className="text-brand-cyan font-semibold">see what your audience actually feels</span>—not what they say in surveys, but the subconscious reactions that drive decisions?
              </p>
            </motion.div>
          </div>
        </section>

        <GradientDivider color="#F9BE00" />

        {/* 4. VALUE STACK */}
        <section className="container mx-auto px-4 py-28">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Everything You Get
              </h2>
              <p className="text-xl text-white/50">
                A complete system for proving creative ROI
              </p>
            </motion.div>

            <NeonGlassBoxV2
              topHue={60}
              bottomHue={183}
              glowBlur={15}
              glowBrightBlur={5}
              glowOpacity={0.4}
              shineBrightness={0.15}
              backdropBlur={8}
              glowPosition="corners"
            >
              <div className="p-8 md:p-10">
                <div className="space-y-3 mb-8">
                  {[
                    { title: 'Unseen Impact Report (Essentials)', value: '$2,500' },
                    { title: '"Subconscious Marketer" Academy Access', value: '$1,500' },
                    { title: 'Live Strategy Onboarding (30 Days)', value: '$1,000' },
                    { title: 'System 1 Trends Access (Quarterly)', value: '$750' },
                  ].map((tier, index) => (
                    <motion.div
                      key={tier.title}
                      className="flex items-center justify-between py-3 border-b border-white/10 last:border-0"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-brand-green">✓</span>
                        <span className="text-white">{tier.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white/30 line-through text-sm">{tier.value}</span>
                        <span className="text-brand-green text-sm">Included</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-white/50">Total Value:</span>
                    <span className="text-white/30 line-through">$5,750</span>
                  </div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xl font-bold text-white">Your First Report:</span>
                    <div className="text-right">
                      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#54E42B] to-[#3DB820]">FREE</span>
                      <p className="text-white/40 text-sm">Then from $499/creative</p>
                    </div>
                  </div>
                  <Link href="/meet-with-us" className="block">
                    <motion.button
                      className="w-full px-10 py-5 rounded-full font-semibold text-lg"
                      style={{
                        background: 'linear-gradient(135deg, #12B8C9, #0E98A5)',
                        color: 'white',
                        boxShadow: '0 0 30px rgba(16, 168, 183, 0.4)',
                      }}
                      whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(16, 168, 183, 0.6)' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Claim Your Free Report
                    </motion.button>
                  </Link>
                </div>
              </div>
            </NeonGlassBoxV2>
          </div>
        </section>

        <GradientDivider color="#FF2198" />

        {/* 5. SOCIAL PROOF */}
        <section className="container mx-auto px-4 py-28">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Real Results From{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FF2198] to-[#E01580]">
                  Real Teams
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { quote: "We proved our second-place creator actually had a 99% uplift because they commanded the highest emotional memory.", result: '+99% brand memory uplift', author: 'Influencer Agency Lead', color: '#FF2198' },
                { quote: "British Gas went from -4% NPS to +8% through emotional priming—without changing a single product feature.", result: '+12 point NPS improvement', author: 'Brand Strategy Director', color: '#12B8C9' },
                { quote: "Element Human showed us exactly which 3 seconds of our 30-second spot were driving all the response. We cut the rest.", result: '47% production savings', author: 'Creative Director', color: '#54E42B' },
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
                    style={{ background: `${testimonial.color}15`, border: `1px solid ${testimonial.color}30` }}
                  >
                    <span style={{ color: testimonial.color }} className="text-sm font-semibold">{testimonial.result}</span>
                  </div>
                  <blockquote className="text-white/70 text-sm leading-relaxed mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <p className="text-white/40 text-sm">— {testimonial.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <GradientDivider color="#12B8C9" />

        {/* 6. TRANSFORMATION */}
        <section className="container mx-auto px-4 py-28">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#F9BE00] to-[#E0A800]">
                  Transformation
                </span>{' '}
                Timeline
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { stage: 'Week 1', title: 'Quick Win', icon: '⚡', description: 'First report reveals why your best creative works', color: '#F9BE00' },
                { stage: 'Month 1', title: 'Compound', icon: '📈', description: 'Build a library of emotional benchmarks', color: '#FF2198' },
                { stage: 'Quarter 1', title: 'Advantage', icon: '🎯', description: 'Predict winners before launch', color: '#12B8C9' },
                { stage: 'Year 1', title: '10x', icon: '🚀', description: 'Transform creative into competitive weapon', color: '#54E42B' },
              ].map((phase, index) => (
                <motion.div
                  key={phase.stage}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <div
                    className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl"
                    style={{ background: `${phase.color}15`, border: `1px solid ${phase.color}30` }}
                  >
                    {phase.icon}
                  </div>
                  <div className="text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: phase.color }}>
                    {phase.stage}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{phase.title}</h4>
                  <p className="text-white/50 text-sm">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <GradientDivider color="#54E42B" />

        {/* 7. SECONDARY CTA */}
        <section className="container mx-auto px-4 py-28">
          <div className="max-w-3xl mx-auto">
            <NeonGlassBoxV2
              topHue={183}
              bottomHue={320}
              glowBlur={18}
              glowBrightBlur={6}
              glowOpacity={0.6}
              shineBrightness={0.25}
              backdropBlur={10}
              glowPosition="all-sides"
            >
              <motion.div
                className="p-10 md:p-14 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                {/* Avatar Stack */}
                <div className="flex justify-center mb-4">
                  <div className="flex -space-x-3">
                    {['#FF2198', '#12B8C9', '#54E42B', '#F9BE00', '#8F21A1'].map((color, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-[#13202F] flex items-center justify-center text-white text-xs font-bold"
                        style={{ background: color }}
                      >
                        {['N', 'A', 'B', 'W', 'G'][i]}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-white/40 text-sm mb-8">
                  Join Netflix, Amazon Ads, British Gas & 200+ brands
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  Ready to see what your audience{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#12B8C9] to-[#FF2198]">
                    really feels
                  </span>
                  ?
                </h2>

                <Link href="/meet-with-us">
                  <motion.button
                    className="px-14 py-5 rounded-full font-bold text-xl"
                    style={{
                      background: 'linear-gradient(135deg, #54E42B, #3DB820)',
                      color: '#13202F',
                      boxShadow: '0 0 40px rgba(84, 228, 43, 0.4)',
                    }}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(84, 228, 43, 0.6)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Yes, Get My Free Report
                  </motion.button>
                </Link>

                <p className="text-white/30 text-sm mt-6">
                  Results in 48 hours • No credit card required
                </p>
              </motion.div>
            </NeonGlassBoxV2>
          </div>
        </section>

        {/* 8. FOOTER */}
        <footer className="container mx-auto px-4 pb-12">
          <div className="max-w-5xl mx-auto">
            <div className="border-t border-white/10 pt-12">
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#12B8C9] to-[#FF2198] mb-3">
                    Element Human
                  </h3>
                  <p className="text-white/40 text-sm">
                    Behavioral AI for proving creative ROI.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3 text-sm">Product</h4>
                  <ul className="space-y-2 text-white/40 text-sm">
                    <li><Link href="/product" className="hover:text-white transition-colors">Platform</Link></li>
                    <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                    <li><Link href="/science" className="hover:text-white transition-colors">Science</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3 text-sm">Company</h4>
                  <ul className="space-y-2 text-white/40 text-sm">
                    <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                    <li><Link href="/insights" className="hover:text-white transition-colors">Insights</Link></li>
                    <li><Link href="/meet-with-us" className="hover:text-white transition-colors">Contact</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3 text-sm">Legal</h4>
                  <ul className="space-y-2 text-white/40 text-sm">
                    <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
                <p className="text-white/30 text-sm mb-4 md:mb-0">© 2024 Element Human</p>
                <div className="flex items-center gap-3">
                  {['Li', 'X', 'YT'].map((social) => (
                    <a key={social} href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 text-xs hover:text-white hover:border-white/20 transition-all">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
