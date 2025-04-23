import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">

  <section className="relative w-full h-[500px]">
    <Image
      src="/ChatGPT Image 22 abr 2025, 00_10_07.png"
      alt="Artesanía hecha a mano"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
        Artesanía
      </h1>
    </div>
  </section>


  <div className="container mx-auto px-4">
    <header className="py-8 text-center">
      <Navigation className="mt-4" />
    </header>

    <section className="mt-12 flex flex-col md:flex-row gap-8 items-center">

      <div className="md:w-1/2">
        <h2 className="text-3xl font-semibold mb-4">
          Bienvenidos a nuestra tienda de artesanías
        </h2>
        <p className="mb-4">
          Somos un emprendimiento familiar dedicado a crear piezas únicas hechas a mano, preservando técnicas
          tradicionales y añadiendo un toque contemporáneo.
        </p>
        <p className="mb-6">
          Cada pieza que creamos cuenta una historia y lleva consigo el amor y dedicación que ponemos en nuestro
          trabajo artesanal.
        </p>

      </div>
    </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Productos destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-[#ebe5c2] rounded-md overflow-hidden shadow-md">
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
                  <div className="mt-3 flex justify-between items-center">
                    <p className="font-bold">${product.price.toLocaleString()}</p>
                    <Link
                      href={`/productos/${product.id}`}
                      className="px-3 py-1 bg-[#00e558] text-white rounded-md text-sm hover:bg-[#0b8600] transition-colors"
                    >
                      Ver más
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/productos"
              className="px-6 py-3 bg-[#b9b28a] text-[#504b38] rounded-md font-medium hover:bg-[#ebe5c2] transition-colors inline-block"
            >
              Ver todos los productos
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

const featuredProducts = [
  {
    id: "1",
    name: "Bordado Floral",
    description:
      "Bordado a mano con diseño floral en bastidor de madera. Ideal para decorar cualquier espacio de tu hogar.",
    price: 15000,
    imageSrc: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "2",
    name: "Jarrón de barro",
    description: "Jarrón de barro pintado a mano con diseños geométricos tradicionales. Cada pieza es única.",
    price: 27000,
    imageSrc: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "3",
    name: "Cojín bordado",
    description: "Cojín con bordado artesanal de motivos naturales. Confeccionado con telas naturales.",
    price: 18500,
    imageSrc: "/placeholder.svg?height=300&width=300",
  },
]
