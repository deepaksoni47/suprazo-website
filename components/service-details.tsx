"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Globe, Smartphone, Database, Brain, CheckCircle, ArrowRight, Clock, Users, Zap } from "lucide-react"

const serviceDetails = [
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    subtitle: "Modern Web Solutions",
    description:
      "Create stunning, responsive websites and web applications that engage users and drive business results.",
    features: [
      "Custom Website Development",
      "E-commerce Solutions",
      "Progressive Web Apps (PWA)",
      "Content Management Systems",
      "API Development & Integration",
      "Performance Optimization",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    timeline: "4-12 weeks",
    teamSize: "3-5 developers",
    projects: "50+ completed",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Development",
    subtitle: "Cross-Platform Mobile Apps",
    description:
      "Build native and cross-platform mobile applications that provide exceptional user experiences across all devices.",
    features: [
      "Native iOS & Android Apps",
      "Cross-Platform Development",
      "UI/UX Design",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Redux"],
    timeline: "6-16 weeks",
    teamSize: "2-4 developers",
    projects: "30+ completed",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "erp",
    icon: Database,
    title: "ERP Systems",
    subtitle: "Enterprise Resource Planning",
    description:
      "Streamline your business operations with custom ERP solutions designed to improve efficiency and productivity.",
    features: [
      "Custom ERP Development",
      "CRM Integration",
      "Inventory Management",
      "Financial Management",
      "Reporting & Analytics",
      "Multi-location Support",
    ],
    technologies: ["Python", "Django", "PostgreSQL", "Redis", "Docker", "AWS"],
    timeline: "12-24 weeks",
    teamSize: "4-8 developers",
    projects: "20+ completed",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI/ML Solutions",
    subtitle: "Artificial Intelligence & Machine Learning",
    description:
      "Leverage the power of AI and machine learning to automate processes, gain insights, and create intelligent applications.",
    features: [
      "Computer Vision",
      "Natural Language Processing",
      "Predictive Analytics",
      "Chatbots & Virtual Assistants",
      "Recommendation Systems",
      "Process Automation",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "AWS ML"],
    timeline: "8-20 weeks",
    teamSize: "2-5 specialists",
    projects: "15+ completed",
    color: "from-orange-500 to-red-500",
  },
]

export function ServiceDetails() {
  const [activeService, setActiveService] = useState("web")

  const currentService = serviceDetails.find((service) => service.id === activeService) || serviceDetails[0]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Service Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {serviceDetails.map((service) => {
            const IconComponent = service.icon
            return (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`glass-card p-4 rounded-lg transition-all duration-300 flex items-center space-x-3 ${
                  activeService === service.id
                    ? "scale-105 animate-glow border-primary/50"
                    : "hover:scale-105 border-transparent"
                }`}
              >
                <div
                  className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}
                >
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-heading font-semibold text-foreground">{service.title}</div>
                  <div className="text-xs text-muted-foreground">{service.subtitle}</div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Service Detail Card */}
        <Card className="glass-card border-0 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - Service Info */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${currentService.color} rounded-xl flex items-center justify-center`}
                  >
                    <currentService.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-3xl text-foreground">{currentService.title}</h2>
                    <p className="text-secondary font-medium">{currentService.subtitle}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{currentService.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div className="font-heading font-bold text-foreground">{currentService.timeline}</div>
                    <div className="text-xs text-muted-foreground">Timeline</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="font-heading font-bold text-foreground">{currentService.teamSize}</div>
                    <div className="text-xs text-muted-foreground">Team Size</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div className="font-heading font-bold text-foreground">{currentService.projects}</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                </div>

                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full group">
                  Get Started with {currentService.title}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Right Side - Features & Technologies */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 lg:p-12">
                {/* Features */}
                <div className="mb-8">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {currentService.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-4">Technologies We Use</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentService.technologies.map((tech, index) => (
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
      </div>
    </section>
  )
}
