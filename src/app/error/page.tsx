// app/error/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import ErrorPage from "@/components/common/Error";

export default function Page() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") as
    | "maintenance"
    | "system"
    | "access"
    | "timeout"
    | null;

  const validTypes = ["maintenance", "system", "access", "timeout"] as const;

  if (type && validTypes.includes(type)) {
    return <ErrorPage type={type} />;
  }

  return <ErrorPage type="system" />;
}
