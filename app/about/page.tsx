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
import AboutHero from "@/components/AboutHero";
import AboutExperience from "@/components/AboutExperience";
import AboutSkillsEducation from "@/components/AboutSkillsEducation";

export default function AboutPage() {
    return (
        <main className="px-6 md:px-8 flex-1">
            <section>
                <AboutHero />
                <Divider/>
                <AboutExperience />
                <Divider/>
                <AboutSkillsEducation />
                <Divider/>
                <Footer />
            </section>
        </main>
    )
}
