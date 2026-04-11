"use client"

import * as React from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
  amount?: number
  once?: boolean
}

interface FloatProps {
  children?: React.ReactNode
  className?: string
  delay?: number
  distance?: number
  duration?: number
}

const easing = [0.22, 1, 0.36, 1] as const

function meetsViewportAmount(element: HTMLDivElement, amount: number) {
  const rect = element.getBoundingClientRect()
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth
  const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)
  const visibleWidth = Math.min(rect.right, viewportWidth) - Math.max(rect.left, 0)

  if (visibleHeight <= 0 || visibleWidth <= 0) {
    return false
  }

  const visibleArea = visibleHeight * visibleWidth
  const totalArea = Math.max(rect.height * rect.width, 1)

  return visibleArea / totalArea >= amount
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
  y = 28,
  amount = 0.18,
  once = true,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion()
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { amount, once: false })
  const [hasCheckedViewport, setHasCheckedViewport] = React.useState(false)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const element = ref.current

    if (!element) {
      return
    }

    setIsVisible(meetsViewportAmount(element, amount))
    setHasCheckedViewport(true)
  }, [amount])

  React.useEffect(() => {
    if (!hasCheckedViewport) {
      return
    }

    if (once) {
      if (isInView) {
        setIsVisible(true)
      }

      return
    }

    setIsVisible(isInView)
  }, [hasCheckedViewport, isInView, once])

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ delay, duration, ease: easing }}
    >
      {children}
    </motion.div>
  )
}

export function Float({
  children,
  className,
  delay = 0,
  distance = 14,
  duration = 7,
}: FloatProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: distance }}
      animate={{ opacity: 1, y: [distance * 0.4, -distance, distance * 0.2] }}
      transition={{
        delay,
        duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}