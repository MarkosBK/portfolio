import { cn } from '@/lib/cn'

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

export const H1 = ({ children, className }: TypographyProps) => (
  <h1 className={cn(
    'text-4xl md:text-6xl font-bold tracking-tight leading-tight',
    className
  )}>
    {children}
  </h1>
)

export const H2 = ({ children, className }: TypographyProps) => (
  <h2 className={cn(
    'text-3xl md:text-5xl font-bold tracking-tight leading-tight text-foreground',
    className
  )}>
    {children}
  </h2>
)

export const H3 = ({ children, className }: TypographyProps) => (
  <h3 className={cn(
    'text-2xl md:text-3xl font-semibold tracking-tight leading-tight text-foreground',
    className
  )}>
    {children}
  </h3>
)

export const H4 = ({ children, className }: TypographyProps) => (
  <h4 className={cn(
    'text-xl md:text-2xl font-semibold tracking-tight leading-tight text-foreground',
    className
  )}>
    {children}
  </h4>
)

export const Body = ({ children, className }: TypographyProps) => (
  <p className={cn(
    'text-lg leading-7 text-muted-foreground',
    className
  )}>
    {children}
  </p>
)

export const BodySmall = ({ children, className }: TypographyProps) => (
  <p className={cn(
    'text-base leading-6 text-muted-foreground',
    className
  )}>
    {children}
  </p>
)

export const Caption = ({ children, className }: TypographyProps) => (
  <span className={cn(
    'text-sm text-muted-foreground',
    className
  )}>
    {children}
  </span>
)

export const GradientText = ({ children, className }: TypographyProps) => (
  <span className={cn(
    'bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent gradient-text',
    className
  )}>
    {children}
  </span>
) 