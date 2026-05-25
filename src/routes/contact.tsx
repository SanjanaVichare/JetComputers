import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Phone, Mail, MapPin, ArrowRight, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Jet Computers" },
      { name: "description", content: "Get in touch with Jet Computers in Kanjurmarg East, Mumbai. Call +91 98214 88409 or email for IT services, AMC and consultation." },
      { property: "og:title", content: "Contact Jet Computers" },
      { property: "og:description", content: "Reach out for IT services, support and consultation in Mumbai." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const company = (form.elements.namedItem("company") as HTMLInputElement).value;
    const service = (form.elements.namedItem("service") as HTMLSelectElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const text = `Hi Jet Computers!%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ACompany: ${encodeURIComponent(company)}%0AService: ${encodeURIComponent(service)}%0A%0AMessage: ${encodeURIComponent(message)}`;

    window.open(`https://wa.me/919821488409?text=${text}`, "_blank");
  };

  return (
    <Layout>
      <PageHeader
        title="Let's talk about your IT."
        description="Tell us what you need — a single system, ongoing support or a full office rollout. We'll respond within one working day."
      />
      <section className="py-12 md:py-16">
        <div className="container-x grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-soft space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight">Get in touch</h2>
              <p className="text-muted-foreground">Click below to chat with us directly on WhatsApp — we typically respond within minutes.</p>
              <a
                href="https://wa.me/919821488409?text=Hi%20Jet%20Computers%2C%20I%20would%20like%20to%20get%20in%20touch."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-medium hover:opacity-90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5">
              <InfoRow icon={MapPin} title="Office">
                9A, Samata Society, Nehru Nagar,<br />Kanjurmarg East, Mumbai 400042
              </InfoRow>
              <InfoRow icon={Phone} title="Phone">
                <a href="https://wa.me/919821488409?text=Hi%20Jet%20Computers%2C%20I%20need%20IT%20support." target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange">+91 98214 88409</a>
              </InfoRow>
              <InfoRow icon={Mail} title="Email">
                <a href="mailto:aniruddha_vichare1@reddifmail.com" className="hover:text-brand-orange break-all">aniruddha_vichare1@reddifmail.com</a>
              </InfoRow>
              <InfoRow icon={Clock} title="Hours">
                Monday – Saturday<br />10:00 AM – 7:00 PM IST
              </InfoRow>
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <iframe
                  title="Jet Computers location"
                  src="https://www.google.com/maps?q=Nehru+Nagar+Kanjurmarg+East+Mumbai+400042&output=embed"
                  className="w-full h-72"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

function InfoRow({ icon: Icon, title, children }: { icon: typeof Phone; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-card p-5">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-amber/30 shrink-0">
        <Icon size={18} className="text-brand-coffee" />
      </span>
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="mt-1 text-sm text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", placeholder, required = true }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} required={required}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange" />
    </div>
  );
}
