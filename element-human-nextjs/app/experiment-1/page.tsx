import type { Metadata } from 'next'
import { NeonGlassBox } from '@/components/ui/NeonGlassBox'
import '../neon-glass.css'

export const metadata: Metadata = {
  title: 'Experiment 1 - Dark Glassmorphism',
  description: 'Provable Impact & Scalable Intelligence',
}

export default function Experiment1() {
  return (
    <main className="min-h-screen bg-dark-gradient relative overflow-hidden">
      {/* Floating Gradient Orbs */}
      <div className="gradient-orb w-96 h-96 bg-brand-magenta top-20 -left-48" style={{ animationDelay: '0s' }} />
      <div className="gradient-orb w-80 h-80 bg-brand-cyan top-40 right-10" style={{ animationDelay: '5s' }} />
      <div className="gradient-orb-lg w-[500px] h-[500px] bg-brand-violet bottom-20 left-1/4" style={{ animationDelay: '10s' }} />
      <div className="gradient-orb w-64 h-64 bg-brand-green bottom-40 -right-32" style={{ animationDelay: '7s' }} />
      <div className="gradient-orb w-72 h-72 bg-brand-yellow top-1/2 left-1/3" style={{ animationDelay: '3s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-green mb-6">
            Provable Impact &<br />Scalable Intelligence
          </h1>
          <p className="text-2xl text-white/80 font-light">
            Activate Behavioural AI across the full campaign lifecycle.
          </p>
        </div>

        {/* Main Glass Panel */}
        <NeonGlassBox className="rounded-3xl p-12 mb-16 max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            The Results: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-magenta to-brand-cyan">From Insight to Impact</span>
          </h2>
          <p className="text-xl text-white/70 mb-12">
            Comprehensive diagnostics delivered in <span className="text-brand-yellow font-semibold">24 hours</span> via DIY Dashboard or Managed Reports.
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass-dark rounded-2xl p-6 border-l-4 border-brand-yellow hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold text-white mb-3">Full Visibility</h3>
              <p className="text-white/60">See all campaigns and creative versions in one place.</p>
            </div>

            <div className="glass-dark rounded-2xl p-6 border-l-4 border-brand-magenta hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold text-white mb-3">Granular Control</h3>
              <p className="text-white/60">Drill down into second-by-second attention and emotion peaks.</p>
            </div>

            <div className="glass-dark rounded-2xl p-6 border-l-4 border-brand-cyan hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold text-white mb-3">Global Benchmarks</h3>
              <p className="text-white/60">Compare natively against 325k+ humans across 30+ categories.</p>
            </div>
          </div>

          {/* Report Types */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-dark rounded-2xl p-8 text-center hover:bg-white/10 transition-colors duration-300">
              <div className="w-16 h-16 rounded-full bg-brand-magenta/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📊</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Full Report</h4>
              <p className="text-sm text-white/60">Analyze 16+ behavioural metrics, including facial coding and heatmaps</p>
            </div>

            <div className="glass-dark rounded-2xl p-8 text-center hover:bg-white/10 transition-colors duration-300">
              <div className="w-16 h-16 rounded-full bg-brand-yellow/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Creative & Campaign</h4>
              <p className="text-sm text-white/60">Get a definitive performance grade based on category benchmarks</p>
            </div>

            <div className="glass-dark rounded-2xl p-8 text-center hover:bg-white/10 transition-colors duration-300">
              <div className="w-16 h-16 rounded-full bg-brand-cyan/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👥</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Social & Influencer</h4>
              <p className="text-sm text-white/60">Validate impact by measuring attention and brand association</p>
            </div>
          </div>
        </NeonGlassBox>

        {/* Use Cases */}
        <div className="glass-dark rounded-3xl p-12 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="glass-dark-accent rounded-2xl p-6 mb-4 hover:border-brand-green hover:border-2 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">Pre-Testing</h3>
                <p className="text-white/70 mb-4">Validate creative "in the wild" <span className="text-brand-yellow">before launch</span>. Quantify subconscious memory encoding to ensure long-term desirability.</p>
              </div>
            </div>

            <div className="text-center">
              <div className="glass-dark-accent rounded-2xl p-6 mb-4 hover:border-brand-magenta hover:border-2 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">In-Flight Optimization</h3>
                <p className="text-white/70 mb-4">Reallocate budget to creative cuts with the highest resonance <span className="text-brand-yellow">while the campaign is live</span>.</p>
              </div>
            </div>

            <div className="text-center">
              <div className="glass-dark-accent rounded-2xl p-6 mb-4 hover:border-brand-cyan hover:border-2 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">Campaign Evaluation</h3>
                <p className="text-white/70 mb-4">Turn <span className="text-brand-yellow">post-campaign analysis</span> into a data-backed playbook for future briefs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          <div className="glass-dark rounded-2xl p-8 text-center">
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-green mb-2">2.3k+</div>
            <p className="text-white/70">Creatives <span className="text-brand-yellow">tested</span></p>
          </div>

          <div className="glass-dark rounded-2xl p-8 text-center">
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-magenta to-brand-violet mb-2">325k+</div>
            <p className="text-white/70">Individual consumers <span className="text-brand-cyan">measured</span></p>
          </div>

          <div className="glass-dark rounded-2xl p-8 text-center">
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-green mb-2">6</div>
            <p className="text-white/70">Custom environments <span className="text-brand-green">created</span></p>
          </div>
        </div>
      </div>
    </main>
  )
}
