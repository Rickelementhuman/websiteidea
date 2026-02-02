'use client'

import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Subtle background pattern - very light */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle cx="20" cy="20" r="1" fill="#13202F" />
          <circle cx="80" cy="40" r="0.8" fill="#13202F" />
          <circle cx="40" cy="80" r="0.6" fill="#13202F" />
          <circle cx="60" cy="30" r="0.9" fill="#13202F" />
          <circle cx="30" cy="60" r="0.7" fill="#13202F" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Main Heading - All Navy, clean */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-brand-navy mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Attention Sparks.
            <br />
            Emotion Connects.
            <br />
            Memory Drives the Decision.
          </motion.h1>

          {/* Subheading - Neutral gray */}
          <motion.p
            className="text-xl md:text-2xl text-neutral-600 mb-8 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Real brand impact doesn't come from what people say. It comes from what they see, feel, and remember.
          </motion.p>

          {/* Mission Statement in glass panel */}
          <motion.div
            className="glass-panel-light rounded-3xl p-8 md:p-10 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg md:text-xl text-brand-navy font-medium">
              We believe the brain buys before the buyer can explain it
            </p>
          </motion.div>

          {/* CTA Button - Single accent only */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button variant="solid" size="lg">
              Start Measuring
            </Button>
            <Button variant="glass" size="lg">
              See How It Works
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-neutral-300 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-2 bg-neutral-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}
