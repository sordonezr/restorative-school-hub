import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const WhatsAppButton = () => {
  const phoneNumber = "573057057216"; // Removed + and spaces for WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "w-14 h-14 rounded-full",
        "bg-green-500 hover:bg-green-600",
        "flex items-center justify-center",
        "shadow-lg hover:shadow-xl",
        "transition-all duration-300 ease-in-out",
        "hover:scale-110",
        "text-white"
      )}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsAppButton;