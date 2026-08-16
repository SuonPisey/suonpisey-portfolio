import { Camera, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { containerVariants, itemVariants, staggerContainerVariants } from "@/lib/animations";

const workplaces = [
  {
    company: "Setec Institute",
    role: "Lecturer",
    period: "2026 — Present",
    image: "/assets/workplaces/setec-mock.webp",
    position: "md:col-span-7",
  },
  {
    company: "Hanuman Beverages",
    role: "Web Application Developer",
    period: "2026 — Present",
    image: "/assets/workplaces/hanuman-mock.webp",
    position: "md:col-span-5",
  },
  {
    company: "Online ISP",
    role: "Web Application Developer",
    period: "2024 — 2026",
    image: "/assets/workplaces/onlineisp-mock.webp",
    position: "md:col-span-5",
  },
  {
    company: "Cubetiq Solution",
    role: "Frontend Developer & Technical Support",
    period: "2022 — 2024",
    image: "/assets/workplaces/cubetiq-mock.webp",
    position: "md:col-span-7",
  },
] as const;

export default function Workplaces() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="workplaces" ref={ref} className="bg-secondary/35 py-20 md:py-32">
      <div className="container">
        <motion.div
          className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <div>
            <motion.p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-primary" variants={itemVariants}>
              <Camera className="h-4 w-4" />
              Workplace gallery
            </motion.p>
            <motion.h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-6xl" variants={itemVariants}>
              Places behind the journey.
            </motion.h2>
          </div>
          <motion.p className="max-w-md text-sm leading-7 text-foreground/55 md:text-base" variants={itemVariants}>
            A visual collection of the environments where I learned, built, collaborated, and taught.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-5 md:grid-cols-12"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {workplaces.map((place) => (
            <motion.figure
              key={place.company}
              variants={itemVariants}
              className={`group relative min-h-[22rem] overflow-hidden rounded-3xl bg-card shadow-sm ${place.position}`}
            >
              <img
                src={place.image}
                alt={`Mock workplace scene for ${place.company}`}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
              <div className="absolute right-5 top-5 rounded-full border border-white/25 bg-black/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                Mock photo
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/65">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  Phnom Penh · {place.period}
                </p>
                <h3 className="text-2xl font-bold sm:text-3xl">{place.company}</h3>
                <p className="mt-1 text-sm text-white/75 sm:text-base">{place.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        <p className="mt-6 text-center text-xs text-foreground/45">
          These are generated placeholder scenes and can be replaced with your real workplace photos anytime.
        </p>
      </div>
    </section>
  );
}
