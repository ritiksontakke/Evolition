import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-primary font-display text-lg font-extrabold text-primary-foreground shadow-glow transition-transform duration-500 group-hover:rotate-[20deg]">
        E
      </span>
      <span className="font-display text-lg font-bold tracking-tight">
        Evolition<span className="text-primary">.</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500",
          scrolled ? "glass shadow-glow" : "border border-transparent",
        )}
      >
        <Logo />
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild variant="hero" size="sm" className="h-9 px-5">
            <Link to="/contact">
              Start a project <ArrowUpRight />
            </Link>
          </Button>
        </div>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-full glass md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-4 animate-in fade-in slide-in-from-top-2 md:hidden">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: true }}
              className="block rounded-2xl px-4 py-3 font-display text-2xl data-[status=active]:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
