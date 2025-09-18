import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import LegalFramework from "@/components/LegalFramework";
import ConflictTypes from "@/components/ConflictTypes";
import RestorativePractices from "@/components/RestorativePractices";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Introduction />
      <LegalFramework />
      <ConflictTypes />
      <RestorativePractices />
      <Footer />
    </main>
  );
};

export default Index;
