import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Explore our latest insights on behavioral science, advertising, and creative testing',
}

export default function InsightsPage() {
  return (
    <main className="pt-20 min-h-screen bg-gradient-to-br from-brand-navy/5 to-brand-cyan/5">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6">
            Insights
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            All about the Creator Economy - Stay up-to-date on the latest insights
          </p>
          
          <div className="glass-panel p-12 rounded-2xl">
            <p className="text-lg text-gray-700 mb-4">
              Blog system with CSV parser coming soon...
            </p>
            <p className="text-gray-600">
              29 blog posts will be imported from the CSV file with full rich HTML content, categories, authors, and filtering capabilities.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
