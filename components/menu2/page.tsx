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

import { ArrowRight } from "lucide-react";

import Image from "next/image";

export default function StudioDashboard() {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#f0f5f9] font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col p-4 gap-6 overflow-hidden">
      {/* Top Navigation */}
      <header className="flex items-center justify-between px-6 py-3 bg-white/70 backdrop-blur-md rounded-2xl border border-white/50 shadow-sm">
        <div className="flex items-center gap-4">
          <Image
            src="/logos/ralq-verde.png"
            alt="RALQ logo"
            width={100}
            height={36}
            className="object-contain -mt-1"
          />
        </div>

        <nav className="flex items-center gap-2">
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

      {/* Main Content Area - General Overview */}
      <main className="flex-1 flex flex-col gap-4 max-w-7xl mx-auto w-full py-4">
        <section className="flex flex-col gap-1">
          <h2 className="text-3xl font-black text-slate-800">
            Bienvenido al Estudio
          </h2>
          <p className="text-xs text-slate-500 max-w-2xl">
            Explora las diferentes secciones de nuestra plataforma de
            investigación digital. Desde el análisis técnico de instrumentos de
            laboratorio hasta la visualización molecular avanzada en 3D.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FeatureCard
            title="Instrumentos"
            description="Visualiza y estudia los instrumentos de laboratorio más avanzados en 3D interactivo."
            icon={<Library className="w-6 h-6 text-blue-500" />}
            href="/menu2/instrumentos"
            color="bg-blue-50"
          />
          <FeatureCard
            title="Moléculas"
            description="Explora las complejas estructuras moleculares y sus propiedades químicas."
            icon={<Book className="w-6 h-6 text-cyan-500" />}
            href="/menu2/moleculas"
            color="bg-cyan-50"
          />
          <FeatureCard
            title="Tabla Periódica"
            description="Consulta los elementos químicos esenciales para la investigación y la vida."
            icon={<Settings className="w-6 h-6 text-slate-500" />}
            href="/menu2/tabla-periodica"
            color="bg-slate-50"
          />
        </div>

        <section className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-[32px] p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-800">
              Actividad Reciente
            </h3>
            <button className="text-xs font-bold text-blue-500 hover:underline">
              Ver historial
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <Compass className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-700 text-xs">
                      {i === 1
                        ? "Análisis de Microscopio completado"
                        : "Exploración de molécula ADN finalizada"}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Hace {i * 2} horas
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </div>
            ))}
          </div>
        </section>
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

function FeatureCard({
  title,
  description,
  icon,
  href,
  color,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  color: string;
}) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-xl flex flex-col gap-6 h-full cursor-pointer group"
      >
        <div
          className={cn(
            "w-16 h-16 rounded-2xl flex items-center justify-center transition-colors shadow-inner",
            color,
          )}
        >
          {icon}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-slate-800">{title}</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="mt-auto flex items-center gap-2 text-sm font-black text-blue-500 group-hover:gap-4 transition-all">
          Ir a la sección <ArrowRight className="w-4 h-4" />
        </div>
      </motion.div>
    </Link>
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
