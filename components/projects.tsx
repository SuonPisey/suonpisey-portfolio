import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, shopping cart, and payment integration. Built with Next.js frontend and Spring Boot backend for optimal performance.",
      image: "/modern-ecommerce-website.png",
      technologies: ["Next.js", "TypeScript", "Spring Boot", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team workspaces. Features React frontend with Spring Boot REST API backend.",
      image: "/task-management-dashboard.png",
      technologies: ["React", "Spring Boot", "WebSocket", "MySQL", "Redux"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media management with data visualization and multi-platform integration. Built with Next.js and Spring Boot microservices.",
      image: "/analytics-dashboard.png",
      technologies: ["Next.js", "Spring Boot", "Chart.js", "PostgreSQL", "Docker"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Weather Forecast App",
      description:
        "Real-time weather application with location-based forecasts and interactive maps. Clean React UI with Spring Boot API integration.",
      image: "/weather-app-interface.png",
      technologies: ["React", "TypeScript", "Spring Boot", "OpenWeather API"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ]

  return (
    <section id="projects" className="min-h-screen flex items-center px-6 lg:px-12 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground animate-fade-in">
          <span className="text-primary font-mono text-xl mr-2">03.</span>
          Things I've Built
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden bg-secondary">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
