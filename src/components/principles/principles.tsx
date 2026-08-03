import { principles } from "@/config/principles";
import { PrincipleEntry } from "@/components/principles/principle";

export function Principles() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      {principles.map((principle) => (
        <PrincipleEntry key={principle.id} {...principle} />
      ))}
    </div>
  );
}