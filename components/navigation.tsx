import Link from "next/link"
import { cn } from "@/lib/utils"

interface NavigationProps {
  className?: string
}

export function Navigation({ className }: NavigationProps) {
  return (
    <nav className={cn("flex flex-wrap justify-center py-4", className)}>
      <Link
        href="/"
        className="px-4 py-2 rounded-md bg-[#ebe5c2] text-[#504b38] font-medium hover:bg-[#b9b28a] transition-colors transform -rotate-2 mx-2 my-2"
      >
        Inicio
      </Link>
      <Link
        href="/productos"
        className="px-4 py-2 rounded-md bg-[#ebe5c2] text-[#504b38] font-medium hover:bg-[#b9b28a] transition-colors transform rotate-1 mx-2 my-2 translate-y-1"
      >
        Productos
      </Link>
      <Link
        href="/sobre-nosotros"
        className="px-4 py-2 rounded-md bg-[#ebe5c2] text-[#504b38] font-medium hover:bg-[#b9b28a] transition-colors transform -rotate-1 mx-2 my-2 -translate-y-1"
      >
        Sobre Nosotros
      </Link>
      <Link
        href="/contacto"
        className="px-4 py-2 rounded-md bg-[#ebe5c2] text-[#504b38] font-medium hover:bg-[#b9b28a] transition-colors transform rotate-2 mx-2 my-2"
      >
        Contacto
      </Link>
    </nav>
  )
}
