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
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <PageHeader
        title="Let's talk about your IT."
        description="Tell us what you need — a single system, ongoing support or a full office rollout. We'll respond within one working day."
      />

      <section className="py-12 md:py-16">
        <div className="container-x grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <Reveal>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-soft space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@company.com" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Phone" name="phone" placeholder="+91 ..." />
                <Field label="Company" name="company" placeholder="Optional" required={false} />
              </div>
              <div>
                <label className="text-sm font-medium">Service of interest</label>
                <select className="mt-1.5 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange">
                  {["General enquiry", "Custom PC building", "Networking setup", "Server setup", "AMC / maintenance", "Office IT setup", "Software / web development"].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea required rows={5} placeholder="Tell us about your requirement…"
                  className="mt-1.5 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-brand-plum text-background px-5 py-3 text-sm font-medium hover:opacity-90">
                Send message <ArrowRight size={16} />
              </button>
              {sent && <p className="text-sm text-brand-coffee">Thanks — we've received your message and will be in touch shortly.</p>}
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5">
              <InfoRow icon={MapPin} title="Office">
                9A, Samata Society, Nehru Nagar,<br />Kanjurmarg East, Mumbai 400042
              </InfoRow>
              <InfoRow icon={Phone} title="Phone">
                <a href="https://wa.me/919821488409" className="hover:text-brand-orange">+91 98214 88409</a>
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
