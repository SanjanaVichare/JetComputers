import { Link } from "@tanstack/react-router";
import { Cpu, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-plum text-background">
              <Cpu size={18} />
            </span>
            <span className="font-semibold tracking-tight">Jet Computers</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground text-pretty">
            Reliable, modern technology solutions for businesses and individuals — built for long-term support and real results.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-foreground transition-colors">Services</Link></li>
            <li><Link to="/support" className="hover:text-foreground transition-colors">Support</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Networking & servers</li>
            <li>Office IT setup</li>
            <li>AMC & support</li>
            <li>Software & web development</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 text-brand-orange shrink-0" /> 9A, Samata Society, Nehru Nagar, Kanjurmarg East, Mumbai 400 042</li>
            <li className="flex items-center gap-2"><Phone size={16} className="text-brand-orange" /> <a href="tel:+919821488409" className="hover:text-foreground">+91 98214 88409</a></li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-brand-orange" /> <a href="mailto:aniruddha_vichare1@reddifmail.com" className="hover:text-foreground break-all">aniruddha_vichare1@reddifmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Jet Computers. All rights reserved.</p>
          <p>Mumbai · India</p>
        </div>
      </div>
    </footer>
  );
}
