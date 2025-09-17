"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, ArrowRight, Code, Smartphone, Brain, Palette } from "lucide-react"
const jobCategories = ["All", "Engineering", "Design", "Management", "Internships"]
const jobListings = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
    experience: "3-5 years",
    icon: Code,
    description: "Lead development of modern web applications using React, Node.js, and cloud technologies.",
    requirements: ["React/Next.js", "Node.js", "TypeScript", "AWS/Azure", "5+ years experience"],
    color: "from-blue-500 to-cyan-500",
    urgent: true,
  },
  {
    id: 2,
    title: "Mobile App Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
    experience: "2-4 years",
    icon: Smartphone,
    description: "Build cross-platform mobile applications using React Native and Flutter.",
    requirements: ["React Native", "Flutter", "iOS/Android", "Firebase", "3+ years experience"],
    color: "from-green-500 to-emerald-500",
    urgent: false,
  },
  {
    id: 3,
    title: "AI/ML Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
    experience: "3-6 years",
    icon: Brain,
    description: "Develop intelligent systems using machine learning and computer vision technologies.",
    requirements: ["Python", "TensorFlow/PyTorch", "Computer Vision", "NLP", "4+ years experience"],
    color: "from-purple-500 to-pink-500",
    urgent: true,
  },
  {
    id: 4,
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Remote",
    experience: "2-4 years",
    icon: Palette,
    description: "Create beautiful and intuitive user experiences for web and mobile applications.",
    requirements: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping", "3+ years experience"],
    color: "from-orange-500 to-red-500",
    urgent: false,
  },
  {
    id: 5,
    title: "Frontend Developer Intern",
    department: "Internships",
    type: "Internship",
    location: "Remote",
    experience: "0-1 years",
    icon: Code,
    description: "Learn and contribute to frontend development projects using modern web technologies.",
    requirements: ["HTML/CSS", "JavaScript", "React basics", "Git", "Eager to learn"],
    color: "from-teal-500 to-green-500",
    urgent: false,
  },
  {
    id: 6,
    title: "Project Manager",
    department: "Management",
    type: "Full-time",
    location: "Remote",
    experience: "4-7 years",
    icon: Users,
    description: "Lead cross-functional teams to deliver complex technology projects on time and within budget.",
    requirements: ["Project Management", "Agile/Scrum", "Team Leadership", "Client Relations", "5+ years experience"],
    color: "from-indigo-500 to-purple-500",
    urgent: false,
  },
]
export function JobListings() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const filteredJobs =
    selectedCategory === "All" ? jobListings : jobListings.filter((job) => job.department === selectedCategory)
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Open{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Positions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Find your next career opportunity and join our mission to drive digital excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {jobCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredJobs.map((job) => {
            const IconComponent = job.icon
            return (
              <Card key={job.id} className="glass-card border-0 transition-all duration-300 hover:scale-[1.02] group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${job.color} rounded-lg flex items-center justify-center group-hover:animate-glow transition-all duration-300`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-xl text-foreground">{job.title}</h3>
                        <p className="text-secondary font-medium">{job.department}</p>
                      </div>
                    </div>
                    {job.urgent && (
                      <Badge variant="destructive" className="bg-red-500 text-white">
                        Urgent
                      </Badge>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{job.description}</p>
                  <div className="mb-6">
                    <h4 className="font-heading font-semibold text-foreground mb-2">Key Requirements:</h4>
                    <div className="flex flex-wrap gap-1">
                      {job.requirements.map((req, index) => (
                        <Badge key={index} variant="outline" className="text-xs bg-white/5 border-white/10">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group">
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No positions available in this category at the moment.</p>
            <p className="text-muted-foreground">Check back soon or contact us about future opportunities.</p>
          </div>
        )}
      </div>
    </section>
  )
}
