"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Home, DollarSign, BookOpen, Heart, Globe, Zap } from "lucide-react";
const benefits = [
  {
    icon: Home,
    title: "Remote-First Culture",
    description:
      "Work from anywhere with flexible hours and a healthy work-life balance.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description:
      "Market-competitive salaries with performance bonuses and equity options.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: BookOpen,
    title: "Learning & Development",
    description:
      "Annual learning budget, conference attendance, and skill development programs.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description:
      "Comprehensive health insurance and wellness programs for you and your family.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description:
      "Work with international clients and collaborate with teams across the world.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Tech",
    description:
      "Work with the latest technologies and tools in a fast-paced environment.",
    color: "from-teal-500 to-green-500",
  },
];
export function CompanyBenefits() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Why Work{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              With Us
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe in taking care of our team members and providing an
            environment where everyone can thrive.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card
                key={index}
                className="glass-card border-0 transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:animate-glow transition-all duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
