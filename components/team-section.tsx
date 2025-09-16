"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Github, Twitter } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    department: "Leadership",
    bio: "Visionary leader with 8+ years in technology and business strategy. Passionate about driving innovation and building scalable solutions.",
    skills: ["Strategic Planning", "Business Development", "Team Leadership"],
    image: "/team-member-ceo-professional-headshot.jpg",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "CTO & Lead Developer",
    department: "Engineering",
    bio: "Full-stack developer and technology architect with expertise in modern web technologies and AI/ML solutions.",
    skills: ["React", "Node.js", "Python", "AI/ML"],
    image: "/team-member-cto-professional-headshot.jpg",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Senior Mobile Developer",
    department: "Engineering",
    bio: "Mobile development specialist with 6+ years creating exceptional iOS and Android applications using React Native and Flutter.",
    skills: ["React Native", "Flutter", "iOS", "Android"],
    image: "/team-member-mobile-developer-professional-headshot.jpg",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 4,
    name: "Sneha Gupta",
    role: "UI/UX Designer",
    department: "Design",
    bio: "Creative designer focused on user-centered design principles and creating intuitive, beautiful digital experiences.",
    skills: ["UI/UX Design", "Figma", "User Research", "Prototyping"],
    image: "/team-member-designer-professional-headshot.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "AI/ML Engineer",
    department: "Engineering",
    bio: "Machine learning expert specializing in computer vision, NLP, and building intelligent systems that solve real-world problems.",
    skills: ["TensorFlow", "PyTorch", "Computer Vision", "NLP"],
    image: "/team-member-ai-engineer-professional-headshot.jpg",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 6,
    name: "Kavya Reddy",
    role: "Project Manager",
    department: "Operations",
    bio: "Experienced project manager ensuring smooth delivery of complex projects while maintaining quality and client satisfaction.",
    skills: ["Project Management", "Agile", "Client Relations", "Quality Assurance"],
    image: "/team-member-project-manager-professional-headshot.jpg",
    social: {
      linkedin: "#",
    },
  },
]

const departments = ["All", "Leadership", "Engineering", "Design", "Operations"]

export function TeamSection() {
  const [selectedDepartment, setSelectedDepartment] = useState("All")
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  const filteredMembers =
    selectedDepartment === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.department === selectedDepartment)

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our diverse team of experts brings together years of experience and passion for creating exceptional
            technology solutions.
          </p>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedDepartment === dept
                    ? "bg-primary text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <Card
              key={member.id}
              className="glass-card border-0 overflow-hidden transition-all duration-300 hover:scale-105 group cursor-pointer"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <CardContent className="p-0">
                {/* Member Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg?height=256&width=256&query=professional headshot"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                  {/* Social Links - Show on hover */}
                  <div
                    className={`absolute top-4 right-4 flex space-x-2 transition-all duration-300 ${
                      hoveredMember === member.id ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                    }`}
                  >
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-white" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                      >
                        <Github className="w-4 h-4 text-white" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                      >
                        <Twitter className="w-4 h-4 text-white" />
                      </a>
                    )}
                  </div>

                  {/* Department Badge */}
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                      {member.department}
                    </Badge>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs bg-white/5 border-white/10">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <Card className="glass-card border-0 inline-block">
            <CardContent className="p-8">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-3">Want to Join Our Team?</h3>
              <p className="text-muted-foreground mb-4">
                We're always looking for talented individuals who share our passion for innovation.
              </p>
              <a
                href="/careers"
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                View Open Positions
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
