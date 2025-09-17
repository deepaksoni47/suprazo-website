"use client"
import { useEffect, useState, useRef } from "react"
interface StatItemProps {
  number: number
  label: string
  suffix?: string
}
function StatItem({ number, label, suffix = "" }: StatItemProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const steps = 60
      const increment = number / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= number) {
          setCount(number)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isVisible, number])
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  )
}
export function StatsSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 md:p-12 rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem number={5} label="Years Experience" suffix="+" />
            <StatItem number={150} label="Projects Completed" suffix="+" />
            <StatItem number={50} label="Happy Clients" suffix="+" />
            <StatItem number={15} label="Team Members" suffix="+" />
          </div>
        </div>
      </div>
    </section>
  )
}
