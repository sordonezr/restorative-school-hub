import { Button } from "@/components/ui/button";
import { ChevronDown, BookOpen, Users, Heart } from "lucide-react";
import heroImage from "@/assets/hero-justice-restaurativa.jpg";

const Hero = () => {
  const scrollToContent = () => {
    document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <img 
          src={heroImage} 
          alt="Justicia Restaurativa en entornos escolares"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
            <Heart className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Transformando conflictos en oportunidades</span>
          </div>

          {/* Main title */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Justicia Restaurativa
            <span className="block text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              en Entornos Escolares
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Promovemos la responsabilización, reparación y restablecimiento de vínculos en las comunidades educativas a través espacios de formación y aplicación de estrategias pedagógicas permanentes en el aula, orientados desde el enfoque sistémico.
          </p>


          {/* Scroll indicator */}
          <button
            onClick={scrollToContent}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
            aria-label="Desplazar hacia abajo"
          >
            <ChevronDown className="w-8 h-8 text-white/60 hover:text-white transition-colors" />
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;
