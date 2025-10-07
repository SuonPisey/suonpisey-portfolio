import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description: [
        "Lead development of enterprise web applications using React, Next.js, and Spring Boot",
        "Architected and implemented RESTful APIs with Spring Boot serving 100k+ daily active users",
        "Built responsive, performant frontends with React and Next.js",
        "Improved application performance by 40% through optimization and caching strategies",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Spring Boot", "PostgreSQL", "Docker"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions",
      period: "2020 - 2022",
      description: [
        "Developed full-stack web applications with React frontend and Spring Boot backend",
        "Implemented secure authentication and authorization systems",
        "Integrated third-party APIs and payment gateways",
        "Collaborated with cross-functional teams in agile environment",
      ],
      technologies: ["React", "Spring Boot", "Java", "MySQL", "Tailwind CSS"],
    },
    {
      title: "Junior Developer",
      company: "Startup Inc",
      period: "2018 - 2020",
      description: [
        "Developed and maintained features using React and Java Spring",
        "Participated in code reviews and agile development processes",
        "Wrote unit and integration tests to ensure code quality",
        "Assisted in database design and API development",
      ],
      technologies: ["JavaScript", "React", "Spring Boot", "MySQL"],
    },
  ]

  return (
    <section id="experience" className="min-h-screen flex items-center px-6 lg:px-12 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground animate-fade-in">
          <span className="text-primary font-mono text-xl mr-2">02.</span>
          Where I've Worked
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-primary">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground font-mono mt-2 md:mt-0">{exp.period}</p>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-2 text-muted-foreground text-sm leading-relaxed">
                    <span className="text-primary mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
