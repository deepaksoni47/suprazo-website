"use client";

import { useEffect, useState, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  MessageCircle,
  Send,
} from "lucide-react";

export function ContactHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Staggered animation sequence
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-16 pb-12"
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
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/50 to-secondary/10">
        {/* Geometric Background Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-2xl animate-pulse-glow" />
        <div
          className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/3 left-1/3 w-24 h-24 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-xl animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />

        {/* Interactive gradient orb that follows mouse */}
        <div
          className="absolute w-80 h-80 md:w-96 md:h-96 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full blur-3xl opacity-60 transition-all duration-700 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 160,
            top: mousePosition.y - 160,
            transform: `translate3d(0, 0, 0)`,
          }}
        />

        {/* Additional floating elements for visual richness */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            animationStep >= 2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute top-1/4 right-1/4 animate-float opacity-10"
            style={{ animationDelay: "0.5s" }}
          >
            <MessageCircle className="w-8 h-8 md:w-12 md:h-12 text-primary" />
          </div>
          <div
            className="absolute bottom-1/3 left-1/5 animate-float opacity-10"
            style={{ animationDelay: "2s" }}
          >
            <Send className="w-6 h-6 md:w-10 md:h-10 text-secondary" />
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className={`inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full mb-8 backdrop-blur-sm border border-white/10 transition-all duration-1000 ${
              animationStep >= 1
                ? "opacity-100 animate-slide-in-up animate-glow"
                : "opacity-0"
            }`}
          >
            <Sparkles className="w-4 h-4 text-secondary animate-pulse-glow" />
            <span className="text-sm md:text-base font-medium text-foreground">
              Let's Connect
            </span>
          </div>

          {/* Main Title */}
          <h1
            className={`font-heading font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-6 leading-tight transition-all duration-1000 ${
              animationStep >= 2
                ? "opacity-100 animate-fade-in-scale"
                : "opacity-0"
            }`}
          >
            <span className="block mb-2">Get in</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent relative">
              Touch
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
            Ready to transform your business with innovative technology
            solutions? Let's start the conversation.
          </p>

          {/* Call-to-action buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ${
              animationStep >= 4
                ? "opacity-100 animate-fade-in-scale"
                : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <button className="group glass-card px-8 py-4 rounded-full border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold relative z-10">
                Start a Project
              </span>
            </button>

            <button className="group glass-card px-8 py-4 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="text-foreground font-semibold group-hover:text-primary transition-colors duration-300 relative z-10">
                Schedule Call
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
          animationStep >= 2 ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Corner decorations with contact theme */}
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

        {/* Additional contact-themed decorative lines */}
        <div
          className="absolute top-1/2 left-0 w-16 h-0.5 bg-gradient-to-r from-transparent to-primary/30 animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-0 w-16 h-0.5 bg-gradient-to-l from-transparent to-secondary/30 animate-pulse-glow"
          style={{ animationDelay: "2.5s" }}
        />
      </div>
    </section>
  );
}
