'use client'

import { LazyMotion, domAnimation } from 'framer-motion'

interface AnimationProviderProps {
  children: React.ReactNode
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  )
} 