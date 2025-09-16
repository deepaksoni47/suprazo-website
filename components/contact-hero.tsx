"use client"

import { useEffect, useState } from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const contactMethods = [
    { icon: Mail, label: "Email", value: "info@suprazotech.in" },
    { icon: Phone, label: "Phone", value: "+91 XXX XXX XXXX" },
    { icon: MapPin, label: "Location", value: "India" },
    { icon: Clock, label: "Hours", value: "24/7 Support" },
  ]

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/5">
        {/* Interactive gradient orb */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-70 transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />

        {/* Floating contact icons */}
        <div className="absolute inset-0">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon
            return (
              <div
                key={index}
                className="absolute animate-float opacity-10"
                style={{
                  left: `${15 + index * 20}%`,
                  top: `${20 + index * 15}%`,
                  animationDelay: `${index * 1.5}s`,
                  animationDuration: `${4 + index * 0.5}s`,
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
            <span className="block">Get in</span>
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with innovative technology solutions? Let's start the conversation.
          </p>

          {/* Quick Contact Methods */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <div
                  key={index}
                  className="glass-card p-4 rounded-xl text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-2 mx-auto group-hover:animate-glow">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-xs text-muted-foreground mb-1">{method.label}</div>
                  <div className="text-sm font-medium text-foreground">{method.value}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
