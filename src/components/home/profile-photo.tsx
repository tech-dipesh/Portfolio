"use client";

import {useState} from 'react'
import Image from "next/image";

export function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-accent/40 shadow-glow">
      {failed ? (
        <div className="flex h-full w-full items-center justify-center bg-raised text-sm font-semibold text-accent-soft">
          DS
        </div>
      ) : (
        <Image
          src="/assets/images/me.png"
          alt="Dipendra Sharma"
          fill
          unoptimized
          priority
          sizes="48px"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
