"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface">
        <AlertTriangle className="h-6 w-6 text-accent" />
      </div>
      <h1 className="mt-6 text-2xl font-semibold tracking-tight">Something broke on this page.</h1>
      <p className="mt-2 max-w-sm text-sm text-ink-muted">
        That was unexpected. Try again, or head back to the homepage if it keeps happening.
      </p>
      <div className="mt-6 flex gap-3">
        <Button variant="accent" onClick={reset}>
          Try again
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </div>
  );
}
