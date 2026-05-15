"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Home, Microscope, Dna, LayoutGrid, User } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function InstrumentosEmptyPage() {
  const pathname = usePathname();

  return (
    <div className="bg-menu2-general h-screen font-sans flex flex-col p-5 gap-4 overflow-hidden">
      {/* 1. HEADER */}
      <header className="bg-menu2-header h-[70px] flex-shrink-0 flex items-center justify-between px-4 backdrop-blur-md rounded-xl border border-menu2-izq-buscador-borde shadow-sm">
        <div className="flex items-center gap-4">
          <Image
            src="/logos/ralq-verde.png"
            alt="RALQ logo"
            width={100}
            height={36}
            className="object-contain -mt-1 h-12.5 "
          />
        </div>

        <nav className="flex items-center gap-2">
          <NavItem
            icon={<Home className="w-4 h-4" />}
            label="Laboratorio"
            href="/menu2/laboratorio"
            active={pathname === "/menu2/laboratorio"}
          />
          <NavItem
            icon={<Microscope className="w-4 h-4" />}
            label="Instrumentos"
            href="/menu2/instrumentos"
            active={pathname === "/menu2/instrumentos"}
          />
          <NavItem
            icon={<Dna className="w-4 h-4" />}
            label="Moleculas"
            href="/menu2/moleculas"
            active={pathname === "/menu2/moleculas"}
          />
          <NavItem
            icon={<LayoutGrid className="w-4 h-4" />}
            label="Tabla periódica"
            href="/menu2/tabla"
            active={pathname === "/menu2/tabla"}
          />

          <div className="w-[1px] h-6 bg-slate-200 mx-2" />

          <button className="w-9 h-9 rounded-full bg-slate-800 text-white flex items-center justify-center shadow-md">
            <User className="w-4 h-4" />
          </button>
        </nav>
      </header>

      {/* 2. MAIN AREA (Empty as requested) */}
      <main className="flex-1 flex items-center justify-center min-h-0">
        <div className="text-menu2-derecha-desc text-lg font-medium opacity-50">
          Sección en mantenimiento
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, href, active }: any) {
  return (
    <Link href={href}>
      <button
        className={cn(
          "flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all text-xs cursor-pointer",
          active
            ? "bg-menu2-header-paginas-bg"
            : "text-menu2-header-paginas hover:text-menu2-header-paginas-hvr",
        )}
      >
        {icon}
        <span>{label}</span>
      </button>
    </Link>
  );
}
