import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  fadeInLeftVariants,
  fadeInRightVariants,
  fadeInTopVariants,
  floatVariants,
  containerVariants,
  itemVariants,
} from "@/lib/animations";

export default function Hero() {
  const socialIcons = [
    { icon: Mail, href: "mailto:suonpisey017@gmail.com", label: "Email" },
  ];

  return (
    <section className="relative min-h-[calc(100svh-4rem)] md:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 md:pt-20 md:pb-20">
      {/* Animated Background Image */}
      <motion.div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663367800636/dZ5C6w7DuDfkAPu4c5yJQd/hero-background-MHhFiJdFuFG6zfQG8RqhMr.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
      />

      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <motion.span
              className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Welcome to my portfolio
            </motion.span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-5 md:mb-6 leading-tight"
          >
            Hi, I'm <span className="gradient-text">Pisey Suon</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-foreground/70 mb-4 font-medium"
          >
            Full-Stack Developer from Cambodia
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-foreground/60 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0"
          >
            I craft beautiful, performant web applications using modern
            technologies like React, Next.js, TypeScript, and Node.js.
            Passionate about building scalable solutions and delivering
            exceptional user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row sm:justify-center md:justify-start gap-3 sm:gap-4 mb-9 md:mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold flex items-center gap-2 w-full sm:w-auto"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold w-full sm:w-auto"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-6"
          >
            <span className="text-foreground/60 font-medium">
              Connect with me:
            </span>
            <motion.div
              className="flex gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {socialIcons.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary hover:bg-primary/10 rounded-lg transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      backgroundColor: "rgba(0, 212, 255, 0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-foreground" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side - Decorative Element */}
        <motion.div
          className="hidden md:flex items-center justify-center"
          variants={fadeInRightVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="relative w-full h-96"
            variants={floatVariants}
            animate="animate"
          >
            <img
              src="/assets/logo.jpg"
              alt="Decorative Element"
              className="absolute inset-0 w-full h-full object-contain rounded-2xl   "
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
