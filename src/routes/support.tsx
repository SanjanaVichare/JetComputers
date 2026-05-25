import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Phone, Mail, Clock, LifeBuoy, Wrench, ShieldCheck, MonitorCog, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support — Jet Computers" },
      { name: "description", content: "Remote and on-site IT support in Mumbai. AMC plans, same-day response, hardware repairs, software help and  assistance." },
      { property: "og:title", content: "IT Support — Jet Computers" },
      { property: "og:description", content: "Friendly, technical support — remote or on-site — when you need it most." },
    ],
  }),
  component: SupportPage,
});

const channels = [
  { icon: Phone, t: "Call us", v: "+91 98214 88409", href: "tel:+919821488409", note: "Mon–Sat · 10 AM – 7 PM IST" },
  { icon: Mail, t: "Email", v: "aniruddha_vichare1@reddifmail.com", href: "mailto:aniruddha_vichare1@reddifmail.com", note: "Replies within one working day" },
  { icon: Clock, t: "AMC priority", v: "Same-day response", href: "/contact", note: "Reserved for AMC subscribers" },
];

const plans = [
  { name: "Essential AMC", price: "Per device", tagline: "For small offices & home setups", features: ["Quarterly preventive servicing", "Unlimited remote support", "OS & security updates", "Discounted spare parts"] },
  { name: "Business AMC", price: "Per office", tagline: "For growing teams and offices", features: ["Monthly preventive servicing", "On-site engineer visits", "Network & server monitoring", "Priority response SLA", " administration"] },
  { name: "On-Demand", price: "Per visit", tagline: "When you need help, occasionally", features: ["Pay-as-you-go support", "Hardware diagnosis & repair", "Software install & configuration", "No long-term commitment"] },
];

const faqs = [
  { q: "How do I raise a support request?", a: "Call us, email us, or use the contact form (Talk to us) or (Go to contect section). AMC clients also receive a direct support line and priority queue." },
  { q: "Do you offer remote support?", a: "Yes. Most software, configuration and  issues are resolved remotely within the same business day." },
  { q: "What if a hardware part fails?", a: "We diagnose on-site or in-workshop, source genuine replacements, and restore your system with minimal downtime." },
  { q: "Can you cover multiple offices?", a: "Yes — we manage multi-site clients across Mumbai with consolidated billing and reporting." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button onClick={() => setOpen(v => !v)} className="w-full text-left px-6 py-5 flex items-start gap-4 hover:bg-secondary/40 transition-colors">
      <div className="flex-1">
        <div className="font-medium">{q}</div>
        <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
          <p className="pt-3 text-sm text-muted-foreground">{a}</p>
        </motion.div>
      </div>
      <ChevronDown size={18} className={`mt-1 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
    </button>
  );
}

function SupportPage() {
  return (
    <Layout>
      <PageHeader
        title="Help when you need it — remote, on-site, or under AMC."
        description="Our engineers respond fast and explain things in plain language. Whether it's a single laptop or an office-wide outage, we've got you."
      />

      <section className="py-12 md:py-16">
        <div className="container-x grid gap-5 md:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.05}>
              <a href={c.href} className="block h-full rounded-2xl border border-border bg-card p-6 card-hover">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-plum text-background">
                  <c.icon size={18} />
                </span>
                <div className="mt-4 text-sm text-muted-foreground">{c.t}</div>
                <div className="mt-1 font-semibold break-all">{c.v}</div>
                <div className="mt-3 text-xs text-muted-foreground">{c.note}</div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/40 border-y border-border">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-medium uppercase tracking-widest text-brand-coffee">Support plans</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Predictable support, designed around your business.</h2>
              <p className="mt-4 text-muted-foreground">Choose an AMC for proactive care, or use us on-demand when something comes up.</p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <div className={`h-full rounded-2xl border bg-card p-6 card-hover ${i === 1 ? "border-brand-orange shadow-[var(--shadow-lift)]" : "border-border"}`}>
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{p.name}</h3>
                    {i === 1 && <span className="rounded-full bg-brand-orange text-primary-foreground px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold">Popular</span>}
                  </div>
                  <div className="mt-3 text-sm text-muted-foreground">{p.tagline}</div>
                  <div className="mt-4 text-2xl font-semibold tracking-tight">{p.price}</div>
                  <ul className="mt-5 space-y-2 text-sm">
                    {p.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-muted-foreground">
                        <ShieldCheck size={14} className="mt-0.5 text-brand-orange shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div>
              <span className="text-xs font-medium uppercase tracking-widest text-brand-coffee">What we cover</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">From a stuck printer to a full network outage.</h2>
              <p className="mt-4 text-muted-foreground">Our team handles the day-to-day issues as confidently as the big incidents.</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
                {[
                  { i: MonitorCog, t: "Workstation issues" },
                  { i: LifeBuoy, t: "Email" },
                  { i: Wrench, t: "Hardware repair" },
                  { i: ShieldCheck, t: "Antivirus & security" },
                ].map(b => (
                  <div key={b.t} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
                    <b.i size={18} className="text-brand-coffee" />
                    <span className="font-medium">{b.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="divide-y divide-border rounded-2xl border border-border bg-card">
              {faqs.map(f => <FAQItem key={f.q} {...f} />)}
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
