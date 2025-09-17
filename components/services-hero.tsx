"use client";

import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { Code, Smartphone, Database, Brain, Sparkles } from "lucide-react";

export function ServicesHero() {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const services = useMemo(
    () => [
      {
        icon: Code,
        title: "Web Development",
        color: "from-blue-500 to-purple-600",
      },
      {
        icon: Smartphone,
        title: "Mobile Apps",
        color: "from-purple-500 to-pink-600",
      },
      {
        icon: Database,
        title: "Database Solutions",
        color: "from-green-500 to-teal-600",
      },
      {
        icon: Brain,
        title: "AI/ML Services",
        color: "from-orange-500 to-red-600",
      },
      {
        icon: Sparkles,
        title: "UI/UX Design",
        color: "from-pink-500 to-rose-600",
      },
    ],
    []
  );

  // Mouse tracking for interactive background (throttled for performance)
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    let timeoutId: number;
    const throttledMouseMove = (e: MouseEvent) => {
      if (timeoutId) return;
      timeoutId = window.setTimeout(() => {
        handleMouseMove(e);
        timeoutId = 0;
      }, 16); // ~60fps
    };

    window.addEventListener("mousemove", throttledMouseMove);
    return () => {
      window.removeEventListener("mousemove", throttledMouseMove);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleMouseMove]);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    let timeouts: number[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            timeouts.push(
              window.setTimeout(() => setAnimationStep(1), 300),
              window.setTimeout(() => setAnimationStep(2), 800),
              window.setTimeout(() => setAnimationStep(3), 1200),
              window.setTimeout(() => setAnimationStep(4), 1600),
              window.setTimeout(() => setAnimationStep(5), 2000)
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      timeouts.forEach((t) => clearTimeout(t));
    };
  }, []);

  // Rotate active service icon focus
  useEffect(() => {
    if (animationStep < 4) return;
    const interval = window.setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [animationStep, services.length]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -20px, 0);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }
        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(147, 51, 234, 0.4);
          }
        }
        @keyframes textGlow {
          0%,
          100% {
            filter: drop-shadow(0 0 6px rgba(59, 130, 246, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 12px rgba(147, 51, 234, 0.7));
          }
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 30px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translate3d(0, -30px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale3d(0.8, 0.8, 1);
          }
          to {
            opacity: 1;
            transform: scale3d(1, 1, 1);
          }
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale3d(0.9, 0.9, 1);
          }
          to {
            opacity: 1;
            transform: scale3d(1, 1, 1);
          }
        }
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale3d(0.5, 0.5, 1);
          }
          50% {
            opacity: 1;
            transform: scale3d(1.02, 1.02, 1);
          }
          100% {
            opacity: 1;
            transform: scale3d(1, 1, 1);
          }
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
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
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        .animate-pulse-subtle {
          animation: pulse 2s ease-in-out infinite;
        }
        .animate-text-glow {
          animation: textGlow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        {/* Interactive gradient orb */}
        <div
          className={`absolute w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl transition-all duration-1000 ease-out ${
            isVisible ? "opacity-60" : "opacity-0"
          }`}
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            willChange: "transform",
          }}
        />
        {/* Secondary gradient orbs */}
        <div
          className={`absolute w-64 h-64 bg-gradient-to-r from-secondary/8 to-primary/8 rounded-full blur-2xl transition-all duration-1500 ease-out ${
            animationStep >= 2 ? "opacity-50" : "opacity-0"
          }`}
          style={{ right: "15%", top: "20%" }}
        />
        {/* Floating service icons */}
        <div className="absolute inset-0">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`absolute transition-all duration-1000 ${
                  animationStep >= 3
                    ? "opacity-15 scale-100"
                    : "opacity-0 scale-80"
                } hidden lg:block`}
                style={{
                  left: `${10 + index * 20}%`,
                  top: `${20 + index * 15}%`,
                  animationDelay: `${index * 0.5 + 1}s`,
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                <div
                  className={`w-24 h-24 xl:w-32 xl:h-32 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center animate-float shadow-lg`}
                  style={{
                    animationDuration: `${6 + index * 2}s`,
                    animationDelay: `${index * 0.8}s`,
                  }}
                >
                  <IconComponent className="w-12 h-12 xl:w-16 xl:h-16 text-white" />
                </div>
              </div>
            );
          })}
        </div>
        {/* Decorative elements */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-primary/40 rounded-full transition-all duration-1000 ${
                animationStep >= 2 ? "opacity-60" : "opacity-0"
              } hidden md:block animate-pulse-subtle`}
              style={{
                left: `${20 + i * 20}%`,
                top: `${20 + i * 20}%`,
                animationDelay: `${i * 0.7}s`,
                transitionDelay: `${i * 150}ms`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            />
          ))}
        </div>
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full transition-all duration-1000 ${
                animationStep >= 2 ? "opacity-60" : "opacity-0"
              } animate-float`}
              style={{
                width: `${2 + (i % 2)}px`,
                height: `${2 + (i % 2)}px`,
                background: `rgba(59,130,246,${0.4 + (i % 3) * 0.2})`,
                left: `${10 + i * 12}%`,
                top: `${15 + i * 10}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${8 + i * 2}s`,
                willChange: "transform",
              }}
            />
          ))}
        </div>
        {/* Ambient lights */}
        <div className="absolute inset-0">
          <div
            className={`absolute w-[600px] h-[400px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-3xl transition-all duration-1000 ${
              animationStep >= 1 ? "opacity-100" : "opacity-0"
            } animate-pulse-subtle`}
            style={{
              top: "30%",
              right: "10%",
              animationDuration: "8s",
              animationDelay: "2s",
            }}
          />
          <div
            className={`absolute w-[500px] h-[300px] bg-gradient-radial from-secondary/8 via-transparent to-transparent rounded-full blur-3xl transition-all duration-1000 ${
              animationStep >= 2 ? "opacity-100" : "opacity-0"
            } animate-float`}
            style={{
              bottom: "10%",
              left: "5%",
              animationDuration: "10s",
              animationDelay: "1s",
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Badge */}
        <div className="mb-8">
          <div
            className={`inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium transition-all duration-1000 ${
              animationStep >= 1
                ? "opacity-100 transform scale-100 animate-bounce-in"
                : "opacity-0 transform scale-90"
            }`}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Our Services
          </div>
        </div>

        <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
          <span
            className={`block transition-all duration-800 ${
              animationStep >= 1
                ? "opacity-100 transform translate-y-0 animate-slide-in-down"
                : "opacity-0 transform translate-y-12"
            }`}
          >
            Comprehensive
          </span>
          <span
            className={`block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-text-glow transition-all duration-800 ${
              animationStep >= 2
                ? "opacity-100 transform translate-y-0 animate-scale-in"
                : "opacity-0 transform translate-y-12"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            IT Services
          </span>
        </h1>

        <p
          className={`text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${
            animationStep >= 3
              ? "opacity-100 transform translate-y-0 animate-fade-in-scale"
              : "opacity-0 transform translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          From concept to deployment, we provide end-to-end technology solutions
          that drive business growth and digital transformation.
        </p>

        {/* Enhanced Service Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 transition-all duration-1000 ${
            animationStep >= 4
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          {[
            { number: "150+", label: "Projects Delivered", icon: "📈" },
            { number: "50+", label: "Happy Clients", icon: "🎯" },
            { number: "5+", label: "Years Experience", icon: "⚡" },
            { number: "24/7", label: "Support", icon: "🚀" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`relative group glass-card p-4 md:p-6 rounded-xl text-center hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 ${
                animationStep >= 4 ? "animate-bounce-in" : ""
              } overflow-hidden`}
              style={{ animationDelay: `${800 + index * 150}ms` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              {/* Animated background particles */}
              <div className="absolute inset-0">
                {[...Array(2)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-opacity duration-500"
                    style={{
                      left: `${30 + i * 40}%`,
                      top: `${30 + i * 40}%`,
                      animationDelay: `${i * 0.8}s`,
                      animationDuration: `${4 + i}s`,
                      willChange: "transform, opacity",
                    }}
                  />
                ))}
              </div>
              <div className="relative z-10">
                <div className="text-2xl mb-2 group-hover:animate-bounce">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-2 group-hover:animate-text-glow transition-all duration-300">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 font-medium">
                  {stat.label}
                </div>
              </div>
              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-xl border border-primary/0 group-hover:border-primary/20 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
