"use client";

import { useLanguage } from "@/context/language-context";
import type { Locale } from "@/context/language-context";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const LANGUAGES: {
  code: Locale;
  label: string;
  flag: string;
  country: string;
  img: string;
}[] = [
  {
    code: "es",
    label: "Español",
    flag: "🇲🇽",
    country: "México",
    img: "/icons/lenguage/Mexico.png",
  },
  {
    code: "pt",
    label: "Português",
    flag: "🇧🇷",
    country: "Brasil",
    img: "/icons/lenguage/Brasil.png",
  },
  {
    code: "en",
    label: "English",
    flag: "🇺🇸",
    country: "USA",
    img: "/icons/lenguage/EU.png",
  },
];

export function MenuLanguageSelector({
  className,
}: {
  className?: string;
}) {
  const { locale, setLocale } = useLanguage();

  const currentIndex = LANGUAGES.findIndex((l) => l.code === locale);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % LANGUAGES.length;
    setLocale(LANGUAGES[nextIndex].code);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + LANGUAGES.length) % LANGUAGES.length;
    setLocale(LANGUAGES[prevIndex].code);
  };

  const current = LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0];

  return (
    <div className={cn("flex items-center w-full justify-between select-none px-1", className)}>
      
      {/* Tarjeta de controles */}
      <div className="flex items-center gap-1.5 bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-2 py-1.5 shadow-sm">
        <button 
          onClick={handlePrev} 
          className="p-1 hover:bg-slate-200 dark:hover:bg-white/10 rounded-full transition-colors focus:outline-none cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 text-slate-600 dark:text-white/70" />
        </button>

        <div className="flex flex-col w-[60px] items-center text-center overflow-hidden">
          <span className="text-foreground font-semibold text-xs leading-tight tracking-tight truncate">
            {current.label}
          </span>
          <span className="text-muted-foreground text-[10px] leading-tight truncate">
            {current.country}
          </span>
        </div>

        <button 
          onClick={handleNext} 
          className="p-1 hover:bg-slate-200 dark:hover:bg-white/10 rounded-full transition-colors focus:outline-none cursor-pointer"
        >
          <ChevronRight className="w-4 h-4 text-slate-600 dark:text-white/70" />
        </button>
      </div>

      {/* Bandera */}
      <span className="flex items-center justify-center w-7 h-7 rounded-full overflow-hidden border border-border/30 shrink-0 shadow-sm ml-2">
        <img 
          src={current.img} 
          alt={current.country} 
          className="w-full h-full object-cover" 
        />
      </span>
    </div>
  );
}
