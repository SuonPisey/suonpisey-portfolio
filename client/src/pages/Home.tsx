import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Workplaces from '@/components/Workplaces';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Design Philosophy: Modern Minimalist with Geometric Accents
 * - Clean, professional aesthetic with deep charcoal text and warm white backgrounds
 * - Strategic use of teal (#00d4ff) accent color for interactive elements
 * - Generous whitespace and breathing room between sections
 * - Smooth scroll-triggered animations and subtle micro-interactions
 * - Typography-driven hierarchy using Poppins (headings) and Inter (body)
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        {/* <Projects /> */}
        <Experience />
        {/* <Workplaces /> */}
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
