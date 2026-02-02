import { cn } from '@/lib/utils/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'glass' | 'solid' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function Button({
  variant = 'glass',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses = "font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center"

  const variants = {
    glass: "glass-button text-brand-navy",
    solid: "bg-brand-navy text-white hover:bg-brand-navy/90 hover:shadow-lg hover:-translate-y-1",
    outline: "border-2 border-neutral-300 text-brand-navy hover:border-brand-navy hover:bg-neutral-50"
  }

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg"
  }

  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
