import { cn } from "../lib/utils";
import Image from "next/image";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center -translate-y-1.5", className)}>
      {/* Logo claro */}
      <img
        src="/logos/ralq-verde.png"
        alt="RALQ logo"
        className="h-15 w-auto dark:hidden"
      />

      {/* Logo oscuro */}
      <img
        src="/logos/ralq-blanco.png"
        alt="RALQ logo"
        className="hidden h-15 w-auto dark:block"
      />
    </div>
  );
};
