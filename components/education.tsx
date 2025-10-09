import { GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Education() {
  const education = [
    {
      degree: "Bachelor of Management Information Systems",
      school: "Setec Institute ",
      period: "2020 - 2024",
      description: "Focused on information systems, database management, and business analytics.",
      achievements: [
        "Graduated with First Class Honors",
        "Dean's List for 6 consecutive semesters",
        "Led a team project that developed a campus event management system",
      ],
    },
    {
      degree: "High School Diploma",
      school: "HunSen OuReang Ov High School",
      period: "2016 - 2019",
      description: "Specialized in Mathematics and Science with excellent academic performance.",
      achievements: [
        "Graduated with Honors",
        "Captain of the Math Club",
        "Organized school-wide science fairs and competitions",
      ],
    },
  ]

  return (
    <section id="education" className="min-h-screen flex items-center py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto w-full animate-fade-in">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="h-8 w-8 text-primary" />
          <h2 className="text-4xl font-bold text-foreground">Education</h2>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium mt-1">{edu.school}</p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 md:mt-0">{edu.period}</span>
                </div>

                <p className="text-muted-foreground mb-4">{edu.description}</p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
