'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { label: 'Features', href: '/product' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Science', href: '/science' },
    ],
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Insights', href: '/insights' },
      { label: 'Contact', href: '/meet-with-us' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  }

  return (
    <footer className="relative border-t border-white/10"
      style={{
        background: 'linear-gradient(180deg, rgba(10, 14, 26, 0.9) 0%, rgba(0, 0, 0, 0.95) 100%)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] opacity-40"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #0E98A5 30%, #10A8B7 50%, #12B8C9 70%, transparent 100%)',
          filter: 'blur(2px)',
        }}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <motion.div
              className="text-2xl font-bold mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#12B8C9] to-[#0E98A5]">
                Element Human
              </span>
            </motion.div>
            <p className="text-white/60 text-sm leading-relaxed">
              Reveal the why behind every impression through behavioral science and emotion tracking.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white/90 font-semibold mb-4 text-sm uppercase tracking-wider"
                style={{
                  textShadow: '0 0 10px rgba(16, 168, 183, 0.3)',
                }}
              >
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="relative text-white/60 hover:text-brand-cyan transition-all duration-300 text-sm group inline-block"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-[#12B8C9] to-[#0E98A5] group-hover:w-full transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/50 text-sm">
              © {currentYear} Element Human Limited. All rights reserved.
            </p>
            <p className="text-white/50 text-sm">
              7 Savoy Court, London, WC2R 0EX | Company No: 08587003
            </p>
          </div>
        </div>
      </div>

      {/* Bottom ambient glow */}
      <div
        className="absolute bottom-0 left-1/4 right-1/4 h-[100px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, #10A8B7 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
    </footer>
  )
}
