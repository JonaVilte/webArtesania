import type React from "react"
import type { Metadata } from "next"
import { Pacifico } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
})

export const metadata: Metadata = {
  title: "Artesanía - Productos Hechos a Mano",
  description: "Descubre nuestra colección de artesanías hechas a mano con amor y tradición",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={cn(pacifico.className, "bg-[#f8f3d9] text-[#504b38]")}>{children}</body>
    </html>
  )
}
