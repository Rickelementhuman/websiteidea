import { cn } from '@/lib/utils/cn'

interface CardProps {
  children: React.ReactNode
  variant?: 'light' | 'medium' | 'dark'
  hover?: boolean
  accent?: boolean
  className?: string
}

export function Card({
  children,
  variant = 'medium',
  hover = true,
  accent = false,
  className = ''
}: CardProps) {
  const baseClasses = "rounded-2xl border backdrop-blur-lg transition-all duration-300"

  const variantClasses = {
    light: "bg-white/25 border-white/30",
    medium: "bg-white/15 border-white/20",
    dark: "bg-brand-navy/50 border-white/10"
  }

  const hoverClasses = hover
    ? "hover:bg-white/30 hover:shadow-glass-lg hover:-translate-y-1"
    : ""

  const accentClass = accent ? "glass-card-accent" : ""

  return (
    <div className={cn(baseClasses, variantClasses[variant], hoverClasses, accentClass, className)}>
      {children}
    </div>
  )
}
