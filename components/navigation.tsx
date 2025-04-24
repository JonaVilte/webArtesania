import Link from "next/link"
import { cn } from "@/lib/utils"

interface NavigationProps {
  className?: string
  currentPage?: string
}

export function Navigation({ className, currentPage = "" }: NavigationProps) {
  return (
<nav className={cn("flex flex-col items-start space-y-2 md:flex-row md:justify-center md:space-y-0 md:space-x-4 py-4", className)}>
  <Link
    href="/"
    className="px-4 py-2 rounded-md bg-[#B9B28A] text-[#504b38] font-medium hover:bg-[#b9b28a] transition-transform md:transition-none translate-x-2 md:translate-x-0"
  >
    Inicio
  </Link>
  {currentPage !== "productos" && (
    <Link
      href="/productos"
      className="px-4 py-2 rounded-md bg-[#B9B28A] text-[#504b38] font-medium hover:bg-[#b9b28a] transition-transform md:transition-none md:translate-x-0"
    >
      Productos
    </Link>
  )}
  {currentPage !== "sobre-nosotros" && (
    <Link
      href="/sobre-nosotros"
      className="px-4 py-2 rounded-md bg-[#B9B28A] text-[#504b38] font-medium hover:bg-[#b9b28a] transition-transform md:transition-none translate-x-5 md:translate-x-0"
    >
      Sobre Nosotros
    </Link>
  )}
  {currentPage !== "contacto" && (
    <Link
      href="/contacto"
      className="px-4 py-2 rounded-md bg-[#B9B28A] text-[#504b38] font-medium hover:bg-[#b9b28a] transition-transform md:transition-none md:translate-x-0"
    >
      Contacto
    </Link>
  )}
</nav>

  )
}
