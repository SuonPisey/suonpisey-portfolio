import { Card } from "@/components/ui/card"

export function About() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "Spring Boot",
    "Java",
    "RESTful APIs",
    "PostgreSQL",
    "MySQL",
    "Tailwind CSS",
    "Git",
    "Docker",
  ]

  return (
    <section id="about" className="min-h-screen flex items-center px-6 lg:px-12 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground animate-fade-in">
          <span className="text-primary font-mono text-xl mr-2">01.</span>
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            className="space-y-4 text-muted-foreground leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <p>
              Hello! I'm Suon Pisey, a passionate full-stack developer who enjoys creating robust web applications. My
              interest in web development started when I discovered the power of building interactive experiences that
              can reach millions of users worldwide.
            </p>
            <p>
              I specialize in modern frontend development with React and Next.js, combined with powerful backend
              solutions using Spring Boot. This full-stack expertise allows me to build complete, scalable applications
              from database to user interface.
            </p>
            <p>
              My focus is on writing clean, maintainable code and creating seamless user experiences. I'm constantly
              learning new technologies and best practices to stay at the forefront of web development.
            </p>
          </div>

          <Card
            className="p-6 bg-secondary border-border animate-slide-up hover:border-primary/50 transition-all duration-300"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-lg font-semibold mb-4 text-foreground">Technologies I work with:</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              {skills.map((skill, index) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 animate-fade-in hover:text-primary transition-colors"
                  style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                >
                  <span className="text-primary">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
