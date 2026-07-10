"use client";

import {useState} from 'react'
import { Github, Linkedin, Twitter, Copy, Check, Code, Swords } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/home/contact-form";
import { siteConfig } from "@/config/site";

const socials = [
  { label: "GitHub", href: siteConfig.github, icon: Github },
  { label: "LinkedIn", href: siteConfig.linkedin, icon: Linkedin },
  { label: "Twitter", href: siteConfig.twitter, icon: Twitter },
  { label: "LeetCode", href: siteConfig.leetcode, icon: Code },
  { label: "Codeforces", href: siteConfig.codeforces, icon: Swords },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="container mt-32 scroll-mt-28 pb-20">
      <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-surface to-base p-10 text-center md:p-16">
        <p className="text-xs font-medium uppercase tracking-widest text-ink-faint">Get in touch</p>
        <h2 className="mx-auto mt-3 max-w-lg text-3xl font-semibold tracking-tight md:text-4xl">
          Looking for a motivated intern ready to ship.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-ink-muted">
          Open to internships and full-stack or backend roles. Send a message below, or reach out
          directly.
        </p>

        <div className="mt-10">
          <ContactForm />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button variant="outline" size="sm" onClick={copyEmail}>
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? "Copied" : siteConfig.email}
          </Button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:text-ink"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
