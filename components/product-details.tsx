"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Hand, CheckCircle, ArrowRight, Users, Shield, Zap, Globe, Smartphone, Brain } from "lucide-react"

const productDetails = [
  {
    id: "campuseye",
    icon: Eye,
    title: "CampusEye.ai",
    subtitle: "AI-Powered Campus Management System",
    status: "Live",
    description:
      "Revolutionary campus management platform that leverages artificial intelligence to enhance security, automate attendance tracking, and provide comprehensive analytics for educational institutions.",
    image: "/ai-campus-management-dashboard-interface.jpg",
    features: [
      "AI-powered facial recognition for attendance",
      "Real-time security monitoring and alerts",
      "Student behavior analytics and insights",
      "Automated report generation",
      "Multi-campus support and management",
      "Integration with existing systems",
    ],
    benefits: [
      { icon: Shield, title: "Enhanced Security", description: "24/7 AI monitoring for campus safety" },
      { icon: Zap, title: "Automated Processes", description: "Reduce manual work by 80%" },
      { icon: Brain, title: "Smart Analytics", description: "Data-driven insights for better decisions" },
      { icon: Users, title: "Student Engagement", description: "Improve student experience and outcomes" },
    ],
    technologies: ["Python", "TensorFlow", "OpenCV", "React", "Node.js", "MongoDB"],
    color: "from-blue-500 to-purple-500",
    demoUrl: "#",
    learnMoreUrl: "#",
  },
  {
    id: "signlanguage",
    icon: Hand,
    title: "Sign Language App",
    subtitle: "Breaking Communication Barriers",
    status: "Beta",
    description:
      "Innovative mobile application that uses advanced computer vision and machine learning to translate sign language gestures into text and speech in real-time, making communication accessible for everyone.",
    image: "/sign-language-translation-mobile-app-interface.jpg",
    features: [
      "Real-time sign language recognition",
      "Text-to-speech conversion",
      "Multi-language support",
      "Gesture learning tutorials",
      "Offline functionality",
      "Community features and sharing",
    ],
    benefits: [
      { icon: Globe, title: "Universal Access", description: "Break down communication barriers" },
      { icon: Smartphone, title: "Mobile-First", description: "Available anywhere, anytime" },
      { icon: Brain, title: "AI-Powered", description: "Advanced gesture recognition technology" },
      { icon: Users, title: "Community", description: "Connect with the deaf and hard-of-hearing community" },
    ],
    technologies: ["React Native", "TensorFlow Lite", "OpenCV", "Firebase", "Python", "FastAPI"],
    color: "from-green-500 to-teal-500",
    demoUrl: "#",
    learnMoreUrl: "#",
  },
]

export function ProductDetails() {
  const [activeProduct, setActiveProduct] = useState("campuseye")

  const currentProduct = productDetails.find((product) => product.id === activeProduct) || productDetails[0]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Navigation */}
        <div className="flex justify-center gap-4 mb-16">
          {productDetails.map((product) => {
            const IconComponent = product.icon
            return (
              <button
                key={product.id}
                onClick={() => setActiveProduct(product.id)}
                className={`glass-card p-6 rounded-xl transition-all duration-300 flex flex-col items-center space-y-3 min-w-[200px] ${
                  activeProduct === product.id
                    ? "scale-105 animate-glow border-primary/50"
                    : "hover:scale-105 border-transparent"
                }`}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center`}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <div className="font-heading font-semibold text-foreground">{product.title}</div>
                  <Badge
                    variant={product.status === "Live" ? "default" : "secondary"}
                    className={`mt-1 ${product.status === "Live" ? "bg-green-500 text-white" : "bg-orange-500 text-white"}`}
                  >
                    {product.status}
                  </Badge>
                </div>
              </button>
            )
          })}
        </div>

        {/* Product Detail Card */}
        <Card className="glass-card border-0 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - Product Image */}
              <div className="relative h-96 lg:h-auto">
                <img
                  src={currentProduct.image || "/placeholder.svg"}
                  alt={currentProduct.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <Badge
                    variant={currentProduct.status === "Live" ? "default" : "secondary"}
                    className={`${currentProduct.status === "Live" ? "bg-green-500 text-white" : "bg-orange-500 text-white"}`}
                  >
                    {currentProduct.status}
                  </Badge>
                </div>
              </div>

              {/* Right Side - Product Info */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${currentProduct.color} rounded-xl flex items-center justify-center`}
                  >
                    <currentProduct.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-3xl text-foreground">{currentProduct.title}</h2>
                    <p className="text-secondary font-medium">{currentProduct.subtitle}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{currentProduct.description}</p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1 group">
                    Try Demo
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="glass border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground flex-1 bg-transparent"
                  >
                    Learn More
                  </Button>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">Built With</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentProduct.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-white/10 text-foreground border-white/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {/* Features */}
          <Card className="glass-card border-0">
            <CardContent className="p-8">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-6">Key Features</h3>
              <div className="space-y-4">
                {currentProduct.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="glass-card border-0">
            <CardContent className="p-8">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-6">Benefits</h3>
              <div className="space-y-6">
                {currentProduct.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${currentProduct.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
