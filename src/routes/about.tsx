import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { ArrowRight, Compass, HeartHandshake, Sparkles, Target } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Jet Computers" },
      { name: "description", content: "Jet Computers is a Mumbai-based IT solutions company delivering hardware, networking, software and long-term support to businesses and individuals." },
      { property: "og:title", content: "About Jet Computers" },
      { property: "og:description", content: "Mumbai-based IT partner focused on practical results and long-term support." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <PageHeader
        title="A trusted IT partner, quietly powering businesses across Mumbai."
        description="Jet Computers was built on a simple idea — technology should make work easier, not harder. We help businesses and individuals pick the right tools, set them up properly, and keep them running for years."
      />

      <section className="py-16 md:py-20">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Our story</h2>
              <div className="mt-5 space-y-4 text-muted-foreground text-pretty">
                <p>
                  Jet Computers started with a small workshop and a big commitment — to deliver honest, dependable IT services to businesses that deserve better than off-the-shelf solutions.
                </p>
                <p>
                  Over the years we've grown into a full-service IT company, supporting offices, professionals and home users across Mumbai and adjecent cities. We design, deploy and maintain hardware, networks, servers and software — and stay engaged long after the install.
                </p>
                <p>
                  Our approach is simple: listen first, recommend what's right, and stand behind our work.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Compass, t: "Our mission", b: "Make modern technology approachable, reliable and affordable for every business we serve." },
              { icon: Target, t: "Our focus", b: "Practical, long-term IT solutions — not hype, not over-engineering." },
              { icon: HeartHandshake, t: "Our promise", b: "One trusted partner across hardware, software, networks and support." },
              { icon: Sparkles, t: "Our standard", b: "Genuine products, transparent pricing, and engineers you can talk to." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.05}>
                <div className="rounded-2xl border border-border bg-card p-6 h-full card-hover">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-amber/30">
                    <c.icon size={18} className="text-brand-coffee" />
                  </span>
                  <h3 className="mt-4 font-semibold">{c.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/40 border-y border-border">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: 26, s: "+", l: "Years experience" },
            { n: 500, s: "+", l: "Happy clients" },
            { n: 50, s: "+", l: "Office rollouts" },
            { n: 24, s: "/7", l: "Support availability" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight text-brand-coffee">
                <Counter to={s.n} suffix={s.s} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x">
          <div className="rounded-3xl border border-border bg-brand-plum text-background p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Let's plan your next IT project together.</h3>
              <p className="mt-2 text-background/80">From single systems to full office rollouts — we'd love to help.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-amber text-brand-plum px-5 py-3 text-sm font-semibold hover:opacity-90">
              Talk to us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
