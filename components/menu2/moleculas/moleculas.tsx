"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Home, FlaskConical, Dna, LayoutGrid, User } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { MoleculeSidebar } from "./izquierda";
import { MoleculeViewer } from "./centro";
import { MoleculeDetails } from "./derecha";
import { BottomSections } from "@/components/menu2/bottom-sections";
import { moleculesData } from "../data";

export default function MoleculasPage() {
  const [activeSpeciesId, setActiveSpeciesId] = useState("agua");
  const pathname = usePathname();

  const activeItem =
    moleculesData.find((s) => s.id === activeSpeciesId) || moleculesData[0];

  return (
    <div className="bg-menu2-general h-screen font-sans flex flex-col p-5 gap-4 overflow-hidden">
      {/* 1. HEADER */}
      <header className="bg-menu2-header h-[70px] flex-shrink-0 flex items-center justify-between px-4 backdrop-blur-md rounded-xl border border-white shadow-sm">
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
            label="Home"
            href="/menu2"
            active={pathname === "/menu2"}
          />
          <NavItem
            icon={<FlaskConical className="w-4 h-4" />}
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

      {/* 2. MAIN AREA */}
      <main className="flex-1 grid grid-cols-12 gap-3 min-h-0">
        <aside className="col-span-2 min-h-0">
          <MoleculeSidebar
            activeId={activeSpeciesId}
            onSelect={setActiveSpeciesId}
            data={moleculesData}
            title="MOLÉCULAS"
          />
        </aside>

        {/* Centro: Visor 3D y Sección Inferior */}
        <section className="col-span-7 flex flex-col gap-3 min-h-0">
          <div className="flex-1 bg-white/50 backdrop-blur-md rounded-xl border border-white shadow-sm overflow-hidden min-h-0">
            <MoleculeViewer activeItem={activeItem} />
          </div>

          <div className="flex-1 min-h-[160px] max-h-[200px]">
            <BottomSections
              data={moleculesData}
              activeItem={activeItem}
              compareLabel="MOLÉCULAS"
            />
          </div>
        </section>

        {/* Lado Derecho: Detalles */}
        <aside className="col-span-3 h-full min-h-0">
          <MoleculeDetails activeItem={activeItem} />
        </aside>
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
