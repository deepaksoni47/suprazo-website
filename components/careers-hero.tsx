"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Users, Rocket, Heart, Code, ArrowRight } from "lucide-react"

export function CareersHero() {
  const [activeIcon, setActiveIcon] = useState(0)

  const icons = [Users, Rocket, Heart, Code]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % icons.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [icons.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        {/* Floating career-themed icons */}
        <div className="absolute inset-0">
          {icons.map((Icon, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-1000 ${
                activeIcon === index ? "opacity-15 scale-125" : "opacity-5 scale-100"
              }`}
              style={{
                left: `${20 + index * 20}%`,
                top: `${25 + index * 15}%`,
                animationDelay: `${index * 0.5}s`,
              }}
            >
              <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center animate-float">
                <Icon className="w-12 h-12 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
            <span className="block">Join Our</span>
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Innovation
            </span>
            <span className="block">Journey</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Be part of a dynamic team that's shaping the future of technology. We're looking for passionate individuals
            who want to make a real impact.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
            <div className="glass-card p-4 rounded-xl text-center">
              <div className="text-2xl font-heading font-bold text-primary mb-1">15+</div>
              <div className="text-xs text-muted-foreground">Team Members</div>
            </div>
            <div className="glass-card p-4 rounded-xl text-center">
              <div className="text-2xl font-heading font-bold text-secondary mb-1">Remote</div>
              <div className="text-xs text-muted-foreground">Work Culture</div>
            </div>
            <div className="glass-card p-4 rounded-xl text-center">
              <div className="text-2xl font-heading font-bold text-primary mb-1">5+</div>
              <div className="text-xs text-muted-foreground">Open Positions</div>
            </div>
            <div className="glass-card p-4 rounded-xl text-center">
              <div className="text-2xl font-heading font-bold text-secondary mb-1">Growth</div>
              <div className="text-xs text-muted-foreground">Opportunities</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105"
            >
              View Open Positions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
            >
              Internship Program
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
