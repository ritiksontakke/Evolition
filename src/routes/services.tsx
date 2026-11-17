import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CtaBand } from "@/components/site/CtaBand";
import { aiServices, devServices } from "@/lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Agentic AI & Software Development | Evolition" },
      { name: "description", content: "AI agents, chatbots, RAG, automation, web and mobile apps, SaaS, UI/UX, backend and cloud services by Evolition." },
      { property: "og:title", content: "Services — Agentic AI & Software Development | Evolition" },
      { property: "og:description", content: "Everything you need to build with AI and ship great software, under one roof." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

function Group({ label, title, list }: { label: string; title: string; list: typeof aiServices }) {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-6">
      <Reveal className="flex items-end justify-between gap-6 border-b border-border pb-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{label}</p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">{title}</h2>
        </div>
        <span className="font-display text-5xl font-extrabold text-foreground/10">{String(list.length).padStart(2, "0")}</span>
      </Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 120}>
            <ServiceCard s={s} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Everything you need to build the future.">
        From autonomous AI agents to full-stack products — pick one service or let us handle the whole journey.
      </PageHero>
      <Group label="Agentic AI" title="Intelligent systems" list={aiServices} />
      <Group label="Software Development" title="Products that scale" list={devServices} />
      <CtaBand />
    </>
  );
}
