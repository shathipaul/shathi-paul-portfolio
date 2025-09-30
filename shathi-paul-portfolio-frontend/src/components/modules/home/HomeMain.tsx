import AboutSection from "./about/AboutSection";
import ContactSection from "./contact/ContactSection";

import ReviewsSection from "./reviews/ReviewsSection";
import ServicesSection from "./services/ServicesSection";

const HomeMain = () => {
  return (
    <div className="relative">
      <AboutSection />
      <ServicesSection />
      <ReviewsSection />
      <ContactSection />
    </div>
  );
};

export default HomeMain;
