"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "scale"
  duration?: number
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const variants = {
    up: { y: 60, opacity: 0 },
    down: { y: -60, opacity: 0 },
    left: { x: -60, opacity: 0 },
    right: { x: 60, opacity: 0 },
    scale: { scale: 0.8, opacity: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial={variants[direction]}
      animate={isInView ? { x: 0, y: 0, scale: 1, opacity: 1 } : variants[direction]}
      transition={{
        duration,
        delay,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
