'use client'

import { NeonGlassBoxV2 } from '@/components/ui/NeonGlassBoxV2'
import '../neon-glass.css'

export default function Experiment3() {
  const testBoxes = [
    { width: '200px', height: '200px', label: 'Square Small' },
    { width: '400px', height: '200px', label: 'Wide Short' },
    { width: '200px', height: '400px', label: 'Narrow Tall' },
    { width: '600px', height: '200px', label: 'Very Wide' },
    { width: '300px', height: '300px', label: 'Square Medium' },
    { width: '500px', height: '300px', label: 'Wide Medium' },
    { width: '400px', height: '400px', label: 'Square Large' },
    { width: '800px', height: '200px', label: 'Ultra Wide' },
    { width: '250px', height: '500px', label: 'Tall Narrow' },
    { width: '600px', height: '400px', label: 'Large Wide' },
  ]

  return (
    <main
      className="min-h-screen relative overflow-hidden py-20"
      style={{
        background: 'linear-gradient(180deg, #13202F 0%, #0A0E1A 50%, #000000 100%)',
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Glow Effect Test - Different Box Sizes
        </h1>

        <div className="space-y-8">
          {testBoxes.map((box, index) => (
            <div key={index} className="flex items-center gap-6">
              <div
                className="text-white/60 text-sm"
                style={{ width: '150px', flexShrink: 0 }}
              >
                {box.label}
                <br />
                <span className="text-white/40 text-xs">
                  {box.width} × {box.height}
                </span>
              </div>

              <NeonGlassBoxV2
                topHue={183}
                bottomHue={120}
                glowBlur={13}
                glowBrightBlur={4}
                glowOpacity={0.5}
                shineBrightness={0.2}
                backdropBlur={8}
                glowPosition="corners"
                style={{ width: box.width, height: box.height }}
              >
                <div className="p-6 h-full flex items-center justify-center">
                  <p className="text-white text-center">
                    Test content for {box.label}
                  </p>
                </div>
              </NeonGlassBoxV2>
            </div>
          ))}
        </div>

        <div className="mt-16 text-white/60 text-sm max-w-2xl mx-auto">
          <h2 className="text-white font-bold mb-4">What to look for:</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>Lines extending beyond box boundaries (horizontal/vertical)</li>
            <li>Lines appearing through content</li>
            <li>Inconsistent glow positioning across different sizes</li>
            <li>Glow elements clipped or cut off awkwardly</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
