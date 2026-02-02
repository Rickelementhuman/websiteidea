import type { Metadata } from 'next'
import { AidaFunnelSection } from '@/components/sections/AidaFunnelSection'
import { Accordion } from '@/components/ui/Accordion'

export const metadata: Metadata = {
  title: 'Science - The HX Science',
  description: 'Where memory meets marketing impact',
}

export default function SciencePage() {
  const methodologies = [
    {
      title: 'Behavioral Science',
      content: 'We apply behavioral economics and psychology to understand how people make decisions. System 1 thinking (fast, automatic, emotional) drives 95% of purchasing decisions.',
      color: '#FF2198'
    },
    {
      title: 'Marketing Science',
      content: 'Evidence-based marketing principles that connect attention, emotion, and memory to real business outcomes. We measure what truly drives brand growth.',
      color: '#10A8B7'
    },
    {
      title: 'Memory Science',
      content: 'Neuroscience-backed understanding of how memories form and influence behavior. Emotional intensity triggers long-term memory encoding.',
      color: '#8F21A1'
    }
  ]

  return (
    <main className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6">
            The Science Behind Element Human
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Where Memory Meets Marketing Impact
          </p>
        </div>

        {/* System 1 vs System 2 */}
        <div className="glass-panel p-12 rounded-2xl mb-16 text-center">
          <h2 className="text-4xl font-bold text-brand-navy mb-4">
            System 1 {'>'} System 2
          </h2>
          <p className="text-6xl font-bold text-brand-magenta mb-4">95%</p>
          <p className="text-xl text-gray-700">
            of decisions happen automatically, driven by emotion and memory—not conscious reasoning
          </p>
        </div>
      </div>

      {/* AIDA Framework - Interactive Funnel */}
      <AidaFunnelSection />

      <div className="container mx-auto px-4 py-16">
        {/* Three Methodologies */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-brand-navy mb-8 text-center">
            Three Scientific Disciplines
          </h2>
          <Accordion items={methodologies} />
        </div>
      </div>
    </main>
  )
}
