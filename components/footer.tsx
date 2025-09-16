import Link from "next/link";
import { Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="glass-card-high-contrast mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm drop-shadow-sm">
                  ST
                </span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground drop-shadow-sm">
                SuPrazo Technologies
              </span>
            </div>
            <p className="text-foreground/80 mb-4 max-w-md">
              Driving Digital Excellence with Smart IT Solutions. We specialize
              in innovative web development, mobile applications, ERP systems,
              and cutting-edge AI/ML solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["About", "Services", "Products", "Contact", "Careers"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Contact
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-foreground/70">
                <Mail className="w-4 h-4" />
                <span>info@suprazotech.in</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground/70">
                <Phone className="w-4 h-4" />
                <span>+91 XXX XXX XXXX</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-foreground/70">
            © 2025 SuPrazo Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
