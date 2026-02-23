import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CoreValues from "@/components/CoreValues";
import MissionSection from "@/components/MissionSection";
import CounterSection from "@/components/CounterSection";
import ScholarshipSection from "@/components/ScholarshipSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CoreValues />
        <MissionSection />
        <CounterSection />
        <ScholarshipSection />
        <CTASection />
        <FAQSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
