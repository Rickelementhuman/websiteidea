'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "Element Human has transformed how we measure creative performance. The insights are actionable and the platform is incredibly intuitive.",
    author: "Emily Cables",
    role: "Senior Manager Measurement",
    company: "Whalar"
  },
  {
    quote: "Finally, a measurement solution that actually tells us why content performs, not just that it does.",
    author: "Alex Maguire",
    role: "Manager Ads Measurement",
    company: "GAGGL"
  },
  {
    quote: "The combination of biometric and behavioral data gives us confidence in our creative decisions.",
    author: "Adam Harris",
    role: "Co-Founder",
    company: "Hall and Partners"
  },
  {
    quote: "Element Human's approach to measuring emotion and memory has completely changed our creative process.",
    author: "Richard Owen",
    role: "Chief Transformation Officer",
    company: "BBC Studios"
  }
]

export function Testimonials() {
  return (
    <section className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            The Human Response
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card-accent p-8"
            >
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-brand-navy">{testimonial.author}</p>
                <p className="text-sm text-neutral-600">{testimonial.role}, {testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
