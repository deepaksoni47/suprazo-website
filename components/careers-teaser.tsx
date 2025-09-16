"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Rocket, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CareersTeaser() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="glass-card border-0 overflow-hidden">
          <CardContent className="p-0">
            <div className="relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 25% 25%, rgba(11, 100, 212, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 75% 75%, rgba(0, 194, 168, 0.1) 0%, transparent 50%)
                    `,
                  }}
                />
              </div>

              <div className="relative z-10 p-8 md:p-12 text-center">
                {/* Icons */}
                <div className="flex justify-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center animate-float">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div
                    className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center animate-float"
                    style={{ animationDelay: "1s" }}
                  >
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div
                    className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center animate-float"
                    style={{ animationDelay: "2s" }}
                  >
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Join Our{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Team</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Be part of an innovative team that's shaping the future of technology. We offer exciting opportunities
                  for growth, learning, and making a real impact.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-heading font-bold text-primary mb-1">Remote-First</div>
                    <div className="text-sm text-muted-foreground">Work from anywhere</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-heading font-bold text-secondary mb-1">Learning Budget</div>
                    <div className="text-sm text-muted-foreground">Continuous growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-heading font-bold text-primary mb-1">Open Positions</div>
                    <div className="text-sm text-muted-foreground">Multiple roles available</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/careers">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105"
                    >
                      View Open Positions
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/internships">
                    <Button
                      size="lg"
                      variant="outline"
                      className="glass border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
                    >
                      Internship Program
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
