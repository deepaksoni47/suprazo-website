"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Hand, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: "campuseye",
    icon: Eye,
    title: "CampusEye.ai",
    subtitle: "AI-Powered Campus Management",
    description:
      "Revolutionary campus management system powered by artificial intelligence for enhanced security, attendance tracking, and student engagement.",
    features: [
      "AI-powered surveillance",
      "Automated attendance",
      "Student analytics",
      "Real-time alerts",
    ],
    status: "Live",
    image: "/ai-campus-management-dashboard-interface.jpg",
  },
  {
    id: "signlanguage",
    icon: Hand,
    title: "Sign Language App",
    subtitle: "Breaking Communication Barriers",
    description:
      "Innovative mobile application that translates sign language to text and speech, making communication accessible for everyone.",
    features: [
      "Real-time translation",
      "Multi-language support",
      "Gesture recognition",
      "Voice synthesis",
    ],
    status: "Beta",
    image: "/sign-language-translation-mobile-app-interface.jpg",
  },
];

export function ProductsShowcase() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(products.length).fill(false)
  );
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    // Observer for section header
    const sectionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, observerOptions);

    // Observer for individual cards
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
            transform: translateX(-100px) scale(0.9) rotateY(-15deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1) rotateY(0deg);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(100px) scale(0.9) rotateY(15deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1) rotateY(0deg);
          }
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.8) rotate(-3deg);
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

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulseGlow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(147, 51, 234, 0.5),
              0 0 60px rgba(59, 130, 246, 0.3);
          }
        }

        .animate-slide-up {
          animation: slideUpFade 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }

        .animate-slide-left {
          animation: slideInLeft 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }

        .animate-slide-right {
          animation: slideInRight 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }

        .animate-fade-scale {
          animation: fadeInScale 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }

        .animate-shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 2.5s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }

        .scroll-hidden {
          opacity: 0;
          transform: translateY(60px);
        }
      `}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 transition-all duration-1000 ${
              isVisible ? "animate-slide-up" : "scroll-hidden"
            }`}
          >
            Our{" "}
            <span
              className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent relative inline-block"
              style={{
                backgroundSize: "200% 100%",
                animation: isVisible
                  ? "shimmer 3s ease-in-out infinite"
                  : "none",
              }}
            >
              Products
            </span>
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? "animate-slide-up" : "scroll-hidden"
            }`}
          >
            Innovative solutions that showcase our expertise in AI, mobile
            development, and cutting-edge technology.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card
                key={product.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`glass-card border-0 overflow-hidden transition-all duration-700 hover:scale-[1.02] cursor-pointer group transform perspective-1000 ${
                  visibleCards[index]
                    ? index % 2 === 0
                      ? "animate-slide-left"
                      : "animate-slide-right"
                    : "scroll-hidden"
                }`}
                style={{
                  animationDelay: visibleCards[index]
                    ? `${index * 300}ms`
                    : "0ms",
                }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <CardContent className="p-0">
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                        hoveredProduct === product.id ? "animate-shimmer" : ""
                      }`}
                    />
                    <div className="absolute top-4 right-4 z-10">
                      <Badge
                        variant={
                          product.status === "Live" ? "default" : "secondary"
                        }
                        className={`${
                          product.status === "Live"
                            ? "bg-green-500 text-white animate-pulse-glow"
                            : "bg-orange-500 text-white"
                        } transition-all duration-300 hover:scale-110`}
                      >
                        {product.status}
                      </Badge>
                    </div>

                    {/* Floating decorative elements */}
                    <div
                      className="absolute top-6 left-6 w-2 h-2 bg-primary/60 rounded-full animate-float opacity-60"
                      style={{ animationDelay: "0s" }}
                    />
                    <div
                      className="absolute bottom-8 right-8 w-1.5 h-1.5 bg-secondary/60 rounded-full animate-float opacity-60"
                      style={{ animationDelay: "2s" }}
                    />
                  </div>

                  {/* Product Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center relative overflow-hidden group-hover:animate-pulse-glow transition-all duration-300">
                        <IconComponent className="w-5 h-5 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                        <div
                          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                            hoveredProduct === product.id
                              ? "animate-shimmer"
                              : ""
                          }`}
                        />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                          {product.title}
                        </h3>
                        <p className="text-sm text-secondary group-hover:text-secondary/80 transition-colors duration-300">
                          {product.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {product.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div
                      className={`flex space-x-3 transition-all duration-300 ${
                        hoveredProduct === product.id
                          ? "opacity-100 translate-y-0"
                          : "opacity-70 translate-y-2"
                      }`}
                    >
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="glass border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div
            className={`transition-all duration-1000 delay-1000 ${
              isVisible ? "animate-fade-scale" : "scroll-hidden"
            }`}
          >
            <Link href="/products">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105 relative overflow-hidden animate-pulse-glow"
              >
                <span className="relative z-10">Explore All Products</span>
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
