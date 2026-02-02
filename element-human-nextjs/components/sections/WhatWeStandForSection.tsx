'use client'

import { motion } from 'framer-motion'
import { Accordion } from '../ui/Accordion'

const principles = [
  {
    title: 'Empathise',
    content: 'Listen and be heard. We actively listen, to clients, colleagues, and the data. We align, plan, and communicate clearly so insight becomes action.',
    color: '#FF2198',
  },
  {
    title: 'Empower',
    content: 'Enable growth and confidence. We provide the tools, insights, and support needed to make informed decisions and drive meaningful change.',
    color: '#10A8B7',
  },
  {
    title: 'Engage',
    content: 'Connect and inspire action. We create meaningful interactions that drive engagement, build relationships, and foster long-term partnerships.',
    color: '#54E42B',
  },
]

export function WhatWeStandForSection() {
  return (
    <section className="py-32 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              What We Stand For
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              At the core of Element Human are the 3 E's. Our principles for how we work with each other and with you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Accordion items={principles} defaultOpenIndex={0} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
