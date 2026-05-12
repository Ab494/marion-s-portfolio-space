import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatICanBuildSection from "@/components/WhatICanBuildSection";
import StatsStrip from "@/components/StatsStrip";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import WhyWorkWithMeSection from "@/components/WhyWorkWithMeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyHireMeSection from "@/components/WhyHireMeSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import InterestsSection from "@/components/InterestsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SocialStrip from "@/components/SocialStrip";

const Index = () => {
  return (
    <>
      <Navbar />
      <SocialStrip />
      <HeroSection />
      <WhatICanBuildSection />
      <StatsStrip />
      <AboutSection />
      <SkillsSection />
      <WhyWorkWithMeSection />
      <TestimonialsSection />
      <WhyHireMeSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <InterestsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
