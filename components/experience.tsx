import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Online ISP",
      period: "2024 - Present",
      description: [
        "Developed and maintained web applications using React and Next.js",
        "Built RESTful APIs with Spring Boot and Java",
        "Optimized database queries and designed schemas in PostgreSQL",
        "Implemented CI/CD pipelines using GitHub Actions and Docker",
        "Collaborated with cross-functional teams to deliver high-quality software",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Spring Boot",
        "PostgreSQL",
        "Docker",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Cubetiq Solutions",
      period: "2023 - 2024",
      description: [
        "Developed responsive user interfaces using React and Tailwind CSS",
        "Integrated frontend with backend services using RESTful APIs",
        "Collaborated with designers to implement UI/UX best practices",
        "Participated in code reviews and agile development processes",
        "Wrote unit tests to ensure code quality and reliability",
      ],
      technologies: ["React", "MySQL", "Tailwind CSS"],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center px-6 lg:px-12 py-20"
    >
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
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-primary">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground font-mono mt-2 md:mt-0">
                  {exp.period}
                </p>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-muted-foreground text-sm leading-relaxed"
                  >
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
  );
}
