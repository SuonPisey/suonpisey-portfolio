"use client";

import { useState } from "react";
import { Menu, X, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/theme-toggle";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
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
    <div className="lg:hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-14 w-14">
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
            <div>
              <h2 className="text-lg font-bold text-foreground">Suon Pisey</h2>
              <p className="text-xs text-muted-foreground">
                Full Stack Developer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm pt-20">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            <ul className="space-y-6 text-center">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-2xl uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex gap-4 mt-8">
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
        </div>
      )}
    </div>
  );
}
