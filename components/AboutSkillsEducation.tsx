"use client";

import { Card, CardBody } from "@heroui/react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiFlask,
  SiPostgresql,
  SiMongodb,
  SiShopify,
  SiGoogleanalytics,
  SiGithub,
  SiMeta,
} from "react-icons/si";
import { FaAws, FaNodeJs } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { MdOutlineLanguage } from "react-icons/md";
import { JSX } from "react";

const easeOut = [0.16, 1, 0.3, 1] as const;

type Skill = { label: string; color: string; icon?: JSX.Element };

const Pill = ({ label, color, icon }: Skill) => (
  <span
    className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium text-white shadow-md ${color}`}
  >
    {icon}
    {label}
  </span>
);

export default function AboutSkillsEducation() {
  const SKILLS = [
    {
      group: "Frontend",
      color: "bg-sky-500",
      items: [
        { label: "Angular", icon: <SiAngular /> },
        { label: "React", icon: <SiReact /> },
        { label: "Next.js", icon: <SiNextdotjs /> },
        { label: "TypeScript", icon: <SiTypescript /> },
        { label: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      group: "Backend",
      color: "bg-emerald-500",
      items: [
        { label: "Python", icon: <SiPython /> },
        { label: "Flask", icon: <SiFlask /> },
        { label: "Django", icon: <SiDjango /> },
        { label: "Node.js", icon: <FaNodeJs /> },
      ],
    },
    {
      group: "Databases",
      color: "bg-orange-500",
      items: [
        { label: "PostgreSQL", icon: <SiPostgresql /> },
        { label: "MongoDB", icon: <SiMongodb /> },
      ],
    },
    {
      group: "Cloud & DevOps",
      color: "bg-violet-500",
      items: [
        { label: "AWS (EC2, S3)", icon: <FaAws /> },
        { label: "Azure DevOps", icon: <VscAzure /> },
        { label: "GitHub", icon: <SiGithub /> },
      ],
    },
    {
      group: "E-commerce & Analytics",
      color: "bg-indigo-500",
      items: [
        { label: "Shopify", icon: <SiShopify /> },
        { label: "Tienda Nube" },
        { label: "Google Analytics", icon: <SiGoogleanalytics /> },
        { label: "Meta Pixel", icon: <SiMeta /> },
      ],
    },
    {
      group: "Languages",
      color: "bg-gray-700",
      items: [
        { label: "Spanish (Native)", icon: <MdOutlineLanguage /> },
        { label: "English (C1 – EF SET)", icon: <MdOutlineLanguage /> },
      ],
    },
  ];

  const EDUCATION = [
    {
      title: "Bachelor’s Degree in Computer Engineering",
      org: "Institución Universitaria de Envigado",
      meta: "2020–2024 · Envigado, Antioquia",
      // Cambia la ruta si subes el logo a /public/images/
      logo: "/images/iue-logo.png",
    },
    {
      title: "English (C1) – EF SET",
      org: "EF Standard English Test",
      meta: "Professional proficiency",
      logo: "/images/efset-logo.png",
    },
    {
      title: "Network Defense",
      org: "Cisco Academy",
      meta: "Course completion",
      logo: "/images/cisco-logo.png",
    },    
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 md:px-8 py-12 md:py-16">
      {/* Skills / Toolset */}
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl md:text-4xl font-bold tracking-tight"
      >
        My skills & toolset
      </motion.h2>

      <div className="mt-6 space-y-6">
        {SKILLS.map((block, i) => (
          <motion.div
            key={block.group}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.04 * i }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-foreground/70">
              {block.group}
            </div>
            <div className="flex flex-wrap gap-2">
              {block.items.map((s) => (
                <Pill key={s.label} label={s.label} icon={s.icon} color={block.color} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Courses & Education */}
      <motion.h3
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-12 md:mt-16 text-3xl md:text-4xl font-bold tracking-tight"
      >
        Courses & education
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut }}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {EDUCATION.map((c) => (
          <Card
            key={c.title}
            className="border border-foreground/10 bg-background/60 shadow-lg shadow-black/5 dark:shadow-white/5"
          >
            <CardBody className="p-6 flex items-center gap-4">
              {/* Logo opcional */}
              <div className="shrink-0 size-28 rounded-full bg-foreground/10 grid place-items-center overflow-hidden">
                {/* Si no tienes logos, puedes dejar solo la inicial */}
                {/* <span className="text-lg font-bold">{c.title.charAt(0)}</span> */}
                <Image
                    src={c.logo}
                    alt={`${c.org} logo`}
                    width={104}
                    height={104}
                    className="object-contain"
                />
              </div>
              <div>
                <div className="text-lg font-semibold">{c.title}</div>
                <div className="text-foreground/80">{c.org}</div>
                <div className="text-sm text-foreground/60">{c.meta}</div>
              </div>
            </CardBody>
          </Card>
        ))}
      </motion.div>
    </section>
  );
}
