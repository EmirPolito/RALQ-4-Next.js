"use client";

import * as React from "react";
import { Moon, Sun, Eye, Palette } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";
import type { Locale } from "@/context/language-context";
import { REDUCED_MOTION_EVENT } from "@/hooks/use-reduced-motion";

const colorOptions = [
  { name: "Por defecto", value: "default", color: "" },
  { name: "Azul", value: "blue", color: "#155dfc" },
  { name: "Morado", value: "purple", color: "#a800b7" },
  { name: "Amarillo", value: "yellow", color: "#fdc700" },
  { name: "Naranja", value: "orange", color: "#f97316" },
  { name: "Rosa", value: "pink", color: "#ec003f" },
  { name: "Verde", value: "green", color: "#5ea500" },
];

const LANGUAGES: { code: Locale; img: string; country: string }[] = [
  { code: "es", img: "/icons/lenguage/Mexico.png", country: "México" },
  { code: "pt", img: "/icons/lenguage/Brasil.png", country: "Brasil" },
  { code: "en", img: "/icons/lenguage/EU.png", country: "USA" },
];

export function SidebarControls({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  const [colorblind, setColorblind] = React.useState(false);
  const [reducedMotion, setReducedMotion] = React.useState(false);
  const [primaryColor, setPrimaryColor] = React.useState("default");

  const { locale, setLocale } = useLanguage();

  React.useEffect(() => {
    setMounted(true);
    const savedColorblind = localStorage.getItem("colorblind") === "true";
    const savedReducedMotion = localStorage.getItem("reducedMotion") === "true";
    const savedColor = localStorage.getItem("primaryColor") || "default";

    setColorblind(savedColorblind);
    setReducedMotion(savedReducedMotion);

    if (savedColorblind) {
      setPrimaryColor("default");
      localStorage.setItem("primaryColor", "default");
      applyColorTheme("default");
    } else {
      setPrimaryColor(savedColor);
      applyColorTheme(savedColor);
    }

    applyColorblindMode(savedColorblind);
    applyReducedMotion(savedReducedMotion);
  }, []);

  const applyColorblindMode = (enabled: boolean) => {
    const html = document.documentElement;
    enabled
      ? html.classList.add("colorblind")
      : html.classList.remove("colorblind");
  };

  const applyReducedMotion = (enabled: boolean) => {
    const html = document.documentElement;
    enabled
      ? html.classList.add("reduce-motion")
      : html.classList.remove("reduce-motion");
    window.dispatchEvent(
      new CustomEvent(REDUCED_MOTION_EVENT, {
        detail: { reducedMotion: enabled },
      }),
    );
  };

  const applyColorTheme = (color: string) => {
    if (color === "default")
      document.documentElement.removeAttribute("data-color");
    else document.documentElement.setAttribute("data-color", color);
  };

  const handleThemeCycle = () => {
    if (colorblind) {
      setColorblind(false);
      localStorage.setItem("colorblind", "false");
      applyColorblindMode(false);
      setTheme("light");
    } else if (resolvedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
      setColorblind(true);
      localStorage.setItem("colorblind", "true");
      applyColorblindMode(true);
      setPrimaryColor("default");
      localStorage.setItem("primaryColor", "default");
      applyColorTheme("default");
    }
  };

  const handleColorCycle = () => {
    const currentIndex = colorOptions.findIndex(
      (c) => c.value === primaryColor,
    );
    const nextIndex = (currentIndex + 1) % colorOptions.length;
    const nextColor = colorOptions[nextIndex].value;

    setPrimaryColor(nextColor);
    localStorage.setItem("primaryColor", nextColor);
    applyColorTheme(nextColor);
  };

  const toggleReducedMotion = () => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
    localStorage.setItem("reducedMotion", String(newValue));
    applyReducedMotion(newValue);
  };

  const handleLanguageCycle = () => {
    const currentIndex = LANGUAGES.findIndex((l) => l.code === locale);
    const nextIndex = (currentIndex + 1) % LANGUAGES.length;
    setLocale(LANGUAGES[nextIndex].code);
  };

  const currentThemeColor = React.useMemo(() => {
    if (primaryColor !== "default") {
      return (
        colorOptions.find((c) => c.value === primaryColor)?.color ||
        "currentColor"
      );
    }
    return resolvedTheme === "dark" ? "#ffffff" : "#000000";
  }, [primaryColor, resolvedTheme]);

  const toggleCircleColor = React.useMemo(() => {
    if (primaryColor !== "default") {
      return (
        colorOptions.find((c) => c.value === primaryColor)?.color || "#155dfc"
      );
    }
    return resolvedTheme === "dark" ? "#ffffff" : "#155dfc";
  }, [primaryColor, resolvedTheme]);

  if (!mounted) return null;

  const currentLang = LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0];

  return (
    <div
      className={cn(
        " flex items-center gap-4  justify-center w-full",
        className,
      )}
    >
      {/* 1. Theme Cycle */}
      <button
        type="button"
        onClick={handleThemeCycle}
        className="h-9 w-9 cursor-pointer flex items-center justify-center rounded-md hover:opacity-80 transition-opacity focus:outline-none"
      >
        {colorblind ? (
          <Eye
            className="h-5 w-5 transition-all"
            style={{ color: currentThemeColor }}
          />
        ) : (
          <>
            <Sun
              className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              style={{ color: currentThemeColor }}
            />
            <Moon
              className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              style={{ color: currentThemeColor }}
            />
          </>
        )}
      </button>

      {/* 2. Color Cycle */}
      <button
        type="button"
        onClick={handleColorCycle}
        className="h-9 w-9 cursor-pointer flex items-center justify-center rounded-md hover:opacity-80 transition-opacity focus:outline-none"
      >
        <Palette className="h-5 w-5" style={{ color: currentThemeColor }} />
      </button>

      {/* 3. Reduced Motion Cycle (Toggle) */}
      <button
        type="button"
        onClick={toggleReducedMotion}
        className="h-9 w-9 cursor-pointer flex items-center justify-center rounded-md hover:opacity-80 transition-opacity focus:outline-none"
      >
        <div className="relative inline-flex h-5 w-9 items-center rounded-full transition-colors bg-muted hover:bg-muted/80">
          <span
            className={`inline-block h-3.5 w-3.5 transform rounded-full transition-transform ${
              reducedMotion
                ? "translate-x-5 bg-muted-foreground"
                : "translate-x-1"
            }`}
            style={{
              backgroundColor: reducedMotion ? undefined : toggleCircleColor,
            }}
          />
        </div>
      </button>

      {/* 4. Language Cycle */}
      <button
        type="button"
        onClick={handleLanguageCycle}
        className="h-9 w-9 cursor-pointer flex items-center justify-center rounded-md hover:opacity-80 transition-opacity focus:outline-none shrink-0"
      >
        <span className="flex items-center justify-center w-6 h-6 rounded-full overflow-hidden border border-border/30">
          <img
            src={currentLang.img}
            alt={currentLang.country}
            className="w-full h-full object-cover"
          />
        </span>
      </button>
    </div>
  );
}
