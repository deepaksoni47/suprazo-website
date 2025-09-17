"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from "lucide-react";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const particleRefs = useRef<HTMLDivElement[]>([]);

  // Optimized particle system - client-side only to avoid hydration mismatch
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      delay: number;
      speed: number;
    }>
  >([]);

  // Smooth mouse tracking with throttling
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  }, []);

  // Magnetic button effect
  const handleButtonHover = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * 0.15;
      const deltaY = (e.clientY - centerY) * 0.15;

      e.currentTarget.style.setProperty("--mouse-x", `${deltaX}px`);
      e.currentTarget.style.setProperty("--mouse-y", `${deltaY}px`);
    },
    []
  );

  const handleButtonLeave = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.currentTarget.style.setProperty("--mouse-x", "0px");
      e.currentTarget.style.setProperty("--mouse-y", "0px");
    },
    []
  );

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    setParticles(
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.2,
      }))
    );

    // Smooth initialization
    const timer = setTimeout(() => setIsLoaded(true), 200);

    // Smooth continuous mouse movement tracking
    const smoothMouseMove = (e: MouseEvent) => {
      handleMouseMove(e);
    };

    window.addEventListener("mousemove", smoothMouseMove, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", smoothMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <>
      <style jsx>{`
        @keyframes excellence-glow {
          0%,
          100% {
            color: #3b82f6;
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.6),
              0 0 40px rgba(59, 130, 246, 0.4);
          }
          25% {
            color: #8b5cf6;
            text-shadow: 0 0 20px rgba(139, 92, 246, 0.6),
              0 0 40px rgba(139, 92, 246, 0.4);
          }
          50% {
            color: #06b6d4;
            text-shadow: 0 0 20px rgba(6, 182, 212, 0.6),
              0 0 40px rgba(6, 182, 212, 0.4);
          }
          75% {
            color: #10b981;
            text-shadow: 0 0 20px rgba(16, 185, 129, 0.6),
              0 0 40px rgba(16, 185, 129, 0.4);
          }
        }
        .excellence-text {
          animation: excellence-glow 4s ease-in-out infinite;
          font-weight: bold;
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
        }
      `}</style>
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Mesh Background */}
        <div className="absolute inset-0 mesh-bg opacity-40" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-20" />

        {/* Interactive Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle, index) => (
            <div
              key={particle.id}
              ref={(el) => {
                particleRefs.current[index] = el!;
              }}
              className="particle absolute"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                background: `radial-gradient(circle, hsl(214 100% 65% / 0.8), hsl(270 100% 70% / 0.4))`,
                animationDelay: `${particle.delay}s`,
                transform: `translate3d(${
                  (mousePosition.x - particle.x) * particle.speed * 0.1
                }px, ${
                  (mousePosition.y - particle.y) * particle.speed * 0.1
                }px, 0)`,
                opacity: isLoaded ? 0.6 : 0,
              }}
            />
          ))}
        </div>

        {/* Dynamic Light Follow */}
        <div
          className="absolute w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, hsl(214 100% 65% / 0.15) 0%, hsl(270 100% 70% / 0.1) 40%, transparent 70%)`,
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: "translate(-50%, -50%)",
            filter: "blur(40px)",
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.3s ease-out",
          }}
        />

        {/* Main Content */}
        <div
          className={`relative z-10 container mx-auto px-6 text-center ${
            isLoaded ? "loaded" : ""
          }`}
        >
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="animate-slide-up-1 mb-8">
              <div className="inline-flex items-center gap-3 glass-hero px-6 py-3 rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full animate-glow" />
                <span className="text-sm font-medium text-primary">
                  Next-Gen IT Solutions
                </span>
                <Sparkles className="w-4 h-4 text-accent" />
              </div>
            </div>

            {/* Main Heading */}
            <div className="mb-8 space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="block animate-slide-up-1 text-foreground">
                  Crafting Digital
                </span>
                <span
                  className="block animate-slide-up-2 excellence-text"
                  style={{
                    fontSize: "inherit",
                    fontWeight: "inherit",
                    lineHeight: "inherit",
                  }}
                >
                  Excellence
                </span>
                <span className="block animate-slide-up-3 text-foreground/90 text-4xl md:text-5xl lg:text-6xl mt-2">
                  Beyond Boundaries
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="animate-slide-up-3 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              Transforming ambitious ideas into extraordinary digital
              experiences with
              <span className="text-primary font-semibold">
                {" "}
                cutting-edge technology
              </span>{" "}
              and
              <span className="text-accent font-semibold">
                {" "}
                innovative design
              </span>
              .
            </p>

            {/* CTA Buttons */}
            <div className="animate-scale-in flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Button
                size="lg"
                className="btn-hero magnetic px-8 py-4 text-lg font-semibold rounded-full group"
                onMouseMove={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="btn-ghost magnetic px-8 py-4 text-lg font-semibold rounded-full group"
                onMouseMove={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                <Play className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 right-8 animate-scale-in opacity-60">
          <div className="glass w-20 h-20 rounded-2xl flex items-center justify-center rotate-12 hover:rotate-0 transition-all duration-500">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg animate-glow" />
          </div>
        </div>

        <div
          className="absolute bottom-1/4 left-8 animate-scale-in opacity-60"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="glass w-16 h-16 rounded-full flex items-center justify-center -rotate-12 hover:rotate-0 transition-all duration-500">
            <Sparkles className="w-6 h-6 text-accent" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-scale-in opacity-60"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
          </div>
        </div>
      </section>
    </>
  );
}
