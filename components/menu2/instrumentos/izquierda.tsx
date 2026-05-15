"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { ItemData } from "../data";

export function InstrumentSidebar({
  activeId,
  onSelect,
  data,
  title = "INSTRUMENTOS",
}: {
  activeId: string;
  onSelect: (id: string) => void;
  data: ItemData[];
  title?: string;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.group.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    /* bg de la terjeta*/
    <div className="bg-menu2-izq-bg flex flex-col h-full  border border-slate-200 rounded-xl p-3.5 shadow-xl overflow-hidden">
      <h2 className="text-menu2-izq-ttl text-xs font-medium md:text-xs tracking-[0.1em] uppercase mb-4 px-2.5 pt-1.5">
        {title}
      </h2>

      {/* Barra de busqueda */}
      <div className="relative mb-4 px-0.5">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-menu2-izq-buscador-contenido">
          <Search className="w-3.5 h-3.5" />
        </div>
        <input
          type="text"
          placeholder="Buscar instrumento..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-menu2-izq-buscador-bg border border-menu2-izq-buscador-borde rounded-xl py-2.5 pl-9 pr-3 text-xs transition-all"
        />
      </div>

      <div className="flex-1 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
        {filteredData.length > 0 ? (
          filteredData.map((item) => {
            const isActive = activeId === item.id;
            return (
              <motion.button
                key={item.id}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelect(item.id)}
                className={cn(
                  "cursor-pointer w-full flex items-center gap-2.5 p-2 rounded-xl transition-all duration-300",
                  isActive ? "bg-menu2-izq-tarjeta-bg shadow-lg" : "",
                )}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-xl flex items-center justify-center transition-colors",
                    isActive
                      ? "bg-menu2-izq-bg-icono text-menu2-izq-contenido-icono"
                      : "bg-menu2-izq-bg-icono text-menu2-izq-contenido-icono",
                  )}
                >
                  {item.icon}
                </div>
                <div className="flex flex-col items-start text-left overflow-hidden">
                  <span
                    className={cn(
                      "text-sm font-semibold truncate w-full",
                      isActive
                        ? "text-menu2-izq-tarjeta-txt"
                        : "text-menu2-izq-tarjeta-mini-txt",
                    )}
                  >
                    {item.name}
                  </span>
                  <span
                    className={cn(
                      "text-[10px] truncate w-full",
                      isActive
                        ? "text-text-menu2-izq-tarjeta-mini-txt"
                        : "text-text-menu2-izq-tarjeta-mini-txt",
                    )}
                  >
                    {item.group}
                  </span>
                </div>
              </motion.button>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-slate-400 text-center">
            <Search className="w-8 h-8 mb-2 opacity-20" />
            <span className="text-[10px] font-medium uppercase">
              Sin instrumentos
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
