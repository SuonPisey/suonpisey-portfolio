"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "education",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 h-screen w-64 border-r border-border bg-card p-8 hidden lg:flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-6">
          <Avatar className="h-20 w-20">
            <AvatarImage
              src="/profile.PNG"
              alt="Suon Pisey"
              className="
              object-cover
              rounded-full
              border-2
              border-primary
              hover:scale-105
              transition-transform
              duration-300
            "
            />
            <AvatarFallback>SP</AvatarFallback>
          </Avatar>
          <ThemeToggle />
        </div>

        <h2 className="text-2xl font-bold mb-2 text-foreground">Suon Pisey</h2>
        <p className="text-sm text-muted-foreground mb-8">
          Full Stack Developer
        </p>

        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`text-sm uppercase tracking-wider transition-colors ${
                  activeSection === item.id
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4">
        <Button variant="ghost" size="icon" asChild>
          <a
            href="https://github.com/SuonPisey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a
            href="https://www.linkedin.com/in/suon-pisey-05a407318"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="mailto:suonpisey017@gmail.com">
            <Mail className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </nav>
  );
}
