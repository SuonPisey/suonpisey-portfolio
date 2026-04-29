import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  containerVariants,
  itemVariants,
  slideInLeftVariants,
  staggerContainerVariants,
} from '@/lib/animations';

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovations Ltd',
      period: '2023 - Present',
      location: 'Phnom Penh, Cambodia',
      description: 'Leading the development of scalable web applications, mentoring junior developers, and architecting microservices solutions.',
      highlights: [
        'Architected and deployed 5+ production applications',
        'Mentored 3 junior developers',
        'Improved application performance by 40%',
        'Led migration from monolith to microservices',
      ],
    },
    {
      id: 2,
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Co.',
      period: '2021 - 2023',
      location: 'Phnom Penh, Cambodia',
      description: 'Developed and maintained full-stack applications for various clients, focusing on user experience and code quality.',
      highlights: [
        'Built 8+ client projects from scratch',
        'Implemented real-time features using WebSockets',
        'Optimized database queries reducing load time by 50%',
        'Established coding standards and best practices',
      ],
    },
    {
      id: 3,
      title: 'Junior Developer Intern',
      company: 'Web Development Studio',
      period: '2020 - 2021',
      location: 'Phnom Penh, Cambodia',
      description: 'Started my career building responsive websites and learning modern web development practices.',
      highlights: [
        'Built 15+ responsive websites',
        'Learned React, Node.js, and database design',
        'Collaborated with designers and product managers',
        'Participated in code reviews and team meetings',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container">
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Experience
          </motion.h2>
          <motion.p
            className="text-lg text-foreground/60 max-w-2xl"
            variants={itemVariants}
          >
            My professional journey and the roles that shaped my expertise as a full-stack developer.
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="group"
              variants={slideInLeftVariants}
              whileHover={{ x: 10 }}
            >
              <div className="relative pl-8 md:pl-12">
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background dark:border-card flex items-center justify-center"
                  whileHover={{ scale: 1.3, boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)' }}
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
                    className="absolute left-3 top-6 w-0.5 h-32 bg-gradient-to-b from-primary to-primary/20"
                    initial={{ scaleY: 0 }}
                    animate={isVisible ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ originY: 0 }}
                  />
                )}

                {/* Content */}
                <motion.div
                  className="bg-white dark:bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/50"
                  whileHover={{
                    boxShadow: '0 20px 25px rgba(0, 212, 255, 0.15)',
                  }}
                >
                  <motion.div
                    className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div variants={itemVariants}>
                      <motion.h3
                        className="text-2xl font-bold text-foreground mb-2"
                        whileHover={{ color: '#00d4ff' }}
                      >
                        {exp.title}
                      </motion.h3>
                      <motion.p className="text-lg text-primary font-semibold" variants={itemVariants}>
                        {exp.company}
                      </motion.p>
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
                    className="text-foreground/60 mb-4 flex items-center gap-2"
                    variants={itemVariants}
                  >
                    <Briefcase className="w-4 h-4" />
                    {exp.location}
                  </motion.p>

                  <motion.p
                    className="text-foreground/70 mb-6 leading-relaxed"
                    variants={itemVariants}
                  >
                    {exp.description}
                  </motion.p>

                  {/* Highlights */}
                  <motion.div
                    className="space-y-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {exp.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3"
                        variants={itemVariants}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="text-foreground/70">{highlight}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
