"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Mission",
    content:
      "To empower businesses with innovative technology solutions that drive growth, efficiency, and digital transformation while maintaining the highest standards of quality and customer satisfaction.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Eye,
    title: "Vision",
    content:
      "To be the leading technology partner that businesses trust for their digital transformation journey, creating a future where technology seamlessly integrates with human potential.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Heart,
    title: "Values",
    content:
      "Innovation, integrity, excellence, and collaboration form the foundation of everything we do. We believe in building lasting relationships and delivering solutions that make a real difference.",
    color: "from-green-500 to-emerald-500",
  },
]

export function MissionVision() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            What{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Drives Us</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Our mission, vision, and values guide every decision we make and every solution we create.
          </p>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {values.map((item, index) => {
            const IconComponent = item.icon
            return (
              <Card
                key={index}
                className="glass-card border-0 transition-all duration-500 hover:scale-105 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-glow transition-all duration-300`}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-4">{item.title}</h3>

                  {/* Content */}
                  <p className="text-foreground/80 leading-relaxed flex-grow">{item.content}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Stats */}
        <div className="mt-20 glass-card p-8 md:p-12 rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">100%</div>
              <div className="text-foreground/70">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-2">24/7</div>
              <div className="text-foreground/70">Support Available</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">15+</div>
              <div className="text-foreground/70">Expert Team Members</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-2">5+</div>
              <div className="text-foreground/70">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
