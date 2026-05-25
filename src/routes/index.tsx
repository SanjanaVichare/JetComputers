import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight, CheckCircle2, ChevronDown, Server, Cpu, Network, ShieldCheck,
  Cloud, Database, Wrench, Monitor, Mail, Phone,
} from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { NetworkBg } from "@/components/site/NetworkBg";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { services, whyChooseUs } from "@/components/site/services-data";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jet Computers — IT Solutions, Networking & Custom PCs in Mumbai" },
      { name: "description", content: "Jet Computers delivers reliable IT services in Mumbai — custom PCs, networking, servers, AMC, software & web development. Practical results, long-term support." },
      { property: "og:title", content: "Jet Computers — Modern IT Solutions for Business" },
      { property: "og:description", content: "Hardware, networking, servers, AMC, software & web development — one trusted IT partner in Mumbai." },
    ],
  }),
  component: HomePage,
});

const typingWords = ["Hardware.", "Networking.", "Servers.", "Software.", "Support."];

function TypingText() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = typingWords[i % typingWords.length];
    const speed = deleting ? 50 : 95;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next.length === 0) { setDeleting(false); setI((v) => v + 1); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return <span className="text-brand-orange caret">{text}</span>;
}

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 gradient-warm opacity-70" />
        <div className="absolute inset-0 -z-10 grid-bg" />
        <NetworkBg className="absolute inset-0 -z-10 opacity-70" />

        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal delay={0.05}>
              <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
                Modern technology, <br className="hidden md:block" />
                built around your <TypingText />
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground text-pretty">
                Jet Computers delivers reliable IT solutions for businesses and individuals —
                from custom PCs and networking to software, servers and ongoing support.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-plum text-background px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity shadow-soft"
                >
                  Get a free consultation
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur px-5 py-3 text-sm font-medium hover:bg-background transition-colors"
                >
                  Explore services
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                {["AMC & on-site support", "Genuine licensed software", "Networking"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-brand-orange" /> {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-amber/30 via-brand-orange/15 to-transparent blur-2xl" />
              <div className="rounded-3xl border border-border bg-card shadow-[var(--shadow-lift)] overflow-hidden">
                <img
                  src={heroImg}
                  alt="IT infrastructure visual showing servers and networking"
                  width={1600}
                  height={1200}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-medium uppercase tracking-widest text-brand-coffee">What we do</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
                End-to-end IT services, under one roof.
              </h2>
              <p className="mt-4 text-muted-foreground text-pretty">
                From the desktop on your team's desk to the server in the rack and the software on top — we plan, install and maintain it all.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 9).map((s, idx) => (
              <Reveal key={s.title} delay={idx * 0.04}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-coffee hover:text-brand-orange transition-colors"
            >
              View all 15 services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 md:py-28 bg-secondary/40 border-y border-border">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div>
              <span className="text-xs font-medium uppercase tracking-widest text-brand-coffee">Why Jet Computers</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
                A calm, capable IT partner — not just another vendor.
              </h2>
              <p className="mt-4 text-muted-foreground text-pretty max-w-xl">
                We focus on practical outcomes: technology that works quietly in the background so your team can focus on the work that matters.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {whyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06}>
                <div className="rounded-2xl border border-border bg-card p-6 card-hover">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-amber/30">
                    <w.icon size={18} className="text-brand-coffee" />
                  </span>
                  <h3 className="mt-4 font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 md:py-24">
        <div className="container-x">
          <div className="rounded-3xl border border-border bg-brand-plum text-background p-10 md:p-14 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 grid-bg" />
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { n: 26, s: "+", label: "Years in business" },
                { n: 500, s: "+", label: "Clients served" },
                { n: 2000, s: "+", label: "Systems deployed" },
                { n: 99, s: "%", label: "Customer retention" },
              ].map((it) => (
                <div key={it.label}>
                  <div className="text-4xl md:text-5xl font-semibold tracking-tight text-brand-amber">
                    <Counter to={it.n} suffix={it.s} />
                  </div>
                  <div className="mt-2 text-sm text-background/70">{it.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-secondary/40 border-y border-border">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-12">
          <Reveal>
            <div>
              <span className="text-xs font-medium uppercase tracking-widest text-brand-coffee">FAQ</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
                Answers to common questions.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Still curious? Reach out — we're happy to walk you through anything in detail.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="divide-y divide-border rounded-2xl border border-border bg-card">
              {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div>
              <span className="text-xs font-medium uppercase tracking-widest text-brand-coffee">Get in touch</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
                Tell us what you need — we'll plan the rest.
              </h2>
              <p className="mt-4 text-muted-foreground text-pretty">
                Whether it's a single PC build or a full office rollout, we'll listen first and recommend what's right.
              </p>
              <div className="mt-8 space-y-3 text-sm">
                <a href="tel:+919821488409" className="flex items-center gap-3 text-foreground hover:text-brand-orange">
                  <Phone size={18} className="text-brand-coffee" /> +91 98214 88409
                </a>
                <a href="mailto:aniruddha_vichare1@reddifmail.com" className="flex items-center gap-3 text-foreground hover:text-brand-orange break-all">
                  <Mail size={18} className="text-brand-coffee" /> aniruddha_vichare1@reddifmail.com
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}><ContactForm /></Reveal>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="pb-24">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-brand-orange via-brand-coffee to-brand-plum p-10 md:p-14 text-background">
            <div className="absolute inset-0 opacity-15 grid-bg" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-xl">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                  Ready to upgrade your IT?
                </h3>
                <p className="mt-2 text-background/85">
                  Schedule a free consultation. We'll audit your setup and share a clear plan — no pressure.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-background text-brand-plum px-5 py-3 text-sm font-semibold hover:bg-brand-amber transition-colors"
              >
                Book a consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = service.icon;
  return (
    <div className="group relative h-full rounded-2xl border border-border bg-card p-6 card-hover overflow-hidden">
      <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-brand-amber/0 group-hover:bg-brand-amber/15 transition-colors duration-500" />
      <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-brand-plum text-background">
        <Icon size={20} />
      </span>
      <h3 className="relative mt-5 font-semibold">{service.title}</h3>
      <p className="relative mt-2 text-sm text-muted-foreground">{service.description}</p>
    </div>
  );
}

const faqs = [
  { q: "Do you provide on-site support in Mumbai?", a: "Yes. We offer on-site engineering across Mumbai with same-day response for AMC clients and priority bookings for one-off jobs." },
  { q: "What does an Annual Maintenance Contract include?", a: "Preventive servicing, unlimited remote support, scheduled on-site visits, OS and security patching, and discounted spare parts — tailored per device count." },
  { q: "Can you handle a complete office IT setup?", a: "Absolutely. We plan, procure and deploy workstations, networking, printers, servers,  and security — and stay on for support afterwards." },
  { q: "Do you sell genuine, licensed software?", a: "Yes. We supply only licensed software from authorized partners, with proper invoicing, activation and renewal reminders." },
  { q: "How do I get a quote?", a: "Call us at +91 98214 88409 or share your requirement via the contact form — we typically respond within one working day." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen((v) => !v)}
      className="w-full text-left px-6 py-5 flex items-start gap-4 hover:bg-secondary/40 transition-colors"
      aria-expanded={open}
    >
      <div className="flex-1">
        <div className="font-medium">{q}</div>
        {open && (
          <p className="pt-3 text-sm text-muted-foreground">{a}</p>
        )}
      </div>
      <ChevronDown
        size={18}
        className={`mt-1 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
      />
    </button>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft space-y-4"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full name" name="name" placeholder="Your name" />
        <Field label="Email" name="email" type="email" placeholder="you@company.com" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Phone" name="phone" placeholder="+91 ..." />
        <Field label="Company" name="company" placeholder="Optional" />
      </div>
      <div>
        <label className="text-sm font-medium">How can we help?</label>
        <textarea
          required rows={4}
          placeholder="Briefly describe your requirement…"
          className="mt-1.5 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-brand-plum text-background px-5 py-3 text-sm font-medium hover:opacity-90"
      >
        Send message <ArrowRight size={16} />
      </button>
      {sent && (
        <p className="text-sm text-brand-coffee">Thanks — we've received your message and will be in touch shortly.</p>
      )}
    </form>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      <input
        id={name} name={name} type={type} placeholder={placeholder}
        required={name !== "company"}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange"
      />
    </div>
  );
}
