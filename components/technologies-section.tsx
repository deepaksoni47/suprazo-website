"use client"
import { Card, CardContent } from "@/components/ui/card"
const techCategories = [
  {
    title: "Frontend",
    color: "from-blue-500 to-cyan-500",
    technologies: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    color: "from-green-500 to-emerald-500",
    technologies: ["Node.js", "Python", "Django", "FastAPI", "Express.js", "PostgreSQL"],
  },
  {
    title: "Mobile",
    color: "from-purple-500 to-pink-500",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase"],
  },
  {
    title: "AI/ML",
    color: "from-orange-500 to-red-500",
    technologies: ["TensorFlow", "PyTorch", "OpenCV", "Hugging Face", "OpenAI", "Scikit-learn"],
  },
  {
    title: "Cloud & DevOps",
    color: "from-indigo-500 to-purple-500",
    technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "MongoDB"],
  },
  {
    title: "Tools & Others",
    color: "from-teal-500 to-green-500",
    technologies: ["Git", "Figma", "Postman", "Jest", "Cypress", "Webpack"],
  },
]
export function TechnologiesSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Technologies We{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Master</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We stay at the forefront of technology, using the latest tools and frameworks to build exceptional
            solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <Card key={index} className="glass-card border-0 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-3 h-3 bg-gradient-to-r ${category.color} rounded-full`} />
                  <h3 className="font-heading font-bold text-xl text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-white/20 transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
