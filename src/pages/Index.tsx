import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import MeetingSection from "@/components/landing/MeetingSection";
import SchedulingSection from "@/components/landing/SchedulingSection";
import AuthorityFooter from "@/components/landing/AuthorityFooter";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <MeetingSection />
      <SchedulingSection />
      <AuthorityFooter />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
