import { Phone, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      
      {/* WhatsApp */}
      <a
        href="https://wa.me/916293696009"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-xl transition-all"
      >
        <MessageCircle size={28} />
      </a>

      {/* Call */}
      <a
        href="tel:+916293696009"
        className="bg-slate-900 hover:bg-orange-500 text-white p-2 rounded-full shadow-xl transition-all"
      >
        <Phone size={28} />
      </a>
    </div>
  );
}