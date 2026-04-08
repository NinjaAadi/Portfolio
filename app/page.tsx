import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { SystemDesignSection } from "@/sections/SystemDesignSection";
import { ContactSection } from "@/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <SystemDesignSection />
      <ContactSection />
    </main>
  );
}
