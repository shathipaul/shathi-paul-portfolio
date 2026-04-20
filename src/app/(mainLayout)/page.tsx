import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { MotivationSection } from "@/components/MotivationSection";
import NavigationSection from "@/components/NavigationSection";
import { SkillsSection } from "@/components/SkillsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      {/* Section 1: Hero banner */}
      <HeroSection profile={profile} />

      {/* Section 2: Motivation */}
      <MotivationSection profile={profile} />

      {/* Section 3: Skills */}
      <SkillsSection />

      {/* Section 4: Testimonials */}
      <TestimonialsSection />

      {/* Section 5: Contact */}
      <ContactSection profile={profile} />

      {/* CTAs — right-aligned, inside the skills section */}
      <NavigationSection />
    </>
  );
}
