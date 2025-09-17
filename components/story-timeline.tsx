"use client";

import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Lightbulb,
  Rocket,
  Users,
  Trophy,
  Calendar,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const timelineEvents = [
  {
    year: "2019",
    icon: Lightbulb,
    title: "The Beginning",
    description:
      "SuPrazo Technologies was founded with a vision to bridge the gap between innovative technology and practical business solutions.",
    color: "from-blue-500 to-cyan-500",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    achievements: ["Company Founded", "Vision Established"],
  },
  {
    year: "2020",
    icon: Rocket,
    title: "First Major Project",
    description:
      "Successfully delivered our first enterprise-level ERP system, establishing our reputation for quality and reliability in the market.",
    color: "from-purple-500 to-pink-500",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    achievements: ["ERP System Launch", "Market Recognition"],
  },
  {
    year: "2021",
    icon: Users,
    title: "Team Expansion",
    description:
      "Grew our team to 15+ skilled professionals and expanded our service offerings to include AI/ML solutions and mobile development.",
    color: "from-green-500 to-emerald-500",
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
    achievements: ["15+ Team Members", "AI/ML Services"],
  },
  {
    year: "2022",
    icon: Trophy,
    title: "Innovation Milestone",
    description:
      "Launched CampusEye.ai, our flagship AI-powered campus management system, revolutionizing educational institution management.",
    color: "from-orange-500 to-red-500",
    gradient: "from-orange-500/20 via-red-500/10 to-transparent",
    achievements: ["CampusEye.ai Launch", "Industry Innovation"],
  },
];

export function StoryTimeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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
            // Update timeline progress
            setTimelineProgress(((index + 1) / timelineEvents.length) * 100);
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
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.3) rotate(-10deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
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

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        .animate-pulse-subtle {
          animation: pulse 2s ease-in-out infinite;
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
          className="absolute w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-60 transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
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
                className="w-2 h-2 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full"
                style={{
                  filter: "blur(1px)",
                }}
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
            <Calendar className="w-4 h-4 text-primary animate-pulse-subtle" />
            <span className="text-sm font-medium text-foreground">
              Our Timeline
            </span>
            <Sparkles className="w-4 h-4 text-secondary animate-pulse-subtle" />
          </div>

          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
            <span
              className={`block transition-all duration-800 ${
                headerVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-4"
              }`}
            >
              Our Epic
            </span>
            <span
              className={`block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent transition-all duration-800 ${
                headerVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Journey
            </span>
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-800 ${
              headerVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            From a small startup to a trusted technology partner, here's how
            we've grown and evolved over the years.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line - Desktop */}
          <div className="absolute left-12 w-1 h-full bg-gradient-to-b from-primary/20 to-secondary/20 hidden lg:block">
            <div
              className="w-full bg-gradient-to-b from-primary to-secondary transition-all duration-1000 ease-out"
              style={{ height: `${timelineProgress}%` }}
            />
          </div>

          {/* Timeline Line - Mobile */}
          <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-primary/20 to-secondary/20 lg:hidden">
            <div
              className="w-full bg-gradient-to-b from-primary to-secondary transition-all duration-1000 ease-out"
              style={{ height: `${timelineProgress}%` }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-16 lg:space-y-24">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              const isVisible = visibleItems.includes(index);
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className={`relative ${
                    isVisible
                      ? `opacity-100 ${
                          isLeft
                            ? "lg:animate-slide-in-left"
                            : "lg:animate-slide-in-right"
                        } animate-slide-in-up`
                      : "opacity-0"
                  }`}
                  style={{
                    animationDelay: `${index * 200}ms`,
                    transitionDelay: `${index * 200}ms`,
                  }}
                >
                  {/* Mobile Layout */}
                  <div className="lg:hidden flex items-start space-x-6">
                    {/* Mobile Timeline Node */}
                    <div className="flex flex-col items-center pt-2">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${
                          event.color
                        } rounded-full flex items-center justify-center shadow-lg animate-glow z-10 ${
                          isVisible ? "animate-scale-in" : ""
                        }`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Mobile Content */}
                    <div className="flex-1 pb-8">
                      <Card className="glass-card border border-white/10 hover:border-white/20 transition-all duration-500 group hover:shadow-2xl">
                        <CardContent className="p-6 relative overflow-hidden">
                          {/* Background gradient */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${event.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                          />

                          <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                              <div>
                                <div className="text-3xl font-heading font-bold text-primary mb-1">
                                  {event.year}
                                </div>
                                <h3 className="font-heading font-semibold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                                  {event.title}
                                </h3>
                              </div>
                              <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                            </div>

                            <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                              {event.description}
                            </p>

                            {/* Achievement badges */}
                            <div className="flex flex-wrap gap-2">
                              {event.achievements.map((achievement, idx) => (
                                <span
                                  key={idx}
                                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300"
                                >
                                  {achievement}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Shimmer effect */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden lg:flex items-center">
                    {/* Content Card */}
                    <div className="flex-1 pl-24">
                      <Card className="glass-card border border-white/10 hover:border-white/20 transition-all duration-500 group hover:shadow-2xl">
                        <CardContent className="p-8 relative overflow-hidden">
                          {/* Background gradient */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${event.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                          />

                          <div className="relative z-10">
                            <div className="flex items-center justify-between mb-6">
                              <div className="flex items-center space-x-4">
                                <div
                                  className={`w-16 h-16 bg-gradient-to-r ${event.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                >
                                  <IconComponent className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                  <div className="text-4xl font-heading font-bold text-primary mb-1">
                                    {event.year}
                                  </div>
                                  <h3 className="font-heading font-semibold text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                                    {event.title}
                                  </h3>
                                </div>
                              </div>
                              <ArrowRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2" />
                            </div>

                            <p className="text-muted-foreground text-lg leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                              {event.description}
                            </p>

                            {/* Achievement badges */}
                            <div className="flex flex-wrap gap-3">
                              {event.achievements.map((achievement, idx) => (
                                <span
                                  key={idx}
                                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300"
                                  style={{ transitionDelay: `${idx * 100}ms` }}
                                >
                                  {achievement}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Shimmer effect */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                        </CardContent>
                      </Card>
                    </div>

                    {/* Desktop Timeline Node */}
                    <div
                      className={`absolute left-12 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-6 h-6 bg-gradient-to-r ${
                        event.color
                      } rounded-full border-4 border-background shadow-lg z-20 animate-glow ${
                        isVisible ? "animate-scale-in" : ""
                      }`}
                      style={{ animationDelay: `${index * 200 + 400}ms` }}
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent animate-pulse-subtle" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress indicator */}
          {/* <div className="fixed right-8 top-1/2 transform -translate-y-1/2 hidden lg:block z-50">
            <div className="w-1 h-32 bg-white/10 rounded-full overflow-hidden">
              <div
                className="w-full bg-gradient-to-b from-primary to-secondary transition-all duration-300"
                style={{ height: `${timelineProgress}%` }}
              />
            </div>
            <div className="text-center mt-2">
              <span className="text-xs text-muted-foreground">
                {Math.round(timelineProgress)}%
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
