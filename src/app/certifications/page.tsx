import type { Metadata } from "next";
import { ExternalLink, GraduationCap } from "lucide-react";
import { certifications } from "@/config/certifications";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Certifications — ${siteConfig.name}`,
  description: "Coursework and certifications completed outside the classroom.",
};

export default function CertificationsPage() {
  return (
    <div className="container scroll-mt-28">
      <div className="max-w-xl">
        <p className="text-xs font-medium uppercase tracking-widest text-ink-faint">Continuous learning</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Certifications.</h1>
        <p className="mt-3 text-ink-muted">
          Structured learning I did on my own time, outside university coursework.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {certifications.map((cert) => (
          <a
            key={cert.url}
            href={cert.url}
            target="_blank"
            rel="noreferrer"
            className="group flex items-start gap-4 rounded-2xl border border-border bg-surface/60 p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-border-strong hover:shadow-glow"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent-soft">
              <GraduationCap className="h-4 w-4" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-medium text-ink">{cert.title}</p>
            </div>
            <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0 text-ink-faint transition-transform duration-300 group-hover:rotate-45 group-hover:text-accent-soft" />
          </a>
        ))}
      </div>
    </div>
  );
}
