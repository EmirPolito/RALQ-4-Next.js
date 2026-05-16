"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Home, Microscope, Dna, LayoutGrid } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

import { MenuHeader } from "../MenuHeader";

export default function MoleculasPage() {
  const pathname = usePathname();

  return (
    <>
      {/* 2. MAIN AREA (Empty as requested) */}
      <main className="flex-1 flex items-center justify-center min-h-0">
        <div className="text-menu2-derecha-desc text-lg font-medium opacity-50">
          Sección en mantenimiento
        </div>
      </main>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}
