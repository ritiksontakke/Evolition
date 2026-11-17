import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Cpu, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SplitWords } from "@/components/site/Reveal";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CtaBand } from "@/components/site/CtaBand";
import { aiServices, devServices } from "@/lib/services";
import heroOrb from "@/assets/hero-orb.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Evolition — Agentic AI & Software Development Company" },
      { name: "description", content: "Evolition Private Limited builds autonomous AI agents, AI automation, web apps, mobile apps and SaaS products." },
      { property: "og:title", content: "Evolition — Agentic AI & Software Development Company" },
      { property: "og:description", content: "Autonomous AI agents, AI automation and custom software, built by Evolition Private Limited." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const tech = ["OpenAI", "Gemini", "Claude", "LangChain", "React", "Next.js", "Node.js", "Python", "Flutter", "AWS", "Postgres", "Docker", "TypeScript", "n8n"];

const steps = [
  { n: "01", t: "Discover", d: "We understand your business, goals and the problem worth solving." },
  { n: "02", t: "Design", d: "Architecture, user flows and interfaces — mapped before a line of code." },
  { n: "03", t: "Build", d: "Fast weekly iterations with demos so you see progress, always." },
  { n: "04", t: "Launch & Evolve", d: "We ship, monitor and keep improving with you after go-live." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden pt-36">
        <div className="grid-bg absolute inset-0" aria-hidden />
        <div aria-hidden className="animate-aurora absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px]" />
        <div aria-hidden className="animate-aurora absolute -right-40 top-60 h-[420px] w-[420px] rounded-full bg-accent/15 blur-[140px]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Reveal>
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-muted-foreground">
                <span className="animate-pulse-dot h-2 w-2 rounded-full bg-primary" />
                Now taking new projects
              </span>
            </Reveal>
            <h1 className="mt-8 text-5xl font-extrabold leading-[0.95] sm:text-6xl lg:text-7xl">
              <SplitWords text="We build AI that" start={100} />
              <br />
              <SplitWords text="thinks & acts." start={400} wordClassName="text-gradient" />
            </h1>
            <Reveal delay={700}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Evolition Private Limited designs agentic AI systems and builds world-class software — so your business
                runs smarter, faster and on autopilot.
              </p>
            </Reveal>
            <Reveal delay={850} className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Start your project <ArrowUpRight />
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/services">
                  Explore services <ArrowRight />
                </Link>
              </Button>
            </Reveal>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            <div aria-hidden className="animate-spin-slow absolute inset-0 rounded-full border border-dashed border-primary/20" />
            <div aria-hidden className="animate-spin-slow absolute inset-8 rounded-full border border-border [animation-direction:reverse]" />
            <div className="animate-float absolute inset-10 overflow-hidden rounded-full shadow-glow-lg">
              <img src={heroOrb} alt="Glowing neural network sphere representing agentic AI" width={1280} height={1280} className="h-full w-full scale-110 object-cover" />
            </div>
            <div className="glass animate-float absolute -left-2 top-16 rounded-2xl px-4 py-3 [animation-delay:-3s]">
              <div className="flex items-center gap-2 text-sm"><Cpu className="h-4 w-4 text-primary" /> Agentic AI</div>
            </div>
            <div className="glass animate-float absolute -right-2 bottom-20 rounded-2xl px-4 py-3 [animation-delay:-5s]">
              <div className="flex items-center gap-2 text-sm"><Code2 className="h-4 w-4 text-accent" /> Software Dev</div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative mt-24 border-y border-border py-6">
          <div className="flex w-max animate-marquee gap-14 whitespace-nowrap">
            {[...tech, ...tech].map((t, i) => (
              <span key={i} className="flex items-center gap-14 font-display text-2xl font-semibold text-muted-foreground/60">
                {t} <span className="text-primary">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Two pillars */}
      <section className="mx-auto mt-32 max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">What we do</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Two crafts. <span className="text-muted-foreground">One obsession — results.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {[
            { icon: Cpu, title: "Agentic AI", text: "AI agents, chatbots, voice assistants, RAG and automation that work 24/7 for your business.", list: aiServices },
            { icon: Code2, title: "Software Development", text: "Websites, mobile apps, SaaS products, backends and cloud — engineered to scale.", list: devServices },
          ].map((p, i) => (
            <Reveal key={p.title} delay={i * 150}>
              <div className="border-spin group relative h-full overflow-hidden rounded-[2rem] border border-border bg-card p-10">
                <div aria-hidden className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl transition-all duration-700 group-hover:bg-primary/25" />
                <p.icon className="relative h-10 w-10 text-primary" />
                <h3 className="relative mt-8 text-3xl font-bold">{p.title}</h3>
                <p className="relative mt-4 text-muted-foreground">{p.text}</p>
                <ul className="relative mt-8 space-y-3">
                  {p.list.slice(0, 5).map((s) => (
                    <li key={s.title} className="flex items-center gap-3 border-t border-border pt-3 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {s.title}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured AI services */}
      <section className="mx-auto mt-32 max-w-6xl px-6">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Agentic AI</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">AI that does the work.</h2>
          </div>
          <Button asChild variant="glass">
            <Link to="/services">All services <ArrowRight /></Link>
          </Button>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {aiServices.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 120}>
              <ServiceCard s={s} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto mt-32 max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">How we work</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">From idea to launch.</h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120} className="group bg-background p-8 transition-colors duration-500 hover:bg-card">
              <span className="font-display text-5xl font-extrabold text-foreground/10 transition-colors duration-500 group-hover:text-primary">
                {s.n}
              </span>
              <h3 className="mt-6 text-xl font-semibold">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
