"use client";

import {useEffect,  useState} from "react";
import Image from "next/image";
import { LayoutDashboard } from "lucide-react";

export function ProjectPreview({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-raised to-surface p-4">
        <div className="flex gap-1.5">
          <span className="h-2 w-8 rounded-full bg-border-strong" />
          <span className="h-2 w-4 rounded-full bg-border-strong" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2 h-16 rounded-lg bg-border/60" />
          <div className="h-16 rounded-lg bg-border/60" />
          <div className="h-10 rounded-lg bg-border/40" />
          <div className="h-10 rounded-lg bg-border/40" />
          <div className="h-10 rounded-lg bg-border/40" />
        </div>
        <LayoutDashboard className="ml-auto h-5 w-5 text-ink-faint" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized
      className="object-cover object-top"
      onError={() => setFailed(true)}
    />
  );
}
