"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Compass,
  Library,
  Book,
  Settings,
  Search,
  Bell,
  User,
  LayoutGrid,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MoleculeSidebar } from "./molecule-sidebar";
import { MoleculeViewer } from "./molecule-viewer";
import { MoleculeDetails } from "./molecule-details";
import { BottomSections } from "@/components/menu2/bottom-sections";
import { moleculesData } from "../data";

export default function MoleculasPage() {
  const [activeSpeciesId, setActiveSpeciesId] = useState("agua");
  const pathname = usePathname();

  const activeItem = moleculesData.find(s => s.id === activeSpeciesId) || moleculesData[0];

  return (
    <div className="min-h-screen bg-[#f0f5f9] font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col p-3 gap-3 overflow-hidden">
      {/* Top Navigation */}
      <header className="flex items-center justify-between px-6 py-2 bg-white/70 backdrop-blur-md rounded-[32px] border border-white/50 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 shadow-inner">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-400 flex items-center justify-center text-white">
              <Compass className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-black text-slate-800 leading-none tracking-tight">
              RALQ Moléculas Studio
            </h1>
            <span className="text-[10px] font-medium text-cyan-400 tracking-wide uppercase">
              Visualización Molecular Avanzada
            </span>
          </div>
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
            label="Tabla periodica"
            href="/menu2/tabla-periodica"
            active={pathname === "/menu2/tabla-periodica"}
          />

          <div className="w-[1px] h-6 bg-slate-200 mx-2" />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center shadow-lg border-2 border-white"
          >
            <User className="w-5 h-5" />
          </motion.button>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 grid grid-cols-12 gap-4 min-h-0">
        {/* Left Sidebar */}
        <aside className="col-span-2 min-h-0">
          <MoleculeSidebar
            activeId={activeSpeciesId}
            onSelect={setActiveSpeciesId}
            data={moleculesData}
            title="MOLÉCULAS"
          />
        </aside>

        {/* Center Section */}
        <section className="col-span-7 flex flex-col gap-4 min-h-0">
          {/* Main Viewer Area */}
          <div className="min-h-0">
            <MoleculeViewer activeItem={activeItem} />
          </div>

          {/* Bottom Educational / Comparison Section */}
          <div className="flex-1 min-h-0">
             <BottomSections />
          </div>
        </section>

        {/* Right Sidebar */}
        <aside className="col-span-3 min-h-0">
          <MoleculeDetails activeItem={activeItem} />
        </aside>
      </main>

      {/* Custom Global Styles for the scrollbar */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
    </div>
  );
}

function NavItem({
  icon,
  label,
  href,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}) {
  return (
    <Link href={href}>
      <motion.button
        whileHover={{ y: -1 }}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-2xl transition-all font-bold text-xs",
          active
            ? "bg-blue-50 text-[#1a88c3] shadow-sm shadow-blue-100"
            : "text-slate-400 hover:text-slate-600 hover:bg-slate-50",
        )}
      >
        {icon}
        <span>{label}</span>
      </motion.button>
    </Link>
  );
}
