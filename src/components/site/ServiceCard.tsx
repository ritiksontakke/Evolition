import type { Service } from "@/lib/services";

export function ServiceCard({ s, index }: { s: Service; index: number }) {
  const Icon = s.icon;
  return (
    <div
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      className="border-spin group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 transition-transform duration-500 hover:-translate-y-1"
    >
      <div aria-hidden className="spotlight absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">
        <div className="flex items-start justify-between">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow">
            <Icon className="h-6 w-6" />
          </span>
          <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {s.tags.map((t) => (
            <span key={t} className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
