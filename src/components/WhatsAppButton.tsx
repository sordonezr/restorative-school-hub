import { Heart, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const WhatsAppButton = () => {
  const phoneNumber = "573057057216"; // Removed + and spaces for WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Floating message */}
      <div className={cn(
        "absolute bottom-16 right-0 mb-2",
        "bg-white rounded-lg shadow-lg p-3 max-w-xs",
        "transform translate-x-2 opacity-0 scale-95",
        "group-hover:translate-x-0 group-hover:opacity-100 group-hover:scale-100",
        "transition-all duration-300 ease-out",
        "border border-primary/20"
      )}>
        <p className="text-sm text-foreground font-medium">
          Diosa Amivía está aquí para ayudarte
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Tejedora de vínculos y guía de paz
        </p>
        <div className="absolute -bottom-1 right-4 w-2 h-2 bg-white border-r border-b border-primary/20 transform rotate-45"></div>
      </div>

      {/* Main button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "relative flex items-center justify-center",
          "w-16 h-16 rounded-full",
          "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500",
          "hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600",
          "shadow-lg hover:shadow-xl",
          "transition-all duration-300 ease-in-out",
          "hover:scale-110",
          "text-white",
          "animate-pulse hover:animate-none"
        )}
        aria-label="Contactar por WhatsApp - Diosa Amivía te ayuda"
      >
        {/* Background sparkles */}
        <Sparkles 
          size={12} 
          className="absolute top-1 right-1 text-yellow-300 animate-twinkle" 
        />
        <Sparkles 
          size={8} 
          className="absolute bottom-2 left-2 text-yellow-200 animate-twinkle delay-1000" 
        />
        
        {/* Main icon */}
        <Heart size={28} className="relative z-10" fill="currentColor" />
      </a>
    </div>
  );
};

export default WhatsAppButton;