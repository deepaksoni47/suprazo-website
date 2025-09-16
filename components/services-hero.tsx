"use client"

import { useEffect, useState } from "react"
import { Code, Smartphone, Database, Brain } from "lucide-react"

export function ServicesHero() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    { icon: Code, title: "Web Development", color: "from-blue-500 to-cyan-500" },
    { icon: Smartphone, title: "Mobile Development", color: "from-purple-500 to-pink-500" },
    { icon: Database, title: "ERP Systems", color: "from-green-500 to-emerald-500" },
    { icon: Brain, title: "AI/ML Solutions", color: "from-orange-500 to-red-500" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [services.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        {/* Floating service icons */}
        <div className="absolute inset-0">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className={`absolute transition-all duration-1000 ${
                  activeService === index ? "opacity-20 scale-110" : "opacity-5 scale-100"
                }`}
                style={{
                  left: `${20 + index * 20}%`,
                  top: `${20 + index * 15}%`,
                  animationDelay: `${index * 0.5}s`,
                }}
              >
                <div
                  className={`w-24 h-24 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center animate-float`}
                >
                  <IconComponent className="w-12 h-12 text-white" />
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
            <span className="block">Comprehensive</span>
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              IT Services
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide end-to-end technology solutions that drive business growth and
            digital transformation.
          </p>

          {/* Service Indicators */}
          <div className="flex justify-center space-x-4 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`glass-card p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeService === index ? "scale-110 animate-glow" : "hover:scale-105"
                }`}
                onClick={() => setActiveService(index)}
              >
                <service.icon className="w-6 h-6 text-foreground" />
                <div className="text-xs mt-2 text-muted-foreground">{service.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
