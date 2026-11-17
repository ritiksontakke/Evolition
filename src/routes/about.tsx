import { createFileRoute } from "@tanstack/react-router";
import { Rocket, Eye, Handshake, Zap } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Evolition Private Limited — AI & Software Studio" },
      { name: "description", content: "Evolition Private Limited is an agentic AI and software development company helping businesses build smarter products." },
      { property: "og:title", content: "About Evolition Private Limited" },
      { property: "og:description", content: "An agentic AI and software development company focused on real business results." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const values = [
  { icon: Zap, t: "Speed with quality", d: "We move fast without cutting corners. Clean code, clear communication." },
  { icon: Eye, t: "Full transparency", d: "Regular demos and updates. You always know what's happening." },
  { icon: Handshake, t: "True partnership", d: "We treat your product like our own and stay with you after launch." },
  { icon: Rocket, t: "Future-first", d: "We use the latest AI and engineering practices to keep you ahead." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="Software that evolves with you.">
        Evolition Private Limited is a technology company focused on two things: agentic AI and software development. We
        help startups and businesses turn ideas into intelligent, reliable products.
      </PageHero>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-[2rem] border border-border bg-card p-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Mission</p>
            <p className="mt-6 font-display text-2xl font-semibold leading-snug md:text-3xl">
              Make powerful AI and great software accessible to every business — not just big tech.
            </p>
          </Reveal>
          <Reveal delay={150} className="rounded-[2rem] border border-border bg-card p-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Vision</p>
            <p className="mt-6 font-display text-2xl font-semibold leading-snug md:text-3xl">
              A world where AI agents handle the busywork, so people can focus on what matters.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Our values</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">How we show up.</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 120}>
              <div className="border-spin group h-full rounded-3xl border border-border bg-card p-7">
                <v.icon className="h-8 w-8 text-primary transition-transform duration-500 group-hover:scale-110" />
                <h3 className="mt-6 text-lg font-semibold">{v.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
