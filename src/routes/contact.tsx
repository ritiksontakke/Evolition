import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ArrowUpRight, CheckCircle2, Loader2, Mail, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { allServiceTitles } from "@/lib/services";
import { CONTACT_EMAIL, contactSchema, sendContact, type ContactInput } from "@/lib/contact";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Evolition — Start Your AI or Software Project" },
      { name: "description", content: "Tell Evolition Private Limited about your project. Get a reply with a plan, timeline and quote." },
      { property: "og:title", content: "Contact Evolition — Start Your Project" },
      { property: "og:description", content: "Share your idea and we'll get back to you with a clear plan and quote." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const budgets = ["Under ₹50k", "₹50k – ₹2L", "₹2L – ₹5L", "₹5L+", "Not sure yet"];

const fieldClass =
  "h-12 rounded-xl border-border bg-background/60 px-4 text-base transition-all focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring";

function FieldError({ msg }: { msg?: string | undefined }) {
  return msg ? <p className="mt-1.5 text-xs text-destructive">{msg}</p> : null;
}

function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" },
  });
  const budget = watch("budget");

  const onSubmit = async (data: ContactInput) => {
    try {
      await sendContact(data);
      setSent(true);
      reset();
      toast.success("Message sent! We'll get back to you soon.");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <PageHero eyebrow="Contact" title="Let's build something remarkable.">
        Fill in your details and tell us about your project. We'll reply with next steps, a timeline and a quote.
      </PageHero>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1fr_1.6fr]">
        <Reveal className="space-y-5">
          {[
            { icon: Mail, t: "Email us", d: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
            { icon: Clock, t: "Quick reply", d: "We respond to every enquiry personally." },
            { icon: MessageSquare, t: "Free consultation", d: "Your first call to discuss the idea is on us." },
          ].map((c) => (
            <div key={c.t} className="border-spin group flex gap-4 rounded-3xl border border-border bg-card p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <c.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="font-semibold">{c.t}</p>
                {c.href ? (
                  <a href={c.href} className="break-all text-sm text-muted-foreground hover:text-primary">{c.d}</a>
                ) : (
                  <p className="text-sm text-muted-foreground">{c.d}</p>
                )}
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={150} className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-6 md:p-10">
          <div aria-hidden className="animate-aurora absolute -right-32 -top-32 h-72 w-72 rounded-full bg-primary/15 blur-[100px]" />
          {sent ? (
            <div className="relative flex min-h-[480px] flex-col items-center justify-center text-center animate-in fade-in zoom-in-95">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow-lg">
                <CheckCircle2 className="h-10 w-10" />
              </span>
              <h2 className="mt-8 text-3xl font-bold">Thank you!</h2>
              <p className="mt-3 max-w-sm text-muted-foreground">
                Your message has reached us. We'll get back to you at the email you shared.
              </p>
              <Button variant="glass" className="mt-8" onClick={() => setSent(false)}>
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative grid gap-5 md:grid-cols-2">
              <div>
                <Label htmlFor="name">Full name *</Label>
                <Input id="name" placeholder="Your name" autoComplete="name" className={cn(fieldClass, "mt-2")} {...register("name")} />
                <FieldError msg={errors.name?.message} />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="you@example.com" autoComplete="email" className={cn(fieldClass, "mt-2")} {...register("email")} />
                <FieldError msg={errors.email?.message} />
              </div>
              <div>
                <Label htmlFor="phone">Phone / WhatsApp</Label>
                <Input id="phone" type="tel" placeholder="+91 98765 43210" autoComplete="tel" className={cn(fieldClass, "mt-2")} {...register("phone")} />
                <FieldError msg={errors.phone?.message} />
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Company name (optional)" autoComplete="organization" className={cn(fieldClass, "mt-2")} {...register("company")} />
                <FieldError msg={errors.company?.message} />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="service">Service you need *</Label>
                <select
                  id="service"
                  className={cn(fieldClass, "mt-2 w-full border appearance-none")}
                  {...register("service")}
                >
                  <option value="">Select a service</option>
                  {allServiceTitles.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                  <option value="Something else">Something else</option>
                </select>
                <FieldError msg={errors.service?.message} />
              </div>
              <div className="md:col-span-2">
                <Label>Budget</Label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {budgets.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setValue("budget", budget === b ? "" : b)}
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm transition-all",
                        budget === b
                          ? "border-primary bg-primary text-primary-foreground shadow-glow"
                          : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
                      )}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="message">Project details *</Label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us about your idea, goals and timeline..."
                  className={cn(fieldClass, "mt-2 h-auto min-h-[150px] py-3")}
                  {...register("message")}
                />
                <FieldError msg={errors.message?.message} />
              </div>
              <div className="md:col-span-2">
                <Button type="submit" variant="hero" size="xl" disabled={isSubmitting} className="w-full md:w-auto">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send message <ArrowUpRight />
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </Reveal>
      </section>
    </>
  );
}
