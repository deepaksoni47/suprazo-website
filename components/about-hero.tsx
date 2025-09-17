"use client";

import { useEffect, useState, useRef } from "react";
import { Sparkles, Users, Award, Globe } from "lucide-react";

export function AboutHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Intersection Observer for initial animations
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

  const achievements = [
    { icon: Users, value: "50+", label: "Happy Clients" },
    { icon: Award, value: "150+", label: "Projects Completed" },
    { icon: Globe, value: "5+", label: "Years Experience" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(1deg);
          }
          66% {
            transform: translateY(-5px) rotate(-1deg);
          }
        }

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

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
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

        @keyframes textGlow {
          0%,
          100% {
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            text-shadow: 0 0 30px rgba(147, 51, 234, 0.5);
          }
        }

        @keyframes particleFloat {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.1;
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(90deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-10px) translateX(-5px) rotate(180deg);
            opacity: 0.2;
          }
          75% {
            transform: translateY(-30px) translateX(-10px) rotate(270deg);
            opacity: 0.4;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        .animate-text-glow {
          animation: textGlow 4s ease-in-out infinite;
        }
        .animate-particle-float {
          animation: particleFloat 8s ease-in-out infinite;
        }

        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out forwards;
        }
        .animate-slide-in-down {
          animation: slideInDown 0.8s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
        .animate-fade-in-scale {
          animation: fadeInScale 0.8s ease-out forwards;
        }
        .animate-bounce-in {
          animation: bounceIn 0.8s ease-out forwards;
        }
      `}</style>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        {/* Interactive gradient orb */}
        <div
          className={`absolute w-96 h-96 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full blur-3xl transition-all duration-1000 ease-out ${
            isVisible ? "opacity-70" : "opacity-0"
          }`}
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />

        {/* Secondary gradient orbs */}
        <div
          className={`absolute w-64 h-64 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-2xl transition-all duration-1500 ease-out ${
            animationStep >= 1 ? "opacity-60" : "opacity-0"
          }`}
          style={{
            right: "10%",
            top: "20%",
          }}
        />
        <div
          className={`absolute w-48 h-48 bg-gradient-to-r from-primary/8 to-secondary/8 rounded-full blur-xl transition-all duration-2000 ease-out ${
            animationStep >= 2 ? "opacity-50" : "opacity-0"
          }`}
          style={{
            left: "10%",
            bottom: "30%",
          }}
        />

        {/* Floating elements */}
        <div className="absolute inset-0">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className={`absolute animate-particle-float transition-all duration-1000 ${
                  animationStep >= 2 ? "opacity-10" : "opacity-0"
                }`}
                style={{
                  left: `${20 + index * 25}%`,
                  top: `${30 + index * 15}%`,
                  animationDelay: `${index * 2 + 1}s`,
                  animationDuration: `${8 + index * 2}s`,
                  transitionDelay: `${index * 300}ms`,
                }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center animate-glow">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional floating particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full transition-all duration-1000 ${
                animationStep >= 3 ? "opacity-40" : "opacity-0"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                transitionDelay: `${i * 100}ms`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className={`inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-8 animate-glow transition-all duration-800 ${
              isVisible
                ? "opacity-100 transform translate-y-0 animate-bounce-in"
                : "opacity-0 transform translate-y-8"
            }`}
          >
            <Sparkles className="w-4 h-4 text-secondary animate-spin" />
            <span className="text-sm font-medium text-foreground">
              Our Story
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
            <span
              className={`block transition-all duration-800 ${
                animationStep >= 1
                  ? "opacity-100 transform translate-y-0 animate-slide-in-up"
                  : "opacity-0 transform translate-y-12"
              }`}
            >
              Innovating the
            </span>
            <span
              className={`block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-text-glow transition-all duration-800 ${
                animationStep >= 2
                  ? "opacity-100 transform translate-y-0 animate-scale-in"
                  : "opacity-0 transform translate-y-12"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Future
            </span>
            <span
              className={`block transition-all duration-800 ${
                animationStep >= 3
                  ? "opacity-100 transform translate-y-0 animate-slide-in-up"
                  : "opacity-0 transform translate-y-12"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              of Technology
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${
              animationStep >= 3
                ? "opacity-100 transform translate-y-0 animate-fade-in-scale"
                : "opacity-0 transform translate-y-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            We are a passionate team of technology experts dedicated to
            transforming businesses through innovative IT solutions and
            cutting-edge digital experiences.
          </p>

          {/* Achievement Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className={`glass-card p-6 rounded-xl text-center group hover:scale-105 transition-all duration-500 ${
                    animationStep >= 4
                      ? "opacity-100 transform translate-y-0 animate-bounce-in"
                      : "opacity-0 transform translate-y-12"
                  }`}
                  style={{
                    transitionDelay: `${800 + index * 200}ms`,
                    animationDelay: `${800 + index * 200}ms`,
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:animate-glow transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <IconComponent className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="text-2xl font-heading font-bold text-primary mb-1 group-hover:animate-text-glow transition-all duration-300">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {achievement.label}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
