"use client";
import Link from "next/link";
import { Logo } from "@/components/logo";


export default function Footer() {
  return (
    <footer className="py-20 px-4 md:px-6 z-50 bg-background border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-11">
            <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
              {/* <div className="h-6 w-6 bg-neutral-100 border-neutral-300 border dark:bg-white rounded-md flex items-center justify-center p-1">
              </div> */}
              <span className=" font-bold lg:inline-block">
                {/* Logo claro */}
                <img
                  src="/logos/logo-verde.png"
                  alt="RALQ logo"
                  className="h-10 w-auto dark:hidden"
                />

                {/* Logo oscuro */}
                <img
                  src="/logos/logo-blanco.png"
                  alt="RALQ logo"
                  className="hidden h-10 w-auto dark:block"
                />
              </span>
            </Link>

            <h1 className="dark:text-gray-300 mt-2">
              Hecho por{" "}
              <span className="dark:text-[#039ee4] gap-2">
                <Link className="underline" href="https://x.com/arihantCodes">
                  @emirpolito
                </Link>
                <span>{"  "}</span>
                <Link
                  href="https://linkedin.com/in/itzamanjain"
                  className="underline"
                >
                  @irvingstbn
                </Link>
                <span>{" & "}</span>

                <Link
                  href="https://linkedin.com/in/itzamanjain"
                  className="underline"
                >
                  @cristiandnl
                </Link>
              </span>
            </h1>

            <p className="text-sm dark:text-gray-400 mt-5">
              © {new Date().getFullYear()} RALQ. Todos los derechos reservados.
            </p>



          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Paginas</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/docs"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blocks"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link
                    href="/colors"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>



            <div>
              <h3 className="font-semibold mb-4">Redes</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://www.facebook.com/profile.php?id=61563746413453"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/ralq.utsv?igsh=Z256dmRoOXY3ZDg2"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/arihantcodes"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    Linkedln
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    Politica de privacidad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tos"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    Terminos y servicios
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" w-full flex mt-5 items-center justify-center">
          <h1 className="text-center text-3xl md:text-5xl lg:text-[15rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 select-none">
            RALQ
          </h1>
        </div>
      </div>
    </footer>
  );
}
