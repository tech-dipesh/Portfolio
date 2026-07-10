"use client";

import * as React from "react";
import { FileDown, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { resumeVariants } from "@/config/resume";
import { cn } from "@/lib/utils";

export function ResumePicker({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const openNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const closeSoon = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn("group", className)}
          onMouseEnter={openNow}
          onMouseLeave={closeSoon}
        >
          <FileDown className="h-3.5 w-3.5" />
          Resume
          <ChevronDown className="h-3 w-3 transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        onMouseEnter={openNow}
        onMouseLeave={closeSoon}
        className="min-w-72"
      >
        <DropdownMenuLabel>Choose a resume</DropdownMenuLabel>
        {resumeVariants.map((variant) => (
          <DropdownMenuItem key={variant.id} asChild>
            <a href={variant.file} download>
              <span className="text-sm font-medium text-ink">{variant.label}</span>
              <span className="text-xs text-ink-faint">{variant.description}</span>
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
