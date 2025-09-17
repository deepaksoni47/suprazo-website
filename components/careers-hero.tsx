"use client";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Users, Rocket, Heart, Code, ArrowRight, Sparkles } from "lucide-react";
export function CareersHero() {
  const [activeIcon, setActiveIcon] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const icons = [Users, Rocket, Heart, Code];
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
            setTimeout(() => setAnimationStep(5), 1800),
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
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % icons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [icons.length]);
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
        @keyframes bounce-in {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
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
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out forwards;
        }
      `}</style>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/50 to-primary/10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-2xl animate-pulse-glow" />
        <div
          className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-xl animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            animationStep >= 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          {icons.map((Icon, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-1000 ${
                activeIcon === index
                  ? "opacity-15 scale-125"
                  : "opacity-8 scale-100"
              }`}
              style={{
                left: `${20 + index * 20}%`,
                top: `${25 + index * 15}%`,
                animationDelay: `${index * 0.5}s`,
              }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center animate-float shadow-lg backdrop-blur-sm">
                <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
            </div>
          ))}
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
              Join Our Team
            </span>
          </div>
          <h1
            className={`font-heading font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-6 leading-tight transition-all duration-1000 ${
              animationStep >= 2
                ? "opacity-100 animate-fade-in-scale"
                : "opacity-0"
            }`}
          >
            <span className="block mb-2">Join Our</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent relative mb-2">
              Innovation
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-lg animate-pulse-glow -z-10" />
            </span>
            <span className="block">Journey</span>
          </h1>
          <p
            className={`text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${
              animationStep >= 3
                ? "opacity-100 animate-slide-in-up"
                : "opacity-0"
            }`}
          >
            Be part of a dynamic team that's shaping the future of technology.
            We're looking for passionate individuals who want to make a real
            impact.
          </p>
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto transition-all duration-1000 ${
              animationStep >= 4 ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="glass-card p-4 rounded-xl text-center hover:scale-105 transition-all duration-300 animate-bounce-in backdrop-blur-sm border border-white/10"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="text-2xl font-heading font-bold text-primary mb-1">
                15+
              </div>
              <div className="text-xs text-muted-foreground">Team Members</div>
            </div>
            <div
              className="glass-card p-4 rounded-xl text-center hover:scale-105 transition-all duration-300 animate-bounce-in backdrop-blur-sm border border-white/10"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-2xl font-heading font-bold text-secondary mb-1">
                Remote
              </div>
              <div className="text-xs text-muted-foreground">Work Culture</div>
            </div>
            <div
              className="glass-card p-4 rounded-xl text-center hover:scale-105 transition-all duration-300 animate-bounce-in backdrop-blur-sm border border-white/10"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-2xl font-heading font-bold text-primary mb-1">
                5+
              </div>
              <div className="text-xs text-muted-foreground">
                Open Positions
              </div>
            </div>
            <div
              className="glass-card p-4 rounded-xl text-center hover:scale-105 transition-all duration-300 animate-bounce-in backdrop-blur-sm border border-white/10"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="text-2xl font-heading font-bold text-secondary mb-1">
                Growth
              </div>
              <div className="text-xs text-muted-foreground">Opportunities</div>
            </div>
          </div>
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 ${
              animationStep >= 5
                ? "opacity-100 animate-fade-in-scale"
                : "opacity-0"
            }`}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">View Open Positions</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 bg-transparent backdrop-blur-sm relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Internship Program</span>
            </Button>
          </div>
        </div>
      </div>
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
          animationStep >= 2 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-primary/20 animate-pulse-glow rounded-tl-lg" />
        <div
          className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-secondary/20 animate-pulse-glow rounded-tr-lg"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-secondary/20 animate-pulse-glow rounded-bl-lg"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-primary/20 animate-pulse-glow rounded-br-lg"
          style={{ animationDelay: "1.5s" }}
        />
      </div>
    </section>
  );
}
