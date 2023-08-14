"use client";

import { useRouter } from "next/navigation";

export default function GoBack() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="button solidBtn">
      ← Go Back
    </button>
  );
}
