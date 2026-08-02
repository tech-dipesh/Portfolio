import type { Principle } from "@/lib/types";
export const principles: Principle[] = [
  {
    id: 1,
    topic: "Fault Tolerance",
    description:
      "No system is 100% reliable — not even AWS. I can't predict every way something will break, so I build assuming failure is coming: graceful degradation, retries, and a clear recovery path, not a system that just stops when one piece goes down.",
    references: "Designing Data-Intensive Applications, Chapter 1",
  },
];