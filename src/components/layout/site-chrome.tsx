"use client";
import {useState} from 'react'
import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { CommandMenu } from "@/components/layout/command-menu";
import { BackgroundGrid } from "@/components/layout/background-grid";
import { Footer } from "@/components/layout/footer";

export function SiteChrome({ children }: { children: ReactNode }) {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <>
      <BackgroundGrid />
      <Navbar onOpenCommandMenu={() => setCommandOpen(true)} />
      <CommandMenu open={commandOpen} onOpenChange={setCommandOpen} />
      <main className="pb-28 pt-32 md:pb-16">
        {children}
        <Footer />
      </main>
    </>
  );
}
