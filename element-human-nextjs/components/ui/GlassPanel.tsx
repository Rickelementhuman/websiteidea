import { cn } from '@/lib/utils/cn'

interface GlassPanelProps {
  children: React.ReactNode
  variant?: 'default' | 'light' | 'dark'
  className?: string
}

export function GlassPanel({
  children,
  variant = 'default',
  className = ''
}: GlassPanelProps) {
  const variantClasses = {
    default: 'glass-panel',
    light: 'glass-panel-light',
    dark: 'glass-panel-dark'
  }

  return (
    <div className={cn(variantClasses[variant], 'rounded-2xl', className)}>
      {children}
    </div>
  )
}
