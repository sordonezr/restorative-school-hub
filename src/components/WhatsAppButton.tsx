import { Heart, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const WhatsAppButton = () => {
  const phoneNumber = "573057057216"; 
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Improved floating message */}
      <div className={cn(
        "absolute bottom-20 right-0",
        "bg-card/95 backdrop-blur-sm border border-border rounded-xl shadow-2xl p-4 w-72",
        "transform translate-x-4 translate-y-2 opacity-0 scale-90 pointer-events-none",
        "group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto",
        "transition-all duration-500 ease-out",
        "before:absolute before:bottom-0 before:right-6 before:w-0 before:h-0",
        "before:border-l-[12px] before:border-l-transparent",
        "before:border-r-[12px] before:border-r-transparent", 
        "before:border-t-[12px] before:border-t-border",
        "before:transform before:translate-y-full",
        "after:absolute after:bottom-0 after:right-6 after:w-0 after:h-0",
        "after:border-l-[10px] after:border-l-transparent",
        "after:border-r-[10px] after:border-r-transparent",
        "after:border-t-[10px] after:border-t-card",
        "after:transform after:translate-y-full after:translate-x-[2px] after:-translate-y-[2px]"
      )}>
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
              <Heart size={20} className="text-white" fill="currentColor" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground mb-1">
              ✨ Amivía está aquí para ti
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Como tejedora de vínculos y guardiana de la palabra, te acompaño en tu camino hacia la paz restaurativa
            </p>
          </div>
        </div>
        <div className="mt-3 pt-2 border-t border-border/50">
          <p className="text-xs text-primary font-medium">
            💬 Haz clic para iniciar la conversación
          </p>
        </div>
      </div>

      {/* Enhanced main button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "relative flex items-center justify-center",
          "w-16 h-16 rounded-full",
          "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500",
          "hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600",
          "shadow-lg hover:shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40",
          "transition-all duration-300 ease-in-out",
          "hover:scale-110 active:scale-95",
          "text-white",
          "animate-pulse hover:animate-none",
          "ring-4 ring-emerald-500/20 hover:ring-emerald-500/30"
        )}
        aria-label="Contactar por WhatsApp - Diosa Amivía te ayuda"
      >
        {/* Enhanced sparkles */}
        <Sparkles 
          size={12} 
          className="absolute -top-1 -right-1 text-yellow-300 animate-pulse delay-300" 
        />
        <Sparkles 
          size={8} 
          className="absolute -bottom-1 -left-1 text-yellow-200 animate-pulse delay-700" 
        />
        
        {/* Main icon with subtle glow */}
        <Heart size={28} className="relative z-10 drop-shadow-sm" fill="currentColor" />
      </a>
    </div>
  );
};

export default WhatsAppButton;