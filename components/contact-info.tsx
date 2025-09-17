"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";
const contactDetails = [
  {
    icon: Mail,
    title: "Email Us",
    primary: "info@suprazotech.in",
    description: "We typically respond within 24 hours",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Call Us",
    primary: "+91 9665658240",
    description: "Available 24/7 for urgent matters",
    color: "from-green-500 to-emerald-500",
  },
];
const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
];
export function ContactInfo() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-2">
            Contact Information
          </h2>
          <p className="text-muted-foreground mb-8">
            Multiple ways to reach us. Choose what works best for you.
          </p>
          <div className="space-y-6 mb-12">
            {contactDetails.map((detail, index) => {
              const IconComponent = detail.icon;
              return (
                <Card
                  key={index}
                  className="glass-card border-0 transition-all duration-300 hover:scale-105 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${detail.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:animate-glow transition-all duration-300`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                          {detail.title}
                        </h3>
                        <p className="text-foreground font-medium">
                          {detail.primary}
                        </p>
                        <p className="text-muted-foreground text-xs mt-2">
                          {detail.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <Card className="glass-card border-0">
            <CardContent className="p-8">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 group"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                Stay updated with our latest projects and technology insights.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
