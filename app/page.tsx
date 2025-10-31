"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Divider } from "@heroui/divider";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import PitchSection from "@/components/PitchSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  // Palabras que van rotando
  const words = ["websites", "mobile apps", "landing pages"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <main className="px-6 md:px-8 flex-1">
      <section
        className="mx-auto max-w-6xl py-16 md:py-24 grid gap-10 md:gap-16
                   md:grid-cols-[minmax(320px,420px)_1fr]
                   text-center md:text-left items-center justify-items-center"
      >
        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, y: 12, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-[220px] h-[220px] md:w-[300px] md:h-[300px]
                     rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/10
                     bg-linear-to-br from-white/5 to-white/0"
        >
          <Image
            src="/images/emerson-profile.jpeg"
            alt="Profile photo"
            fill
            sizes="(max-width: 768px) 240px, 300px"
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Texto + CTAs */}
        <div className="max-w-2xl flex flex-col items-center md:items-start">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-4xl leading-tight font-bold tracking-tight
                       md:text-6xl md:leading-[1.1]"
          >
            Hi, I am Emerson – Developer and Software Engineer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="mt-6 text-lg md:text-2xl text-foreground/80"
          >
            I believe technology should feel human.
            That’s why I build <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-primary font-semibold"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence> focused on clarity,
            performance, and meaningful user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="mt-8 flex flex-col sm:flex-row items-center sm:items-center gap-4"
          >
            <Button
              as={Link}
              href="https://wa.me/573108286747?text=Hi%20Emerson%2C%20I%20am%20interested%20in%20your%20services."
              color="primary"
              size="lg"
              radius="full"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 md:px-9 shadow-lg"
            >
              Let's talk
            </Button>

            {/* Pill “Open for opportunities” */}
            <Link
              href="#open-opportunities"
              className="inline-flex items-center gap-2 rounded-full
                         border border-foreground/20 bg-background/40
                         px-4 py-2 text-sm md:text-base shadow-sm
                         hover:border-foreground/30 transition-colors"
            >
              <span
                aria-hidden
                className="inline-block size-2.5 rounded-full bg-emerald-500 ring-2 ring-emerald-500/30"
              />
              <span>Open for opportunities</span>
            </Link>
          </motion.div>
        </div>
      </section>
      <Divider/>

      <section className="mx-auto max-w-6xl py-12 md:py-16">
        <header className="mb-8 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Portfolio projects
          </h2>
          <p className="mt-3 text-foreground/80 max-w-2xl mx-auto md:mx-0">
            Every project is like a new little story: unique starting points and
            tasks, but all with a happy end.
          </p>
        </header>

        {/* Grid: mobile 1 col, desktop 3 col, “PC grande” 4 col */}
        <div
          className="
            grid gap-4
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-3
            "
            // Cuando hayan 4 proyectos o más, activar 4 columnas en pantallas muy grandes arriba, asi lg:grid-cols-4
        >
          {/* 3 proyectos (quedan en 1 fila en md, y también en lg) */}
          <ProjectCard
            title="Hummy - Food Rescue"
            kicker="Mobile App"
            image="/images/Hummy.png"
            href="https://github.com/Emeeerrr/Hummy"
            cta="Case study"
          />
          <ProjectCard
            title="BookStack - Books App"
            kicker="Mobile App"
            image="/images/BookStack.png"
            href="https://bookstackprueba.netlify.app/"
            cta="See details"
          />
          <ProjectCard
            title="Tesla "
            kicker="Web App"
            image="/images/tesla-landing.png"
            href="https://glittering-flan-48ffe4.netlify.app/"
            cta="Live demo"
          />
        </div>
      </section>
      <Divider/>

      <section className="mx-auto max-w-6xl py-12 md:py-16">
        <PitchSection />
      </section>

      <section>
        <Footer />
      </section>

    </main>
  );
}
