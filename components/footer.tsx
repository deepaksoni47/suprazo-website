"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Linkedin,
  Twitter,
  Github,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
export function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);
  const [floatingElements, setFloatingElements] = useState<
    Array<{
      id: number;
      width: number;
      height: number;
      left: number;
      top: number;
      delay: number;
      duration: number;
    }>
  >([]);
  useEffect(() => {
    // Generate floating elements only on client side
    const elements = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      width: 2 + Math.random() * 2,
      height: 2 + Math.random() * 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 4 + Math.random() * 4,
    }));
    setFloatingElements(elements);

    const handleMouseMove = (e: MouseEvent) => {
      const footerElement = document.querySelector("footer");
      if (footerElement) {
        const footerRect = footerElement.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - footerRect.left,
          y: e.clientY - footerRect.top,
        });
      }
    };
    const animate = () => {
      setTime((prev) => prev + 0.01);
      requestAnimationFrame(animate);
    };
    animate();
    const footerElement = document.querySelector("footer");
    if (footerElement) {
      footerElement.addEventListener("mousemove", handleMouseMove as any);
    }
    return () => {
      if (footerElement) {
        footerElement.removeEventListener("mousemove", handleMouseMove as any);
      }
    };
  }, []);
  return (
    <footer className="glass-card-high-contrast mt-20 relative overflow-hidden">
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
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
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
        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(147, 51, 234, 0.5);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse 3s ease-in-out infinite;
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
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 transition-all duration-700 ease-out"
          style={{
            background: `radial-gradient(circle,
              hsla(${210 + Math.sin(time) * 30}, 70%, 60%, 0.4) 0%,
              hsla(${270 + Math.cos(time) * 40}, 80%, 70%, 0.3) 40%,
              transparent 70%)`,
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transform: `scale(${1 + Math.sin(time * 0.5) * 0.1})`,
          }}
        />
        <div className="absolute inset-0">
          {floatingElements.map((element) => (
            <div
              key={element.id}
              className="absolute rounded-full animate-float"
              style={{
                width: `${element.width}px`,
                height: `${element.height}px`,
                background: `radial-gradient(circle,
                  hsla(${210 + element.id * 20}, 70%, 70%, 0.6),
                  hsla(${270 + element.id * 15}, 80%, 80%, 0.4))`,
                left: `${element.left}%`,
                top: `${element.top}%`,
                animationDelay: `${element.delay}s`,
                animationDuration: `${element.duration}s`,
                filter: "blur(1px)",
              }}
            />
          ))}
        </div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, ${
                0.1 + Math.sin(time) * 0.05
              }) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, ${
                0.1 + Math.cos(time) * 0.05
              }) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            transform: `translate(${Math.sin(time * 0.3) * 10}px, ${
              Math.cos(time * 0.2) * 8
            }px)`,
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-40"
          style={{
            background: `linear-gradient(90deg,
              transparent 0%,
              hsla(${210 + Math.sin(time * 2) * 30}, 70%, 60%, 0.8) 50%,
              transparent 100%)`,
          }}
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4 group">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="SuPrazo Technologies"
                  className="h-8 w-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="font-heading font-bold text-xl text-foreground drop-shadow-sm relative">
                <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                  SuPrazo Technologies
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  SuPrazo Technologies
                </div>
              </span>
            </div>
            <p className="text-foreground/80 mb-4 max-w-md leading-relaxed hover:text-foreground/90 transition-colors duration-300">
              Driving Digital Excellence with Smart IT Solutions. We specialize
              in innovative web development, mobile applications, ERP systems,
              and cutting-edge AI/ML solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/suprazo-technologies"
                className="text-foreground/70 hover:text-primary transition-all duration-300 transform hover:scale-125 hover:rotate-12 relative group/social"
              >
                <Linkedin className="w-5 h-5 relative z-10" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 animate-pulse-glow" />
              </Link>
              <Link
                href="https://twitter.com/suprazo_tech"
                className="text-foreground/70 hover:text-secondary transition-all duration-300 transform hover:scale-125 hover:rotate-12 relative group/social"
              >
                <Twitter className="w-5 h-5 relative z-10" />
                <div className="absolute inset-0 bg-secondary/20 rounded-full blur-md opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 animate-pulse-glow" />
              </Link>
              <Link
                href="#"
                className="text-foreground/70 hover:text-primary transition-all duration-300 transform hover:scale-125 hover:rotate-12 relative group/social"
              >
                <Github className="w-5 h-5 relative z-10" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 animate-pulse-glow" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4 relative group">
              <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                Quick Links
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500 ease-out" />
            </h3>
            <ul className="space-y-2">
              {["About", "Services", "Products", "Contact", "Careers"].map(
                (item, index) => (
                  <li key={item} className="group">
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-foreground/70 hover:text-primary transition-all duration-300 relative inline-flex items-center py-1 group-hover:translate-x-2"
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <span className="relative z-10">{item}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                      <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4 relative group">
              <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                Contact
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500 ease-out" />
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-foreground/70 group cursor-pointer">
                <div className="relative">
                  <Mail className="w-4 h-4 group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span className="group-hover:text-foreground transition-colors duration-300 relative">
                  info@suprazotech.in
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                </span>
              </div>
              <div className="flex items-center space-x-3 text-foreground/70 group cursor-pointer">
                <div className="relative">
                  <Phone className="w-4 h-4 group-hover:text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span className="group-hover:text-foreground transition-colors duration-300 relative">
                  +91 96656 58240
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative border-t border-border mt-8 pt-8">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="text-center group">
            <div className="text-foreground/60 hover:text-foreground/80 transition-all duration-300 relative">
              <span className="relative z-10">
                &copy; {new Date().getFullYear()} SuPrazo Technologies. All
                rights reserved.
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            </div>
            <div className="mt-2 flex justify-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-foreground/50 hover:text-primary transition-all duration-300 relative group/link"
              >
                Privacy Policy
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover/link:w-full transition-all duration-300" />
              </Link>
              <Link
                href="/terms"
                className="text-foreground/50 hover:text-primary transition-all duration-300 relative group/link"
              >
                Terms of Service
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover/link:w-full transition-all duration-300" />
              </Link>
              <Link
                href="/cookies"
                className="text-foreground/50 hover:text-primary transition-all duration-300 relative group/link"
              >
                Cookie Policy
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover/link:w-full transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
