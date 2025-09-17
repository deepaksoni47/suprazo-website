"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Lightbulb, Code, Rocket } from "lucide-react"
const processSteps = [
  {
    icon: Search,
    title: "Discovery & Analysis",
    description:
      "We start by understanding your business needs, goals, and challenges through comprehensive research and analysis.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Strategy & Planning",
    description:
      "Our team develops a detailed strategy and project roadmap tailored to your specific requirements and objectives.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "Development & Testing",
    description:
      "We build your solution using cutting-edge technologies while maintaining the highest quality standards through rigorous testing.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description:
      "After successful deployment, we provide ongoing support and maintenance to ensure optimal performance and growth.",
    color: "from-orange-500 to-red-500",
  },
]
export function ProcessSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We follow a proven methodology to deliver exceptional results for every project.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <Card key={index} className="glass-card border-0 transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="text-6xl font-heading font-bold text-primary/20 mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:animate-glow transition-all duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl">
          <div className="flex justify-between items-center px-20">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
