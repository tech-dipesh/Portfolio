"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Command } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { ResumePicker } from "@/components/layout/resume-picker";
import { homeSections, siteRoutes } from "@/config/nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

function useActiveSection(): string {
  const [active, setActive] = React.useState("#hero");

  React.useEffect(() => {
    const ids = homeSections.map((section) => section.href.replace("#", ""));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        const topMost = visible.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
        )[0];
        if (topMost) {
          setActive(`#${topMost.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}

export function Navbar({ onOpenCommandMenu }: { onOpenCommandMenu: () => void }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeHash = useActiveSection();

  const isLinkActive = (href: string) => {
    if (href.startsWith("#")) return isHome && activeHash === href;
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-5 z-40 hidden justify-center px-4 md:flex">
        <nav className="flex items-center gap-1 rounded-full border border-border/80 bg-surface/60 px-2 py-2 shadow-lifted backdrop-blur-md">
          <div className="flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent-soft">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {siteConfig.availability}
          </div>

          <div className="mx-1 h-5 w-px bg-border" />

          {homeSections.map((section) => (
            <Link
              key={section.href}
              href={isHome ? section.href : `/${section.href}`}
              className={cn(
                "group relative flex items-center gap-1.5 rounded-full px-3 py-2 text-sm transition-colors duration-300",
                isLinkActive(section.href) ? "text-ink" : "text-ink-muted hover:text-ink",
              )}
            >
              {isLinkActive(section.href) ? (
                <span className="absolute inset-0 rounded-full bg-raised" />
              ) : null}
              <Icon name={section.icon} className="relative h-3.5 w-3.5" />
              <span className="relative max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-24 group-hover:pl-0.5">
                {section.label}
              </span>
            </Link>
          ))}

          <div className="mx-1 h-5 w-px bg-border" />

          {siteRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "group relative flex items-center gap-1.5 rounded-full px-3 py-2 text-sm transition-colors duration-300",
                isLinkActive(route.href) ? "text-ink" : "text-ink-muted hover:text-ink",
              )}
            >
              {isLinkActive(route.href) ? <span className="absolute inset-0 rounded-full bg-raised" /> : null}
              <Icon name={route.icon} className="relative h-3.5 w-3.5" />
              <span className="relative max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-24 group-hover:pl-0.5">
                {route.label}
              </span>
            </Link>
          ))}

          <div className="mx-1 h-5 w-px bg-border" />

          <button
            onClick={onOpenCommandMenu}
            className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-ink-faint transition-colors hover:border-border-strong hover:text-ink-muted"
          >
            <Command className="h-3 w-3" />K
          </button>

          <ResumePicker className="ml-1" />
          <ThemeToggle />
        </nav>
      </header>

      <nav className="fixed inset-x-0 bottom-5 z-40 flex justify-center px-4 md:hidden">
        <div className="flex items-center gap-1 rounded-full border border-border/80 bg-surface/70 px-2 py-2 shadow-lifted backdrop-blur-md">
          {homeSections.map((section) => (
            <Link
              key={section.href}
              href={isHome ? section.href : `/${section.href}`}
              aria-label={section.label}
              className={cn(
                "relative flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300",
                isLinkActive(section.href) ? "bg-raised text-ink" : "text-ink-muted",
              )}
            >
              <Icon name={section.icon} className="h-4 w-4" />
            </Link>
          ))}
          {siteRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              aria-label={route.label}
              className={cn(
                "relative flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300",
                isLinkActive(route.href) ? "bg-raised text-ink" : "text-ink-muted",
              )}
            >
              <Icon name={route.icon} className="h-4 w-4" />
            </Link>
          ))}
          <button
            onClick={onOpenCommandMenu}
            aria-label="Open command menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-muted"
          >
            <Command className="h-4 w-4" />
          </button>
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
}
