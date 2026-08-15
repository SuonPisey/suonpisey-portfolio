import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  containerVariants,
  itemVariants,
  slideInLeftVariants,
  staggerContainerVariants,
} from "@/lib/animations";

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      id: 1,
      title: "Lecturer at Setec Institute",
      company: "Setec Institute",
      period: "2026 - Present",
      logo: "/assets/logo/setec.png",
      logoFallback: "SI",
      description:
        "As a Lecturer at Setec Institute, I teach courses in web development, and software engineering. I design and deliver engaging lectures and practical sessions to help students understand complex concepts and apply them in real-world scenarios. My experience includes developing course materials, assessing student performance, and providing mentorship to support their academic and professional growth. I use various teaching methodologies and technologies to create an interactive learning environment that fosters critical thinking and problem-solving skills.",
    },
    {
      id: 2,
      title: "Web Application Developer",
      company: "Hanuman Beverages",
      period: "2026 - Present",
      logo: "/assets/logo/hanuman.jpeg",
      logoFallback: "HB",
      description:
        "As a Web Application Developer, I design and build complete web applications using Angular for the frontend and .NET for the backend. I develop and integrate RESTful APIs to ensure seamless communication between systems. My experience includes managing Oracle and PostgreSQL databases with a focus on performance, scalability, and reliability. I implement secure authentication using JWT and manage role-based access control to protect application resources. Working closely with cross-functional teams, I help plan, develop, test, and deploy scalable software solutions. I use Git, Visual Studio, and Azure DevOps for version control, collaboration, and project management. My goal is to create efficient, secure, and user-friendly applications that meet business requirements and deliver a high-quality user experience.",
    },
    {
      id: 3,
      title: "Web Application Developer",
      company: "Online ISP",
      period: "2024 - 2026",
      logo: "/assets/logo/onlineisp.jpeg",
      logoFallback: "O",
      description:
        "As a Full Stack Developer, I designed and built complete web applications using Next.js for the frontend and Spring Boot for the backend. I developed and integrated RESTful APIs to ensure seamless communication between systems. My experience included managing Oracle and PostgreSQL databases with a focus on performance and reliability. I implemented secure authentication using JWT and handled role-based access control. Working closely with cross-functional teams, I helped plan, test, and deliver scalable software solutions. I used Git, Maven, and Gradle for version control and project management. My goal was to create efficient, secure, and user-friendly applications that met business needs.",
    },
    {
      id: 4,
      title: "Frontend Developer & Technical Support",
      company: "Cubetiq Solution",
      period: "2022 - 2024",
      logo: "/assets/logo/cubetiq.png",
      logoFallback: "C",
      description:
        "Progressed from Technical Support to Frontend Developer, providing system support and troubleshooting while developing responsive web applications with React and Next.js, integrating APIs, optimizing performance, and collaborating with cross-functional teams to deliver high-quality solutions.",
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-32 bg-background" ref={ref}>
      <div className="container">
        <motion.div
          className="mb-10 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Experience
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-foreground/60 max-w-2xl"
            variants={itemVariants}
          >
            My professional journey and the roles that shaped my expertise as a
            full-stack developer.
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="group"
              variants={slideInLeftVariants}
            >
              <div className="relative pl-6 sm:pl-8 md:pl-12">
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background dark:border-card flex items-center justify-center"
                  whileHover={{
                    scale: 1.3,
                    boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <motion.div
                    className="absolute left-3 top-6 -bottom-8 w-0.5 bg-gradient-to-b from-primary to-primary/20"
                    initial={{ scaleY: 0 }}
                    animate={isVisible ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ originY: 0 }}
                  />
                )}

                {/* Content */}
                <motion.div
                  className="bg-white dark:bg-card rounded-xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/50"
                  whileHover={{
                    boxShadow: "0 20px 25px rgba(0, 212, 255, 0.15)",
                  }}
                >
                  <motion.div
                    className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div
                      className="flex items-start sm:items-center gap-3 sm:gap-4"
                      variants={itemVariants}
                    >
                      <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-background text-sm font-bold text-primary shadow-sm">
                        <span aria-hidden="true">{exp.logoFallback}</span>
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="absolute inset-0 h-full w-full bg-white object-contain p-1.5"
                          loading="lazy"
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                        />
                      </div>
                      <div>
                        <motion.h3
                          className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 sm:mb-2 leading-snug"
                          whileHover={{ color: "#00d4ff" }}
                        >
                          {exp.title}
                        </motion.h3>
                        <motion.p
                          className="text-base sm:text-lg text-primary font-semibold"
                          variants={itemVariants}
                        >
                          {exp.company}
                        </motion.p>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-2 text-foreground/60 whitespace-nowrap"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                    >
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{exp.period}</span>
                    </motion.div>
                  </motion.div>

                  <motion.p
                    className="text-sm sm:text-base text-foreground/70 leading-relaxed"
                    variants={itemVariants}
                  >
                    {exp.description}
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
