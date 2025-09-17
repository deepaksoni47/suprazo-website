"use client";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Rocket, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
export function CareersTeaser() {
  const [isVisible, setIsVisible] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);

  const cleanupTimeouts = useCallback(() => {
    timeoutRefs.current.forEach((timeout) => clearTimeout(timeout));
    timeoutRefs.current = [];
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    };
    const sectionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Simplified animation timing - less staggered, more natural
        cleanupTimeouts();
        timeoutRefs.current = [
          setTimeout(() => setAnimationStep(1), 100),
          setTimeout(() => setAnimationStep(2), 200),
        ];
      }
    }, observerOptions);
    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }
    return () => {
      sectionObserver.disconnect();
      cleanupTimeouts();
    };
  }, [cleanupTimeouts]);
  return (
    <section ref={sectionRef} className="py-20 relative">
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-fade-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .scroll-hidden {
          opacity: 0;
          transform: translate3d(0, 40px, 0);
        }
      `}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card
          className={`glass-card border-0 overflow-hidden transition-all duration-500 ${
            isVisible ? "animate-fade-up" : "scroll-hidden"
          }`}
        >
          <CardContent className="p-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10">
                <div
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    isVisible ? "opacity-20" : "opacity-0"
                  }`}
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 25% 25%, rgba(11, 100, 212, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 75% 75%, rgba(0, 194, 168, 0.1) 0%, transparent 50%)
                    `,
                  }}
                />
                <div className="absolute top-10 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
                <div
                  className="absolute bottom-10 right-10 w-1.5 h-1.5 bg-secondary/30 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute top-1/2 right-20 w-1 h-1 bg-primary/20 rounded-full animate-pulse"
                  style={{ animationDelay: "2s" }}
                />
              </div>
              <div className="relative z-10 p-8 md:p-12 text-center">
                <div
                  className={`flex justify-center space-x-4 mb-6 transition-all duration-300 ${
                    isVisible ? "animate-fade-in" : "scroll-hidden"
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h2
                  className={`font-heading font-bold text-3xl md:text-4xl text-foreground mb-4 transition-all duration-300 ${
                    isVisible ? "animate-fade-up" : "scroll-hidden"
                  }`}
                  style={{ animationDelay: "100ms" }}
                >
                  Join Our{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Team
                  </span>
                </h2>
                <p
                  className={`text-xl text-muted-foreground mb-8 max-w-2xl mx-auto transition-all duration-300 ${
                    isVisible ? "animate-fade-up" : "scroll-hidden"
                  }`}
                  style={{ animationDelay: "150ms" }}
                >
                  Be part of an innovative team that's shaping the future of
                  technology. We offer exciting opportunities for growth,
                  learning, and making a real impact.
                </p>
                <div
                  className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 transition-all duration-300 ${
                    animationStep >= 1 ? "animate-fade-in" : "scroll-hidden"
                  } `}
                  style={{ animationDelay: "200ms" }}
                >
                  <div className="text-center transition-all duration-300 hover:scale-105 cursor-pointer group">
                    <div className="text-2xl font-heading font-bold text-primary mb-1 group-hover:text-primary/80 transition-colors duration-300">
                      Remote-First
                    </div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      Work from anywhere
                    </div>
                  </div>
                  <div className="text-center transition-all duration-300 hover:scale-105 cursor-pointer group">
                    <div className="text-2xl font-heading font-bold text-secondary mb-1 group-hover:text-secondary/80 transition-colors duration-300">
                      Learning Budget
                    </div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      Continuous growth
                    </div>
                  </div>
                  <div className="text-center transition-all duration-300 hover:scale-105 cursor-pointer group">
                    <div className="text-2xl font-heading font-bold text-primary mb-1 group-hover:text-primary/80 transition-colors duration-300">
                      Open Positions
                    </div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      Multiple roles available
                    </div>
                  </div>
                </div>
                <div
                  className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-300 ${
                    animationStep >= 2 ? "animate-fade-in" : "scroll-hidden"
                  }`}
                  style={{ animationDelay: "250ms" }}
                >
                  <Link href="/careers">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105 relative overflow-hidden"
                    >
                      <span className="relative z-10">View Open Positions</span>
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                    </Button>
                  </Link>
                  <Link href="/internships">
                    <Button
                      size="lg"
                      variant="outline"
                      className="glass border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 bg-transparent relative overflow-hidden group"
                    >
                      <span className="relative z-10">Internship Program</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
