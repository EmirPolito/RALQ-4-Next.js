"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Library, Book, Settings, User, LayoutGrid } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { InstrumentSidebar } from "./instrument-sidebar";
import { InstrumentViewer } from "./instrument-viewer";
import { InstrumentDetails } from "./instrument-details";
import { BottomSections } from "@/components/menu2/bottom-sections";
import { instrumentsData } from "../data";

export default function InstrumentosPage() {
  const [activeSpeciesId, setActiveSpeciesId] = useState("microscopio");
  const pathname = usePathname();

  const activeItem =
    instrumentsData.find((s) => s.id === activeSpeciesId) || instrumentsData[0];

  return (
    <div className="h-screen bg-[#e8f1f8] font-sans flex flex-col p-5 gap-5 overflow-hidden">
      {/* 1. HEADER */}
      <header className="h-[60px] flex-shrink-0 flex items-center justify-between px-4 bg-white/80 backdrop-blur-md rounded-xl border border-white shadow-sm">
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
            icon={<LayoutGrid className="w-4 h-4" />}
            label="Home"
            href="/menu2"
            active={pathname === "/menu2"}
          />
          <NavItem
            icon={<Library className="w-4 h-4" />}
            label="Instrumentos"
            href="/menu2/instrumentos"
            active={pathname === "/menu2/instrumentos"}
          />
          <NavItem
            icon={<Book className="w-4 h-4" />}
            label="Moleculas"
            href="/menu2/moleculas"
            active={pathname === "/menu2/moleculas"}
          />
          <NavItem
            icon={<Settings className="w-4 h-4" />}
            label="Tabla"
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
      <main className="flex-1 grid grid-cols-12 gap-5 min-h-0">
        <aside className="col-span-2 min-h-0">
          <InstrumentSidebar
            activeId={activeSpeciesId}
            onSelect={setActiveSpeciesId}
            data={instrumentsData}
            title="INSTRUMENTOS"
          />
        </aside>

        {/* Centro: Visor 3D y Sección Inferior */}
        <section className="col-span-7 flex flex-col gap-5 min-h-0">
          <div className="flex-1 bg-white/50 backdrop-blur-md rounded-3xl border border-white shadow-sm overflow-hidden min-h-0">
            <InstrumentViewer activeItem={activeItem} />
          </div>

          <div className="flex-1 min-h-[160px] max-h-[200px]">
            <BottomSections
              data={instrumentsData}
              compareLabel="INSTRUMENTOS"
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
            ? "bg-blue-50 text-[#1a88c3]"
            : "text-slate-400 hover:text-slate-600",
        )}
      >
        {icon}
        <span>{label}</span>
      </button>
    </Link>
  );
}
