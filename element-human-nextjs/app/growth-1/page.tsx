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

const clientLogos = [
  'Netflix', 'Amazon', 'Dentsu', 'BDB', 'Goat', 'Collectively', 'IZEA', 'Influential'
]

const painPoints = [
  {
    title: 'The RFP Reality',
    description: 'Modern RFPs increasingly require advanced measurement capabilities. When you can only offer engagement metrics, you look outdated before the meeting even starts.',
    icon: '📋',
    color: '#FF2198',
  },
  {
    title: 'The Margin Squeeze',
    description: "Agency margins have dropped from 30% to 20%. If you can't prove deeper value than your competitors, you can't justify premium pricing. And you can't afford to keep discounting.",
    icon: '📉',
    color: '#F9BE00',
  },
  {
    title: 'The Churn Threat',
    description: 'Your biggest client is asking harder questions. They\'re not sure your work is actually driving results. You\'re one bad quarter from them "exploring other options."',
    icon: '⚠️',
    color: '#54E42B',
  },
]

const valueItems = [
  {
    title: 'Pitch-Ready Deliverables',
    description: 'Heat maps, emotion tracking visualizations, and attention data that clients actually want to see. Not another deck of bar charts—visual proof that makes competitors look basic.',
    quote: '"They love seeing their commercial with the heat map over. Sells itself." — Craig, Netflix',
    icon: '🎯',
    color: '#12B8C9',
  },
  {
    title: 'Speed That Matches Your Timeline',
    description: 'Results in days, not weeks. Send creative Monday, see results Tuesday. Fast enough to respond to RFP timelines and demanding clients.',
    quote: '"Currently we don\'t have a vendor that can turn around research as quickly as you guys can."',
    icon: '⚡',
    color: '#FF2198',
  },
  {
    title: 'The "Why" Behind Performance',
    description: "Don't just report what happened—explain why. Know exactly why one creative outperformed another, why one creator drove results and another didn't.",
    quote: '"The data painted a really interesting story in the room for the client." — Kieran Hughes, Dentsu',
    icon: '🧠',
    color: '#54E42B',
  },
  {
    title: 'Statistical Rigor That Withstands Scrutiny',
    description: "95% confidence levels. Control vs. exposed methodology. Results that analytically sophisticated clients and procurement teams can't poke holes in.",
    icon: '📊',
    color: '#F9BE00',
  },
  {
    title: 'One Study, Complete Picture',
    description: 'Brand lift + attention tracking + emotion measurement in a single test. No need to cobble together three vendors. One partner, one methodology, comprehensive answers.',
    icon: '🔬',
    color: '#8F21A1',
  },
]

const testimonials = [
  {
    quote: "It was a really well received piece of work especially from their senior stakeholders in the business. Just to reiterate a huge thank you for all the work that you guys have helped pulling this together under extremely short notice and tight circumstances.",
    author: "Kieran Hughes",
    role: "Strategist, Dentsu",
  },
  {
    quote: "If you've never actually gone out and demoed this to clients, they love seeing their commercial with the heat map over. Sells itself. They showed mostly the eye tracking and people were dazzled because no one's ever been able to show the client if we're actually seeing the logos and the branding.",
    author: "Craig",
    role: "Netflix",
  },
  {
    quote: "You guys are much more than just a group RFZ. You're tracking vision and doing so much more with the content itself than just a survey. It's a step above.",
    author: "Olivia Burton",
    role: "BDB",
  },
]

const transformationItems = [
  { before: 'Competing on creative alone', after: 'Differentiating with proof' },
  { before: 'Losing pitches to agencies with better measurement', after: 'Winning pitches with visual, emotional data' },
  { before: "Clients asking hard questions you can't answer", after: 'Turning client questions into loyalty' },
  { before: 'Justifying rates with "trust us"', after: 'Justifying premium pricing with CFO-credible insights' },
  { before: "Bar charts that look like everyone else's", after: 'Heat maps and emotion tracking that "sell themselves"' },
]

