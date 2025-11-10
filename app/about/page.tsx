"use client";

import { Divider } from "@heroui/divider";
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
