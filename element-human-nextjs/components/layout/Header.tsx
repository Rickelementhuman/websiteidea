'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Product', href: '/product' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Science', href: '/science' },
    { label: 'About Us', href: '/about' },
    { label: 'Insights', href: '/insights' },
    // Persona Landing Pages
    { label: 'Growth (Magnet)', href: '/growth-1' },
    { label: 'Growth (Form)', href: '/growth-1-form' },
    { label: 'Analysts (Magnet)', href: '/analysts' },
    { label: 'Analysts (Form)', href: '/analysts-form' },
    { label: 'Budget (Magnet)', href: '/budget-holders' },
    { label: 'Budget (Form)', href: '/budget-holders-form' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className="relative border-b border-white/10"
        style={{
          background: 'linear-gradient(180deg, rgba(19, 32, 47, 0.85) 0%, rgba(10, 14, 26, 0.8) 100%)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        {/* Subtle top glow */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px] opacity-50"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #0E98A5 30%, #10A8B7 50%, #12B8C9 70%, transparent 100%)',
            filter: 'blur(2px)',
          }}
        />

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                className="text-2xl font-bold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#12B8C9] to-[#0E98A5]">
                  Element Human
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-white/70 hover:text-white transition-colors font-medium text-sm group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#12B8C9] to-[#0E98A5] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link href="/meet-with-us">
                <motion.button
                  className="relative px-6 py-2.5 rounded-full font-semibold text-sm overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, rgba(18, 184, 201, 0.15), rgba(14, 152, 165, 0.25))',
                    border: '1px solid rgba(16, 168, 183, 0.3)',
                    backdropFilter: 'blur(8px)',
                    color: 'white',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Meet With Us</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#12B8C9] to-[#0E98A5] opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  />
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              className="md:hidden pb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href="/meet-with-us" onClick={() => setIsMenuOpen(false)}>
                  <button
                    className="w-full px-6 py-2.5 rounded-full font-semibold text-sm"
                    style={{
                      background: 'linear-gradient(135deg, rgba(18, 184, 201, 0.15), rgba(14, 152, 165, 0.25))',
                      border: '1px solid rgba(16, 168, 183, 0.3)',
                      color: 'white',
                    }}
                  >
                    Meet With Us
                  </button>
                </Link>
              </nav>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  )
}
