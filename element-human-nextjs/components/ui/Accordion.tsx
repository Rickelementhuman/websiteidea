'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

interface AccordionItemProps {
  title: string
  content: string
  color?: string
  defaultOpen?: boolean
}

export function AccordionItem({
  title,
  content,
  color = '#10A8B7',
  defaultOpen = false
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="glass-card-accent rounded-2xl overflow-hidden mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full px-6 py-5 flex items-center justify-between text-left transition-colors",
          isOpen && "text-white"
        )}
        style={{ backgroundColor: isOpen ? color : 'transparent' }}
      >
        <h3 className={cn(
          "text-xl font-semibold transition-colors",
          isOpen ? "text-white" : "text-brand-navy"
        )}>
          {title}
        </h3>
        <svg
          className={cn(
            "w-6 h-6 transition-transform duration-300",
            isOpen ? "rotate-180 text-white" : "text-brand-navy"
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-5 bg-white/95 backdrop-blur-sm">
              <p className="text-gray-700 leading-relaxed">{content}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface AccordionProps {
  items: Array<{
    title: string
    content: string
    color?: string
  }>
  defaultOpenIndex?: number
}

export function Accordion({ items, defaultOpenIndex }: AccordionProps) {
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          color={item.color}
          defaultOpen={index === defaultOpenIndex}
        />
      ))}
    </div>
  )
}
