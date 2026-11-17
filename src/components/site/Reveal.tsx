import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={cn("reveal", className)} style={{ "--delay": `${delay}ms` } as React.CSSProperties}>
      {children}
    </Tag>
  );
}

export function SplitWords({
  text,
  className,
  wordClassName,
  start = 0,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  start?: number;
}) {
  return (
    <span className={className}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <span className={cn("word", wordClassName)} style={{ "--delay": `${start + i * 80}ms` } as React.CSSProperties}>
            {w}&nbsp;
          </span>
        </span>
      ))}
    </span>
  );
}
