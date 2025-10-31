"use client";

import { Button, Card, CardHeader, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import type { Transition } from "framer-motion";
import Link from "next/link";

const easeOut: Transition["ease"] = [0.16, 1, 0.3, 1]; // equivalente a easeOut

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: d, ease: easeOut } as Transition,
  viewport: { once: true, amount: 0.3 },
});

export default function PitchSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-8">
      {/* Headline */}
      <motion.div {...fade(0)} className="text-center md:text-left mb-10 md:mb-14">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            I build digital products that connect design, code, and impact.
        </h2>
        <p className="mt-4 text-foreground/80 text-lg md:text-xl max-w-3xl md:max-w-2xl mx-auto md:mx-0">
            From idea to production, I craft responsive, high-performing web apps and 
            e-commerce platforms using Angular, Next.js, and Flask — blending UX clarity, 
            backend precision, and cloud scalability. I design systems that work beautifully and 
            scale seamlessly.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div {...fade(0.05)} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { n: "90+", label: "screens designed" },
          { n: "15+", label: "projects shipped" },
          { n: "4", label: "companies helped" },
          { n: "∞", label: "iterations (but focused)" },
        ].map((s, i) => (
          <Card key={i} className="border border-foreground/10 bg-background/40">
            <CardBody className="text-center py-6">
              <div className="text-2xl md:text-3xl font-bold">{s.n}</div>
              <div className="text-sm text-foreground/70">{s.label}</div>
            </CardBody>
          </Card>
        ))}
      </motion.div>

      {/* Value grid */}
      <div className="grid gap-4 md:gap-6 md:grid-cols-3">
        <motion.div {...fade(0.1)}>
          <Card className="h-full border border-foreground/10 bg-background/40 px-3">
            <CardHeader className="pb-0">
              <h3 className="text-xl font-semibold">Design that performs</h3>
            </CardHeader>
            <CardBody className="pt-3 text-foreground/80">
              <ul className="space-y-2 list-disc pl-5">
                <li>Interfaces built with usability, clarity, and real conversion goals in mind.</li>
                <li>Responsive layouts optimized for mobile and desktop experiences.</li>
                <li>Accessible, component-driven design systems that translate directly into code.</li>
              </ul>
            </CardBody>
          </Card>
        </motion.div>

        <motion.div {...fade(0.15)}>
          <Card className="h-full border border-foreground/10 bg-background/40 px-3">
            <CardHeader className="pb-0">
              <h3 className="text-xl font-semibold">Code that scales</h3>
            </CardHeader>
            <CardBody className="pt-3 text-foreground/80">
              <ul className="space-y-2 list-disc pl-5">
                <li>End-to-end development with Angular, Next.js, Flask, and PostgreSQL.</li>
                <li>Continuous deployment pipelines through Azure DevOps and AWS EC2/S3.</li>
                <li>Clean architecture, reusable APIs, and performance-driven integrations.</li>
              </ul>
            </CardBody>
          </Card>
        </motion.div>

        <motion.div {...fade(0.2)}>
          <Card className="h-full border border-foreground/10 bg-background/40 px-3">
            <CardHeader className="pb-0">
              <h3 className="text-xl font-semibold">Impact that lasts</h3>
            </CardHeader>
            <CardBody className="pt-3 text-foreground/80">
              <ul className="space-y-2 list-disc pl-5">
                <li>Projects focused on measurable outcomes — speed, reliability, and adoption.</li>
                <li>Agile delivery with transparent communication and iterative improvement.</li>
                <li>Solutions that empower teams and businesses to move faster and smarter.</li>
              </ul>
            </CardBody>
          </Card>
        </motion.div>
      </div>

      {/* Deliverables */}
      <motion.div {...fade(0.25)} className="mt-10">
        <div className="rounded-2xl border border-foreground/10 bg-background/40 p-5 md:p-6">
          <p className="text-foreground/80">
            <span className="font-semibold">Deliverables: </span>
                Modern UI systems in Figma and code, responsive web apps, optimized APIs, 
                database schemas, cloud deployment setup (AWS / Azure), documentation, and 
                post-launch performance reports. Everything needed to ship and evolve with confidence.
          </p>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div {...fade(0.3)} className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
        <Button
          as={Link}
          href="https://wa.me/573108286747?text=Hi%20Emerson%2C%20let%E2%80%99s%20discuss%20a%20project."
          color="primary"
          size="lg"
          radius="full"
          className="px-7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let’s build something that scales
        </Button>

        <Button as={Link} href="/about" variant="flat" size="lg" radius="full" className="px-7">
          Learn more about me
        </Button>
      </motion.div>
    </section>
  );
}
