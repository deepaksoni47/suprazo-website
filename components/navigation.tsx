"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
    { href: "/careers", label: "Careers" },
  ];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-white/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="SuPrazo Technologies"
              className="h-8 w-auto"
            />
            <span className="font-heading font-bold text-xl text-foreground drop-shadow-sm">
              SuPrazo Technologies
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-medium transition-all duration-200 group ${
                    isActive
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                  style={{
                    textShadow: isActive
                      ? "0 0 10px rgba(59, 130, 246, 0.6), 0 0 20px rgba(59, 130, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.3)"
                      : "none",
                  }}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg">
              Get Started
            </Button>
          </div>
          <button
            className="md:hidden p-2 rounded-lg bg-background/90 hover:bg-background transition-colors duration-200 shadow-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg border border-white/20 mt-2 rounded-lg p-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`font-medium py-2 px-3 transition-all duration-200 ${
                      isActive
                        ? "text-primary"
                        : "text-foreground hover:text-primary hover:bg-white/10 rounded-lg"
                    }`}
                    style={{
                      textShadow: isActive
                        ? "0 0 8px rgba(59, 130, 246, 0.7), 0 0 16px rgba(59, 130, 246, 0.5)"
                        : "none",
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4 font-medium shadow-lg">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
