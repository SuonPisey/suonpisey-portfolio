import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  fadeInLeftVariants,
  fadeInRightVariants,
  containerVariants,
  itemVariants,
  scaleInVariants,
  staggerContainerVariants,
  gridItemVariants,
} from "@/lib/animations";

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { label: "Years of Experience", value: "5+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Technologies", value: "10+" },
    { label: "Client Satisfaction", value: "100%" },
  ];

  const highlights = [
    {
      title: "Frontend Development",
      description:
        "React, Next.js, TypeScript, JavaScript, Angular, Tailwind CSS",
    },
    {
      title: "Backend Development",
      description: "Node.js, Spring Boot, RESTful APIs",
    },
    {
      title: "Database & Tools",
      description: "PostgreSQL, Oracle, MySQL, Git, Docker, CI/CD",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-32 bg-secondary/30">
      <div className="container" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={fadeInLeftVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.h2 className="section-title" variants={itemVariants}>
              About Me
            </motion.h2>

            <motion.p
              className="text-base md:text-lg text-foreground/70 mb-5 md:mb-6 leading-relaxed"
              variants={itemVariants}
            >
              I'm a passionate full-stack developer based in Cambodia with a
              strong foundation in both frontend and backend technologies. With
              expertise in modern JavaScript frameworks and server-side
              development, I create end-to-end solutions that solve real-world
              problems.
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-foreground/70 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              My journey in web development started with a curiosity about how
              things work on the internet. Over the years, I've honed my skills
              through various projects, internships, and continuous learning. I
              believe in writing clean, maintainable code and delivering
              products that users love.
            </motion.p>

            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              {highlights.map((highlight) => (
                <motion.div
                  key={highlight.title}
                  className="flex items-start gap-4"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-white text-sm font-bold">✓</span>
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-foreground/60">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            className="grid grid-cols-2 gap-3 sm:gap-6"
            variants={staggerContainerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="bg-white dark:bg-card p-4 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={gridItemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px rgba(0, 212, 255, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="text-3xl sm:text-4xl font-bold text-primary mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isVisible
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0 }
                  }
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <motion.p
                  className="text-sm sm:text-base text-foreground/70 font-medium"
                  variants={itemVariants}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
