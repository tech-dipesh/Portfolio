"use client";

import {useEffect, useCallback, useState} from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Home,
  Layers,
  GitBranch,
  Mail,
  Calendar,
  User,
  Copy,
  FileDown,
  Sun,
  Moon,
  Github,
  Linkedin,
  Twitter,
  Swords,
  Code,
  Notebook,
  Lightbulb,
  ArrowLeft,
  Award,
  TerminalSquare,
  ExternalLink,
  CornerDownLeft,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { siteConfig } from "@/config/site";
import { resumeVariants } from "@/config/resume";
import type { LucideIcon } from "lucide-react";

type PaletteView = "root" | "resume";

interface CommandMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function ItemIcon({ icon: IconComponent, tone = "neutral" }: { icon: LucideIcon; tone?: "neutral" | "accent" }) {
  return (
    <span
      className={
        "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border " +
        (tone === "accent"
          ? "border-accent/30 bg-accent/10 text-accent-soft"
          : "border-border bg-raised text-ink-muted")
      }
    >
      <IconComponent className="h-3.5 w-3.5" />
    </span>
  );
}

export function CommandMenu({ open, onOpenChange }: CommandMenuProps) {
  const [view, setView] = useState<PaletteView>("root");
  const router = useRouter();
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        onOpenChange(!open);
      }
    }
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [open, onOpenChange]);

  const close = useCallback(() => {
    onOpenChange(false);
    setView("root");
  }, [onOpenChange]);

  const goTo = (href: string) => {
    router.push(href);
    close();
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(siteConfig.email);
    close();
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    close();
  };

  return (
    <CommandDialog open={open} onOpenChange={(next) => (next ? onOpenChange(true) : close())}>
      <CommandInput placeholder={view === "resume" ? "Choose a resume..." : "Type a command or search..."} />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {view === "root" ? (
          <>
            <CommandGroup heading="Navigate">
              <CommandItem onSelect={() => goTo("/#hero")}>
                <ItemIcon icon={Home} /> Home
              </CommandItem>
              <CommandItem onSelect={() => goTo("/about")}>
                <ItemIcon icon={User} /> About
              </CommandItem>
              <CommandItem onSelect={() => goTo("projects")}>
                <ItemIcon icon={Layers} /> Projects
              </CommandItem>
              <CommandItem onSelect={() => goTo("/#experience")}>
                <ItemIcon icon={GitBranch} /> Experience
              </CommandItem>
              <CommandItem onSelect={() => goTo("/leetcode")}>
                <ItemIcon icon={Code} /> LeetCode
              </CommandItem>
              <CommandItem onSelect={() => goTo("/blogs")}>
                <ItemIcon icon={Notebook} /> Blog
              </CommandItem>
              <CommandItem onSelect={() => goTo("/certifications")}>
                <ItemIcon icon={Award} /> Certifications
              </CommandItem>
              <CommandItem onSelect={() => goTo("/principles")}>
                <ItemIcon icon={Lightbulb} /> Principles
              </CommandItem>
              <CommandItem onSelect={() => goTo("/#schedule")}>
                <ItemIcon icon={Calendar} /> Calendar
              </CommandItem>
              <CommandItem onSelect={() => goTo("/uses")}>
                <ItemIcon icon={TerminalSquare} /> Uses
              </CommandItem>
              <CommandItem onSelect={() => goTo("/#contact")}>
                <ItemIcon icon={Mail} /> Contact
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Actions">
              <CommandItem onSelect={copyEmail}>
                <ItemIcon icon={Copy} tone="accent" /> Copy email to clipboard
              </CommandItem>
              <CommandItem onSelect={() => setView("resume")}>
                <ItemIcon icon={FileDown} tone="accent" /> Download resume
              </CommandItem>
              <CommandItem onSelect={toggleTheme}>
                <ItemIcon icon={theme === "dark" ? Sun : Moon} tone="accent" /> Toggle theme
              </CommandItem>
              <CommandItem onSelect={() => window.open("/api/status", "_blank")}>
                <ItemIcon icon={ExternalLink} tone="accent" /> View API status (JSON)
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Socials">
              <CommandItem onSelect={() => window.open(siteConfig.github, "_blank")}>
                <ItemIcon icon={Github} /> GitHub
              </CommandItem>
              <CommandItem onSelect={() => window.open(siteConfig.linkedin, "_blank")}>
                <ItemIcon icon={Linkedin} /> LinkedIn
              </CommandItem>
              <CommandItem onSelect={() => window.open(siteConfig.twitter, "_blank")}>
                <ItemIcon icon={Twitter} /> Twitter
              </CommandItem>
              <CommandItem onSelect={() => window.open(siteConfig.codeforces, "_blank")}>
                <ItemIcon icon={Swords} /> Codeforces
              </CommandItem>
            </CommandGroup>
          </>
        ) : (
          <CommandGroup heading="Resume">
            <CommandItem onSelect={() => setView("root")}>
              <ItemIcon icon={ArrowLeft} /> Back
            </CommandItem>
            {resumeVariants.map((variant) => (
              <CommandItem key={variant.id} onSelect={() => goTo(variant.file)}>
                <ItemIcon icon={FileDown} tone="accent" />
                <span className="flex flex-col">
                  <span>{variant.label}</span>
                  <span className="text-xs text-ink-faint">{variant.description}</span>
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>

      <div className="flex items-center justify-between border-t border-border bg-raised/40 px-4 py-2.5 text-xs text-ink-faint">
        <span className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <ArrowUp className="h-3 w-3" />
            <ArrowDown className="h-3 w-3" />
            navigate
          </span>
          <span className="flex items-center gap-1">
            <CornerDownLeft className="h-3 w-3" />
            select
          </span>
        </span>
        <span className="flex items-center gap-1 font-mono">
          <kbd className="rounded border border-border bg-surface px-1.5 py-0.5">esc</kbd>
          close
        </span>
      </div>
    </CommandDialog>
  );
}
