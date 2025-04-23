import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4">
        <header className="py-8 text-center">
          <h1 className="text-6xl font-bold text-[#b9b28a] artesania-title">Artesanía</h1>
          <Navigation className="mt-6" />
        </header>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold mb-8 text-center">Nuestra Historia</h2>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="relative w-full aspect-square">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Artesanos trabajando"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat odio vel felis porttitor, ut
                vulputate ante sed. Fuero vitae in maximus venenatis vel consequatur adipiscing.
              </p>
              <p className="mb-4">
                Sed consequat odio vel felis porttitor, ut vulputate ante sed. Fuero vitae in maximus venenatis vel
                consequatur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="mb-4">
                Ut bibendum dolor sit amet, consectetur adipiscing elit. Sed consequat odio vel felis porttitor, ut
                vulputate ante sed. Fuero vitae in maximus venenatis vel consequatur adipiscing.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6">Nuestros Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#ebe5c2] p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Tradición</h4>
                <p>
                  Preservamos técnicas artesanales transmitidas por generaciones, honrando nuestras raíces culturales.
                </p>
              </div>
              <div className="bg-[#ebe5c2] p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Sostenibilidad</h4>
                <p>
                  Utilizamos materiales naturales y procesos respetuosos con el medio ambiente en todas nuestras
                  creaciones.
                </p>
              </div>
              <div className="bg-[#ebe5c2] p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Autenticidad</h4>
                <p>Cada pieza es única, hecha a mano con dedicación y amor, reflejando nuestra pasión por el arte.</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6">Nuestro Proceso</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-[#b9b28a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#f8f3d9]">1</span>
                </div>
                <h4 className="font-semibold mb-2">Diseño</h4>
                <p className="text-sm">Creamos bocetos y diseños inspirados en nuestra cultura y naturaleza.</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-[#b9b28a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#f8f3d9]">2</span>
                </div>
                <h4 className="font-semibold mb-2">Selección</h4>
                <p className="text-sm">Elegimos cuidadosamente materiales naturales y de alta calidad.</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-[#b9b28a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#f8f3d9]">3</span>
                </div>
                <h4 className="font-semibold mb-2">Creación</h4>
                <p className="text-sm">Elaboramos cada pieza a mano, dedicando tiempo y atención a los detalles.</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-[#b9b28a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#f8f3d9]">4</span>
                </div>
                <h4 className="font-semibold mb-2">Acabado</h4>
                <p className="text-sm">Damos los toques finales para asegurar la calidad y belleza de cada producto.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
