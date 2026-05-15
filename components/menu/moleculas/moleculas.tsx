"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Home, Microscope, Dna, LayoutGrid } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function MoleculasPage() {
  const pathname = usePathname();

  return (
    <div className="bg-menu2-general h-screen font-sans flex flex-col p-5 gap-4 overflow-hidden">
      {/* 1. HEADER */}
      <header className="bg-menu2-header h-[70px] flex-shrink-0 flex items-center justify-between px-4 backdrop-blur-md rounded-xl border border-menu2-izq-buscador-borde shadow-sm">
        <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
          <span className="bg font-bold lg:inline-block">
            {/* Logo claro */}
            <img
              src="/logos/ralq-verde.png"
              alt="RALQ logo"
              className="-ml-1 h-10 w-auto dark:hidden"
            />

            {/* Logo oscuro */}
            <img
              src="/logos/ralq-blanco.png"
              alt="RALQ logo"
              className="px-0 hidden h-10 w-auto dark:block"
            />
          </span>
        </Link>

        <nav className="flex items-center gap-2">
          <NavItem
            icon={<Home className="w-4 h-4" />}
            label="Laboratorio"
            href="/menu/laboratorio"
            active={pathname === "/menu/laboratorio"}
          />
          <NavItem
            icon={<Microscope className="w-4 h-4" />}
            label="Instrumentos"
            href="/menu/instrumentos"
            active={pathname === "/menu/instrumentos"}
          />
          <NavItem
            icon={<Dna className="w-4 h-4" />}
            label="Moleculas"
            href="/menu/moleculas"
            active={pathname === "/menu/moleculas"}
          />
          <NavItem
            icon={<LayoutGrid className="w-4 h-4" />}
            label="Tabla periódica"
            href="/menu/tabla"
            active={pathname === "/menu/tabla"}
          />

          <div className="w-[1px] h-6 bg-slate-200 mx-2" />

          <UserButton />
        </nav>
      </header>

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
