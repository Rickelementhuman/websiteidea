'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { NeonGlassBox } from '@/components/ui/NeonGlassBox'
import { Button } from '@/components/ui/Button'

import '../neon-glass.css'

export default function Experiment4() {
  const [glowBlur, setGlowBlur] = useState(12)
  const [glowBrightBlur, setGlowBrightBlur] = useState(2)
  const [glowOpacity, setGlowOpacity] = useState(1)
  const [shineBrightness, setShineBrightness] = useState(0.5)
  const [topHue, setTopHue] = useState(183)
  const [bottomHue, setBottomHue] = useState(120)
  const [backdropBlur, setBackdropBlur] = useState(20)

  // Parallax scroll effect for green circle
  const { scrollY } = useScroll()
  const circleY = useTransform(scrollY, [0, 500], [0, -80])

  return (
    <main className="min-h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0a0e1a 0%, #050810 50%, #0a0e1a 100%)'
    }}>
      {/* Hexagonal Pattern Background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23ffffff' stroke-width='0.5' opacity='0.1'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }} />

      {/* Large Gradient Orbs */}
      <div className="gradient-orb-lg w-[800px] h-[800px] bg-brand-cyan -top-96 -left-96 opacity-40" style={{ animationDelay: '0s', filter: 'blur(150px)' }} />
      <div className="gradient-orb-lg w-[900px] h-[900px] bg-brand-magenta top-0 -right-96 opacity-40" style={{ animationDelay: '3s', filter: 'blur(150px)' }} />
      <div className="gradient-orb-lg w-[700px] h-[700px] bg-brand-violet top-1/4 left-1/2 opacity-30" style={{ animationDelay: '6s', filter: 'blur(180px)' }} />

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Wrapper for glass box + background elements */}
          <div className="relative mb-20">
            {/* Green test circle - BEHIND the glass box with parallax scroll */}
            <motion.div
              className="absolute top-1/2 -right-32 w-64 h-64 rounded-full pointer-events-none z-0"
              style={{
                background: 'radial-gradient(circle, hsl(120 85% 50%) 0%, hsl(120 75% 40%) 50%, transparent 100%)',
                filter: 'blur(1px)',
                y: circleY,
              }}
            />

            {/* Main Neon Glass Hero Box - ON TOP */}
            <NeonGlassBox
              className="relative z-10"
              topHue={topHue}
              bottomHue={bottomHue}
              glowBlur={glowBlur}
              glowBrightBlur={glowBrightBlur}
              glowOpacity={glowOpacity}
              shineBrightness={shineBrightness}
              backdropBlur={backdropBlur}
            >
              <div className="text-center p-12 md:p-16">
              {/* Sparkle Icon */}
              <motion.div
                className="inline-block text-6xl mb-6"
                animate={{
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ✨
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-white">Attention </span>
                <span className="text-brand-green">Sparks.</span>
                <br />
                <span className="text-white">Emotion </span>
                <span className="text-brand-magenta">Connects.</span>
                <br />
                <span className="text-white">Memory Drives </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-red relative">
                  The Decision.
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-yellow to-brand-red" />
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
                Real brand impact comes from what they<br />
                <span className="text-brand-green">see, </span>
                <span className="text-brand-magenta">feel, </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-red">and remember.</span>
              </p>

              {/* Neon CTA Button */}
              <button className="neon-button group">
                <span className="relative z-10 flex items-center gap-2">
                  <span>▶</span>
                  <span>Start Measuring</span>
                </span>
              </button>
            </div>
          </NeonGlassBox>
          </div>

          {/* Value Props - Neon Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <div className="neon-card border-accent-cyan">
              <div className="p-8">
                <div className="text-4xl mb-4">👁️</div>
                <h3 className="text-2xl font-bold text-white mb-3">Attention</h3>
                <p className="text-white/70">Track where eyes go and what holds focus with precision eye-tracking technology</p>
              </div>
            </div>

            <div className="neon-card border-accent-magenta">
              <div className="p-8">
                <div className="text-4xl mb-4">😊</div>
                <h3 className="text-2xl font-bold text-white mb-3">Emotion</h3>
                <p className="text-white/70">Capture genuine emotional reactions through advanced facial coding analysis</p>
              </div>
            </div>

            <div className="neon-card border-accent-green">
              <div className="p-8">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-2xl font-bold text-white mb-3">Memory</h3>
                <p className="text-white/70">Measure deep memory encoding with implicit association testing</p>
              </div>
            </div>
          </div>

          {/* Funnel Section - Large Neon Box */}
          <div className="neon-glass-box-secondary mb-20">
            <div className="p-10 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Measure Across The Full <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-magenta">Funnel</span>
                </h2>
                <p className="text-xl text-white/70">From awareness to action, we measure what matters</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="glass-dark rounded-2xl p-6 border-l-4 border-brand-yellow hover:scale-105 transition-transform">
                  <h4 className="text-xl font-bold text-white mb-3">Upper Funnel</h4>
                  <div className="space-y-2 text-sm text-white/70">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-yellow" />
                      <span>Attention in Feed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-yellow" />
                      <span>Brand Recall</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-yellow" />
                      <span>Awareness</span>
                    </div>
                  </div>
                </div>

                <div className="glass-dark rounded-2xl p-6 border-l-4 border-brand-magenta hover:scale-105 transition-transform">
                  <h4 className="text-xl font-bold text-white mb-3">Mid Funnel</h4>
                  <div className="space-y-2 text-sm text-white/70">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-magenta" />
                      <span>Emotional Response</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-magenta" />
                      <span>Brand Favorability</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-magenta" />
                      <span>Consideration</span>
                    </div>
                  </div>
                </div>

                <div className="glass-dark rounded-2xl p-6 border-l-4 border-brand-green hover:scale-105 transition-transform">
                  <h4 className="text-xl font-bold text-white mb-3">Lower Funnel</h4>
                  <div className="space-y-2 text-sm text-white/70">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-green" />
                      <span>Purchase Intent</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-green" />
                      <span>Recommendation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-green" />
                      <span>Conversion</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <div className="neon-card-simple">
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">🧪</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Pre-Testing</h3>
                <p className="text-white/70 mb-4">Validate creative before launch to ensure long-term desirability</p>
                <div className="text-brand-green text-sm font-semibold">→ Test Before Launch</div>
              </div>
            </div>

            <div className="neon-card-simple">
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-brand-magenta/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">In-Flight Optimization</h3>
                <p className="text-white/70 mb-4">Reallocate budget while the campaign is live</p>
                <div className="text-brand-magenta text-sm font-semibold">→ Optimize Live</div>
              </div>
            </div>

            <div className="neon-card-simple">
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-brand-cyan/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Campaign Evaluation</h3>
                <p className="text-white/70 mb-4">Turn post-campaign analysis into a playbook</p>
                <div className="text-brand-cyan text-sm font-semibold">→ Learn & Improve</div>
              </div>
            </div>
          </div>

          {/* Stats - Neon Glass Box */}
          <div className="neon-glass-box-secondary">
            <div className="p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-10">
                The proof: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-magenta">Data & Brands</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-green mb-2">2.3k+</div>
                  <p className="text-white/70">Creatives <span className="text-white font-semibold">tested</span></p>
                </div>
                <div>
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-magenta to-brand-violet mb-2">325k+</div>
                  <p className="text-white/70">Consumers <span className="text-white font-semibold">measured</span></p>
                </div>
                <div>
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-green mb-2">6</div>
                  <p className="text-white/70">Environments <span className="text-white font-semibold">created</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Control Panel */}
      <div className="fixed bottom-8 left-8 right-8 z-50">
        <div className="neon-glass-box max-w-4xl mx-auto">
          <h3 className="text-white text-lg font-bold mb-4">Neon Glow Controls</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <label className="text-white/80 block mb-2">
                Glow Blur: {glowBlur}px
              </label>
              <input
                type="range"
                min="0"
                max="30"
                step="1"
                value={glowBlur}
                onChange={(e) => setGlowBlur(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="text-white/80 block mb-2">
                Bright Glow Blur: {glowBrightBlur}px
              </label>
              <input
                type="range"
                min="0"
                max="10"
                step="0.5"
                value={glowBrightBlur}
                onChange={(e) => setGlowBrightBlur(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="text-white/80 block mb-2">
                Glow Opacity: {glowOpacity.toFixed(2)}
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={glowOpacity}
                onChange={(e) => setGlowOpacity(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="text-white/80 block mb-2">
                Shine Brightness: {shineBrightness.toFixed(2)}
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={shineBrightness}
                onChange={(e) => setShineBrightness(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="text-white/80 block mb-2">
                Top Hue (Cyan): {topHue}°
              </label>
              <input
                type="range"
                min="0"
                max="360"
                step="1"
                value={topHue}
                onChange={(e) => setTopHue(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="text-white/80 block mb-2">
                Bottom Hue (Green): {bottomHue}°
              </label>
              <input
                type="range"
                min="0"
                max="360"
                step="1"
                value={bottomHue}
                onChange={(e) => setBottomHue(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="text-white/80 block mb-2">
                Backdrop Blur: {backdropBlur}px
              </label>
              <input
                type="range"
                min="0"
                max="50"
                step="1"
                value={backdropBlur}
                onChange={(e) => setBackdropBlur(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          <div className="mt-4 p-3 bg-white/5 rounded-lg">
            <p className="text-white/60 text-xs">
              Current settings: backdropBlur={backdropBlur}, glowBlur={glowBlur}, glowBrightBlur={glowBrightBlur}, 
              glowOpacity={glowOpacity.toFixed(2)}, shineBrightness={shineBrightness.toFixed(2)}, 
              topHue={topHue}, bottomHue={bottomHue}
            </p>
          </div>
        </div>
      </div>



      
    </main>
  )
}
