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
  'Nike', 'T-Mobile', 'Viator', "Sainsbury's", 'Netflix', 'Amazon', 'Quest Nutrition', 'PetSmart'
]

const painPoints = [
  {
    title: 'The CFO Question',
    description: '"Is this influencer spend actually working?" Finance teams are skeptical of brand building. They see impressions and engagement as "fluffy." And when budgets get tight, fluffy gets cut first.',
    icon: '💰',
    color: '#F9BE00',
  },
  {
    title: 'The Platform Bias Problem',
    description: "Meta says your Meta ads work great. TikTok says TikTok is best. They're grading their own homework. Your leadership knows it—and they don't trust any of the numbers you're showing them.",
    icon: '⚠️',
    color: '#FF2198',
  },
  {
    title: 'The Influencer vs. Brand Debate',
    description: "Your CMO thinks brand ads work better. Your team says influencer content wins. Neither side has proof. So the debate continues, budgets stay tentative, and influencer investment never scales.",
    icon: '⚔️',
    color: '#54E42B',
  },
]

const valueItems = [
  {
    title: 'CFO-Ready Proof',
    description: "Independent, third-party brand lift data with 95% statistical confidence. Not platform-reported metrics. Not modeled estimates. Real control vs. exposed methodology that finance teams can't dismiss.",
    quote: '"Finally—influencer ROI data that finance will actually believe."',
    icon: '📊',
    color: '#F9BE00',
  },
  {
    title: 'Influencer vs. Brand Ads—Settled',
    description: 'Get credible evidence for whether influencer content actually beats traditional brand ads. End the internal debate with data, not opinions.',
    quote: '"They were really interested in having credible evidence which validates the use of influencers against traditional brand ads."',
    icon: '⚖️',
    color: '#12B8C9',
  },
  {
    title: 'Results You Can Actually Use',
    description: 'Not just "awareness increased." Specific metrics: +24.4 point favorability lift. +25% purchase intent. Numbers that mean something in budget conversations.',
    quote: '"We saw double digit lifts in some of these metrics. The client is going to be impressed."',
    icon: '🎯',
    color: '#54E42B',
  },
  {
    title: 'Independent Measurement',
    description: "No platform ties. No bias. We don't care which channel performs best—we just report the truth. Finally, someone who isn't grading their own homework.",
    icon: '🔍',
    color: '#FF2198',
  },
  {
    title: 'Benchmark Context',
    description: 'Know if your +15 point lift is impressive or average. Compare against 211+ brands including Nike, T-Mobile, Disney, Coca-Cola. Context that makes your results meaningful.',
    icon: '📈',
    color: '#8F21A1',
  },
]

const testimonials = [
  {
    quote: "The data that you were able to pull for us painted a really interesting story in the room for the client. It was a really well received piece of work especially from their senior stakeholders in the business.",
    author: "Kieran Hughes",
    role: "Dentsu",
  },
  {
    quote: "This study is really transparent. Data are really clear. The idea is to have a brand lift study, but we saw that in your study it's possible also to see the attention metrics and have a 360-degree study.",
    author: "Miriel Mazzurco",
    role: "Amazon/Ferrero",
  },
  {
    quote: "We saw you as a differentiator coming in here and saying, hey, listen—visually through AI, we're able to track this and show where attention is on creative, on top of all the other wonderful things that you can do.",
    author: "Agency Partner",
    role: "",
  },
]

const transformationItems = [
  { before: 'Scrambling every quarter when CFO asks about ROI', after: 'Walking into budget meetings with independent proof' },
  { before: "Showing platform-reported metrics that leadership doesn't trust", after: 'Showing third-party data with 95% statistical confidence' },
  { before: 'Internal debate about influencer vs. brand ads', after: 'Clear data showing which actually drives results' },
  { before: 'Influencer budget as "the easy target"', after: 'Influencer budget as "the proven performer"' },
  { before: 'Defending spend with engagement metrics', after: 'Defending spend with brand lift and purchase intent' },
]

