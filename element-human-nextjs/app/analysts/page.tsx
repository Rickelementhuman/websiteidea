'use client'

import { motion } from 'framer-motion'
import { NeonGlassBoxV2 } from '@/components/ui/NeonGlassBoxV2'
import { BackgroundCircles } from '@/components/ui/BackgroundCircles'
import Link from 'next/link'
import Image from 'next/image'
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

const clientLogos = [
  'Netflix', 'Amazon', 'BBC', 'Dentsu', 'T-Mobile', 'Nike', 'Viator', "Sainsbury's"
]

const painPoints = [
  {
    title: 'The "Why" Problem',
    description: 'Your CMO asks why Creator A drove 3x the results of Creator B. You can see the performance difference. You have no idea why it happened. So you guess—and hope no one notices.',
    icon: '🤔',
    color: '#FF2198',
  },
  {
    title: 'The Attention Lie',
    description: "Your ad got 90% viewability. Great. But did anyone actually care? Attention metrics tell you something was seen. They don't tell you if anyone felt anything.",
    icon: '👁️',
    color: '#F9BE00',
  },
  {
    title: 'The Speed Problem',
    description: "By the time your Nielsen study arrives, your campaign ended three weeks ago. The insights are accurate. They're also useless. You can't optimize what's already over.",
    icon: '⏱️',
    color: '#54E42B',
  },
]

const valueItems = [
  {
    title: 'Emotion Data, Not Just Attention',
    description: 'Measure happiness, surprise, confusion, engagement—second by second. See exactly which moments in your creative drive emotional response, and which fall flat.',
    quote: '"Just because an ad was seen doesn\'t mean anyone felt anything. The emotions people experience are the drivers of their behavior."',
    icon: '❤️',
    color: '#FF2198',
  },
  {
    title: 'Eye Tracking & Heat Maps',
    description: "See where viewers actually look. Identify if they notice your logo, your product, your CTA. Visual proof that's compelling in presentations and defensible in analysis.",
    quote: '"No one\'s ever been able to show the client if we\'re actually seeing the logos and the branding." — Netflix',
    icon: '🎯',
    color: '#12B8C9',
  },
  {
    title: 'Results in Days, Not Weeks',
    description: 'Tests conclude overnight. Send creative Monday, see results Tuesday. Fast enough to optimize mid-campaign—not just report on what already happened.',
    quote: '"Currently we don\'t have a vendor that can turn around research as quickly as you guys can."',
    icon: '⚡',
    color: '#54E42B',
  },
  {
    title: 'Statistical Rigor That Withstands Scrutiny',
    description: '95% confidence levels on all results. Control vs. exposed methodology. Real significance testing, not modeled estimates. Results you can defend to anyone.',
    icon: '📊',
    color: '#F9BE00',
  },
  {
    title: 'Benchmark Against 211+ Brands',
    description: 'Compare your results to real campaign data from Nike, T-Mobile, Disney, Coca-Cola. Know if your +15 point lift is good, great, or underwhelming.',
    icon: '📈',
    color: '#8F21A1',
  },
]

const testimonials = [
  {
    quote: "The merger of research and analytics together is really, really good. That is exactly the explanation that I was looking for. Fantastic.",
    author: "Gregory Hawthorne",
    role: "BenLabs",
  },
  {
    quote: "The key moments and the eye tracking is definitely really unique. It gives you better understanding of what people are feeling rather than saying. When we do our general organic performance, it's just metrics. Whereas this gives you reasons and why this could be performing.",
    author: "Olivia Burton",
    role: "BDB",
  },
  {
    quote: "The idea is to have a brand lift study, but we saw that in your study it's possible also to see the attention metrics and have a 360-degree study. This study is really transparent. Data are really clear.",
    author: "Miriel Mazzurco",
    role: "Amazon/Ferrero",
  },
]

const transformationItems = [
  { before: '"I don\'t know why that creative performed better"', after: '"Here\'s exactly why—second by second emotion data shows the moment that drove engagement"' },
  { before: 'Reporting what happened', after: 'Explaining why it happened' },
  { before: 'Insights that arrive after campaigns end', after: 'Results fast enough to optimize mid-campaign' },
  { before: 'Defending results with "the data suggests"', after: 'Defending results with 95% statistical confidence' },
  { before: 'Looking incompetent when asked hard questions', after: 'Being the person who actually has answers' },
]

