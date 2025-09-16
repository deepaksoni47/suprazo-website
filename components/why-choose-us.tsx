"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Users, Award, Clock, Globe } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Proven Expertise",
    description: "5+ years of experience delivering high-quality solutions across various industries and technologies.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Technology",
    description: "We stay ahead of the curve, using the latest technologies and best practices in all our projects.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description: "Your success is our priority. We work closely with you to understand and exceed your expectations.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "Rigorous testing and quality control processes ensure that every solution meets the highest standards.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "We respect your time and deadlines, consistently delivering projects on schedule without compromising quality.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Globe,
    title: "Scalable Solutions",
    description: "Our solutions are built to grow with your business, ensuring long-term value and adaptability.",
    color: "from-teal-500 to-green-500",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SuPrazo Technologies
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that truly make a difference.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <Card
                key={index}
                className="glass-card border-0 transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${reason.color} rounded-xl flex items-center justify-center mb-4 group-hover:animate-glow transition-all duration-300`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
