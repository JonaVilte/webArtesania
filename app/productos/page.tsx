import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"

export default function ProductosPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4">
        <header className="py-8 text-center">
          <h1 className="text-6xl font-bold text-[#b9b28a] artesania-title">Artesanía</h1>
          <Navigation className="mt-6" />
        </header>

        <section className="mt-8">
          <h2 className="text-3xl font-semibold mb-8">Nuestros Productos</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageSrc={product.imageSrc}
              />
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
  {
    id: "4",
    name: "Tapiz tejido",
    description: "Tapiz tejido a mano con lana natural y tintes vegetales. Diseño exclusivo.",
    price: 32000,
    imageSrc: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "5",
    name: "Cerámica decorativa",
    description: "Pieza de cerámica decorativa pintada a mano. Perfecta como centro de mesa.",
    price: 22500,
    imageSrc: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "6",
    name: "Canasto tejido",
    description: "Canasto tejido con fibras naturales. Ideal para organizar y decorar tu hogar.",
    price: 19000,
    imageSrc: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "7",
    name: "Móvil de macramé",
    description: "Móvil de macramé con detalles en madera. Perfecto para habitaciones infantiles.",
    price: 16500,
    imageSrc: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "8",
    name: "Plato decorativo",
    description: "Plato decorativo de cerámica con diseños pintados a mano. Pieza única.",
    price: 25000,
    imageSrc: "/placeholder.svg?height=300&width=300",
  },
]
