'use client'

import { ReactNode } from 'react'

interface NeonGlassBoxProps {
  children: ReactNode
  className?: string
  borderRadius?: number
  topHue?: number
  bottomHue?: number
  glowBlur?: number
  glowBrightBlur?: number
  glowOpacity?: number
  shineBrightness?: number
  backdropBlur?: number
}

export function NeonGlassBox({
  children,
  className = '',
  borderRadius = 32,
  topHue = 183,
  bottomHue = 120,
  glowBlur = 12,
  glowBrightBlur = 2,
  glowOpacity = 1,
  shineBrightness = 0.5,
  backdropBlur = 20,
}: NeonGlassBoxProps) {
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

  return (
    <div className={`neon-glass-box ${className}`} style={cssVars}>
      <span className="glow glow-top"></span>
      <span className="glow glow-bottom"></span>
      <span className="glow glow-bright glow-top"></span>
      <span className="glow glow-bright glow-bottom"></span>
      {children}
    </div>
  )
}
