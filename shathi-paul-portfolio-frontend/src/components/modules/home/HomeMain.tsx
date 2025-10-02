import AboutSection from "./about/AboutSection";
import ContactSection from "./contact/ContactSection";
import ProjectsSection from "./projects/ProjectsSection";

import ReviewsSection from "./reviews/ReviewsSection";
import ServicesSection from "./services/ServicesSection";
import SkillsSection from "./skills/SkillsSection";

const HomeMain = () => {
  return (
    <div>
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <ReviewsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default HomeMain;
