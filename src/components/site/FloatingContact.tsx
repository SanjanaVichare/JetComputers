import { MessageCircle } from "lucide-react";

export function FloatingContact() {
  return (
    <a
      href="tel:+919821488409"
      aria-label="Call Jet Computers"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-brand-orange text-primary-foreground pl-4 pr-5 py-3 text-sm font-medium shadow-[0_10px_40px_-10px_rgb(221_114_48_/_0.55)] hover:scale-[1.03] transition-transform"
    >
      <MessageCircle size={18} />
      Talk to us
    </a>
  );
}
