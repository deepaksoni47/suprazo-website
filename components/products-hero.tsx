"use client"

import { useState, useEffect } from "react"
import { Eye, Hand, Sparkles } from "lucide-react"

export function ProductsHero() {
  const [activeProduct, setActiveProduct] = useState(0)

  const products = [
    {
      icon: Eye,
      title: "CampusEye.ai",
      subtitle: "AI-Powered Campus Management",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Hand,
      title: "Sign Language App",
      subtitle: "Breaking Communication Barriers",
      color: "from-green-500 to-teal-500",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % products.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [products.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/5">
        {/* Product-themed particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full animate-float ${
                i % 2 === 0 ? "bg-primary/20" : "bg-secondary/20"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Floating product icons */}
        <div className="absolute inset-0">
          {products.map((product, index) => {
            const IconComponent = product.icon
            return (
              <div
                key={index}
                className={`absolute transition-all duration-1000 ${
                  activeProduct === index ? "opacity-15 scale-125" : "opacity-5 scale-100"
                }`}
                style={{
                  left: `${30 + index * 40}%`,
                  top: `${25 + index * 20}%`,
                }}
              >
                <div
                  className={`w-32 h-32 bg-gradient-to-r ${product.color} rounded-full flex items-center justify-center animate-float blur-sm`}
                >
                  <IconComponent className="w-16 h-16 text-white" />
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
            <span className="text-sm font-medium text-foreground">Innovation in Action</span>
          </div>

          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
            <span className="block">Our</span>
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Products
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover our flagship products that showcase our expertise in AI, mobile development, and innovative
            technology solutions.
          </p>

          {/* Product Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product, index) => {
              const IconComponent = product.icon
              return (
                <div
                  key={index}
                  className={`glass-card p-8 rounded-2xl cursor-pointer transition-all duration-500 ${
                    activeProduct === index
                      ? "scale-105 animate-glow border-primary/30"
                      : "hover:scale-102 border-transparent"
                  }`}
                  onClick={() => setActiveProduct(index)}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-2">{product.title}</h3>
                  <p className="text-muted-foreground">{product.subtitle}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
