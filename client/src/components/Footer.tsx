import { Mail, ArrowUp, Facebook, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  containerVariants,
  itemVariants,
  staggerContainerVariants,
} from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Mail, href: "mailto:suonpisey017@gmail.com", label: "Email" },
    {
      icon: Facebook,
      href: "https://www.facebook.com/suon.pisey.293654",
      label: "Facebook",
    },
    {
      icon: Send,
      href: "https://t.me/error_code_kh",
      label: "Telegram",
    },
  ];

  const navItems = [
    { label: t("navAbout"), href: "#about" },
    { label: t("navSkills"), href: "#skills" },
    { label: t("navExperience"), href: "#experience" },
    { label: t("navContact"), href: "#contact" },
  ];
  return (
    <footer
      className="relative overflow-hidden border-t border-border/50 bg-card/40 dark:border-white/15 dark:bg-card/80"
      ref={ref}
    >
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl dark:bg-cyan-300/10"
        aria-hidden="true"
      />
      <div className="container relative py-12 md:py-16">
        {/* Main Footer Content */}
        <motion.div
          className="mb-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Brand */}
          <motion.div
            className="max-w-sm sm:col-span-2 lg:col-span-1"
            variants={itemVariants}
          >
            <motion.div
              className="mb-4 flex items-center gap-3"
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="h-12 w-12 overflow-hidden rounded-full border-2 border-primary/30 bg-white shadow-lg shadow-primary/10"
                whileHover={{
                  scale: 1.1,
                  rotate: 360,
                  boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
                }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="/assets/logo2.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </motion.div>
              <div>
                <span className="block text-lg font-bold text-foreground">
                  Pisey Suon
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary dark:text-cyan-300">
                  {t("footerRole")}
                </span>
              </div>
            </motion.div>
            <motion.p
              className="text-sm leading-7 text-muted-foreground dark:text-foreground/75"
              variants={itemVariants}
            >
              {t("footerDescription")}
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-foreground"
              whileHover={{ color: "#00d4ff" }}
            >
              {t("navigation")}
            </motion.h3>
            <motion.ul
              className="space-y-3.5"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item) => (
                <motion.li key={item.href} variants={itemVariants}>
                  <motion.a
                    href={item.href}
                    className="inline-flex items-center text-sm text-muted-foreground transition-colors duration-300 hover:text-primary dark:text-foreground/75 dark:hover:text-cyan-300"
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
              className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-foreground"
              whileHover={{ color: "#00d4ff" }}
            >
              {t("connect")}
            </motion.h3>
            <motion.div
              className="flex flex-col gap-2.5"
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
                    className="group flex min-h-11 items-center gap-3 rounded-xl border border-border/70 bg-background/60 px-4 text-sm font-medium text-muted-foreground shadow-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary dark:border-white/15 dark:bg-white/[0.06] dark:text-foreground/80 dark:hover:border-cyan-300/50 dark:hover:bg-cyan-300/10 dark:hover:text-cyan-200"
                    variants={itemVariants}
                    whileHover={{
                      x: 4,
                      backgroundColor: "rgba(0, 212, 255, 0.1)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4 text-primary dark:text-cyan-300" />
                    <span>{social.label}</span>
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="my-8 border-t border-border/60 dark:border-white/15"
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
            className="text-center text-sm text-muted-foreground dark:text-foreground/75 md:text-left"
            variants={itemVariants}
          >
            © {currentYear} Pisey Suon. {t("copyright")}
          </motion.p>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            className="flex min-h-11 items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 text-sm font-medium text-muted-foreground shadow-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary dark:border-white/15 dark:bg-white/[0.06] dark:text-foreground/80 dark:hover:border-cyan-300/50 dark:hover:bg-cyan-300/10 dark:hover:text-cyan-200"
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(0, 212, 255, 0.1)",
            }}
            whileTap={{ scale: 0.9 }}
            aria-label={t("scrollToTop")}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUp className="w-5 h-5 text-foreground" />
            </motion.div>
            <span>{t("backToTop")}</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
