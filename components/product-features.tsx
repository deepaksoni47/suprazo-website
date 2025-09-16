"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Globe, Users, Brain, Smartphone } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Advanced machine learning algorithms that continuously learn and improve performance.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption and compliance with industry standards.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description: "Lightning-fast processing with real-time updates and instant notifications.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Multi-language support and accessibility features for users worldwide.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform",
    description: "Seamless experience across all devices - mobile, tablet, and desktop.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built with community feedback and continuous improvement based on user needs.",
    color: "from-teal-500 to-green-500",
  },
]

export function ProductFeatures() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Why Choose Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our products are built with cutting-edge technology and designed with user experience at the forefront.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index} className="glass-card border-0 transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:animate-glow transition-all duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
