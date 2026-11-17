import { describe, expect, it } from "vitest";
import { CONTACT_EMAIL, FORM_ENDPOINT, buildPayload, contactSchema } from "./contact";

const valid = {
  name: "Ritik",
  email: "client@example.com",
  phone: "",
  company: "",
  service: "Agentic AI Systems",
  budget: "",
  message: "I want an AI agent for my shop.",
};

describe("contact form", () => {
  it("delivers submissions to the company Gmail", () => {
    expect(CONTACT_EMAIL).toBe("evolition.offical@gmail.com");
    expect(FORM_ENDPOINT).toBe("https://formsubmit.co/ajax/evolition.offical@gmail.com");
  });

  it("rejects an invalid email address", () => {
    expect(contactSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });

  it("requires a service to be chosen", () => {
    expect(contactSchema.safeParse({ ...valid, service: "" }).success).toBe(false);
  });

  it("lets the owner reply straight to the visitor", () => {
    expect(buildPayload(contactSchema.parse(valid))._replyto).toBe("client@example.com");
  });
});
