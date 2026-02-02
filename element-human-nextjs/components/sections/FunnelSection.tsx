'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { useEffect } from 'react'

const funnelStages = [
  {
    id: 'upper',
    title: 'Upper Funnel',
    subtitle: 'Awareness and initial emotional response',
    subheader: 'Early-Stage Impact',
    description: 'Capture attention in the feed and emotional resonance to see immediate impact.',
    metrics: [
      {
        icon: '📣',
        title: 'Attention in Feed',
        summary: 'How quickly your creative captures attention',
        details: 'Attention in Feed measures the immediate visual impact and stopping power of your creative content within the social media environment. This captures the critical first few seconds when users decide whether to engage or scroll past your content.',
      },
      {
        icon: '🧠',
        title: 'Brand Recall',
        summary: 'How well your brand is remembered',
        details: 'Brand Recall measures the effectiveness of your creative in building lasting brand memory and recognition. This determines how well your brand sticks in the audience\'s mind after exposure to your content.',
      },
      {
        icon: '🔥',
        title: 'Unaided/Aided Awareness',
        summary: 'Brand recognition levels',
        details: 'Unaided/Aided Awareness tracks both spontaneous and prompted brand recognition to understand how well your creative builds brand awareness. This reveals whether your brand comes to mind naturally or only when prompted.',
      },
    ],
  },
  {
    id: 'mid',
    title: 'Mid Funnel',
    subtitle: 'Brand recall, favorability, and consideration',
    subheader: 'Engagement & Consideration',
    description: 'Define how well your message lands and moves beyond awareness to genuine engagement.',
    metrics: [
      {
        icon: '💡',
        title: 'Emotional Response',
        summary: 'Immediate emotional reactions',
        details: 'Emotional Response captures the raw emotional reactions that occur within the first few seconds of exposure to your creative. This reveals the immediate psychological impact and emotional resonance of your content.',
      },
      {
        icon: '🧪',
        title: 'Implicit Brand Associations',
        summary: 'Subconscious brand connections',
        details: 'Implicit Brand Associations uncover the subconscious connections and associations that your creative builds with your brand at a deeper psychological level. This reveals the hidden emotional and cognitive links formed with your brand.',
      },
      {
        icon: '❤️',
        title: 'Brand Favorability',
        summary: 'Positive associations with your brand',
        details: 'Brand Favorability assesses the positive emotional connections and associations that your creative builds with your brand identity. This measures how well your content creates positive sentiment toward your brand.',
      },
      {
        icon: '💬',
        title: 'Consideration',
        summary: 'Likelihood to consider your product/service',
        details: 'Consideration evaluates how effectively your creative moves audiences from awareness to genuine consideration of your product or service. This measures the transition from knowing about your brand to actively thinking about choosing it.',
      },
    ],
  },
  {
    id: 'lower',
    title: 'Lower Funnel',
    subtitle: 'Purchase intent and recommendation',
    subheader: 'Conversion & Business Impact',
    description: 'Decode signals offering direct insight into ROI and the true business impact of your creative work.',
    metrics: [
      {
        icon: '🛒',
        title: 'Purchase Intent',
        summary: 'Likelihood to buy your product',
        details: 'Purchase Intent measures the direct impact of your creative on purchase intention and buying behavior among your target audience. This reveals how effectively your content moves people toward making a purchase decision.',
      },
      {
        icon: '🤝',
        title: 'Recommendation',
        summary: 'Willingness to recommend to others',
        details: 'Recommendation assesses the viral potential and word-of-mouth impact of your creative through recommendation likelihood and sharing behavior. This measures how likely people are to share your brand with others.',
      },
    ],
  },
]

function MetricCard({ metric, isActive }: { metric: typeof funnelStages[0]['metrics'][0]; isActive: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={`glass-panel rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${
        isActive ? 'opacity-100' : 'opacity-60'
      } ${isExpanded ? 'ring-2 ring-brand-navy' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-5 bg-neutral-50">
        <div className="flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">{metric.icon}</span>
          <div className="flex-1">
            <h5 className="font-semibold text-brand-navy mb-1">{metric.title}</h5>
            <p className="text-sm text-neutral-600">{metric.summary}</p>
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="p-5 border-t border-neutral-200">
          <p className="text-sm text-neutral-600 leading-relaxed">{metric.details}</p>
        </div>
      </div>
    </div>
  )
}

export function FunnelSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const [activeStage, setActiveStage] = useState(0)

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const stageIndex = Math.min(Math.floor(latest * funnelStages.length), funnelStages.length - 1)
      setActiveStage(stageIndex)
    })

    return () => unsubscribe()
  }, [scrollYProgress])

  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section ref={containerRef} className="relative py-32 bg-white" style={{ minHeight: '200vh' }}>
      <div className="sticky top-20 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-12 top-0 bottom-0 w-1 bg-neutral-200 rounded-full" />
            <motion.div
              className="absolute left-12 top-0 w-1 bg-brand-navy rounded-full"
              style={{ height: progressHeight }}
            />

            {/* Funnel Stages */}
            <div className="space-y-20">
              {funnelStages.map((stage, index) => (
                <div key={stage.id} className="relative pl-28">
                  {/* Stage Indicator */}
                  <motion.div
                    className={`absolute left-10 top-2 w-5 h-5 rounded-full border-4 border-white transition-all duration-300 ${
                      activeStage >= index ? 'bg-brand-navy scale-125' : 'bg-neutral-300'
                    }`}
                    style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                  />

                  {/* Stage Content */}
                  <motion.div
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: activeStage >= index ? 1 : 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-3 gap-8"
                  >
                    {/* Stage Header */}
                    <div>
                      <h3 className="text-2xl font-bold text-brand-navy mb-2">{stage.title}</h3>
                      <p className="text-neutral-600">{stage.subtitle}</p>
                    </div>

                    {/* Stage Details */}
                    <div className="md:col-span-2">
                      <div
                        className={`glass-card-accent p-8 transition-all duration-500 ${
                          activeStage >= index ? 'opacity-100 scale-100' : 'opacity-60 scale-95'
                        }`}
                      >
                        <h4 className="text-xl font-bold text-brand-navy mb-3 pb-3 border-b-2 border-neutral-200">
                          {stage.subheader}
                        </h4>
                        <p className="text-neutral-600 mb-6">{stage.description}</p>

                        <div className="space-y-3">
                          {stage.metrics.map((metric) => (
                            <MetricCard
                              key={metric.title}
                              metric={metric}
                              isActive={activeStage >= index}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
