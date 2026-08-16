import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  containerVariants,
  itemVariants,
  staggerContainerVariants,
  gridItemVariants,
} from "@/lib/animations";

export default function Resume() {
  const { ref, isVisible } = useScrollAnimation();

  const handleDownload = () => {
    // Create a simple resume PDF download
    const resumeUrl = "/resumev2.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Pisey_Suon_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resumeHighlights = [
    {
      category: "Education",
      items: [
        {
          title: "Master of Information Technology (MIT)",
          institution: "Setec Institute ",
          year: "2026",
        },
        {
          title: "Bachelor of Management Information Systems (MIS)",
          institution: "Setec Institute ",
          year: "2021",
        },
        {
          title: "High School  ",
          institution: "THun Sen Ou Reang Ov High School",
          year: "2013",
        },
      ],
    },
    // {
    //   category: "Certifications",
    //   items: [
    //     {
    //       title: "AWS Certified Solutions Architect",
    //       institution: "Amazon Web Services",
    //       year: "2023",
    //     },
    //     {
    //       title: "Google Cloud Professional Data Engineer",
    //       institution: "Google Cloud",
    //       year: "2022",
    //     },
    //     {
    //       title: "React Advanced Patterns",
    //       institution: "Frontend Masters",
    //       year: "2021",
    //     },
    //   ],
    // },
  ];

  return (
    <section className="py-10   bg-background" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Resume & Credentials
          </motion.h2>
        </motion.div>
        {/* Education & Certifications */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-16"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {resumeHighlights.map((section) => (
            <motion.div
              key={section.category}
              className="bg-white dark:bg-card rounded-xl p-5 sm:p-8 shadow-sm border border-border/50"
              variants={gridItemVariants}
              whileHover={{
                boxShadow: "0 20px 25px rgba(0, 212, 255, 0.15)",
                y: -5,
              }}
            >
              <motion.h3
                className="text-2xl font-bold text-foreground mb-8"
                whileHover={{ color: "#00d4ff" }}
              >
                {section.category}
              </motion.h3>

              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    className="pb-6 border-b border-border/50 last:pb-0 last:border-b-0"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
                      <motion.h4
                        className="font-semibold text-foreground leading-tight"
                        whileHover={{ color: "#00d4ff" }}
                      >
                        {item.title}
                      </motion.h4>
                      <motion.span
                        className="text-sm font-medium text-primary whitespace-nowrap"
                        whileHover={{ scale: 1.1 }}
                      >
                        {item.year}
                      </motion.span>
                    </div>
                    <motion.p
                      className="text-foreground/60 text-sm"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {item.institution}
                    </motion.p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="bg-secondary/50 rounded-xl p-5 sm:p-8 md:p-12 border border-border/50"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{
            boxShadow: "0 20px 25px rgba(0, 212, 255, 0.1)",
          }}
        >
          <motion.h3
            className="text-2xl font-bold text-foreground mb-8"
            whileHover={{ color: "#00d4ff" }}
          >
            Skills Summary
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                title: "Frontend",
                skills: [
                  "React & Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Framer Motion",
                  "Redux & State Management",
                ],
              },
              {
                title: "Backend",
                skills: [
                  "Node.js & Express",
                  "Spring Boot",
                  "REST APIs",
                  "GraphQL",
                  "Authentication & Security",
                ],
              },
              {
                title: "DevOps & Tools",
                skills: [
                  "Docker & Kubernetes",
                  "AWS & Cloud Services",
                  "Git & CI/CD",
                  "Linux & Terminal",
                  "Database Management",
                ],
              },
            ].map((category) => (
              <motion.div
                key={category.title}
                variants={gridItemVariants}
                whileHover={{ y: -5 }}
              >
                <motion.h4
                  className="font-semibold text-foreground mb-4"
                  whileHover={{ color: "#00d4ff" }}
                >
                  {category.title}
                </motion.h4>
                <motion.ul
                  className="space-y-2 text-foreground/70 text-sm"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {category.skills.map((skill) => (
                    <motion.li
                      key={skill}
                      className="flex items-center gap-2"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                    >
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-primary"
                        whileHover={{ scale: 1.5 }}
                      />
                      {skill}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
