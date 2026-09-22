import Image from "next/image"

export function NepalFlag({ className }: { className?: string }) {
  return (
    <Image src="/assets/images/flag.svg" width="100" height="100" className={className} alt="Nepal Flag"/>
  );
}