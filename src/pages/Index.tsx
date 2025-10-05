import Header from "@/components/Header";
import CategoriesSection from "@/components/CategoriesSection";
import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";
import EventsSection from "@/components/EventsSection";
import TalentSection from "@/components/TalentSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <CategoriesSection />
        <HeroSection />
        <NewsSection />
        <EventsSection />
        <TalentSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;