"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardBody } from "@heroui/card";
import { motion } from "framer-motion";
import { Snippet } from "@heroui/snippet";
import { Button } from "@heroui/button";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function AboutHero() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-8 py-12 md:py-20">
      {/* Grid principal */}
      <div className="grid gap-10 md:gap-14 md:grid-cols-2 items-center">
        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, y: 12, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="relative w-full max-w-[420px] h-[480px] md:h-[540px] mx-auto
                     rounded-3xl overflow-hidden ring-1 ring-black/10 dark:ring-white/10
                     shadow-xl bg-linear-to-br from-white/5 to-white/0"
        >
          {/* Cambia la ruta por tu foto */}
          <Image
            src="/images/emerson-about.jpg"
            alt="Emerson Rueda"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Texto */}
        <div className="max-w-xl md:max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut, delay: 0.05 }}
            className="inline-flex items-center gap-2 py-1.5 text-sm"
          >
            <Snippet color="primary" variant="shadow">Web & Mobile Developer · Engineer</Snippet>
          </motion.div>
          

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
            className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            Hi, I’m Emerson Rueda
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.14 }}
            className="mt-2 text-2xl md:text-3xl text-foreground/90 font-semibold"
          >
            Your strategic partner for digital solutions
          </motion.h2>

          {/* Copy */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.18 }}
            className="mt-6 text-lg md:text-xl text-foreground/80"
          >
            I build full-stack solutions that connect UX clarity with strong engineering.
            From automating financial statement processes at Bancolombia to crafting
            e-commerce and e-learning platforms, I focus on creating products that are intuitive,
            performant, and built to scale.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.22 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center"
          >
            <Button
              as={Link}
              href="mailto:emerrueda215@gmail.com"
              color="primary"
              radius="full"
              size="lg"
              className="px-7"
            >
              Let’s work together
            </Button>

            <Button
              as={Link}
              href="/cv.pdf"
            //   variant="flat"
              color="secondary"
              radius="full"
              size="lg"
              className="px-7"
            >
              Download CV
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
      >
        {[
          { title: "Years experience", value: "+3" },
          { title: "Projects completed", value: "+10" },
          { title: "Industries served", value: "+4" },
        ].map((s) => (
          <Card
            key={s.title}
            className="border border-foreground/10 bg-background/60 backdrop-blur
                       shadow-lg shadow-black/5 dark:shadow-white/5"
          >
            <CardBody className="py-8 text-center">
              <div className="text-2xl md:text-[28px] font-semibold">
                {s.title}
              </div>
              <div className="mt-3 text-3xl md:text-4xl font-extrabold text-primary">
                {s.value}
              </div>
            </CardBody>
          </Card>
        ))}
      </motion.div>
    </section>
  );
}
