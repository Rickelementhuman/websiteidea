'use client'

import { motion } from 'framer-motion'

const clients = [
  'Amazon', 'Nike', 'BMW', 'Coca-Cola', 'BBC Studios', 'Spotify',
  'T-Mobile', 'Twitch', "L'Oreal", 'Proctor & Gamble', 'Johnson & Johnson',
  'eBay', 'Vodafone', 'Under Armour', 'Kraft Heinz', 'Anheuser Busch',
  'Estee Lauder', 'DHL', 'Experian', 'TripAdvisor'
]

export function ClientLogos() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-wider text-neutral-500 mb-3">Trusted by industry leaders</p>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
            You're in good company around here
          </h2>
        </motion.div>

        {/* Minimal logo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="px-4 py-6 rounded-xl border border-neutral-200 hover:border-neutral-300 transition-all duration-300 hover:shadow-sm">
                <span className="text-neutral-600 group-hover:text-brand-navy transition-colors font-medium text-center block text-sm">
                  {client}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-neutral-500">...and 450+ more</p>
        </motion.div>
      </div>
    </section>
  )
}
