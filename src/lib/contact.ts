import { z } from "zod";

export const CONTACT_EMAIL = "evolition.offical@gmail.com";
export const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  phone: z
    .string()
    .trim()
    .max(20, "Phone number is too long")
    .regex(/^[+\d\s()-]*$/, "Only digits, spaces, + ( ) - allowed")
    .optional()
    .or(z.literal("")),
  company: z.string().trim().max(120, "Company name is too long").optional().or(z.literal("")),
  service: z.string().trim().min(1, "Please choose a service").max(80),
  budget: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a little more (10+ characters)").max(2000, "Message is too long"),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function buildPayload(data: ContactInput) {
  return {
    _subject: `New enquiry from ${data.name} — ${data.service}`,
    _template: "table",
    _replyto: data.email,
    Name: data.name,
    Email: data.email,
    Phone: data.phone || "—",
    Company: data.company || "—",
    Service: data.service,
    Budget: data.budget || "—",
    Message: data.message,
  };
}

export async function sendContact(data: ContactInput) {
  const res = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(buildPayload(data)),
  });
  const json = (await res.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
  if (!res.ok || String(json.success) !== "true") {
    throw new Error(json.message || "Could not send your message. Please try again.");
  }
  return json;
}
