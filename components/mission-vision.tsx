"use client";

import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Sparkles, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    content:
      "To empower businesses with innovative technology solutions that drive growth, efficiency, and digital transformation while maintaining the highest standards of quality and customer satisfaction.",
    color: "from-blue-500 to-cyan-500",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
  },
  {
    icon: Eye,
    title: "Vision",
    content:
      "To be the leading technology partner that businesses trust for their digital transformation journey, creating a future where technology seamlessly integrates with human potential.",
    color: "from-purple-500 to-pink-500",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
  },
  {
    icon: Heart,
    title: "Values",
    content:
      "Innovation, integrity, excellence, and collaboration form the foundation of everything we do. We believe in building lasting relationships and delivering solutions that make a real difference.",
    color: "from-green-500 to-emerald-500",
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
  },
];

export function MissionVision() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      headerObserver.observe(sectionRef.current);
    }

    return () => headerObserver.disconnect();
  }, []);

  useEffect(() => {
    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    return () => statsObserver.disconnect();
  }, []);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8) rotate(-5deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) rotate(-10deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.05) rotate(2deg);
          }
          70% {
            transform: scale(0.95) rotate(-1deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3),
              0 0 40px rgba(59, 130, 246, 0.1);
          }
          50% {
            box-shadow: 0 0 40px rgba(147, 51, 234, 0.4),
              0 0 60px rgba(147, 51, 234, 0.2);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
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

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes countUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
        .animate-bounce-in {
          animation: bounceIn 0.8s ease-out forwards;
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        .animate-pulse-subtle {
          animation: pulse 2s ease-in-out infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-count-up {
          animation: countUp 0.6s ease-out forwards;
        }
        .animate-shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>

      {/* Interactive Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Mouse-following gradient */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-primary/8 to-secondary/8 rounded-full blur-3xl opacity-60 transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 4}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              <div
                className="w-2 h-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full"
                style={{ filter: "blur(1px)" }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-8"
          }`}
        >
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-6 animate-glow">
            <Sparkles className="w-4 h-4 text-primary animate-pulse-subtle" />
            <span className="text-sm font-medium text-foreground">
              Our Foundation
            </span>
          </div>

          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
            <span
              className={`block transition-all duration-800 ${
                headerVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-4"
              }`}
            >
              What
            </span>
            <span
              className={`block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent transition-all duration-800 ${
                headerVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Drives Us
            </span>
          </h2>
          <p
            className={`text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed transition-all duration-800 ${
              headerVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Our mission, vision, and values guide every decision we make and
            every solution we create.
          </p>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {values.map((item, index) => {
            const IconComponent = item.icon;
            const isVisible = visibleItems.includes(index);
            const animationClass =
              index === 0
                ? "animate-slide-in-left"
                : index === 1
                ? "animate-slide-in-up"
                : "animate-slide-in-right";

            return (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`transition-all duration-800 ${
                  isVisible ? `opacity-100 ${animationClass}` : "opacity-0"
                }`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                <Card className="glass-card border border-white/10 hover:border-white/20 transition-all duration-500 group hover:shadow-2xl h-full">
                  <CardContent className="p-8 text-center h-full flex flex-col relative overflow-hidden">
                    {/* Background gradient on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    <div className="relative z-10">
                      {/* Icon */}
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${
                          item.color
                        } rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-glow transition-all duration-300 group-hover:rotate-3 group-hover:scale-110 ${
                          isVisible ? "animate-bounce-in" : ""
                        }`}
                        style={{ animationDelay: `${index * 200 + 400}ms` }}
                      >
                        <IconComponent className="w-10 h-10 text-white transition-transform duration-300 group-hover:scale-110" />
                      </div>

                      {/* Title */}
                      <h3 className="font-heading font-bold text-2xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>

                      {/* Content */}
                      <p className="text-foreground/80 leading-relaxed flex-grow group-hover:text-foreground/90 transition-colors duration-300 mb-6">
                        {item.content}
                      </p>

                      {/* Hover arrow */}
                      <div className="flex justify-center">
                        <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                      </div>
                    </div>

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Additional Stats */}
        <div
          ref={statsRef}
          className={`mt-20 glass-card p-8 md:p-12 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 group hover:shadow-2xl ${
            statsVisible ? "opacity-100 animate-slide-in-up" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                value: "100%",
                label: "Client Satisfaction",
                color: "text-primary",
              },
              {
                value: "24/7",
                label: "Support Available",
                color: "text-secondary",
              },
              {
                value: "15+",
                label: "Expert Team Members",
                color: "text-primary",
              },
              {
                value: "5+",
                label: "Years of Excellence",
                color: "text-secondary",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className={`group/stat transition-all duration-500 ${
                  statsVisible ? "animate-count-up" : ""
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`text-3xl md:text-4xl font-heading font-bold ${stat.color} mb-2 group-hover/stat:scale-110 transition-transform duration-300`}
                >
                  {stat.value}
                </div>
                <div className="text-foreground/70 group-hover/stat:text-foreground/90 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </section>
  );
}
