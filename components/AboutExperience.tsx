"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1] as const;

const EXPERIENCE = [
  {
    key: "1",
    title: "Full-Stack Developer — Bancolombia S.A.",
    subtitle: "Aug 2024 – Present | Medellín, Colombia",
    bullets: [
      "Automated accounting and financial statement generation for Grupo Cibest and its subsidiaries.",
      "Developed a responsive web app for data uploads, job execution, results download, and analytics (Angular + Flask + PostgreSQL).",
      "Leveraged AWS (EC2, S3) for scalability and set up CI/CD pipelines with Azure DevOps for continuous delivery.",
    ],
  },
  {
    key: "2",
    title: "Founder & Web Developer — Freelance Projects",
    subtitle: "Oct 2023 – Present | Colombia",
    bullets: [
      "Built and launched high-converting e-commerce stores on Shopify and Tienda Nube for SMBs.",
      "Integrated payments (Mercado Pago, PayU, Shopify Payments) and automated analytics with Meta Pixel and Google Analytics.",
      "Delivered ready-to-sell storefronts with responsive UI, SEO fundamentals, and optimized performance.",
    ],
  },
  {
    key: "3",
    title: "Frontend Developer / Product Owner — Alterego SAS",
    subtitle: "Nov 2023 – Nov 2024 | Medellín, Colombia",
    bullets: [
      "Contributed to an e-learning platform built with Next.js, TypeScript, Tailwind, Prisma, and MongoDB.",
      "Collaborated with design and engineering teams to improve accessibility, performance, and security.",
      "Defined and prioritized scope alongside stakeholders, ensuring user-focused and timely delivery.",
    ],
  },
  {
    key: "4",
    title: "Software Developer Intern — Bancolombia S.A.",
    subtitle: "Jan 2024 – Jul 2024 | Medellín, Colombia",
    bullets: [
      "Developed an internal portal for app inventory management using Angular, Django, and SQLite.",
      "Automated tracking processes, improving data accuracy and operational efficiency.",
      "Enhanced system security through firewall configuration, certificate management, and vulnerability assessments.",
    ],
  },
];

const WHAT_I_DO = [
  {
    title: "For businesses",
    text:
      "I design and ship apps that are easy to use and valuable for customers — clean UX, measurable results, and maintainable code.",
  },
  {
    title: "For startups",
    text:
      "I help validate the problem, shape an MVP, and select a pragmatic stack. You get momentum, clarity, and a product you can iterate on.",
  },
  {
    title: "For product teams",
    text:
      "I boost delivery with component libraries, performance work and CI/CD — fewer blockers, faster releases, and higher quality.",
  },
];

export default function AboutExperience() {
  // split experiencia en 2 columnas balanceadas
  const mid = Math.ceil(EXPERIENCE.length / 2);
  const colA = EXPERIENCE.slice(0, mid);
  const colB = EXPERIENCE.slice(mid);

  return (
    <section className="mx-auto max-w-6xl px-6 md:px-8 py-12 md:py-16">
      {/* Professional Experience */}
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl md:text-4xl font-bold tracking-tight"
      >
        Professional Experience
      </motion.h2>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {[colA, colB].map((col, colIndex) => (
          <motion.div
            key={colIndex}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.1 * colIndex }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Accordion variant="splitted" className="space-y-3">
              {col.map((exp) => (
                <AccordionItem
                  key={exp.key}
                  aria-label={exp.title}
                  title={<span className="font-semibold">{exp.title}</span>}
                  subtitle={
                    <span className="text-sm text-foreground/70">
                      {exp.subtitle}
                    </span>
                  }
                >
                  <ul className="list-disc pl-6 space-y-1 text-foreground/80">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        ))}
      </div>

      {/* What I can do for you */}
      <motion.h3
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 md:mt-16 text-3xl md:text-4xl font-bold tracking-tight"
      >
        What I can do for you
      </motion.h3>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {WHAT_I_DO.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.06 * i }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="h-full border border-foreground/10 bg-background/60 shadow-lg shadow-black/5 dark:shadow-white/5">
              <CardBody className="p-6">
                <h4 className="text-xl font-semibold mb-2">{card.title}</h4>
                <p className="text-foreground/80">{card.text}</p>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
