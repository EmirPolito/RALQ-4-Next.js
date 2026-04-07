"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useTheme } from "next-themes";

const FooterMenu = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.footer
      className="bg-muted/30 border-t border-border"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* LOGO + DESCRIPCIÓN */}
          <motion.div variants={itemVariants}>
            <Link
              href="/menu"
              className="relative block transition-all duration-200"
              style={{
                animation:
                  "slideInLeft 0.8s cubic-bezier(0.34,1.56,0.64,1) both",
              }}
            >
              {/* CONTENEDOR RESPONSIVE PARA EL LOGO */}
              <div className="flex items-center">
                {mounted ? (
                  <img
                    src={
                      resolvedTheme === "dark"
                        ? "/modo-oscuro-removebg-preview.png"
                        : "/modo-claro.png"
                    }
                    alt="Logo"
                    className="h-10 w-auto object-contain"
                  />
                ) : (
                  <div className="h-20 w-20" />
                )}
              </div>
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed mt-2">
              Plataforma educativa que enseña química mediante modelos 3D y
              experiencias en Realidad Aumentada.
            </p>

            {/* Redes sociales */}
            <div className="mt-5 flex gap-4">
              <a
                className="text-[var(--primary-4)] hover:text-[var(--primary-2)] transition"
                href="https://www.facebook.com/profile.php?id=61563746413453"
              >
                <svg
                  className="w-5.5 h-5.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.69v-3.622h3.13V8.414c0-3.1 1.893-4.788 4.659-4.788c1.325 0 2.464.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a
                className="text-[var(--primary-4)] hover:text-[var(--primary-2)] transition"
                href="https://www.instagram.com/ralq.utsv?igsh=Z256dmRoOXY3ZDg2"
              >
                <svg
                  className="w-5.5 h-5.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4 1a9.09 9.09 0 01-2.88 1.1 4.52 4.52 0 00-7.72 4.13A12.84 12.84 0 013 2.15A4.52 4.52 0 004.6 9.72a4.51 4.51 0 01-2.05-.57v.06a4.52 4.52 0 003.63 4.43a4.52 4.52 0 01-2.04.08a4.52 4.52 0 004.22 3.14A9.06 9.06 0 012 19.54a12.79 12.79 0 006.92 2.03c8.3 0 12.85-6.87 12.85-12.85c0-.2-.01-.42-.02-.63A9.2 9.2 0 0023 3z" />
                </svg>
              </a>

              <a
                className="text-[var(--primary-4)] hover:text-[var(--primary-2)] transition"
                href="https://chat.whatsapp.com/HGGxXfwclFBEQBHr2clRLm"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M16.003 2.667c-7.363 0-13.333 5.97-13.333 13.333c0 2.353.613 4.647 1.773 6.667L2.667 29.333l7.01-1.733c1.943 1.06 4.14 1.633 6.327 1.633h.001c7.363 0 13.333-5.97 13.333-13.333c0-3.556-1.387-6.897-3.907-9.417c-2.52-2.52-5.86-3.916-9.428-3.916zm7.727 19.733c-.327.92-1.88 1.773-2.607 1.88c-.667.1-1.527.14-2.467-.153c-.567-.18-1.293-.42-2.233-.82c-3.927-1.707-6.48-5.693-6.68-5.953c-.2-.267-1.587-2.113-1.587-4.027c0-1.913 1-2.853 1.353-3.247c.353-.393.78-.493 1.04-.493c.26 0 .52.003.747.013c.24.13.56-.087.873.667c.327.787 1.113 2.72 1.213 2.92c.1.2.167.447.033.713c-.127.273-.193.447-.38.687c-.193.233-.407.52-.58.7c-.193.193-.393.407-.167.8c.227.393 1.007 1.653 2.16 2.673c1.487 1.287 2.72 1.693 3.113 1.867c.393.173.62.147.853-.087c.233-.233.98-1.14 1.24-1.527c.26-.387.52-.327.873-.193c.353.133 2.227 1.053 2.613 1.247c.387.193.647.287.747.447c.1.16.1.927-.227 1.847z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Fundadores */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-foreground mb-6">
              Fundadores
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/productos"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Emir Polito Guevara
                </Link>
              </li>
              <li>
                <Link
                  href="/productos"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Irving Esteban Molina Méndez
                </Link>
              </li>
              <li>
                <Link
                  href="/productos"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Cristian Daniel Barraza Hernández
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Empresa */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-foreground mb-6">
              Empresa
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/ayuda"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Ayuda
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Sobre nosotros
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Recursos */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-foreground mb-6">
              Recursos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Documentación
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Línea inferior */}
        <motion.div
          className="mt-12 pt-8 border-t border-border"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 RALQ. Todos los derechos reservados.
            </p>

            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/Ckokies"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Ckokies
              </Link>
              <Link
                href="/Privacidad"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Privacidad
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default FooterMenu;
