import type { ReactNode } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface AnimatedSectionProps {
  children: ReactNode
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-up' | 'fade-in'
  delay?: number
  className?: string
}

export function AnimatedSection({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  className = ''
}: AnimatedSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '-50px',
    triggerOnce: true
  })

  const animationClasses = {
    'fade-up': 'animate-fade-up',
    'fade-down': 'animate-fade-down',
    'fade-left': 'animate-fade-left',
    'fade-right': 'animate-fade-right',
    'scale-up': 'animate-scale-up',
    'fade-in': 'animate-fade-in'
  }

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`${className} transition-all duration-700 ${
        isVisible ? animationClasses[animation] : 'opacity-0'
      }`}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  )
}
