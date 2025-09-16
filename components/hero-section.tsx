"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

        @keyframes slideUpFadeScale {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes expandWidth {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 100%;
            opacity: 1;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(1deg);
          }
          66% {
            transform: translateY(-10px) rotate(-1deg);
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(147, 51, 234, 0.4),
              0 0 40px rgba(59, 130, 246, 0.2);
          }
        }

        .animate-slide-up-1 {
          animation: slideUpFade 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animate-slide-up-2 {
          animation: slideUpFadeScale 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animate-slide-up-3 {
          animation: slideUpFade 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
          animation-delay: 0.6s;
          opacity: 0;
        }

        .animate-slide-up-4 {
          animation: slideUpFade 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
          animation-delay: 0.8s;
          opacity: 0;
        }

        .animate-slide-up-5 {
          animation: fadeInScale 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
          animation-delay: 1s;
          opacity: 0;
        }

        .animate-expand-line {
          animation: expandWidth 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
          animation-delay: 0.1s;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .loaded .animate-slide-up-1,
        .loaded .animate-slide-up-2,
        .loaded .animate-slide-up-3,
        .loaded .animate-slide-up-4,
        .loaded .animate-slide-up-5 {
          animation-play-state: running;
        }
      `}</style>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10">
        {/* Animated decorative line */}
        <div className="absolute top-1/3 left-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r from-primary/80 to-secondary/80 ${
              isLoaded ? "animate-expand-line" : ""
            } w-0`}
          />
        </div>

        {/* Floating Aurora Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full animate-float ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              style={{
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`,
                background: `radial-gradient(circle, rgba(59,130,246,0.4), rgba(147,51,234,0.3) 70%)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: "blur(1px)",
                animationDelay: `${Math.random() * 6 + 1}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
                transition: "opacity 2s ease-out",
                transitionDelay: `${1.2 + Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>

        {/* Interactive gradient orb */}
        <div
          className={`absolute w-96 h-96 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-40" : "opacity-0"
          }`}
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transitionDelay: isLoaded ? "0s" : "0.5s",
          }}
        />

        {/* Grid overlay */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            isLoaded ? "opacity-10" : "opacity-0"
          }`}
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147,51,234,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            transitionDelay: "0.8s",
          }}
        />
      </div>

      {/* Hero Content */}
      <div
        className={`relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center ${
          isLoaded ? "loaded" : ""
        }`}
      >
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          {/* Badge */}
          <div className="animate-slide-up-1 mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-lg animate-glow">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-white">
                Innovative IT Solutions
              </span>
            </div>
          </div>

          {/* Main Heading with staggered animation */}
          <div className="mb-6">
            <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight">
              <span className="block animate-slide-up-2">Driving Digital</span>
              <span
                className="block text-primary animate-slide-up-2"
                style={{ animationDelay: "0.5s" }}
              >
                Excellence
              </span>
              <span
                className="block animate-slide-up-2"
                style={{ animationDelay: "0.7s" }}
              >
                with Smart IT Solutions
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="animate-slide-up-3 text-xl md:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge web development, mobile
            applications, ERP systems, and AI/ML solutions crafted by industry
            experts.
          </p>

          {/* CTA Buttons */}
          <div className="animate-slide-up-4 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transform"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 bg-transparent transform"
            >
              View Our Work
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-slide-up-5 absolute bottom--0.1 left-1/2 transform -translate-x-1/2 z-10">
            <div className="w-6 h-10 border-2 border-foreground/60 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-foreground/60 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Side Glow Animation */}
      <div
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-1/2 hidden lg:block transition-opacity duration-1000 ${
          isLoaded ? "opacity-20" : "opacity-0"
        }`}
        style={{ transitionDelay: "1.5s" }}
      >
        <div className="w-full h-full bg-gradient-to-l from-primary/30 to-transparent rounded-l-full animate-pulse" />
      </div>
    </section>
  );
}
