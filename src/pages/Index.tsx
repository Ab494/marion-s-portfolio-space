import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import WhyHireMeSection from "@/components/WhyHireMeSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SocialStrip from "@/components/SocialStrip";

const Index = () => {
  return (
    <>
      <Navbar />
      <SocialStrip />
      <HeroSection />
      <StatsStrip />
      <AboutSection />
      <SkillsSection />
      <WhyHireMeSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
