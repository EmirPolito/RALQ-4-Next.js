"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { UserButton } from "@clerk/nextjs";
import { Home, FlaskConical, Dna, LayoutGrid } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeControls } from "@/components/theme-controls";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navItems = [
  { name: "Inicio", href: "/menu", icon: Home },
  { name: "Instrumentos", href: "/menu/instrumentos", icon: FlaskConical },
  { name: "Moléculas", href: "/menu/moleculas", icon: Dna },
  { name: "Tabla periódica", href: "/menu/tabla-periodica", icon: LayoutGrid },
];

export function MenuSidebar() {
  const pathname = usePathname();

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-menu-lineas bg-menu-bg"
    >
      <SidebarHeader className="h-21 flex flex-row items-center px-4 pt-3.5 pb-2 group-data-[state=collapsed]:flex-col group-data-[state=collapsed]:px-2 group-data-[state=collapsed]:justify-start">
        <div className="w-8 h-8 shrink-0 group-data-[state=collapsed]:hidden" />
        <div className="flex-1 flex justify-center group-data-[state=collapsed]:hidden">
        <Link
          href="/menu"
          className="flex items-center justify-center"
        >

          {mounted ? (
            <img
              src={
                resolvedTheme === "dark"
                  ? "/logos/logo-blanco.png"
                  : "/logos/logo-verde.png"
              }
              alt="RALQ Logo"
              className="h-12 w-auto object-contain"
            />
          ) : (
            <div className="h-12" />
          )}
          </Link>
        </div>

        <SidebarTrigger className="w-8 h-8 text-menu-mostrador hover:bg-transparent cursor-pointer shrink-0 group-data-[state=collapsed]:mt-6" />






      </SidebarHeader>



      <SidebarContent className="py-4 px-2">
        <SidebarMenu className="gap-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  tooltip={item.name}
                  className={`h-18 px-5 transition-colors duration-200 hover:bg-menu-paginas-hover data-[active=true]:bg-menu-paginas-hover ${
                    isActive
                      ? "text-menu-paginas font-bold relative"
                      : "text-menu-paginas font-medium"
                  }`}
                >
                  <Link
                    href={item.href}
                    prefetch={true}
                    className="flex items-center gap-4"
                  >
                    {/* Indicador lateral vinculado a la variable Primary */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-r-full bg-menu-apartados group-data-[state=collapsed]:w-1" />
                    )}
                    <item.icon
                      className={`w-6 h-6 shrink-0 ${isActive ? "text-menu-apartados" : "text-menu-iconos"}`}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                    <span className="text-[15px]">{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-menu-lineas flex flex-col gap-5">
        {/* Controles de Animación/Color/Tema (escondidos cuando colapsa) */}
        <div className="w-full flex justify-center group-data-[state=collapsed]:hidden">
          <ThemeControls />
        </div>

        {/* Usuario */}
        <div className="flex items-center justify-center p-2 rounded-xl transition-colors cursor-pointer w-full">
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox:
                  "shadow-sm transition-transform",
              },
            }}
          />
        </div>


      </SidebarFooter>
    </Sidebar>
  );
}
