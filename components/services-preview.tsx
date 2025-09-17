"use client";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Smartphone, Database, Brain, ArrowRight } from "lucide-react";
import Link from "next/link";
const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with cutting-edge technologies.",
    features: [
      "React & Next.js",
      "E-commerce Solutions",
      "Progressive Web Apps",
      "Custom CMS",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android platforms.",
    features: [
      "React Native",
      "Flutter",
      "Native iOS/Android",
      "App Store Optimization",
    ],
  },
  {
    icon: Database,
    title: "ERP Systems",
    description:
      "Comprehensive enterprise resource planning solutions to streamline your business operations.",
    features: [
      "Custom ERP",
      "CRM Integration",
      "Inventory Management",
      "Financial Modules",
    ],
  },
  {
    icon: Brain,
    title: "AI/ML Solutions",
    description:
      "Intelligent systems powered by artificial intelligence and machine learning technologies.",
    features: [
      "Computer Vision",
      "Natural Language Processing",
      "Predictive Analytics",
      "Automation",
    ],
  },
];
export function ServicesPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(services.length).fill(false)
  );
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };
    const sectionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, observerOptions);
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setVisibleCards((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }
    cardRefs.current.forEach((ref) => {
      if (ref) cardObserver.observe(ref);
    });
    return () => {
      sectionObserver.disconnect();
      cardObserver.disconnect();
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
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-80px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(80px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        @keyframes slideInUp {
          0% {
            opacity: 0;
            transform: translateY(80px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.8) rotate(-2deg);
          }
          50% {
            transform: scale(1.05) rotate(1deg);
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
        .animate-slide-up {
          animation: slideUpFade 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }
        .animate-slide-left {
          animation: slideInLeft 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }
        .animate-slide-right {
          animation: slideInRight 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }
        .animate-slide-in-up {
          animation: slideInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }
        .animate-fade-scale {
          animation: fadeInScale 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
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
        .scroll-hidden {
          opacity: 0;
          transform: translateY(60px);
        }
      `}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 transition-all duration-1000 ${
              isVisible ? "animate-slide-up" : "scroll-hidden"
            }`}
          >
            Our{" "}
            <span
              className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent relative"
              style={{
                backgroundSize: "200% 100%",
                animation: isVisible
                  ? "shimmer 3s ease-in-out infinite"
                  : "none",
              }}
            >
              Services
            </span>
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? "animate-slide-up" : "scroll-hidden"
            }`}
          >
            We offer comprehensive IT solutions tailored to meet your business
            needs and drive digital transformation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const getAnimationClass = (index: number) => {
              if (index % 4 === 0) return "animate-slide-left";
              if (index % 4 === 1) return "animate-slide-in-up";
              if (index % 4 === 2) return "animate-slide-in-up";
              return "animate-slide-right";
            };
            return (
              <Card
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`glass-card border-0 transition-all duration-500 hover:scale-105 cursor-pointer group relative transform ${
                  visibleCards[index]
                    ? getAnimationClass(index)
                    : "scroll-hidden"
                }`}
                style={{
                  animationDelay: visibleCards[index]
                    ? `${index * 150}ms`
                    : "0ms",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardContent className="p-4">
                  <div className="mb-2">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow transition-all duration-300 relative overflow-hidden">
                      <IconComponent className="w-6 h-6 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                      <div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                          hoveredIndex === index ? "animate-shimmer" : ""
                        }`}
                      />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                      {service.title}
                    </h3>
                    <div className="relative min-h-[102px] overflow-hidden">
                      <div
                        className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                          hoveredIndex === index
                            ? "opacity-0 translate-y-4 pointer-events-none"
                            : "opacity-100 translate-y-0 pointer-events-auto"
                        }`}
                      >
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div
                        className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                          hoveredIndex === index
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 translate-y-4 pointer-events-none"
                        }`}
                      >
                        <div className="space-y-3">
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="text-sm text-muted-foreground flex items-center group/item"
                                style={{
                                  animationDelay: `${featureIndex * 100}ms`,
                                }}
                              >
                                <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mr-3 flex-shrink-0 group-hover/item:scale-125 transition-all duration-200" />
                                <span className="group-hover/item:text-foreground transition-colors duration-200">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center">
          <div
            className={`transition-all duration-1000 delay-1000 ${
              isVisible ? "animate-fade-scale" : "scroll-hidden"
            }`}
          >
            <Link href="/services">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10">View All Services</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
