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

export default function LandingPage() {
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
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-32 pb-28">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Reveal the </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#F9BE00] to-[#E0A800]">
                  Unseen
                </span>
                <span className="text-white">!</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/70 mb-6 max-w-3xl mx-auto">
                The <span className="text-brand-cyan font-semibold">Subconscious Measurement Framework</span> that proves Brand ROI for agencies and media platforms in{' '}
                <span className="text-brand-magenta font-semibold">48 hours</span>.
              </p>

              {/* Video Placeholder */}
              <div className="my-10 max-w-2xl mx-auto">
                <div className="aspect-video rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-5xl mb-3">🎬</div>
                    <p className="text-white/40 text-sm">Video Placeholder</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 mb-8">
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
                    Get My First Report
                  </motion.button>
                </Link>
                <p className="text-sm text-white/40">
                  In 48 hours • Validated Benchmarks • Actionable Insight
                </p>
              </div>

              {/* Social Proof */}
              <div className="flex items-center justify-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-brand-yellow text-lg">★</span>
                ))}
              </div>
              <p className="text-white/50 text-sm">
                Trusted by <span className="text-white">Netflix</span> and <span className="text-white">Amazon Ads</span>
              </p>
            </motion.div>
          </div>
        </section>

        <GradientDivider color="#12B8C9" />

        {/* Why Behavioral AI */}
        <section className="container mx-auto px-4 py-28">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FF2198] to-[#E01580]">
                  Behavioral AI
                </span>
                ?
              </h2>
              <p className="text-xl text-white/50 max-w-2xl mx-auto">
                Move beyond vanity metrics to understand the subconscious drivers of brand success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {[
                {
                  icon: '🚫',
                  title: 'Stop Flying Blind',
                  description: 'Traditional vanity metrics (clicks/likes) are a "black box". We reveal why content resonates or fails using biometric System 1 analytics.',
                  accent: '#12B8C9',
                },
                {
                  icon: '🎯',
                  title: 'In-Context Simulation',
                  description: 'We don\'t use "AI slop" or forced surveys. Your ads are tested in high-fidelity, simulated social and CTV environments like TikTok and Netflix.',
                  accent: '#FF2198',
                },
                {
                  icon: '👁️❤️🧠',
                  title: 'The "See, Feel, Remember" Model',
                  description: 'One proprietary model that blends attention, emotion, and memory to predict how audiences will act.',
                  accent: '#54E42B',
                },
                {
                  icon: '📊',
                  title: 'Category-Specific Benchmarks',
                  description: 'Access deep benchmarks for Wellness, Beauty, and FMCG. Stop comparing your high-engagement creative to "generic home care" data.',
                  accent: '#F9BE00',
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex gap-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform group-hover:scale-110"
                      style={{ background: `${feature.accent}15`, border: `1px solid ${feature.accent}30` }}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-white/50 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <GradientDivider color="#54E42B" />

        {/* What's Included */}
        <section className="container mx-auto px-4 py-28">
          <div className="max-w-4xl mx-auto">
            <NeonGlassBoxV2
              topHue={120}
              bottomHue={183}
              glowBlur={15}
              glowBrightBlur={5}
              glowOpacity={0.4}
              shineBrightness={0.15}
              backdropBlur={8}
              glowPosition="corners"
            >
              <div className="p-10 md:p-14">
                <motion.div
                  className="text-center mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    What's{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#54E42B] to-[#3DB820]">
                      Included
                    </span>
                  </h2>
                  <p className="text-white/50">
                    Everything you need to start measuring what matters
                  </p>
                </motion.div>

                <div className="space-y-4">
                  {[
                    { icon: '⚡', title: '24-48 Hour Speed to Results', description: 'Get credible results faster than the 4-6 week turnaround of legacy vendors.' },
                    { icon: '📈', title: 'Unseen Impact Report (Essentials)', description: '1 credit per creative to unlock top-line brand hygiene and engagement scores.' },
                    { icon: '🎓', title: 'The "Subconscious Marketer" Academy', description: 'Get your team Element Human Certified.' },
                    { icon: '🤝', title: 'Live Strategy Onboarding', description: 'A 30-day framework to align on campaign goals.' },
                    { icon: '📊', title: 'System 1 Trends Access', description: 'Quarterly deep dives into meta-analysis data.' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h4 className="text-white font-semibold">{item.title}</h4>
                        <p className="text-white/50 text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </NeonGlassBoxV2>
          </div>
        </section>

        <GradientDivider color="#FF2198" />

        {/* Testimonial */}
        <section className="container mx-auto px-4 py-28">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl mb-6 opacity-30">❝</div>
              <blockquote className="text-2xl md:text-3xl text-white/90 font-light leading-relaxed mb-8">
                We used to guess why our influencer campaigns worked. With Element Human, we proved that our second-place creator actually had a{' '}
                <span className="text-brand-magenta font-semibold">99% uplift</span>{' '}
                because they commanded the highest emotional memory.
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-magenta to-brand-cyan" />
                <div className="text-left">
                  <p className="text-white font-semibold">Influencer Agency Lead</p>
                  <p className="text-white/40 text-sm">Top 10 Creator Agency</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <GradientDivider color="#12B8C9" />

        {/* Case Study */}
        <section className="container mx-auto px-4 py-28">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Not convinced?
              </h2>
              <p className="text-xl text-white/50 max-w-3xl mx-auto">
                See how we helped <span className="text-brand-cyan">British Gas</span> turn a -4% Net Promoter Score into{' '}
                <span className="text-brand-green">+8%</span> through emotional priming without changing a single feature.
              </p>
            </motion.div>

            <motion.div
              className="aspect-video rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">📺</div>
                <p className="text-white/40">Case Study Video Placeholder</p>
              </div>
            </motion.div>
          </div>
        </section>

        <GradientDivider color="#F9BE00" />

        {/* Tools for Commercial Team */}
        <section className="container mx-auto px-4 py-28">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Tools for the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#F9BE00] to-[#E0A800]">
                  Commercial Team
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '🏷️', title: 'White-Label Dashboard', description: 'Show your customers the quality of your service with real-time biometric data.', color: '#12B8C9' },
                { icon: '🏆', title: 'Creator Benchmarking', description: 'Automatically identify which creators are "Stop and Stay" champions.', color: '#FF2198' },
                { icon: '💰', title: 'Contextual ROI', description: 'Bridge qualitative depth with quantitative rigor to justify every dollar.', color: '#54E42B' },
              ].map((tool, index) => (
                <motion.div
                  key={tool.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center text-4xl"
                    style={{ background: `${tool.color}15`, border: `1px solid ${tool.color}30` }}
                  >
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
                  <p className="text-white/50">{tool.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <GradientDivider color="#8F21A1" />

        {/* FAQ */}
        <section className="container mx-auto px-4 py-28">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Methodology &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#12B8C9] to-[#0E98A5]">
                  Rigor
                </span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: 'What is the difference between us and ThisThat?',
                  answer: 'They rely on survey data in the wild; we use simulated environments. We avoid survey fatigue and sample contamination while delivering results in 48 hours instead of weeks.',
                },
                {
                  question: 'Why focus on Memory instead of just Attention?',
                  answer: "Attention is just the \"ticket to play.\" If you aren't remembered, you don't exist in the consumer's decision-making process.",
                },
                {
                  question: 'Does this work for CTV and Social?',
                  answer: 'Yes. We offer a "trifecta" of environments: Social (Influencer/Branded), CTV (Streaming), and Standalone (TVCs).',
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="border-b border-white/10 pb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4 className="text-lg font-semibold text-white mb-3">
                    {faq.question}
                  </h4>
                  <p className="text-white/60 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <GradientDivider color="#12B8C9" />

        {/* Final CTA */}
        <section className="container mx-auto px-4 py-28 pb-32">
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
              <div className="p-12 md:p-16 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#12B8C9] to-[#FF2198]">
                      Reveal the Unseen
                    </span>
                    ?
                  </h2>
                  <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto">
                    Get your first report in 48 hours and start making data-driven creative decisions.
                  </p>

                  <Link href="/meet-with-us">
                    <motion.button
                      className="px-12 py-6 rounded-full font-semibold text-xl"
                      style={{
                        background: 'linear-gradient(135deg, #12B8C9, #0E98A5)',
                        color: 'white',
                        boxShadow: '0 0 50px rgba(16, 168, 183, 0.5)',
                      }}
                      whileHover={{ scale: 1.05, boxShadow: '0 0 70px rgba(16, 168, 183, 0.7)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get My First Report
                    </motion.button>
                  </Link>

                  <div className="mt-8 flex items-center justify-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-brand-yellow">★</span>
                    ))}
                    <span className="text-white/50 text-sm ml-2">Trusted by Netflix & Amazon Ads</span>
                  </div>
                </motion.div>
              </div>
            </NeonGlassBoxV2>
          </div>
        </section>
      </div>
    </main>
  )
}
