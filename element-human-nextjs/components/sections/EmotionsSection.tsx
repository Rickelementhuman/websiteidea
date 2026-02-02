'use client'

import { motion } from 'framer-motion'

const emotions = [
  { emoji: '😊', label: 'Happiness' },
  { emoji: '😮', label: 'Surprise' },
  { emoji: '😢', label: 'Sadness' },
  { emoji: '😡', label: 'Anger' },
  { emoji: '😱', label: 'Fear' },
  { emoji: '🤢', label: 'Disgust' },
  { emoji: '😐', label: 'Neutral' },
]

export function EmotionsSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Behavioral Learning Models
          </h2>
          <p className="text-xl text-brand-magenta font-medium mb-8">
            The Science Behind Emotion
          </p>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Element Human transforms emotion into a measurable catalyst for growth through advanced behavioral learning models. By leveraging Ekman's seven universal emotions, we reveal the unique emotional signature every creative leaves behind, empowering predictive insights that resonate across markets and demographics.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-center text-lg text-neutral-600 mb-8">
            Here's how we decode the core drivers of human response:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
            {emotions.map((emotion, index) => (
              <motion.div
                key={emotion.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass-card text-center p-6 hover:scale-105 transition-all duration-300">
                  <span className="text-5xl block mb-3">{emotion.emoji}</span>
                  <div className="text-xs font-semibold text-brand-navy uppercase tracking-wider">
                    {emotion.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <p className="text-lg text-neutral-600 leading-relaxed">
              Each of these expressions is captured and analyzed at the respondent level through{' '}
              <span className="font-semibold text-brand-navy">facial coding</span>, so you gain unmatched clarity into how audiences genuinely respond to your creative.
            </p>

            <p className="text-lg text-neutral-600 leading-relaxed">
              Our science-first approach replaces guesswork with precise emotional intelligence, helping you understand exactly what motivates, moves, or even disengages your audience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
