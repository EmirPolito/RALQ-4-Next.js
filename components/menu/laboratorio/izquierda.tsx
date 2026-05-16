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

  const filteredData = data.filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(query) ||
      item.group.toLowerCase().includes(query) ||
      (item.scientificName?.toLowerCase().includes(query)) ||
      item.category.toLowerCase().includes(query)
    );
  });

  return (
    /* bg de la terjeta*/
    <div className="bg-menu2-izq-bg flex flex-col h-full  border border-menu2-izq-buscador-borde rounded-xl p-3.5 shadow-xl overflow-hidden">
      <h2 className="text-menu2-izq-ttl text-xs font-medium md:text-xs uppercase mb-4 px-1.5 pt-2">
        {title}
      </h2>

      {/* Barra de busqueda */}
      <div className="relative mb-4 px-0.5">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-menu2-izq-buscador-contenido">
          <Search className="w-3.5 h-3.5" />
        </div>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-menu2-izq-buscador-bg border border-menu2-izq-buscador-borde rounded-xl py-2.5 pl-9 pr-3 text-xs transition-all placeholder:text-menu2-izq-buscador-contenido focus:outline-none hover:border-menu2-izq-buscador-borde hover:bg-menu2-izq-buscador-bg"
        />
      </div>

      <div className="flex-2 overflow-y-auto space-y-1 pr-2 custom-scrollbar">
        {filteredData.length > 0 ? (
          filteredData.map((item) => {
            const isActive = activeId === item.id;
            return (
              <motion.button
                key={item.id}
                whileHover={{ x: 0 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelect(item.id)}
                className={cn(
                  /**tarjeta rectagular*/
                  "cursor-pointer w-full flex items-center gap-2.5 p-2.5 rounded-lg transition-all duration-200",
                  isActive ? "bg-menu2-izq-tarjeta-bg shadow-lg" : "",
                )}
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center transition-colors",
                    isActive
                      ? "bg-menu2-izq-bg-icono text-menu2-izq-contenido-icono"
                      : "bg-menu2-izq-bg-icono text-menu2-izq-contenido-icono",
                  )}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <div className="flex flex-col items-start text-left overflow-hidden">
                  <span
                    className={cn(
                      "text-sm font-semibold truncate w-full",
                      isActive
                        ? "text-menu2-izq-tarjeta-txt" /*texto cuando esta el cursor en la tarjeta*/
                        : "text-menu2-izq-tarjeta-mini-txt" /*texto cuando no esta el cursor en la tarjeta*/,
                    )}
                  >
                    {item.name}
                  </span>
                  <span
                    className={cn(
                      "text-[10px] truncate w-full",
                      isActive
                        ? "text-menu2-izq-tarjeta-mini-txt"
                        : "text-menu2-izq-tarjeta-mini-txt",
                    )}
                  >
                    {item.subtitle}
                  </span>
                </div>
              </motion.button>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-menu2-izq-buscador-contenido text-center">
            <Search className="w-8 h-8 mb-2 text-menu2-izq-buscador-contenido" />
            <span className="text-xs font-medium uppercase">
              Sin instrumentos
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
