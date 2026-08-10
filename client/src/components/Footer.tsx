import { Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  containerVariants,
  itemVariants,
  staggerContainerVariants,
} from "@/lib/animations";

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Mail, href: "mailto:suonpisey017@gmail.com", label: "Email" },
  ];

  const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];
  const resourceItems = [{ label: "Resume", href: "/resumev2.pdf" }];

  return (
    <footer className="bg-background border-t border-border/50" ref={ref}>
      <div className="container py-12 md:py-16">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="w-9 h-9 overflow-hidden rounded-lg border border-border bg-white"
                whileHover={{
                  scale: 1.1,
                  rotate: 360,
                  boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
                }}
                transition={{ duration: 0.5 }}
              >
                <img src="/assets/logo.jpg" alt="" className="h-full w-full object-cover" />
              </motion.div>
              <span className="font-bold text-lg text-foreground">
                Pisey Suon
              </span>
            </motion.div>
            <motion.p
              className="text-foreground/60 text-sm leading-relaxed"
              variants={itemVariants}
            >
              Full-Stack Developer crafting beautiful and functional web
              applications.
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="font-semibold text-foreground mb-4"
              whileHover={{ color: "#00d4ff" }}
            >
              Navigation
            </motion.h3>
            <motion.ul
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item) => (
                <motion.li key={item} variants={itemVariants}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    className="text-foreground/60 hover:text-primary transition-colors duration-300 text-sm"
                    whileHover={{ x: 5, color: "#00d4ff" }}
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="font-semibold text-foreground mb-4"
              whileHover={{ color: "#00d4ff" }}
            >
              Resources
            </motion.h3>
            <motion.ul
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {resourceItems.map((item) => (
                <motion.li key={item.label} variants={itemVariants}>
                  <motion.a
                    href={item.href}
                    className="text-foreground/60 hover:text-primary transition-colors duration-300 text-sm"
                    whileHover={{ x: 5, color: "#00d4ff" }}
                  >
                    {item.label}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="font-semibold text-foreground mb-4"
              whileHover={{ color: "#00d4ff" }}
            >
              Connect
            </motion.h3>
            <motion.div
              className="flex gap-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary hover:bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                      backgroundColor: "rgba(0, 212, 255, 0.1)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-foreground hover:text-primary" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-border/50 my-8"
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.6 }}
          style={{ originX: 0 }}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.p
            className="text-center md:text-left text-foreground/60 text-sm"
            variants={itemVariants}
          >
            © {currentYear} Pisey Suon. All rights reserved.
          </motion.p>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            className="flex min-h-11 min-w-11 items-center justify-center bg-secondary hover:bg-primary/10 rounded-lg transition-all duration-300"
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(0, 212, 255, 0.1)",
            }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUp className="w-5 h-5 text-foreground" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
