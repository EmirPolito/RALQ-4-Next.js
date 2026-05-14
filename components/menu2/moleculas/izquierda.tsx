"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { ItemData } from "../data";

export function MoleculeSidebar({
  activeId,
  onSelect,
  data,
  title = "MOLÉCULAS",
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
    <div className="flex flex-col h-full bg-white/90 backdrop-blur-md border border-slate-200 rounded-xl p-3.5 shadow-xl overflow-hidden">
      <h2 className="text-xs font-bold md:text-xs text-slate-500 tracking-widest uppercase mb-4 px-2.5">
        {title}
      </h2>

      {/* Search Bar */}
      <div className="relative mb-4 px-0.5">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          <Search className="w-3.5 h-3.5" />
        </div>
        <input
          type="text"
          placeholder="Buscar molécula..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2.5 pl-9 pr-3 text-xs focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
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
                  "w-full flex items-center gap-2.5 p-2 rounded-xl transition-all duration-300 group",
                  isActive
                    ? "bg-cyan-600 shadow-lg shadow-cyan-200"
                    : "hover:bg-slate-100",
                )}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-xl flex items-center justify-center transition-colors",
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-50 text-slate-400 group-hover:text-cyan-600",
                  )}
                >
                  {item.icon}
                </div>
                <div className="flex flex-col items-start text-left overflow-hidden">
                  <span
                    className={cn(
                      "text-sm font-semibold truncate w-full",
                      isActive ? "text-white" : "text-slate-700",
                    )}
                  >
                    {item.name}
                  </span>
                  <span
                    className={cn(
                      "text-[10px] truncate w-full",
                      isActive ? "text-cyan-100" : "text-slate-400",
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
              Sin moléculas
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
