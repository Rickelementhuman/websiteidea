import type { Metadata } from 'next'
import { NeonGlassBox } from '@/components/ui/NeonGlassBox'
import '../neon-glass.css'

export const metadata: Metadata = {
  title: 'Experiment 2 - Flowing Glass',
  description: 'Provable Impact & Scalable Intelligence',
}

export default function Experiment2() {
  return (
    <main className="min-h-screen bg-dark-radial relative overflow-hidden">
      {/* Animated Gradient Orbs - Different positions and sizes */}
      <div className="gradient-orb w-[600px] h-[600px] bg-brand-violet top-0 -right-60" style={{ animationDelay: '0s' }} />
      <div className="gradient-orb-lg w-[700px] h-[700px] bg-brand-magenta -top-40 -left-80" style={{ animationDelay: '4s' }} />
      <div className="gradient-orb w-96 h-96 bg-brand-cyan bottom-0 left-20" style={{ animationDelay: '8s' }} />
      <div className="gradient-orb w-80 h-80 bg-brand-green top-1/3 right-1/4" style={{ animationDelay: '2s' }} />
      <div className="gradient-orb-lg w-[500px] h-[500px] bg-brand-yellow bottom-20 right-1/3" style={{ animationDelay: '6s' }} />

      {/* Content */}
      <div className="relative z-10 px-4">
        {/* Staggered Hero */}
        <div className="container mx-auto py-24">
          <div className="max-w-6xl">
            <div className="glass-dark-accent rounded-[40px] p-12 mb-8 ml-0 md:ml-20">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Provable Impact &<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-magenta to-brand-yellow">
                  Scalable Intelligence
                </span>
              </h1>
            </div>

            <div className="glass-dark rounded-[40px] p-8 ml-0 md:ml-40">
              <p className="text-xl text-white/80">
                Activate Behavioural AI across the full campaign lifecycle.
              </p>
            </div>
          </div>
        </div>

        {/* Offset Features */}
        <div className="container mx-auto py-12">
          <div className="max-w-6xl">
            <div className="glass-dark-accent rounded-[40px] p-10 mb-12 mr-0 md:mr-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-2 h-24 bg-gradient-to-b from-brand-magenta to-brand-cyan rounded-full" />
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">The Results</h2>
                  <p className="text-brand-cyan text-xl">From Insight to Impact</p>
                </div>
              </div>
              <p className="text-white/70 text-lg mb-8">
                Comprehensive diagnostics delivered in <span className="text-brand-yellow font-semibold">24 hours</span> via DIY Dashboard or Managed Reports.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass-dark rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-yellow/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-2xl">👁️</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Full Visibility</h3>
                      <p className="text-white/60 text-sm">See all campaigns and creative versions in one place</p>
                    </div>
                  </div>
                </div>

                <div className="glass-dark rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-magenta/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Granular Control</h3>
                      <p className="text-white/60 text-sm">Drill down into second-by-second attention and emotion peaks</p>
                    </div>
                  </div>
                </div>

                <div className="glass-dark rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-cyan/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-2xl">📊</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Global Benchmarks</h3>
                      <p className="text-white/60 text-sm">Compare natively against 325k+ humans across 30+ categories</p>
                    </div>
                  </div>
                </div>

                <div className="glass-dark rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-green/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Real-time Insights</h3>
                      <p className="text-white/60 text-sm">Get instant feedback on creative performance metrics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Diagonal Layout */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-dark rounded-[40px] p-8 md:mt-16 border-l-4 border-brand-violet hover:border-brand-magenta transition-colors duration-500">
                <h3 className="text-2xl font-bold text-white mb-4">📈 Full Report</h3>
                <p className="text-white/70 mb-4">Analyze 16+ behavioural metrics, including facial coding and heatmaps, tailored to your brief for actionable stakeholder insights.</p>
                <div className="inline-block px-4 py-2 rounded-full bg-brand-violet/20 text-brand-violet text-sm font-semibold">
                  Deep Analytics
                </div>
              </div>

              <div className="glass-dark rounded-[40px] p-8 border-l-4 border-brand-yellow hover:border-brand-green transition-colors duration-500">
                <h3 className="text-2xl font-bold text-white mb-4">🎯 Creative & Campaign</h3>
                <p className="text-white/70 mb-4">Get a definitive performance grade based on category benchmarks, not averages, to see exactly how you compare to the competition.</p>
                <div className="inline-block px-4 py-2 rounded-full bg-brand-yellow/20 text-brand-yellow text-sm font-semibold">
                  Performance Grade
                </div>
              </div>
            </div>

            <div className="glass-dark-accent rounded-[40px] p-10 ml-0 md:ml-20">
              <h3 className="text-2xl font-bold text-white mb-6">Use Cases Across the Lifecycle</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                  <div className="w-8 h-8 rounded-lg bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-green font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Pre-Testing</h4>
                    <p className="text-white/60 text-sm">Validate creative before launch to ensure long-term desirability</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                  <div className="w-8 h-8 rounded-lg bg-brand-magenta/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-magenta font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">In-Flight Optimization</h4>
                    <p className="text-white/60 text-sm">Reallocate budget to creative cuts with highest resonance while live</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-cyan font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Campaign Evaluation</h4>
                    <p className="text-white/60 text-sm">Turn post-campaign analysis into a data-backed playbook</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="container mx-auto py-16">
          <div className="glass-dark-accent rounded-[40px] p-12 max-w-6xl">
            <h3 className="text-3xl font-bold text-center text-white mb-12">
              The proof: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-magenta to-brand-cyan">Data & Brands we've worked with</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl hover:bg-white/5 transition-colors">
                <div className="text-5xl font-bold text-brand-yellow mb-2">2.3k+</div>
                <p className="text-white/70">Creatives <span className="text-white">tested</span></p>
              </div>
              <div className="text-center p-6 rounded-2xl hover:bg-white/5 transition-colors">
                <div className="text-5xl font-bold text-brand-magenta mb-2">325k+</div>
                <p className="text-white/70">Individual consumers <span className="text-white">measured</span></p>
              </div>
              <div className="text-center p-6 rounded-2xl hover:bg-white/5 transition-colors">
                <div className="text-5xl font-bold text-brand-cyan mb-2">6</div>
                <p className="text-white/70">Custom environments <span className="text-white">created</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
