'use client'

import { m } from 'framer-motion'

const floatingVariants = {
  animate: {
    y: [-20, 20, -20],
    rotate: [0, 180, 360],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut' as const,
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
      ease: 'easeInOut' as const,
    },
  },
}

export function FloatingElements() {
  return (
    <>
      {/* Floating geometric shapes */}
      <m.div
        className="from-primary/20 to-accent/20 absolute top-20 left-20 h-20 w-20 rounded-full bg-gradient-to-r blur-sm"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '0s' }}
      />

      <m.div
        className="from-secondary/20 to-primary/20 absolute top-40 right-32 h-16 w-16 rotate-45 bg-gradient-to-l blur-sm"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      />

      <m.div
        className="from-accent/15 to-secondary/15 absolute bottom-32 left-1/4 h-24 w-24 rounded-full bg-gradient-to-br blur-sm"
        variants={scaleVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
      />

      <m.div
        className="from-primary/25 to-accent/25 absolute right-20 bottom-20 h-12 w-12 rotate-12 bg-gradient-to-tl blur-sm"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '3s' }}
      />

      <m.div
        className="from-secondary/30 to-primary/30 absolute top-1/3 left-1/3 h-8 w-8 rounded-full bg-gradient-to-r blur-sm"
        variants={scaleVariants}
        animate="animate"
        style={{ animationDelay: '4s' }}
      />

      <m.div
        className="from-accent/20 to-secondary/20 absolute top-3/4 right-1/3 h-14 w-14 rotate-45 bg-gradient-to-l blur-sm"
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
