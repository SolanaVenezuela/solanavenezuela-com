"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"

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

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount, once }}
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