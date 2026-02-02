import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import PersonalizedPlanSection from "@/components/PersonalizedPlanSection";
import PromoCardsSection from "@/components/PromoCardsSection";
import ScienceNatureSection from "@/components/ScienceNatureSection";
import FAQSection from "@/components/FAQSection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <PersonalizedPlanSection />
        <PromoCardsSection />
        <ScienceNatureSection />
        <FAQSection />
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
