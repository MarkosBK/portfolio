'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/cn'

interface TypingAnimationProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

export function TypingAnimation({ 
  text, 
  className, 
  speed = 100, 
  delay = 500 
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      let index = 0
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1))
          index++
        } else {
          clearInterval(interval)
          setIsComplete(true)
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [text, speed, delay])

  return (
    <span className={cn(className)}>
      {displayText}
      <span 
        className={cn(
          'animate-blink border-r-2 border-primary ml-1',
          isComplete && 'opacity-0'
        )}
      >
        |
      </span>
    </span>
  )
} 