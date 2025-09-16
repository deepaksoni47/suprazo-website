import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Download, ExternalLink } from "lucide-react"

export function ProductsCTA() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* CampusEye.ai CTA */}
          <Card className="glass-card border-0 overflow-hidden group hover:scale-[1.02] transition-all duration-300">
            <CardContent className="p-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                <div className="relative z-10 p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white font-bold text-xl">CE</span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-3">CampusEye.ai</h3>
                  <p className="text-muted-foreground mb-6">
                    Transform your campus management with AI-powered solutions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1 group">
                      Try Demo
                      <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                      variant="outline"
                      className="glass border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1 bg-transparent"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sign Language App CTA */}
          <Card className="glass-card border-0 overflow-hidden group hover:scale-[1.02] transition-all duration-300">
            <CardContent className="p-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10" />
                <div className="relative z-10 p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white font-bold text-xl">SL</span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-3">Sign Language App</h3>
                  <p className="text-muted-foreground mb-6">
                    Break communication barriers with real-time sign language translation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground flex-1 group">
                      <Download className="mr-2 w-4 h-4" />
                      Download Beta
                    </Button>
                    <Button
                      variant="outline"
                      className="glass border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground flex-1 bg-transparent"
                    >
                      Join Waitlist
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main CTA */}
        <Card className="glass-card border-0 overflow-hidden mt-12">
          <CardContent className="p-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10">
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 25% 25%, rgba(11, 100, 212, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 75% 75%, rgba(0, 194, 168, 0.1) 0%, transparent 50%)
                    `,
                  }}
                />
              </div>

              <div className="relative z-10 p-8 md:p-12 text-center">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Have a Product{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Idea?
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's bring your vision to life. We specialize in turning innovative ideas into market-ready products.
                </p>

                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
