'use client'

import { motion } from 'framer-motion'

export function ValueProposition() {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-8 leading-tight">
            We measure what sticks, not what scrolls
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed mb-6">
            That's why we don't ask what people think. We measure what they see, feel and remember.
          </p>
          <p className="text-lg text-neutral-600 leading-relaxed">
            We exist to help you stop chasing vanity metrics and start creating content that truly moves people.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
