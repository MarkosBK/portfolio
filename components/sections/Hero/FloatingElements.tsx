'use client'

import { m } from 'framer-motion'

const floatingVariants = {
  animate: {
    y: [-20, 20, -20],
    rotate: [0, 180, 360],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

const scaleVariants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export function FloatingElements() {
  return (
    <>
      {/* Floating geometric shapes */}
      <m.div
        className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-sm"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '0s' }}
      />
      
      <m.div
        className="absolute top-40 right-32 w-16 h-16 bg-gradient-to-l from-secondary/20 to-primary/20 rotate-45 blur-sm"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      />
      
      <m.div
        className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-br from-accent/15 to-secondary/15 rounded-full blur-sm"
        variants={scaleVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
      />
      
      <m.div
        className="absolute bottom-20 right-20 w-12 h-12 bg-gradient-to-tl from-primary/25 to-accent/25 rotate-12 blur-sm"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '3s' }}
      />
      
      <m.div
        className="absolute top-1/3 left-1/3 w-8 h-8 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-full blur-sm"
        variants={scaleVariants}
        animate="animate"
        style={{ animationDelay: '4s' }}
      />
      
      <m.div
        className="absolute top-3/4 right-1/3 w-14 h-14 bg-gradient-to-l from-accent/20 to-secondary/20 rotate-45 blur-sm"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '5s' }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
    </>
  )
} 