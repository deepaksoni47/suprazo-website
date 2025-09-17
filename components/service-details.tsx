"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Smartphone,
  Database,
  Brain,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Zap,
  Sparkles,
  Cpu,
} from "lucide-react";

const serviceDetails = [
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    subtitle: "Modern Web Solutions",
    description:
      "Create stunning, responsive websites and web applications that engage users and drive business results.",
    features: [
      "Custom Website Development",
      "E-commerce Solutions",
      "Progressive Web Apps (PWA)",
      "Content Management Systems",
      "API Development & Integration",
      "Performance Optimization",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
    ],
    timeline: "4-12 weeks",
    teamSize: "3-5 developers",
    projects: "50+ completed",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Development",
    subtitle: "Cross-Platform Mobile Apps",
    description:
      "Build native and cross-platform mobile applications that provide exceptional user experiences across all devices.",
    features: [
      "Native iOS & Android Apps",
      "Cross-Platform Development",
      "UI/UX Design",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "Redux",
    ],
    timeline: "6-16 weeks",
    teamSize: "2-4 developers",
    projects: "30+ completed",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "erp",
    icon: Database,
    title: "ERP Systems",
    subtitle: "Enterprise Resource Planning",
    description:
      "Streamline your business operations with custom ERP solutions designed to improve efficiency and productivity.",
    features: [
      "Custom ERP Development",
      "CRM Integration",
      "Inventory Management",
      "Financial Management",
      "Reporting & Analytics",
      "Multi-location Support",
    ],
    technologies: ["Python", "Django", "PostgreSQL", "Redis", "Docker", "AWS"],
    timeline: "12-24 weeks",
    teamSize: "4-8 developers",
    projects: "20+ completed",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI/ML Solutions",
    subtitle: "Artificial Intelligence & Machine Learning",
    description:
      "Leverage the power of AI and machine learning to automate processes, gain insights, and create intelligent applications.",
    features: [
      "Computer Vision",
      "Natural Language Processing",
      "Predictive Analytics",
      "Chatbots & Virtual Assistants",
      "Recommendation Systems",
      "Process Automation",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "OpenAI",
      "Hugging Face",
      "AWS ML",
    ],
    timeline: "8-20 weeks",
    teamSize: "2-5 specialists",
    projects: "15+ completed",
    color: "from-orange-500 to-red-500",
  },
];

