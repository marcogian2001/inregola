import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import ProblemSection from "@/components/sections/ProblemSection";
import CredibilitySection from "@/components/sections/CredibilitySection";
import JourneySection from "@/components/sections/JourneySection";
import TimelineSection from "@/components/sections/TimelineSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ClosingCTASection from "@/components/sections/ClosingCTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBySection />
        <ProblemSection />
        <CredibilitySection />
        <JourneySection />
        <TimelineSection />
        <TestimonialsSection />
        <FAQSection />
        <ClosingCTASection />
      </main>
      <Footer />
    </>
  );
}