export default function Growth1LeadMagnet() {
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
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Your Competitor Just Won a Pitch </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FF2198] to-[#E01580]">
                  You Should Have Won
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/70 mb-6 max-w-3xl mx-auto">
                They showed up with emotion data, attention tracking, and heat maps. You showed up with engagement metrics. The client noticed.
              </p>

              <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto">
                Advanced measurement isn't a nice-to-have anymore—it's what separates agencies that win from agencies that wonder what went wrong.
              </p>

              <div className="flex flex-col items-center gap-4 mb-8">
                <Link href="#download">
                  <motion.button
                    className="px-10 py-5 rounded-full font-semibold text-lg"
                    style={{
                      background: 'linear-gradient(135deg, #FF2198, #E01580)',
                      color: 'white',
                      boxShadow: '0 0 30px rgba(255, 33, 152, 0.4)',
                    }}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255, 33, 152, 0.6)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Download the Pitch-Winning Measurement Playbook
                  </motion.button>
                </Link>
                <p className="text-sm text-white/40">
                  Free guide: 7 ways top agencies are using emotion data to win competitive pitches
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <GradientDivider color="#FF2198" />

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
                What{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#54E42B] to-[#3DB820]">
                  Winning
                </span>
                {' '}Looks Like
              </h2>
            </motion.div>

            {/* Logos Bar */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-white/40 text-center text-sm mb-6">Trusted by teams at:</p>
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
                topHue={120}
                bottomHue={183}
                glowBlur={12}
                glowOpacity={0.3}
                backdropBlur={8}
                glowPosition="corners"
              >
                <div className="p-8 text-center">
                  <div className="text-4xl mb-4 opacity-30">❝</div>
                  <blockquote className="text-xl text-white/90 font-light leading-relaxed mb-4">
                    If we had an opportunity for new business and we wanted to impress them, this is more impressive than me just showing them a slide with a bunch of numbers on it.
                  </blockquote>
                  <p className="text-white/50">— Agency Partner</p>
                </div>
              </NeonGlassBoxV2>
            </motion.div>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: '341', label: 'Brand lift studies completed' },
                { number: '211+', label: 'Unique brands measured' },
                { number: '95%', label: 'Statistical confidence on every result' },
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

        <GradientDivider color="#12B8C9" />

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
                The Pitch Problem{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FF2198] to-[#E01580]">
                  Nobody Talks About
                </span>
              </h2>
              <p className="text-xl text-white/60">
                Creative used to be enough. Not anymore.
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
              Every pitch you lose, every client that churns, every discount you offer—it all traces back to the same gap:{' '}
              <span className="text-brand-magenta font-semibold">you're competing on creative alone in a world that demands proof.</span>
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
                What Agency Leaders Are{' '}
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
                bottomHue={320}
                glowBlur={12}
                glowOpacity={0.3}
                backdropBlur={8}
                glowPosition="corners"
              >
                <div className="p-8 text-center">
                  <p className="text-white/80 leading-relaxed">
                    <span className="text-brand-yellow font-semibold">Case Study:</span> Dentsu used Element Human to win a major Royal Canaan pitch—delivering insights under tight timelines that impressed senior stakeholders and differentiated them from competing agencies.
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
              <span className="text-brand-cyan font-semibold">Stop competing on creative alone.</span> Start competing on proof.
            </motion.p>
          </div>
        </section>

        <GradientDivider color="#12B8C9" />

        {/* Secondary CTA - Lead Magnet */}
        <section id="download" className="container mx-auto px-4 py-20 pb-32">
          <div className="max-w-3xl mx-auto">
            <NeonGlassBoxV2
              topHue={320}
              bottomHue={183}
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
                    Not Ready for a Demo?
                  </h2>
                  <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto">
                    Get the playbook first. Learn how leading agencies are using emotion data, attention tracking, and visual proof to win competitive pitches and justify premium pricing.
                  </p>

                  <Link href="#">
                    <motion.button
                      className="px-12 py-6 rounded-full font-semibold text-xl"
                      style={{
                        background: 'linear-gradient(135deg, #FF2198, #E01580)',
                        color: 'white',
                        boxShadow: '0 0 50px rgba(255, 33, 152, 0.5)',
                      }}
                      whileHover={{ scale: 1.05, boxShadow: '0 0 70px rgba(255, 33, 152, 0.7)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Download the Pitch-Winning Measurement Playbook
                    </motion.button>
                  </Link>

                  <p className="mt-6 text-sm text-white/40">
                    Free PDF. No spam. Unsubscribe anytime.
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
