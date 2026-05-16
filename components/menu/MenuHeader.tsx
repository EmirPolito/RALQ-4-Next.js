"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Home, Microscope, Dna, LayoutGrid, MoreVertical } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export function MenuHeader() {
  const pathname = usePathname();

  return (
    <header className="bg-menu2-header-bg h-[70px] flex-shrink-0 flex items-center px-4 backdrop-blur-md rounded-xl border border-menu2-izq-buscador-borde shadow-sm">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <span className="bg font-bold lg:inline-block">
          {/* Logo claro */}
          <img
            src="/logos/ralq-verde.png"
            alt="RALQ logo"
            className="px-1 hidden h-10 w-auto dark:hidden -mt-1"
          />

          {/* Logo oscuro */}
          <img
            src="/logos/ralq-blanco.png"
            alt="RALQ logo"
            className="px-1 hidden h-10 w-auto dark:block -mt-1"
          />
        </span>
      </Link>

      {/* Menu Items - Shifted slightly left from the right edge */}
      <nav className="flex items-center gap-6 p-1 ml-auto mr-20">
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
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <button className="text-menu2-header-paginas hover:text-menu2-header-paginas-hvr cursor-pointer transition-colors">
          <MoreVertical className="w-5 h-5" />
        </button>
        <UserButton />
      </div>
    </header>
  );
}

function NavItem({ icon, label, href, active }: any) {
  return (
    <Link href={href}>
      <button
        className={cn(
          "flex items-center gap-2 px-3 py-1.5 transition-all text-xs cursor-pointer rounded-lg relative",
          active
            ? "text-white"
            : "text-white/40 hover:text-white/70 font-medium",
        )}
      >
        {icon}
        {/* Invisible bold text to reserve space and prevent jitter */}
        <div className="flex flex-col items-center">
          <span 
            className={cn(
              "transition-all duration-200",
              active ? "font-bold" : "font-medium"
            )}
          >
            {label}
          </span>
          {/* Reserved space for bold text */}
          <span className="font-bold h-0 overflow-hidden invisible select-none pointer-events-none" aria-hidden="true">
            {label}
          </span>
        </div>
      </button>
    </Link>
  );
}
