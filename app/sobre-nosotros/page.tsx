import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4">
        <header className="py-8 text-center">
          <Navigation className="mb-8" currentPage="sobre-nosotros" />
        </header>

        <section className="mt-8">
          <h2 className="text-3xl font-semibold mb-8 text-center">Nuestra Historia</h2>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 w-full">
                <Image
                  src="/Artesanos en Tela y Tradición.png"
                  alt="Artesanos trabajando"
                  width={500}
                  height={400}
                  className="object-cover rounded-lg"
                />
            </div>
            <div className="md:w-1/2 w-full">
              <p className="mb-4">
                Nuestra historia comenzó hace más de tres décadas, cuando María, nuestra fundadora, decidió rescatar las
                técnicas artesanales que había aprendido de su abuela. Con un pequeño taller en su hogar y mucha pasión,
                empezó a crear piezas únicas que rápidamente captaron la atención de quienes valoraban el trabajo hecho
                a mano.
              </p>
              <p className="mb-4">
                Con el paso de los años, lo que comenzó como un proyecto personal se transformó en un emprendimiento
                familiar. Los hijos de María aprendieron las técnicas tradicionales y aportaron una visión
                contemporánea, fusionando lo ancestral con tendencias modernas, sin perder la esencia del trabajo
                artesanal.
              </p>
              <p className="mb-4">
                Hoy, nuestro taller se ha convertido en un espacio de creación donde cada pieza cuenta una historia.
                Trabajamos con materiales naturales y sostenibles, respetando el medio ambiente y manteniendo vivas las
                tradiciones que nos definen. Cada artesanía que sale de nuestras manos lleva consigo no solo belleza
                estética, sino también el legado cultural que nos enorgullece compartir con el mundo.
              </p>
              <p className="mb-4">
                Nos motiva saber que nuestras creaciones forman parte de los hogares de quienes, como nosotros, valoran
                lo auténtico y lo hecho con amor. Seguimos creciendo y evolucionando, pero siempre fieles a nuestra
                esencia: crear con las manos, el corazón y el alma.
              </p>
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