export default function AnalystsLeadMagnet() {
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
        {/* Hero Section - Lead Magnet Variant */}
        <section className="container mx-auto px-4 pt-32 pb-28">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                <span className="text-white">You Know What Happened. </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#12B8C9] to-[#0E98A5]">
                  Do You Know Why?
                </span>
              </h1>

              {/* Aha Moment Video */}
              <div className="mb-8 max-w-3xl mx-auto">
                <NeonGlassBoxV2
                  topHue={183}
                  bottomHue={120}
                  glowBlur={15}
                  glowOpacity={0.4}
                  backdropBlur={8}
                  glowPosition="corners"
                >
                  <div className="p-3">
                    <video
                      src="/images/aha-moment.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full rounded-xl"
                    />
                  </div>
                </NeonGlassBoxV2>
              </div>

              <p className="text-base md:text-lg text-white/70 mb-8 max-w-3xl mx-auto">
                Clicks tell you what. Emotion tells you why. Get the data that turns "I don't know" into "Here's exactly why."
              </p>

              <div className="flex flex-col items-center gap-4">
                <Link href="#download">
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
                    Download the Emotion & Attention Measurement Guide
                  </motion.button>
                </Link>
                <p className="text-sm text-white/40">
                  Free guide: How to measure what actually drives behavior (not just what gets seen)
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <GradientDivider color="#12B8C9" />

        {/* Success Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Research That Actually{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#54E42B] to-[#3DB820]">
                  Gets Used
                </span>
              </h2>
            </motion.div>

            {/* Logos Bar */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-white/40 text-center text-sm mb-6">Trusted by research teams at:</p>
              <div className="flex flex-wrap justify-center gap-8 items-center">
                {clientLogos.map((logo, index) => (
                  <motion.span
                    key={logo}
                    className="text-white/60 font-semibold text-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {logo}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Success Quote */}
            <motion.div
              className="max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <NeonGlassBoxV2
                topHue={183}
                bottomHue={120}
                glowBlur={12}
                glowOpacity={0.3}
                backdropBlur={8}
                glowPosition="corners"
              >
                <div className="p-8 text-center">
                  <div className="text-4xl mb-4 opacity-30">❝</div>
                  <blockquote className="text-xl text-white/90 font-light leading-relaxed mb-4">
                    This is exactly what I was looking for. I haven't seen results like this in my previous experience, so I was just fascinated.
                  </blockquote>
                  <p className="text-white/50">— Gregory Hawthorne, BenLabs</p>
                </div>
              </NeonGlassBoxV2>
            </motion.div>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: '341', label: 'Brand lift studies completed' },
                { number: '95%', label: 'Statistical confidence' },
                { number: '8+', label: 'Countries with benchmark data' },
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#12B8C9] to-[#0E98A5] mb-2">
                    {metric.number}
                  </div>
                  <p className="text-white/50">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <GradientDivider color="#FF2198" />

        {/* Problem-Agitate Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                The Research Gap{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FF2198] to-[#E01580]">
                  Nobody Admits
                </span>
              </h2>
              <p className="text-xl text-white/60">
                You have all the data. You still can't answer the hard questions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {painPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NeonGlassBoxV2
                    topHue={point.color === '#FF2198' ? 320 : point.color === '#F9BE00' ? 45 : 120}
                    bottomHue={183}
                    glowBlur={10}
                    glowOpacity={0.25}
                    backdropBlur={6}
                    glowPosition="top-left"
                  >
                    <div className="p-6 h-full">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                        style={{ background: `${point.color}15`, border: `1px solid ${point.color}30` }}
                      >
                        {point.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                      <p className="text-white/60 leading-relaxed">{point.description}</p>
                    </div>
                  </NeonGlassBoxV2>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-center text-lg text-white/70 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Every question you can't answer, every insight that arrives too late, every time you say "the data doesn't tell us that"—it chips away at your credibility.{' '}
              <span className="text-brand-cyan font-semibold">And the analysts who can answer those questions? They're the ones getting promoted.</span>
            </motion.p>
          </div>
        </section>

        <GradientDivider color="#54E42B" />

        {/* Value Stack Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What You{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#54E42B] to-[#3DB820]">
                  Get
                </span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {valueItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex gap-5 items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/60 leading-relaxed mb-3">{item.description}</p>
                      {item.quote && (
                        <p className="text-sm italic text-white/40">{item.quote}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <GradientDivider color="#F9BE00" />

        {/* Social Proof Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Research Leaders Are{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#F9BE00] to-[#E0A800]">
                  Saying
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="h-full p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-3xl mb-4 opacity-30">❝</div>
                    <blockquote className="text-white/80 leading-relaxed mb-6 text-sm">
                      {testimonial.quote}
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-cyan to-brand-magenta" />
                      <div>
                        <p className="text-white font-semibold text-sm">{testimonial.author}</p>
                        <p className="text-white/40 text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Case Study Callout */}
            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <NeonGlassBoxV2
                topHue={45}
                bottomHue={183}
                glowBlur={12}
                glowOpacity={0.3}
                backdropBlur={8}
                glowPosition="corners"
              >
                <div className="p-8 text-center">
                  <p className="text-white/80 leading-relaxed">
                    <span className="text-brand-yellow font-semibold">Case Study:</span> BenLabs used Element Human's emotion tracking to understand why Microsoft CoPilot integrations drove different results across episodes—identifying specific creative moments that drove or killed emotional engagement.
                  </p>
                </div>
              </NeonGlassBoxV2>
            </motion.div>
          </div>
        </section>

        <GradientDivider color="#8F21A1" />

        {/* Transformation Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Before &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#8F21A1] to-[#12B8C9]">
                  After
                </span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {transformationItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="grid md:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-white/40 text-sm">Before:</span>
                    <p className="text-white/70">{item.before}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30">
                    <span className="text-brand-cyan text-sm">After:</span>
                    <p className="text-white">{item.after}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-center text-xl text-white/70 mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-cyan font-semibold">Stop reporting numbers.</span> Start explaining meaning.
            </motion.p>
          </div>
        </section>

        <GradientDivider color="#12B8C9" />

        {/* Secondary CTA - Lead Magnet */}
        <section id="download" className="container mx-auto px-4 py-20 pb-32">
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
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Want to Go Deeper?
                  </h2>
                  <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto">
                    Get our complete guide to emotion and attention measurement. Learn the methodology, see sample outputs, and understand how leading research teams are using this data.
                  </p>

                  <div className="mb-8">
                    <Image
                      src="/images/lead-magnet-book.png"
                      alt="Proving Creative Effectiveness in 2026 - Free Guide"
                      width={300}
                      height={400}
                      className="mx-auto drop-shadow-2xl"
                    />
                  </div>

                  <Link href="#">
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
                      Download the Emotion & Attention Measurement Guide
                    </motion.button>
                  </Link>

                  <p className="mt-6 text-sm text-white/40">
                    Free PDF. Methodology details included. No sales pitch.
                  </p>
                </motion.div>
              </div>
            </NeonGlassBoxV2>
          </div>
        </section>
      </div>
    </main>
  )
}
