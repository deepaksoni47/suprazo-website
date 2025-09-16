"use client"

import { Card, CardContent } from "@/components/ui/card"
import { FileText, Users, Code, CheckCircle } from "lucide-react"

const processSteps = [
  {
    icon: FileText,
    title: "Submit Application",
    description: "Send us your resume, portfolio, and a brief cover letter explaining why you want to join our team.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Initial Interview",
    description: "Have a conversation with our HR team to discuss your background, interests, and career goals.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Code,
    title: "Technical Assessment",
    description: "Complete a practical coding challenge or design task relevant to the position you're applying for.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: CheckCircle,
    title: "Final Interview",
    description: "Meet with the team lead and discuss your technical assessment, ask questions, and finalize details.",
    color: "from-orange-500 to-red-500",
  },
]

export function ApplicationProcess() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Application{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined hiring process is designed to be transparent, fair, and efficient for all candidates.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <Card key={index} className="glass-card border-0 transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  {/* Step Number */}
                  <div className="text-6xl font-heading font-bold text-primary/20 mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:animate-glow transition-all duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Timeline */}
        <Card className="glass-card border-0">
          <CardContent className="p-8 md:p-12">
            <h3 className="font-heading font-bold text-2xl text-foreground text-center mb-8">Typical Timeline</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-heading font-bold text-primary mb-2">1-2 Days</div>
                <div className="text-sm text-muted-foreground">Application Review</div>
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-secondary mb-2">3-5 Days</div>
                <div className="text-sm text-muted-foreground">Initial Interview</div>
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-primary mb-2">1 Week</div>
                <div className="text-sm text-muted-foreground">Technical Assessment</div>
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-secondary mb-2">2-3 Days</div>
                <div className="text-sm text-muted-foreground">Final Decision</div>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-6 text-sm">
              Total process typically takes 2-3 weeks from application to offer.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
