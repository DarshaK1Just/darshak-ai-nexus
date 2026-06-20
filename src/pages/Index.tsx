import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { FreelanceSection } from '@/components/FreelanceSection';
import { EducationSection } from '@/components/EducationSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { GithubShowcase } from '@/components/GithubShowcase';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { CustomCursor } from '@/components/CustomCursor';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <FreelanceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <GithubShowcase />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
