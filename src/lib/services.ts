import {
  Bot, BrainCircuit, Workflow, MessageSquareText, Database, Sparkles,
  Globe, Smartphone, Layers, Palette, Cloud, ServerCog, ShoppingBag, ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type Service = { icon: LucideIcon; title: string; desc: string; tags: string[] };

export const aiServices: Service[] = [
  { icon: Bot, title: "Agentic AI Systems", desc: "Autonomous AI agents that plan, use tools and complete multi-step tasks for your business — end to end.", tags: ["Multi-agent", "Tool use", "Planning"] },
  { icon: MessageSquareText, title: "AI Chatbots & Voice Agents", desc: "Smart assistants for support, sales and booking on your website, WhatsApp or phone line.", tags: ["Support", "Sales", "Voice"] },
  { icon: Database, title: "RAG & Knowledge AI", desc: "Chat with your documents, PDFs and databases. Accurate answers grounded in your own data.", tags: ["RAG", "Vector search", "Docs"] },
  { icon: Workflow, title: "AI Workflow Automation", desc: "Replace repetitive manual work with intelligent pipelines across email, CRM, sheets and more.", tags: ["n8n", "Zapier", "Custom"] },
  { icon: BrainCircuit, title: "LLM Integration", desc: "Bring GPT, Gemini, Claude and open-source models into your existing product, safely and cost-efficiently.", tags: ["OpenAI", "Gemini", "Open-source"] },
  { icon: Sparkles, title: "AI Strategy & Consulting", desc: "Find where AI creates real value in your business, then get a clear roadmap to ship it.", tags: ["Audit", "Roadmap", "POC"] },
];

export const devServices: Service[] = [
  { icon: Globe, title: "Web Development", desc: "Fast, modern websites and web apps built with React, Next.js and TypeScript.", tags: ["React", "Next.js", "TypeScript"] },
  { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform iOS and Android apps that feel native and scale with your users.", tags: ["React Native", "Flutter"] },
  { icon: Layers, title: "SaaS Product Development", desc: "From idea to MVP to scale — auth, billing, dashboards and everything in between.", tags: ["MVP", "Billing", "Dashboards"] },
  { icon: Palette, title: "UI / UX Design", desc: "Interfaces people love to use. Research, wireframes, prototypes and design systems.", tags: ["Figma", "Prototyping"] },
  { icon: ServerCog, title: "Backend & APIs", desc: "Secure, scalable APIs, databases and integrations that keep your product running.", tags: ["Node.js", "Python", "Postgres"] },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Deployments, CI/CD, monitoring and cloud infrastructure on AWS, GCP and Azure.", tags: ["AWS", "Docker", "CI/CD"] },
  { icon: ShoppingBag, title: "E-commerce", desc: "Online stores with payments, inventory and custom checkout experiences.", tags: ["Shopify", "Payments"] },
  { icon: ShieldCheck, title: "Maintenance & Support", desc: "Ongoing updates, bug fixes, performance tuning and security for your software.", tags: ["Support", "Security"] },
];

export const allServiceTitles = [...aiServices, ...devServices].map((s) => s.title);
