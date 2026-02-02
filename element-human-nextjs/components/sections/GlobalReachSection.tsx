'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 100, suffix: 'M+', label: 'Panellist worldwide', description: 'via Cint and Dynata' },
  { value: 26, suffix: '', label: 'Markets', description: 'Covering major global regions' },
  { value: 8, suffix: '', label: 'Languages', description: 'Multi-language support' },
  { value: 472, suffix: '+', label: 'Brands we\'ve worked with', description: 'Diverse industry coverage' },
]

function CountUpNumber({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let start = 0
    const end = value
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span className="text-4xl md:text-5xl font-bold text-brand-navy">
      {count}{suffix}
    </span>
  )
}

export function GlobalReachSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-card-accent p-8 text-center h-full flex flex-col justify-center hover:scale-105 transition-transform duration-300">
                <div className="mb-4">
                  <CountUpNumber value={stat.value} suffix={stat.suffix} inView={isInView} />
                </div>
                <h3 className="text-lg font-semibold text-brand-navy mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-neutral-600">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
