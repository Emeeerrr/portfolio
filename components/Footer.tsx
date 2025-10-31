"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-primary text-primary-foreground py-6 px-6 rounded-t-3xl mt-4"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-4">
        <h3 className="text-lg md:text-4xl font-extrabold">
          Let’s talk about your project:
        </h3>

        <a
          href="mailto:emerrueda215@gmail.com"
          className="md:text-2xl font-medium underline hover:opacity-90 transition-opacity"
        >
          emerrueda215@gmail.com
        </a>

        <div className="flex items-center gap-6 mt-2">
          <Link
            href="https://www.linkedin.com/in/emerson-rueda-3314b0174"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm md:text-base hover:opacity-90 transition-opacity"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </Link>

          <Link
            href="https://github.com/Emeeerrr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm md:text-base hover:opacity-90 transition-opacity"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
