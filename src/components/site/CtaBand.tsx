import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section className="mx-auto mt-32 max-w-6xl px-6">
      <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card px-8 py-20 text-center md:px-16">
        <div aria-hidden className="animate-aurora absolute -left-20 -top-20 h-80 w-80 rounded-full bg-primary/25 blur-[100px]" />
        <div aria-hidden className="animate-aurora absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-accent/20 blur-[100px]" />
        <div className="grid-bg absolute inset-0" aria-hidden />
        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Let's build</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Have an idea? <span className="text-gradient">Let's evolve it.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Tell us what you want to build. We'll reply with a clear plan, timeline and quote.
          </p>
          <Button asChild variant="hero" size="xl" className="mt-10">
            <Link to="/contact">
              Get in touch <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
