"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Rocket, Users, Trophy } from "lucide-react"

const timelineEvents = [
  {
    year: "2019",
    icon: Lightbulb,
    title: "The Beginning",
    description:
      "SuPrazo Technologies was founded with a vision to bridge the gap between innovative technology and practical business solutions.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2020",
    icon: Rocket,
    title: "First Major Project",
    description:
      "Successfully delivered our first enterprise-level ERP system, establishing our reputation for quality and reliability in the market.",
    color: "from-purple-500 to-pink-500",
  },
  {
    year: "2021",
    icon: Users,
    title: "Team Expansion",
    description:
      "Grew our team to 15+ skilled professionals and expanded our service offerings to include AI/ML solutions and mobile development.",
    color: "from-green-500 to-emerald-500",
  },
  {
    year: "2022",
    icon: Trophy,
    title: "Innovation Milestone",
    description:
      "Launched CampusEye.ai, our flagship AI-powered campus management system, revolutionizing educational institution management.",
    color: "from-orange-500 to-red-500",
  },
]

export function StoryTimeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, index])
          }
        },
        { threshold: 0.3 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From a small startup to a trusted technology partner, here's how we've grown and evolved over the years.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary opacity-30 hidden md:block" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon
              const isVisible = visibleItems.includes(index)
              const isLeft = index % 2 === 0

              return (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} ${
                    isVisible ? "animate-in slide-in-from-bottom-4 duration-700" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
                    <Card className="glass-card border-0 transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${event.color} rounded-lg flex items-center justify-center`}
                          >
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-2xl font-heading font-bold text-primary">{event.year}</div>
                            <h3 className="font-heading font-semibold text-xl text-foreground">{event.title}</h3>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-background z-10" />

                  {/* Spacer for mobile */}
                  <div className="md:hidden w-full" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
