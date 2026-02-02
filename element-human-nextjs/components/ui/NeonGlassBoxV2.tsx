'use client'

import { ReactNode } from 'react'

type GlowPosition = 'corners' | 'top-bottom' | 'left-right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'all-sides'

interface NeonGlassBoxV2Props {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  borderRadius?: number
  topHue?: number
  bottomHue?: number
  glowBlur?: number
  glowBrightBlur?: number
  glowOpacity?: number
  shineBrightness?: number
  backdropBlur?: number
  glowPosition?: GlowPosition
}

export function NeonGlassBoxV2({
  children,
  className = '',
  style: styleProp,
  borderRadius = 32,
  topHue = 183,
  bottomHue = 120,
  glowBlur = 13,
  glowBrightBlur = 4,
  glowOpacity = 0.5,
  shineBrightness = 0.2,
  backdropBlur = 8,
  glowPosition = 'corners',
}: NeonGlassBoxV2Props) {
  const cssVars = {
    '--box-radius': `${borderRadius}px`,
    '--top-hue': topHue,
    '--bottom-hue': bottomHue,
    '--glow-blur': `${glowBlur}px`,
    '--glow-bright-blur': `${glowBrightBlur}px`,
    '--glow-opacity': glowOpacity,
    '--shine-brightness': shineBrightness,
    '--backdrop-blur': `${backdropBlur}px`,
    backdropFilter: `blur(${backdropBlur}px)`,
    WebkitBackdropFilter: `blur(${backdropBlur}px)`,
  } as React.CSSProperties

  // Determine which glow elements to render based on position (NO SHINE)
  const renderGlowElements = () => {
    switch (glowPosition) {
      case 'top-bottom':
        return (
          <>
            <span className="glow glow-edge-top"></span>
            <span className="glow glow-edge-bottom"></span>
            <span className="glow glow-bright glow-edge-top"></span>
            <span className="glow glow-bright glow-edge-bottom"></span>
          </>
        )
      case 'left-right':
        return (
          <>
            <span className="glow glow-edge-left"></span>
            <span className="glow glow-edge-right"></span>
            <span className="glow glow-bright glow-edge-left"></span>
            <span className="glow glow-bright glow-edge-right"></span>
          </>
        )
      case 'top-left':
        return (
          <>
            <span className="glow glow-top-left"></span>
            <span className="glow glow-bright glow-top-left"></span>
          </>
        )
      case 'top-right':
        return (
          <>
            <span className="glow glow-top-right"></span>
            <span className="glow glow-bright glow-top-right"></span>
          </>
        )
      case 'bottom-left':
        return (
          <>
            <span className="glow glow-bottom-left"></span>
            <span className="glow glow-bright glow-bottom-left"></span>
          </>
        )
      case 'bottom-right':
        return (
          <>
            <span className="glow glow-bottom-right"></span>
            <span className="glow glow-bright glow-bottom-right"></span>
          </>
        )
      case 'all-sides':
        return (
          <>
            <span className="glow glow-top-left"></span>
            <span className="glow glow-top-right"></span>
            <span className="glow glow-bottom-left"></span>
            <span className="glow glow-bottom-right"></span>
            <span className="glow glow-bright glow-top-left"></span>
            <span className="glow glow-bright glow-top-right"></span>
            <span className="glow glow-bright glow-bottom-left"></span>
            <span className="glow glow-bright glow-bottom-right"></span>
          </>
        )
      case 'corners':
      default:
        return (
          <>
            <span className="glow glow-top-right"></span>
            <span className="glow glow-bottom-left"></span>
            <span className="glow glow-bright glow-top-right"></span>
            <span className="glow glow-bright glow-bottom-left"></span>
          </>
        )
    }
  }

  return (
    <div className={`neon-glass-box ${className}`} style={{ ...cssVars, ...styleProp }}>
      {renderGlowElements()}
      {children}
    </div>
  )
}
