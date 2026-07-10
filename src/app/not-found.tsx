import Link from "next/link";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface">
        <Compass className="h-6 w-6 text-accent" />
      </div>
      <p className="mt-6 font-mono text-sm text-ink-faint">404</p>
      <h1 className="mt-1 text-2xl font-semibold tracking-tight">This page doesn&apos;t exist.</h1>
      <p className="mt-2 max-w-sm text-sm text-ink-muted">
        The link might be broken, or the page may have moved.
      </p>
      <Button variant="accent" className="mt-6" asChild>
        <Link href="/">Back to homepage</Link>
      </Button>
    </div>
  );
}
