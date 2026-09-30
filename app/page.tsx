import { ContactSection } from "@/sections/ContactSection";
import { CoverSection } from "@/sections/CoverSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { WorkSection } from "@/sections/WorkSection";
import { WritingSection } from "@/sections/WritingSection";

export default function Home() {
  return (
    <>
      <CoverSection />
      <HeroSection />
      <WorkSection />
      <ProjectsSection />
      <SkillsSection />
      <WritingSection />
      <ContactSection />
    </>
  );
}
