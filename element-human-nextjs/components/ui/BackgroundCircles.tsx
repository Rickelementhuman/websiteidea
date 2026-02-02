'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

interface Circle {
  size: number
  color: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  delay: number
  blur: number
  opacity: number
  parallaxSpeed: number
}

const circles: Circle[] = [
  // Large slow-moving circles
  { size: 1000, color: '#10A8B7', top: '-20%', left: '-15%', delay: 0, blur: 60, opacity: 0.3, parallaxSpeed: 0.2 },
  { size: 900, color: '#FF2198', top: '10%', right: '-20%', delay: 3, blur: 55, opacity: 0.35, parallaxSpeed: 0.25 },
  { size: 800, color: '#8F21A1', bottom: '5%', left: '20%', delay: 6, blur: 50, opacity: 0.25, parallaxSpeed: 0.3 },

  // Medium-speed circles
  { size: 600, color: '#54E42B', top: '40%', right: '10%', delay: 2, blur: 40, opacity: 0.3, parallaxSpeed: 0.4 },
  { size: 550, color: '#F9BE00', bottom: '20%', right: '-10%', delay: 5, blur: 45, opacity: 0.28, parallaxSpeed: 0.45 },
  { size: 500, color: '#10A8B7', top: '60%', left: '-5%', delay: 4, blur: 38, opacity: 0.32, parallaxSpeed: 0.5 },

  // Smaller fast-moving circles
  { size: 400, color: '#FF2198', top: '25%', left: '30%', delay: 1, blur: 35, opacity: 0.35, parallaxSpeed: 0.6 },
  { size: 350, color: '#8F21A1', bottom: '40%', right: '25%', delay: 7, blur: 32, opacity: 0.3, parallaxSpeed: 0.65 },
  { size: 300, color: '#54E42B', top: '70%', left: '50%', delay: 3.5, blur: 28, opacity: 0.33, parallaxSpeed: 0.7 },
  { size: 250, color: '#F9BE00', top: '15%', right: '40%', delay: 2.5, blur: 25, opacity: 0.28, parallaxSpeed: 0.75 },
]

export function BackgroundCircles() {
  const { scrollY } = useScroll()

  return (
    <>
      {circles.map((circle, index) => {
        // Create parallax effect based on circle size and speed
        const y = useTransform(scrollY, [0, 1000], [0, -circle.parallaxSpeed * 120])

        const positionStyles: React.CSSProperties = {}
        if (circle.top) positionStyles.top = circle.top
        if (circle.bottom) positionStyles.bottom = circle.bottom
        if (circle.left) positionStyles.left = circle.left
        if (circle.right) positionStyles.right = circle.right

        return (
          <motion.div
            key={index}
            className="absolute rounded-full pointer-events-none"
            style={{
              ...positionStyles,
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              background: `radial-gradient(circle, ${circle.color} 0%, ${circle.color}AA 40%, transparent 70%)`,
              filter: `blur(${circle.blur}px)`,
              opacity: circle.opacity,
              y,
            }}
          />
        )
      })}
    </>
  )
}
