import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  staggerContainerVariants,
  gridItemVariants,
  containerVariants,
  itemVariants,
} from '@/lib/animations';

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663367800636/dZ5C6w7DuDfkAPu4c5yJQd/projects-pattern-JyvZjdWjYuRXwJ9KXgsnpg.webp',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and analytics.',
      technologies: ['React', 'Firebase', 'Redux', 'Material-UI', 'WebSockets'],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663367800636/dZ5C6w7DuDfkAPu4c5yJQd/projects-pattern-JyvZjdWjYuRXwJ9KXgsnpg.webp',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'AI Content Generator',
      description: 'An intelligent content generation tool powered by OpenAI API with customizable templates and batch processing.',
      technologies: ['Next.js', 'OpenAI API', 'PostgreSQL', 'Vercel', 'Stripe'],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663367800636/dZ5C6w7DuDfkAPu4c5yJQd/projects-pattern-JyvZjdWjYuRXwJ9KXgsnpg.webp',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'A comprehensive dashboard for managing multiple social media accounts with analytics and scheduling features.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Socket.io'],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663367800636/dZ5C6w7DuDfkAPu4c5yJQd/projects-pattern-JyvZjdWjYuRXwJ9KXgsnpg.webp',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Weather Forecast App',
      description: 'A real-time weather application with location-based forecasts, historical data, and beautiful visualizations.',
      technologies: ['React', 'TypeScript', 'OpenWeather API', 'Mapbox', 'Tailwind CSS'],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663367800636/dZ5C6w7DuDfkAPu4c5yJQd/projects-pattern-JyvZjdWjYuRXwJ9KXgsnpg.webp',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'A modern blogging platform with markdown support, SEO optimization, and comment system.',
      technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL', 'Vercel'],
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663367800636/dZ5C6w7DuDfkAPu4c5yJQd/projects-pattern-JyvZjdWjYuRXwJ9KXgsnpg.webp',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container">
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-lg text-foreground/60 max-w-2xl"
            variants={itemVariants}
          >
            A selection of projects that showcase my skills in full-stack development, problem-solving, and user experience design.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group"
              variants={gridItemVariants}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="bg-white dark:bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-border/50 hover:border-primary/50"
                whileHover={{
                  boxShadow: '0 20px 25px rgba(0, 212, 255, 0.15)',
                }}
              >
                {/* Image */}
                <motion.div className="relative h-48 overflow-hidden bg-secondary">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <motion.h3
                    className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="text-foreground/70 mb-6 flex-grow leading-relaxed"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Technologies */}
                  <motion.div
                    className="mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                          whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 212, 255, 0.2)' }}
                          variants={itemVariants}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Links */}
                  <motion.div
                    className="flex gap-3 pt-4 border-t border-border/50"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div
                      className="flex-1"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full flex items-center justify-center gap-2"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Live
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div
                      className="flex-1"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full flex items-center justify-center gap-2"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold"
            >
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
