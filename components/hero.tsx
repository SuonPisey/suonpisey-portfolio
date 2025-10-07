import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-12">
      <div className="max-w-4xl animate-fade-in">
        <p className="text-primary text-sm md:text-base font-mono mb-4 animate-slide-down">Hi, my name is</p>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground text-balance animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          Suon Pisey.
        </h1>
        <h2
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-muted-foreground text-balance animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          I build full-stack applications.
        </h2>
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          I'm a full-stack developer specializing in building exceptional web applications with React, Next.js, and
          Spring Boot. Currently focused on creating scalable, performant solutions with modern technologies.
        </p>
        <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        <div className="mt-16 flex justify-center lg:justify-start">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
