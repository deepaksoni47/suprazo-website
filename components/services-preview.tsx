"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, Database, Brain, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
    features: ["React & Next.js", "E-commerce Solutions", "Progressive Web Apps", "Custom CMS"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android platforms.",
    features: ["React Native", "Flutter", "Native iOS/Android", "App Store Optimization"],
  },
  {
    icon: Database,
    title: "ERP Systems",
    description: "Comprehensive enterprise resource planning solutions to streamline your business operations.",
    features: ["Custom ERP", "CRM Integration", "Inventory Management", "Financial Modules"],
  },
  {
    icon: Brain,
    title: "AI/ML Solutions",
    description: "Intelligent systems powered by artificial intelligence and machine learning technologies.",
    features: ["Computer Vision", "Natural Language Processing", "Predictive Analytics", "Automation"],
  },
]

export function ServicesPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="glass-card border-0 transition-all duration-300 hover:scale-105 cursor-pointer group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  </div>

                  {/* Features List - Shows on hover */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      hoveredIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-muted-foreground flex items-center">
                          <div className="w-1 h-1 bg-secondary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/services">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
