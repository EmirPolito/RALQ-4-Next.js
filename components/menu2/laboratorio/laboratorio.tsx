"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Home, Microscope, Dna, LayoutGrid, User } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { InstrumentSidebar } from "./izquierda";
import { InstrumentViewer, BottomSections } from "./centro";
import { InstrumentDetails } from "./derecha";
import { instrumentsData, moleculesData } from "../data";

const combinedData = [...instrumentsData, ...moleculesData];

export default function LaboratorioPage() {
  const [activeSpeciesId, setActiveSpeciesId] = useState("microscopio");
  const [viewMode, setViewMode] = useState("normal");
  const pathname = usePathname();

  const activeItem =
    combinedData.find((s) => s.id === activeSpeciesId) || combinedData[0];

  return (
    <div className="h-screen bg-menu2-bg-general font-sans flex flex-col p-5 gap-4 overflow-hidden">
      {/* 1. HEADER */}
      <header className="bg-menu2-header-bg h-[70px] flex-shrink-0 flex items-center justify-between px-4  backdrop-blur-md rounded-xl border border-menu2-izq-buscador-borde shadow-sm">
        <div className="flex items-center gap-4">
          <Image
            src="/logos/ralq-verde.png"
            alt="RALQ logo"
            width={100}
            height={36}
            className="object-contain -mt-1 h-12.5"
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

      {/* 2. MAIN AREA */}
      <main className="flex-1 grid grid-cols-12 gap-3 min-h-0">
        <aside className="col-span-2 min-h-0">
          <InstrumentSidebar
            activeId={activeSpeciesId}
            onSelect={setActiveSpeciesId}
            data={combinedData}
            title="LABORATORIO"
          />
        </aside>

        {/* Centro: Visor 3D y Sección Inferior */}
        <section className="col-span-7 flex flex-col gap-3 min-h-0">
          <div className="bg-menu2-centro-bg flex-1 backdrop-blur-md rounded-xl border border-menu2-izq-buscador-borde shadow-xl overflow-hidden min-h-0">
            <InstrumentViewer activeItem={activeItem} viewMode={viewMode} />
          </div>

          <div className="flex-1 min-h-[160px] max-h-[200px]">
            <BottomSections
              data={combinedData}
              activeItem={activeItem}
              compareLabel="LABORATORIO"
              isInstrument={true}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />
          </div>
        </section>

        {/* Lado Derecho: Detalles */}
        <aside className="col-span-3 h-full min-h-0">
          <InstrumentDetails activeItem={activeItem} />
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
