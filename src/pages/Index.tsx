import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import DiosaAmivia from "@/components/DiosaAmivia";
import LegalFramework from "@/components/LegalFramework";
import ConflictTypes from "@/components/ConflictTypes";
import RestorativePractices from "@/components/RestorativePractices";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Introduction />
      <DiosaAmivia />
      <LegalFramework />
      <ConflictTypes />
      <RestorativePractices />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
