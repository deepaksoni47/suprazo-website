"use client"

import { useEffect, useState } from "react"
import { Sparkles, Users, Award, Globe } from "lucide-react"

export function AboutHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const achievements = [
    { icon: Users, value: "50+", label: "Happy Clients" },
    { icon: Award, value: "150+", label: "Projects Completed" },
    { icon: Globe, value: "5+", label: "Years Experience" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        {/* Interactive gradient orb */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full blur-3xl opacity-70 transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />

        {/* Floating elements */}
        <div className="absolute inset-0">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <div
                key={index}
                className="absolute animate-float opacity-10"
                style={{
                  left: `${20 + index * 25}%`,
                  top: `${30 + index * 15}%`,
                  animationDelay: `${index * 2}s`,
                  animationDuration: `${4 + index}s`,
                }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-8 animate-glow">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-foreground">Our Story</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
            <span className="block">Innovating the</span>
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Future
            </span>
            <span className="block">of Technology</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of technology experts dedicated to transforming businesses through innovative IT
            solutions and cutting-edge digital experiences.
          </p>

          {/* Achievement Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:animate-glow">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-heading font-bold text-primary mb-1">{achievement.value}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
