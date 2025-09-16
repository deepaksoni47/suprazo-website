"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Award, Calendar, ArrowRight } from "lucide-react"

const internshipTracks = [
  {
    title: "Frontend Development",
    duration: "3-6 months",
    description: "Learn React, Next.js, and modern frontend technologies while working on real projects.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Mobile Development",
    duration: "3-6 months",
    description: "Build mobile applications using React Native and Flutter with mentorship from senior developers.",
    skills: ["React Native", "Flutter", "Mobile UI/UX", "App Store"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "AI/ML Engineering",
    duration: "4-6 months",
    description: "Work on machine learning projects and gain hands-on experience with AI technologies.",
    skills: ["Python", "TensorFlow", "Computer Vision", "Data Science"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "UI/UX Design",
    duration: "3-4 months",
    description: "Design user interfaces and experiences for web and mobile applications.",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    color: "from-orange-500 to-red-500",
  },
]

export function InternshipProgram() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Internship{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Program</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Launch your tech career with our comprehensive internship program designed to provide real-world experience.
          </p>
        </div>

        {/* Program Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="glass-card border-0 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-heading font-bold text-primary mb-1">100+</div>
              <div className="text-sm text-muted-foreground">Hours of Training</div>
            </CardContent>
          </Card>

          <Card className="glass-card border-0 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-heading font-bold text-secondary mb-1">1:1</div>
              <div className="text-sm text-muted-foreground">Mentorship</div>
            </CardContent>
          </Card>

          <Card className="glass-card border-0 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-heading font-bold text-primary mb-1">Real</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </CardContent>
          </Card>

          <Card className="glass-card border-0 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-heading font-bold text-secondary mb-1">Flexible</div>
              <div className="text-sm text-muted-foreground">Schedule</div>
            </CardContent>
          </Card>
        </div>

        {/* Internship Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {internshipTracks.map((track, index) => (
            <Card key={index} className="glass-card border-0 transition-all duration-300 hover:scale-[1.02] group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-3 h-3 bg-gradient-to-r ${track.color} rounded-full`} />
                  <h3 className="font-heading font-bold text-xl text-foreground">{track.title}</h3>
                  <Badge variant="outline" className="ml-auto bg-white/5 border-white/10">
                    {track.duration}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{track.description}</p>

                <div className="mb-4">
                  <h4 className="font-heading font-semibold text-foreground mb-2">You'll Learn:</h4>
                  <div className="flex flex-wrap gap-1">
                    {track.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs bg-white/10 border-white/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full glass border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Apply for {track.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Application CTA */}
        <Card className="glass-card border-0">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Ready to Start Your Journey?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our internship program is designed to give you hands-on experience with cutting-edge technologies while
              working alongside industry experts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
