"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Hand, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: "campuseye",
    icon: Eye,
    title: "CampusEye.ai",
    subtitle: "AI-Powered Campus Management",
    description:
      "Revolutionary campus management system powered by artificial intelligence for enhanced security, attendance tracking, and student engagement.",
    features: ["AI-powered surveillance", "Automated attendance", "Student analytics", "Real-time alerts"],
    status: "Live",
    image: "/ai-campus-management-dashboard-interface.jpg",
  },
  {
    id: "signlanguage",
    icon: Hand,
    title: "Sign Language App",
    subtitle: "Breaking Communication Barriers",
    description:
      "Innovative mobile application that translates sign language to text and speech, making communication accessible for everyone.",
    features: ["Real-time translation", "Multi-language support", "Gesture recognition", "Voice synthesis"],
    status: "Beta",
    image: "/sign-language-translation-mobile-app-interface.jpg",
  },
]

export function ProductsShowcase() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions that showcase our expertise in AI, mobile development, and cutting-edge technology.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {products.map((product) => {
            const IconComponent = product.icon
            return (
              <Card
                key={product.id}
                className="glass-card border-0 overflow-hidden transition-all duration-500 hover:scale-[1.02] cursor-pointer group"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <CardContent className="p-0">
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant={product.status === "Live" ? "default" : "secondary"}
                        className={product.status === "Live" ? "bg-green-500 text-white" : "bg-orange-500 text-white"}
                      >
                        {product.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-xl text-foreground">{product.title}</h3>
                        <p className="text-sm text-secondary">{product.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{product.description}</p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div
                      className={`flex space-x-3 transition-all duration-300 ${
                        hoveredProduct === product.id ? "opacity-100 translate-y-0" : "opacity-70 translate-y-2"
                      }`}
                    >
                      <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="glass border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/products">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105"
            >
              Explore All Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
