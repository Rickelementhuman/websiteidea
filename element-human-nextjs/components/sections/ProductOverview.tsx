'use client'

import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

const measurementPillars = [
  {
    icon: '👁️',
    title: 'Attention',
    description: 'Track where eyes go and what holds focus with precision eye-tracking technology'
  },
  {
    icon: '😊',
    title: 'Emotion',
    description: 'Capture genuine emotional reactions through advanced facial coding analysis'
  },
  {
    icon: '🧠',
    title: 'Memory',
    description: 'Measure deep memory encoding with implicit association testing'
  },
  {
    icon: '📊',
    title: 'Brand Metrics',
    description: 'Track awareness, recall, favorability, and purchase intent'
  }
]

export function ProductOverview() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Behaviour First Measurement for Modern Brands
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We measure what sticks, not what scrolls
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {measurementPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center"
            >
              <div className="text-5xl mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{pillar.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="solid" size="lg">
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  )
}
