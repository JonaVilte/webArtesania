import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  // En una aplicación real, buscaríamos el producto por ID en una base de datos
  const product = products.find((p) => p.id === params.id) || products[0]

  return (
    <main className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4">
        <header className="py-8 text-center">
          <Navigation className="mb-8" currentPage="producto-detalle" />
        </header>

        <div className="mt-8 mb-4">
          <Link href="/productos" className="text-[#0b8600] hover:underline flex items-center">
            ← Volver a productos
          </Link>
        </div>

        <section className="mt-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="bg-[#ebe5c2] p-4 rounded-lg">
                <Image
                  src={product.imageSrc || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold">{product.name}</h2>
              <p className="text-2xl font-bold mt-2">${product.price.toLocaleString()}</p>

              <div className="mt-6">
                <h3 className="font-semibold text-lg mb-2">Descripción</h3>
                <p>{product.description}</p>
                <p className="mt-4">{product.longDescription}</p>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-lg mb-2">Características</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Hecho a mano</li>
                  <li>Material: {product.material}</li>
                  <li>Dimensiones: {product.dimensions}</li>
                  <li>Tiempo de elaboración: {product.elaborationTime}</li>
                </ul>
              </div>

              <div className="mt-8 space-y-4">
                <button className="w-full py-3 bg-[#00e558] text-white rounded-md font-medium hover:bg-[#0b8600] transition-colors">
                  Agregar al carrito
                </button>
                <button className="w-full py-3 border border-[#504b38] rounded-md font-medium hover:bg-[#ebe5c2] transition-colors">
                  Comprar ahora
                </button>
              </div>
            </div>
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
    description: "Bordado a mano con diseño floral en bastidor de madera.",
    longDescription:
      "Este hermoso bordado floral está elaborado completamente a mano utilizando técnicas tradicionales. Cada puntada es realizada con precisión y cuidado, creando un diseño único que añadirá calidez y personalidad a cualquier espacio de tu hogar.",
    price: 15000,
    imageSrc: "/Bordado floral en bastidor de madera.png",
    material: "Tela de algodón, hilos de algodón, bastidor de madera",
    dimensions: "20 cm de diámetro",
    elaborationTime: "15 horas",
  },
  {
    id: "2",
    name: "Jarrón de barro",
    description: "Jarrón de barro pintado a mano con diseños geométricos tradicionales.",
    longDescription:
      "Este jarrón de barro es una pieza única elaborada y pintada a mano siguiendo técnicas ancestrales. Los diseños geométricos están inspirados en motivos tradicionales que representan elementos de la naturaleza y la cultura local.",
    price: 27000,
    imageSrc: "/ChatGPT Image 10 abr 2025, 16_21_29.png",
    material: "Barro rojo, pigmentos naturales",
    dimensions: "25 cm de alto x 15 cm de diámetro",
    elaborationTime: "20 horas",
  },
  {
    id: "3",
    name: "Cojín bordado",
    description: "Cojín con bordado artesanal de motivos naturales.",
    longDescription:
      "Este cojín bordado a mano presenta hermosos motivos naturales inspirados en la flora local. Está confeccionado con telas naturales de alta calidad y los bordados están realizados con hilos de algodón en una paleta de colores cálidos y terrosos.",
    price: 18500,
    imageSrc: "/Almohada decorativa con flores bordadas.png",
    material: "Lino natural, hilos de algodón, relleno de fibra natural",
    dimensions: "40 x 40 cm",
    elaborationTime: "18 horas",
  },
  {
    id: "4",
    name: "Tapiz tejido",
    description: "Tapiz tejido a mano con lana natural y tintes vegetales.",
    longDescription:
      "Este tapiz tejido a mano es una obra de arte textil creada con lana natural teñida con tintes vegetales. El diseño exclusivo representa elementos de la naturaleza y está elaborado utilizando técnicas tradicionales de tejido transmitidas por generaciones.",
    price: 32000,
    imageSrc: "/Colgante de pared minimalista y terrenal.png",
    material: "Lana natural, tintes vegetales, estructura de madera",
    dimensions: "60 x 80 cm",
    elaborationTime: "25 horas",
  },
  {
    id: "5",
    name: "Cerámica decorativa",
    description: "Pieza de cerámica decorativa pintada a mano.",
    longDescription:
      "Esta pieza de cerámica decorativa está modelada y pintada a mano con diseños inspirados en la naturaleza. Perfecta como centro de mesa o elemento decorativo, cada pieza es única y refleja la dedicación y creatividad del artesano.",
    price: 22500,
    imageSrc: "/Jarrón terracota con flor estilizada.png",
    material: "Arcilla blanca, esmaltes cerámicos",
    dimensions: "18 cm de diámetro",
    elaborationTime: "12 horas",
  },
  {
    id: "6",
    name: "Canasto tejido",
    description: "Canasto tejido con fibras naturales.",
    longDescription:
      "Este canasto tejido está elaborado con fibras naturales recolectadas y procesadas de manera sostenible. Ideal para organizar y decorar tu hogar, combina funcionalidad y belleza artesanal en una pieza única.",
    price: 19000,
    imageSrc: "/Cesta de flores vintage.png",
    material: "Fibras naturales, tintes vegetales",
    dimensions: "30 cm de diámetro x 25 cm de alto",
    elaborationTime: "16 horas",
  },
  {
    id: "7",
    name: "Móvil de macramé",
    description: "Móvil de macramé con detalles en madera.",
    longDescription:
      "Este móvil de macramé está elaborado con cuerdas de algodón natural y detalles en madera. Perfecto para habitaciones infantiles o cualquier espacio que necesite un toque de calidez y textura. Cada nudo está realizado a mano con precisión y cuidado.",
    price: 16500,
    imageSrc: "/Móvil macramé con flor y luna.png",
    material: "Cuerda de algodón, madera de pino",
    dimensions: "40 cm de largo x 25 cm de ancho",
    elaborationTime: "14 horas",
  },
  {
    id: "8",
    name: "Plato decorativo",
    description: "Plato decorativo de cerámica con diseños pintados a mano.",
    longDescription:
      "Este plato decorativo de cerámica presenta diseños pintados a mano inspirados en motivos tradicionales. Cada pieza es única y refleja la habilidad y creatividad del artesano. Ideal para exhibir en estanterías o como centro de mesa.",
    price: 25000,
    imageSrc: "/Plato decorativo con flor estilizada.png",
    material: "Cerámica, esmaltes no tóxicos",
    dimensions: "28 cm de diámetro",
    elaborationTime: "10 horas",
  },
]
