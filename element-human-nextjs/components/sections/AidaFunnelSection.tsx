'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const aidaStages = [
  {
    id: 'awareness',
    title: 'AWARENESS',
    description: 'Potential customers become aware of your brand and products.',
    metrics: [
      { title: 'Attention in Feed', color: 'yellow', description: 'Measures how well content captures attention in social media feeds and digital environments.' },
      { title: 'Brand Recall', color: 'green', description: 'Assesses the ability of consumers to remember and recognize your brand after exposure.' },
      { title: 'Top of Mind Awareness', color: 'green', description: 'Measures when your brand is the first that comes to mind in a category.' },
      { title: 'Unaided Awareness', color: 'green', description: 'Tests spontaneous brand recognition without prompting or assistance.' },
    ],
  },
  {
    id: 'interest',
    title: 'INTEREST',
    description: 'The stage where potential customers develop curiosity and begin to actively seek more information about your products or services.',
    metrics: [
      { title: 'Emotional Response', color: 'magenta', description: 'Measures the emotional impact and connection consumers feel with your brand content.' },
      { title: 'Key Moments', color: 'magenta', description: 'Identifies the most impactful moments that drive engagement and interest in your content.' },
    ],
  },
  {
    id: 'desire',
    title: 'DESIRE',
    description: 'The stage where potential customers develop a strong preference for your brand and begin to see it as the solution to their needs.',
    metrics: [
      { title: 'Implicit Brand Associations', color: 'cyan', description: 'Measures subconscious brand connections and associations formed through content exposure.' },
      { title: 'Explicit Brand Associations', color: 'yellow', description: 'Tests conscious brand connections and attributes that consumers actively associate with your brand.' },
      { title: 'Brand Positivity', color: 'green', description: 'Measures the positive sentiment and favorable attitudes toward your brand.' },
      { title: 'Consideration', color: 'green', description: 'Measures the likelihood of consumers considering your brand for their next purchase decision.' },
    ],
  },
  {
    id: 'action',
    title: 'ACTION',
    description: 'The final stage where potential customers take the desired action, such as making a purchase, signing up, or converting in some way.',
    metrics: [
      { title: 'Purchase Intent', color: 'green', description: 'Assesses the probability of consumers making a purchase from your brand.' },
      { title: 'Recommend Intent', color: 'green', description: 'Measures the likelihood of consumers recommending your brand to others.' },
    ],
  },
]

const colorMap = {
  yellow: 'border-l-brand-yellow',
  magenta: 'border-l-brand-magenta',
  cyan: 'border-l-brand-cyan',
  green: 'border-l-brand-green',
}

export function AidaFunnelSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const [activeStage, setActiveStage] = useState(0)
  const [expandedMetric, setExpandedMetric] = useState<string | null>(null)

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const stageIndex = Math.min(Math.floor(latest * aidaStages.length), aidaStages.length - 1)
      setActiveStage(stageIndex)
    })

    return () => unsubscribe()
  }, [scrollYProgress])

  const toggleMetric = (stageId: string, metricTitle: string) => {
    const key = `${stageId}-${metricTitle}`
    setExpandedMetric(expandedMetric === key ? null : key)
  }

  return (
    <section ref={containerRef} className="relative bg-white" style={{ minHeight: '250vh' }}>
      <div className="sticky top-0 h-screen flex flex-col justify-center py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center relative">
            {/* Methodology Legend */}
            <div className="absolute top-0 right-0 glass-card p-4 max-w-xs z-10 hidden lg:block">
              <h4 className="text-sm font-semibold text-brand-navy mb-3 text-center">Methodology</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-brand-yellow"></div>
                  <span>Attention</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-brand-magenta"></div>
                  <span>Emotion</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-brand-cyan"></div>
                  <span>Memory</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-brand-green"></div>
                  <span>Brand Uplift</span>
                </div>
              </div>
            </div>

            {/* Funnel Visual */}
            <div className="flex flex-col items-center gap-4">
              {aidaStages.map((stage, index) => (
                <motion.div
                  key={stage.id}
                  className={`relative flex items-center justify-center font-bold text-xl md:text-2xl text-white bg-brand-navy rounded-lg transition-all duration-500 ${
                    activeStage === index ? 'opacity-100 scale-105 shadow-2xl' : 'opacity-30 scale-100'
                  }`}
                  style={{
                    width: `${95 - index * 15}%`,
                    height: '100px',
                    clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)',
                  }}
                >
                  {stage.title}
                </motion.div>
              ))}
            </div>

            {/* Content Area */}
            <div className="relative min-h-[500px]">
              {aidaStages.map((stage, index) => (
                <motion.div
                  key={stage.id}
                  className="absolute inset-0 flex flex-col justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: activeStage === index ? 1 : 0,
                    y: activeStage === index ? 0 : 30,
                    pointerEvents: activeStage === index ? 'auto' : 'none',
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                    {stage.title.charAt(0) + stage.title.slice(1).toLowerCase()}
                  </h2>
                  <p className="text-lg text-neutral-600 mb-6">{stage.description}</p>

                  <div className="grid md:grid-cols-2 gap-3">
                    {stage.metrics.map((metric) => {
                      const isExpanded = expandedMetric === `${stage.id}-${metric.title}`

                      return (
                        <div
                          key={metric.title}
                          className={`glass-panel rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border-l-4 ${
                            colorMap[metric.color as keyof typeof colorMap]
                          } ${isExpanded ? 'ring-2 ring-brand-navy' : ''}`}
                          onClick={() => toggleMetric(stage.id, metric.title)}
                        >
                          <div className="p-4 bg-neutral-50">
                            <h5 className="font-semibold text-brand-navy text-sm">
                              {metric.title}
                            </h5>
                          </div>

                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              isExpanded ? 'max-h-96' : 'max-h-0'
                            }`}
                          >
                            <div className="p-4 bg-white border-t border-neutral-200">
                              <p className="text-sm text-neutral-600 leading-relaxed">
                                {metric.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
