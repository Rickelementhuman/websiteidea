'use client'

import { motion } from 'framer-motion'

export function SSPSection() {
  return (
    <section className="py-32 bg-brand-navy">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stopping & Staying Power™
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Capturing attention is just the beginning. True brand growth demands retention—engagement that persists beyond the moment your creative appears.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
