import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t("navAbout"), href: "#about" },
    { label: t("navSkills"), href: "#skills" },
    // { label: "Projects", href: "#projects" },
    { label: t("navExperience"), href: "#experience" },
    // { label: "Workplaces", href: "#workplaces" },
    { label: t("navContact"), href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Pisey Suon home"
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold group-hover:shadow-lg transition-shadow">
            PS
          </div>
          <span className="font-bold text-lg text-foreground hidden sm:inline">
            Pisey Suon
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground/70 hover:text-foreground transition-colors duration-300 font-medium text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-secondary rounded-lg transition-colors duration-300"
            aria-label={t("themeToggle")}
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-foreground" />
            ) : (
              <Sun className="w-5 h-5 text-foreground" />
            )}
          </button>

          <div className="flex items-center rounded-lg border border-border bg-secondary/60 p-0.5" aria-label={t("languageLabel")}>
            {(["en", "km"] as const).map((locale) => (
              <button
                key={locale}
                type="button"
                onClick={() => setLanguage(locale)}
                className={`min-w-10 rounded-md px-2 py-1.5 text-xs font-bold transition-colors ${language === locale ? "bg-primary text-white shadow-sm" : "text-foreground/60 hover:text-foreground"}`}
                aria-pressed={language === locale}
                aria-label={locale === "en" ? t("english") : t("khmer")}
              >
                {locale === "en" ? "EN" : "ខ្មែរ"}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors duration-300"
            aria-label={t("menuToggle")}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/70 hover:text-foreground transition-colors duration-300 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
