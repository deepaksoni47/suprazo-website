import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";
export function AboutCTA() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="glass-card border-0 overflow-hidden">
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
                  Ready to Work{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Together?
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can help transform your business with
                  innovative technology solutions tailored to your needs.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105"
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="glass border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Let's Talk
                  </Button>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-muted-foreground mb-4">
                    Prefer a different approach?
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                    <a
                      href="mailto:info@suprazotech.in"
                      className="text-secondary hover:text-secondary/80 transition-colors"
                    >
                      info@suprazotech.in
                    </a>
                    <span className="hidden sm:block text-muted-foreground">
                      •
                    </span>
                    <a
                      href="tel:+91XXXXXXXXXX"
                      className="text-secondary hover:text-secondary/80 transition-colors"
                    >
                      +91 96656 58240
                    </a>
                    <span className="hidden sm:block text-muted-foreground">
                      •
                    </span>
                    <button className="text-secondary hover:text-secondary/80 transition-colors flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Schedule a Call
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
