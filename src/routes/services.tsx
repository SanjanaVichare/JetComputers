import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/components/site/services-data";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Jet Computers" },
      { name: "description", content: "Full-service IT solutions in Mumbai: hardware sales, custom PCs, networking, servers, AMC, , software and web development, IT support and more." },
      { property: "og:title", content: "IT Services — Jet Computers" },
      { property: "og:description", content: "15+ IT services delivered end-to-end by one trusted Mumbai partner." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <Layout>
      <PageHeader
        title="Everything your business needs to run on solid IT."
        description="One partner for hardware, networking, servers, software and ongoing support — delivered with clean execution and honest advice."
      />

      <section className="py-16 md:py-20">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={(i % 6) * 0.04}>
                <div className="group relative h-full rounded-2xl border border-border bg-card p-6 card-hover overflow-hidden">
                  <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-brand-amber/0 group-hover:bg-brand-amber/15 transition-colors duration-500" />
                  <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-brand-plum text-background">
                    <Icon size={20} />
                  </span>
                  <h3 className="relative mt-5 font-semibold">{s.title}</h3>
                  <p className="relative mt-2 text-sm text-muted-foreground">{s.description}</p>
                  <ul className="relative mt-4 space-y-1.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check size={14} className="mt-0.5 text-brand-orange shrink-0" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-brand-amber/25 via-brand-cream/20 to-transparent p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Not sure where to start?</h3>
              <p className="mt-2 text-muted-foreground">Share your requirement — we'll suggest the right mix of services and a clear plan.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-plum text-background px-5 py-3 text-sm font-medium hover:opacity-90">
              Request a quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
