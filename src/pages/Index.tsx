import { useState } from "react";
import HeroSection from "@/components/foc/HeroSection";
import PainSection from "@/components/foc/PainSection";
import DiagnosticSection from "@/components/foc/DiagnosticSection";
import QualificationSection from "@/components/foc/QualificationSection";
import FinalCTASection from "@/components/foc/FinalCTASection";
import Footer from "@/components/foc/Footer";
import FloatingButton from "@/components/foc/FloatingButton";
import QualificationPopup from "@/components/foc/QualificationPopup";

const Index = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <main>
      <HeroSection onOpenPopup={() => setPopupOpen(true)} />
      <PainSection />
      <DiagnosticSection onOpenPopup={() => setPopupOpen(true)} />
      <QualificationSection />
      <FinalCTASection onOpenPopup={() => setPopupOpen(true)} />
      <Footer />
      <FloatingButton onOpenPopup={() => setPopupOpen(true)} />
      <QualificationPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </main>
  );
};

export default Index;