export default function BudgetHoldersLeadMagnet() {
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
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-white">Your CFO Asks What Your $500K Influencer Spend Delivered. </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#F9BE00] to-[#E0A800]">
                  What Do You Say?
                </span>
              </h1>

              {/* Aha Moment GIF */}
              <div className="mb-8">
                <Image
                  src="/images/aha-moment.gif"
                  alt="Element Human emotion tracking and attention heatmap visualization"
                  width={800}
                  height={500}
                  className="mx-auto rounded-2xl shadow-2xl"
                  unoptimized
                />
              </div>

              <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl mx-auto">
                Likes don't pay the bills. Brand lift does. Get the data that makes CFOs listen—and budgets stick.
              </p>

              <div className="flex flex-col items-center gap-4">
                <Link href="#download">
                  <motion.button
                    className="px-10 py-5 rounded-full font-semibold text-lg"
                    style={{
                      background: 'linear-gradient(135deg, #F9BE00, #E0A800)',
                      color: '#13202F',
                      boxShadow: '0 0 30px rgba(249, 190, 0, 0.4)',
                    }}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(249, 190, 0, 0.6)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Download the CFO-Ready Measurement Guide
                  </motion.button>
                </Link>
                <p className="text-sm text-white/40">
                  Free guide: How to present influencer ROI data that finance teams actually believe
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <GradientDivider color="#F9BE00" />

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
                Proof That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#54E42B] to-[#3DB820]">
                  Protects Budgets
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
              <p className="text-white/40 text-center text-sm mb-6">Trusted by marketing leaders at:</p>
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
                topHue={45}
                bottomHue={120}
                glowBlur={12}
                glowOpacity={0.3}
                backdropBlur={8}
                glowPosition="corners"
              >
                <div className="p-8 text-center">
                  <div className="text-4xl mb-4 opacity-30">❝</div>
                  <blockquote className="text-xl text-white/90 font-light leading-relaxed mb-4">
                    We don't normally see double digit lifts in some of these metrics. The client is going to be impressed.
                  </blockquote>
                  <p className="text-white/50">— Agency Partner reviewing Element Human results</p>
                </div>
              </NeonGlassBoxV2>
            </motion.div>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: '+24.4 pts', label: 'Viator favorability lift' },
                { number: '+25%', label: 'Nike purchase intent uplift' },
                { number: '341', label: 'Brand lift studies completed' },
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#F9BE00] to-[#E0A800] mb-2">
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
                The Budget Defense{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FF2198] to-[#E01580]">
                  Problem
                </span>
              </h2>
              <p className="text-xl text-white/60">
                Every quarter, the same question. Every quarter, you scramble.
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
              The marketers who survive budget season are the ones who can prove ROI.{' '}
              <span className="text-brand-yellow font-semibold">The ones who can't? They're the first to get cut—and the last to get promoted.</span>
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

        <GradientDivider color="#12B8C9" />

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
                What Marketing Leaders Are{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#12B8C9] to-[#0E98A5]">
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
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-yellow to-brand-cyan" />
                      <div>
                        <p className="text-white font-semibold text-sm">{testimonial.author}</p>
                        {testimonial.role && <p className="text-white/40 text-xs">{testimonial.role}</p>}
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
                    <span className="text-brand-yellow font-semibold">Case Study:</span> Viator used Element Human to prove their influencer campaign drove a +24.4 point increase in favorability and +24 point increase in purchase intent—data that justified continued investment and protected their creator marketing budget.
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
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#8F21A1] to-[#F9BE00]">
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
                  <div className="p-4 rounded-xl bg-brand-yellow/10 border border-brand-yellow/30">
                    <span className="text-brand-yellow text-sm">After:</span>
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
              <span className="text-brand-yellow font-semibold">Stop scrambling. Start proving.</span> Protect your budget with data that CFOs actually believe.
            </motion.p>
          </div>
        </section>

        <GradientDivider color="#F9BE00" />

        {/* Secondary CTA - Lead Magnet */}
        <section id="download" className="container mx-auto px-4 py-20 pb-32">
          <div className="max-w-3xl mx-auto">
            <NeonGlassBoxV2
              topHue={45}
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
                    Build Your Business Case
                  </h2>
                  <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto">
                    Get our guide to presenting influencer ROI to finance teams. Learn how to translate brand lift data into the language CFOs understand—and get your budget approved.
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
                        background: 'linear-gradient(135deg, #F9BE00, #E0A800)',
                        color: '#13202F',
                        boxShadow: '0 0 50px rgba(249, 190, 0, 0.5)',
                      }}
                      whileHover={{ scale: 1.05, boxShadow: '0 0 70px rgba(249, 190, 0, 0.7)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Download the CFO-Ready Measurement Guide
                    </motion.button>
                  </Link>

                  <p className="mt-6 text-sm text-white/40">
                    Free PDF. Includes sample presentations. No spam.
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
