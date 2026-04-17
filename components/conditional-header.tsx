"use client";

import { HeroHeader } from "@/components/header";
import { usePathname } from "next/navigation";

export function ConditionalHeader() {
  const pathname = usePathname();
  const isMenuPage = pathname?.startsWith("/menu");

  if (isMenuPage) return null;
  return <HeroHeader />;
}
