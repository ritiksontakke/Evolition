import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { Logo } from "./Header";
import { CONTACT_EMAIL } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="relative z-10 mt-32 overflow-hidden border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Evolition Private Limited — agentic AI systems and software engineering for teams that want to move faster.
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mt-6 inline-flex items-center gap-2 text-sm text-foreground hover:text-primary">
            <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
          </a>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Company</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Expertise</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Agentic AI</li>
            <li>Software Development</li>
            <li>Automation</li>
          </ul>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none select-none px-6 text-center font-display text-[22vw] font-extrabold leading-[0.8] tracking-tighter text-foreground/[0.04]">
        EVOLITION
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Evolition Private Limited. All rights reserved.
      </div>
    </footer>
  );
}
