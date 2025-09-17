"use client";
import { useState, useEffect, useRef } from "react";
import { Eye, Hand, Sparkles, Zap, Code, Smartphone } from "lucide-react";
export function ProductsHero() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const timeouts = [
            setTimeout(() => setAnimationStep(1), 200),
            setTimeout(() => setAnimationStep(2), 600),
            setTimeout(() => setAnimationStep(3), 1000),
            setTimeout(() => setAnimationStep(4), 1400),
          ];
          return () => timeouts.forEach(clearTimeout);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          25% {
            transform: translate3d(-10px, -10px, 0) rotate(1deg);
          }
          50% {
            transform: translate3d(0, -20px, 0) rotate(0deg);
          }
          75% {
            transform: translate3d(10px, -10px, 0) rotate(-1deg);
          }
        }
        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(var(--primary), 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(var(--primary), 0.6),
              0 0 60px rgba(var(--secondary), 0.3);
          }
        }
        @keyframes slide-in-up {
          from {
            transform: translate3d(0, 30px, 0);
            opacity: 0;
          }
          to {
            transform: translate3d(0, 0, 0);
            opacity: 1;
          }
        }
        @keyframes fade-in-scale {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes pulse-glow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out forwards;
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.8s ease-out forwards;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/50 to-secondary/10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-2xl animate-pulse-glow" />
        <div
          className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-xl animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-float ${
                i % 3 === 0
                  ? "bg-primary/30"
                  : i % 3 === 1
                  ? "bg-secondary/30"
                  : "bg-accent/20"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            animationStep >= 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute top-1/4 left-1/6 animate-float opacity-20"
            style={{ animationDelay: "0.5s" }}
          >
            <Smartphone className="w-8 h-8 md:w-12 md:h-12 text-primary" />
          </div>
          <div
            className="absolute top-3/4 right-1/6 animate-float opacity-20"
            style={{ animationDelay: "1.5s" }}
          >
            <Code className="w-8 h-8 md:w-12 md:h-12 text-secondary" />
          </div>
          <div
            className="absolute top-1/2 right-1/4 animate-float opacity-20"
            style={{ animationDelay: "2.5s" }}
          >
            <Zap className="w-6 h-6 md:w-10 md:h-10 text-accent" />
          </div>
          <div
            className="absolute bottom-1/4 left-1/3 animate-float opacity-20"
            style={{ animationDelay: "3s" }}
          >
            <Eye className="w-7 h-7 md:w-11 md:h-11 text-primary" />
          </div>
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div
            className={`inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full mb-8 backdrop-blur-sm border border-white/10 transition-all duration-1000 ${
              animationStep >= 1
                ? "opacity-100 animate-slide-in-up animate-glow"
                : "opacity-0"
            }`}
          >
            <Sparkles className="w-4 h-4 text-secondary animate-pulse-glow" />
            <span className="text-sm md:text-base font-medium text-foreground">
              Innovation in Action
            </span>
          </div>
          <h1
            className={`font-heading font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-6 leading-tight transition-all duration-1000 ${
              animationStep >= 2
                ? "opacity-100 animate-fade-in-scale"
                : "opacity-0"
            }`}
          >
            <span className="block mb-2">Our</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent relative">
              Products
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-lg animate-pulse-glow -z-10" />
            </span>
          </h1>
          <p
            className={`text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${
              animationStep >= 3
                ? "opacity-100 animate-slide-in-up"
                : "opacity-0"
            }`}
          >
            Discover our flagship products that showcase our expertise in AI,
            mobile development, and innovative technology solutions.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ${
              animationStep >= 4
                ? "opacity-100 animate-fade-in-scale"
                : "opacity-0"
            }`}
          >
            <button className="group glass-card px-8 py-4 rounded-full border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
                Explore Products
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </button>
            <button className="group glass-card px-8 py-4 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <span className="text-foreground font-semibold group-hover:text-primary transition-colors duration-300">
                View Demo
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
          animationStep >= 2 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-primary/20 animate-pulse-glow" />
        <div
          className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-secondary/20 animate-pulse-glow"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-secondary/20 animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-primary/20 animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
      </div>
    </section>
  );
}
