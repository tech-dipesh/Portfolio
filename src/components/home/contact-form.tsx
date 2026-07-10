"use client";
import type {SubmitEvent} from 'react'
import {  useState} from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactConfig } from "@/config/contact";

type SubmitState = "idle" | "sending" | "sent" | "error";

interface ContactFields {
  name: string;
  email: string;
  message: string;
}

const emptyFields: ContactFields = { name: "", email: "", message: "" };

export function ContactForm() {
  const [fields, setFields] = useState<ContactFields>(emptyFields);
  const [status, setStatus] = useState<SubmitState>("idle");

  const updateField = <K extends keyof ContactFields>(key: K, value: ContactFields[K]) => {
    setFields((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(contactConfig.formspreeEndpoint!, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(fields),
      });

      if (!response.ok) throw new Error("Formspree rejected the submission");

      setStatus("sent");
      setFields(emptyFields);
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
        <CheckCircle2 className="h-6 w-6 text-emerald-400" />
        <p className="text-sm font-medium text-ink">Message sent. I&apos;ll get back to you soon.</p>
        <button
          onClick={() => setStatus("idle")}
          className="text-xs text-ink-faint underline-offset-2 hover:underline"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-xs font-medium text-ink-muted">
            Name
          </label>
          <input
            id="contact-name"
            required
            value={fields.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-raised/50 px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="text-xs font-medium text-ink-muted">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={fields.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-raised/50 px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent"
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="contact-message" className="text-xs font-medium text-ink-muted">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          value={fields.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="mt-1.5 w-full resize-none rounded-xl border border-border bg-raised/50 px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent"
          placeholder="What are you reaching out about?"
        />
      </div>

      {status === "error" ? (
        <div className="mt-3 flex items-center gap-2 text-xs text-rose-400">
          <AlertCircle className="h-3.5 w-3.5" />
          Something went wrong. Try again, or email me directly.
        </div>
      ) : null}

      <Button type="submit" variant="accent" size="lg" className="mt-5 w-full" disabled={status === "sending"}>
        {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {status === "sending" ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
