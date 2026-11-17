import type { ReactNode } from "react";
import { SplitWords } from "./Reveal";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div aria-hidden className="animate-aurora absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[0.95] md:text-7xl">
          <SplitWords text={title} />
        </h1>
        {children && <div className="mt-8 max-w-2xl text-lg text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}
