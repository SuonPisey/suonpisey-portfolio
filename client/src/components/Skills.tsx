import { Code2, Database, Wrench, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  staggerContainerVariants,
  gridItemVariants,
  containerVariants,
  itemVariants,
} from '@/lib/animations';

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      icon: Palette,
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'],
    },
    {
      icon: Code2,
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Spring Boot', 'Python', 'REST APIs', 'GraphQL'],
    },
    {
      icon: Database,
      title: 'Database',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'Redis', 'Prisma ORM'],
    },
    {
      icon: Wrench,
      title: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Linux'],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container">
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="text-lg text-foreground/60 max-w-2xl"
            variants={itemVariants}
          >
            A comprehensive toolkit of technologies and methodologies that I use to build robust, scalable applications.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                className="group"
                variants={gridItemVariants}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="bg-white dark:bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full border border-border/50 hover:border-primary/50"
                  whileHover={{
                    boxShadow: '0 20px 25px rgba(0, 212, 255, 0.15)',
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      backgroundColor: 'rgba(0, 212, 255, 0.2)',
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-xl font-bold text-foreground mb-6"
                    whileHover={{ color: '#00d4ff' }}
                  >
                    {category.title}
                  </motion.h3>

                  {/* Skills List */}
                  <motion.div
                    className="space-y-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        className="flex items-center gap-3"
                        variants={itemVariants}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full bg-primary"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="text-foreground/70 font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Decorative accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl -z-10 group-hover:bg-primary/10 transition-colors duration-300" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills Pattern Background */}
        <motion.div
          className="mt-20 pt-20 border-t border-border/50"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <motion.h3
              className="text-2xl font-bold text-foreground mb-4"
              variants={itemVariants}
            >
              Proficiency Levels
            </motion.h3>
            <motion.p
              className="text-foreground/60"
              variants={itemVariants}
            >
              My expertise across different technology areas
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            {[
              { label: 'Expert', percentage: 95, color: 'from-primary to-accent' },
              { label: 'Intermediate', percentage: 85, color: 'from-primary/80 to-accent/80' },
              { label: 'Learning', percentage: 60, color: 'from-primary/60 to-accent/60' },
            ].map((level) => (
              <motion.div
                key={level.label}
                className="text-center"
                variants={gridItemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="mb-4"
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="relative w-32 h-32 mx-auto">
                    <motion.svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 100 100"
                      animate={{ rotate: -90 }}
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-border"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        strokeDasharray={`${(level.percentage / 100) * 283} 283`}
                        className="transition-all duration-500"
                        initial={{ strokeDasharray: '0 283' }}
                        animate={isVisible ? { strokeDasharray: `${(level.percentage / 100) * 283} 283` } : { strokeDasharray: '0 283' }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="currentColor" className="text-primary" />
                          <stop offset="100%" stopColor="currentColor" className="text-accent" />
                        </linearGradient>
                      </defs>
                    </motion.svg>
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <span className="text-3xl font-bold text-primary">{level.percentage}%</span>
                    </motion.div>
                  </div>
                </motion.div>
                <motion.p
                  className="font-semibold text-foreground"
                  variants={itemVariants}
                >
                  {level.label}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
