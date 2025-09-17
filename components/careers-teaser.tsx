"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Rocket, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
export function CareersTeaser() {
  const [isVisible, setIsVisible] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -100px 0px",
    };
    const sectionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        setTimeout(() => setAnimationStep(1), 200);
        setTimeout(() => setAnimationStep(2), 600);
        setTimeout(() => setAnimationStep(3), 1000);
        setTimeout(() => setAnimationStep(4), 1400);
      }
    }, observerOptions);
    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }
    return () => {
      sectionObserver.disconnect();
    };
  }, []);
  return (
    <section ref={sectionRef} className="py-20 relative">
      <style jsx>{`
        @keyframes slideUpFade {
          0% {
            opacity: 0;
            transform: translateY(60px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(-100px);
          }
          50% {
            opacity: 1;
            transform: scale(1.1) translateY(-10px);
          }
          70% {
            transform: scale(0.9) translateY(5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-80px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(80px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.7) rotate(-5deg);
          }
          50% {
            transform: scale(1.05) rotate(2deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 30px rgba(147, 51, 234, 0.6);
          }
        }
        @keyframes countUp {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-slide-up {
          animation: slideUpFade 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }
        .animate-bounce-in {
          animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)
            forwards;
        }
        .animate-slide-left {
          animation: slideInLeft 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }
        .animate-slide-right {
          animation: slideInRight 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }
        .animate-fade-scale {
          animation: fadeInScale 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }
        .animate-count-up {
          animation: countUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .animate-shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        .animate-pulse-glow {
          animation: pulse 3s ease-in-out infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .scroll-hidden {
          opacity: 0;
          transform: translateY(60px);
        }
      `}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card
          className={`glass-card border-0 overflow-hidden transition-all duration-1000 ${
            isVisible ? "animate-slide-up" : "scroll-hidden"
          }`}
        >
          <CardContent className="p-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10">
                <div
                  className={`absolute inset-0 transition-opacity duration-1000 delay-300 ${
                    isVisible ? "opacity-20" : "opacity-0"
                  }`}
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 25% 25%, rgba(11, 100, 212, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 75% 75%, rgba(0, 194, 168, 0.1) 0%, transparent 50%)
                    `,
                  }}
                />
                <div
                  className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${
                    animationStep >= 1 ? "opacity-30 animate-shimmer" : ""
                  }`}
                />
              </div>
              <div className="relative z-10 p-8 md:p-12 text-center">
                <div className="flex justify-center space-x-4 mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center relative overflow-hidden transition-all duration-300 ${
                      animationStep >= 1
                        ? "animate-bounce-in animate-float"
                        : "scroll-hidden"
                    }`}
                    style={
                      {
                        animationDelay: animationStep >= 1 ? "0s" : "0s",
                        "--float-delay": "0s",
                      } as any
                    }
                  >
                    <Users className="w-6 h-6 text-white relative z-10" />
                    <div
                      className={`absolute inset-0 opacity-0 transition-opacity duration-300 ${
                        animationStep >= 2 ? "opacity-100 animate-shimmer" : ""
                      }`}
                    />
                  </div>
                  <div
                    className={`w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center relative overflow-hidden transition-all duration-300 ${
                      animationStep >= 1
                        ? "animate-bounce-in animate-float"
                        : "scroll-hidden"
                    }`}
                    style={
                      {
                        animationDelay: animationStep >= 1 ? "200ms" : "0s",
                        "--float-delay": "2s",
                      } as any
                    }
                  >
                    <Rocket className="w-6 h-6 text-white relative z-10" />
                    <div
                      className={`absolute inset-0 opacity-0 transition-opacity duration-300 ${
                        animationStep >= 2 ? "opacity-100 animate-shimmer" : ""
                      }`}
                    />
                  </div>
                  <div
                    className={`w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center relative overflow-hidden transition-all duration-300 ${
                      animationStep >= 1
                        ? "animate-bounce-in animate-float"
                        : "scroll-hidden"
                    }`}
                    style={
                      {
                        animationDelay: animationStep >= 1 ? "400ms" : "0s",
                        "--float-delay": "4s",
                      } as any
                    }
                  >
                    <Heart className="w-6 h-6 text-white relative z-10" />
                    <div
                      className={`absolute inset-0 opacity-0 transition-opacity duration-300 ${
                        animationStep >= 2 ? "opacity-100 animate-shimmer" : ""
                      }`}
                    />
                  </div>
                </div>
                <h2
                  className={`font-heading font-bold text-3xl md:text-4xl text-foreground mb-4 transition-all duration-800 ${
                    animationStep >= 1 ? "animate-slide-up" : "scroll-hidden"
                  }`}
                  style={{ animationDelay: "600ms" }}
                >
                  Join Our{" "}
                  <span
                    className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent relative inline-block"
                    style={{
                      backgroundSize: "200% 100%",
                      animation:
                        animationStep >= 2
                          ? "shimmer 3s ease-in-out infinite"
                          : "none",
                    }}
                  >
                    Team
                  </span>
                </h2>
                <p
                  className={`text-xl text-muted-foreground mb-8 max-w-2xl mx-auto transition-all duration-800 ${
                    animationStep >= 2 ? "animate-slide-up" : "scroll-hidden"
                  }`}
                  style={{ animationDelay: "800ms" }}
                >
                  Be part of an innovative team that's shaping the future of
                  technology. We offer exciting opportunities for growth,
                  learning, and making a real impact.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div
                    className={`text-center transition-all duration-600 ${
                      animationStep >= 3 ? "animate-count-up" : "scroll-hidden"
                    }`}
                    style={{ animationDelay: "1000ms" }}
                  >
                    <div className="text-2xl font-heading font-bold text-primary mb-1 relative">
                      Remote-First
                      <div
                        className="absolute inset-0 bg-primary/20 rounded-lg blur-lg opacity-0 animate-pulse-glow"
                        style={{ animationDelay: "1200ms" }}
                      />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Work from anywhere
                    </div>
                  </div>
                  <div
                    className={`text-center transition-all duration-600 ${
                      animationStep >= 3 ? "animate-count-up" : "scroll-hidden"
                    }`}
                    style={{ animationDelay: "1200ms" }}
                  >
                    <div className="text-2xl font-heading font-bold text-secondary mb-1 relative">
                      Learning Budget
                      <div
                        className="absolute inset-0 bg-secondary/20 rounded-lg blur-lg opacity-0 animate-pulse-glow"
                        style={{ animationDelay: "1400ms" }}
                      />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Continuous growth
                    </div>
                  </div>
                  <div
                    className={`text-center transition-all duration-600 ${
                      animationStep >= 3 ? "animate-count-up" : "scroll-hidden"
                    }`}
                    style={{ animationDelay: "1400ms" }}
                  >
                    <div className="text-2xl font-heading font-bold text-primary mb-1 relative">
                      Open Positions
                      <div
                        className="absolute inset-0 bg-primary/20 rounded-lg blur-lg opacity-0 animate-pulse-glow"
                        style={{ animationDelay: "1600ms" }}
                      />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Multiple roles available
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <div
                    className={`transition-all duration-700 ${
                      animationStep >= 4
                        ? "animate-slide-left"
                        : "scroll-hidden"
                    }`}
                    style={{ animationDelay: "1600ms" }}
                  >
                    <Link href="/careers">
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105 relative overflow-hidden animate-pulse-glow"
                      >
                        <span className="relative z-10">
                          View Open Positions
                        </span>
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                      </Button>
                    </Link>
                  </div>
                  <div
                    className={`transition-all duration-700 ${
                      animationStep >= 4
                        ? "animate-slide-right"
                        : "scroll-hidden"
                    }`}
                    style={{ animationDelay: "1800ms" }}
                  >
                    <Link href="/internships">
                      <Button
                        size="lg"
                        variant="outline"
                        className="glass border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 bg-transparent relative overflow-hidden"
                      >
                        <span className="relative z-10">
                          Internship Program
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700 ease-out" />
                      </Button>
                    </Link>
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
