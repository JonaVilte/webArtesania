import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ProductosPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4">
        <header className="py-8 text-center">
          {/* Eliminado el título "Artesanía" */}
          <Navigation className="mb-8" currentPage="productos" />
        </header>

        <section className="mt-8">
          <h2 className="text-3xl font-semibold mb-8">Nuestros Productos</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link href={`/productos/${product.id}`} key={product.id} className="block">
                <div className="bg-[#ebe5c2] rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="p-4">
                    <Image
                      src={product.imageSrc || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-auto object-cover rounded-md"
                    />
                    <h3 className="mt-4 font-semibold text-lg">{product.name}</h3>
                    <p className="text-sm mt-1 line-clamp-2">{product.description}</p>
                    <div className="mt-3">
                      <p className="font-bold">${product.price.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

const products = [
  {
    id: "1",
    name: "Bordado Floral",
    description:
      "Bordado a mano con diseño floral en bastidor de madera. Ideal para decorar cualquier espacio de tu hogar.",
    price: 15000,
    imageSrc: "/Bordado floral en bastidor de madera.png",
  },
  {
    id: "2",
    name: "Jarrón de barro",
    description: "Jarrón de barro pintado a mano con diseños geométricos tradicionales. Cada pieza es única.",
    price: 27000,
    imageSrc: "/ChatGPT Image 10 abr 2025, 16_21_29.png",
  },
  {
    id: "3",
    name: "Cojín bordado",
    description: "Cojín con bordado artesanal de motivos naturales. Confeccionado con telas naturales.",
    price: 18500,
    imageSrc: "/Almohada decorativa con flores bordadas.png",
  },
  {
    id: "4",
    name: "Tapiz tejido",
    description: "Tapiz tejido a mano con lana natural y tintes vegetales. Diseño exclusivo.",
    price: 32000,
    imageSrc: "/Colgante de pared minimalista y terrenal.png",
  },
  {
    id: "5",
    name: "Cerámica decorativa",
    description: "Pieza de cerámica decorativa pintada a mano. Perfecta como centro de mesa.",
    price: 22500,
    imageSrc: "/Jarrón terracota con flor estilizada.png",
  },
  {
    id: "6",
    name: "Canasto tejido",
    description: "Canasto tejido con fibras naturales. Ideal para organizar y decorar tu hogar.",
    price: 19000,
    imageSrc: "/Cesta de flores vintage.png",
  },
  {
    id: "7",
    name: "Móvil de macramé",
    description: "Móvil de macramé con detalles en madera. Perfecto para habitaciones infantiles.",
    price: 16500,
    imageSrc: "/Móvil macramé con flor y luna.png",
  },
  {
    id: "8",
    name: "Plato decorativo",
    description: "Plato decorativo de cerámica con diseños pintados a mano. Pieza única.",
    price: 25000,
    imageSrc: "/Plato decorativo con flor estilizada.png",
  },
]
