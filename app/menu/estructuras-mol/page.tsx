"use client";

import { AnimatedHeaderMenu } from "@/components/headerMenu";
// import { ContenidoMol } from "@/components/contenido-mol";
import FooterMenu from "@/components/footerMenu";

export default function EstructurasMol() {
  return (
<div className="flex flex-col min-h-screen">
  <AnimatedHeaderMenu />

      {/* <ContenidoMol /> */}

  

  <FooterMenu />
</div>

  );
}