export function ServiceDetails() {
  const [activeService, setActiveService] = useState("web");
  const [isVisible, setIsVisible] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const currentService =
    serviceDetails.find((service) => service.id === activeService) ||
    serviceDetails[0];

  const handleServiceChange = (serviceId: string) => {
    if (serviceId === activeService || isTransitioning) return;

    setIsTransitioning(true);

    // Small delay for smooth transition
    setTimeout(() => {
      setActiveService(serviceId);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 150);
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setTimeout(() => setAnimationStep(1), 200);
            setTimeout(() => setAnimationStep(2), 600);
            setTimeout(() => setAnimationStep(3), 1000);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-20 relative overflow-hidden"
    >
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 40px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translate3d(-40px, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translate3d(40px, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
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
        @keyframes float {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -10px, 0);
          }
        }
        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(147, 51, 234, 0.5);
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
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .animate-fade-in-scale {
          animation: fadeInScale 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        .scale-98 {
          transform: scale(0.98);
        }
        .blur-sm {
          filter: blur(2px);
        }
        .blur-0 {
          filter: blur(0);
        }
      `}</style>

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            animationStep >= 1 ? "opacity-100 animate-slide-in-up" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            What We{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        {/* Service Navigation */}
        <div
          className={`mb-12 sm:mb-16 transition-all duration-1000 ${
            animationStep >= 2 ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Mobile Dropdown for small screens */}
          <div className="sm:hidden mb-6">
            <select
              value={activeService}
              onChange={(e) => handleServiceChange(e.target.value)}
              disabled={isTransitioning}
              className={`w-full glass-card p-4 rounded-lg border border-white/20 text-foreground bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 ${
                isTransitioning
                  ? "opacity-70 cursor-not-allowed"
                  : "opacity-100"
              }`}
            >
              {serviceDetails.map((service) => (
                <option
                  key={service.id}
                  value={service.id}
                  className="bg-background text-foreground"
                >
                  {service.title}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop/Tablet Grid */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {serviceDetails.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => handleServiceChange(service.id)}
                  disabled={isTransitioning}
                  className={`glass-card p-4 lg:p-6 rounded-xl transition-all duration-500 group hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20 ${
                    activeService === service.id
                      ? "scale-105 animate-glow border-primary/50 shadow-xl shadow-primary/20"
                      : "border-transparent hover:border-primary/30"
                  } ${
                    isTransitioning
                      ? "opacity-70 cursor-not-allowed"
                      : "opacity-100"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div
                      className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:animate-float`}
                    >
                      <IconComponent className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-sm lg:text-base text-foreground">
                        {service.title}
                      </div>
                      <div className="text-xs text-muted-foreground hidden lg:block">
                        {service.subtitle}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Service Detail Card */}
        <Card
          className={`glass-card border-0 overflow-hidden shadow-2xl transition-all duration-1000 ${
            animationStep >= 3
              ? "opacity-100 animate-fade-in-scale"
              : "opacity-0"
          } ${
            isTransitioning
              ? "opacity-50 scale-98 blur-sm"
              : "opacity-100 scale-100 blur-0"
          }`}
        >
          <CardContent className="p-0">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-0 transition-all duration-500 ${
                isTransitioning
                  ? "transform translate-y-2"
                  : "transform translate-y-0"
              }`}
            >
              {/* Left Side - Service Info */}
              <div
                className="p-6 sm:p-8 lg:p-12 animate-slide-in-left"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${currentService.color} rounded-xl flex items-center justify-center animate-float shadow-lg`}
                  >
                    <currentService.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-2">
                      {currentService.title}
                    </h2>
                    <p className="text-secondary font-medium text-sm sm:text-base">
                      {currentService.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">
                  {currentService.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
                  <div className="glass-card p-4 rounded-lg text-center hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-center mb-2">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div className="font-heading font-bold text-lg text-foreground">
                      {currentService.timeline}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Timeline
                    </div>
                  </div>
                  <div className="glass-card p-4 rounded-lg text-center hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="font-heading font-bold text-lg text-foreground">
                      {currentService.teamSize}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Team Size
                    </div>
                  </div>
                  <div className="glass-card p-4 rounded-lg text-center hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-center mb-2">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div className="font-heading font-bold text-lg text-foreground">
                      {currentService.projects}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Projects
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">
                    Get Started with {currentService.title}
                  </span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </Button>
              </div>

              {/* Right Side - Features & Technologies */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm p-4 md:p-6 lg:p-8 xl:p-12 space-y-6 md:space-y-8">
                {/* Features */}
                <div
                  className="animate-float-in"
                  style={{ animationDelay: "0.3s" }}
                >
                  <h3 className="font-heading font-bold text-lg md:text-xl text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary animate-pulse" />
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {currentService.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-2 md:p-3 rounded-lg hover:bg-white/5 transition-all duration-200 group"
                        style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                      >
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-secondary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-muted-foreground text-sm md:text-base leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div
                  className="animate-float-in"
                  style={{ animationDelay: "0.5s" }}
                >
                  <h3 className="font-heading font-bold text-lg md:text-xl text-foreground mb-4 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-secondary animate-pulse" />
                    Technologies We Use
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentService.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-white/10 backdrop-blur-sm text-foreground border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-200 text-xs md:text-sm px-2 md:px-3 py-1 md:py-1.5"
                        style={{ animationDelay: `${0.6 + index * 0.05}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
