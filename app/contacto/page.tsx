import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Instagram, Mail, MessageSquare } from "lucide-react"

export default function ContactoPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4">
        <header className="py-8 text-center">
          <h1 className="text-6xl font-bold text-[#b9b28a] artesania-title">Artesanía</h1>
          <Navigation className="mt-6" />
        </header>

        <section className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Contacto</h2>

          <div className="bg-[#ebe5c2] p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Información de contacto</h3>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#b9b28a] rounded-full flex items-center justify-center mr-3">
                    <Instagram className="w-6 h-6 text-[#f8f3d9]" />
                  </div>
                  <span>labuenaArtesanas</span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#b9b28a] rounded-full flex items-center justify-center mr-3">
                    <MessageSquare className="w-6 h-6 text-[#f8f3d9]" />
                  </div>
                  <span>11 9999-9999</span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#b9b28a] rounded-full flex items-center justify-center mr-3">
                    <Mail className="w-6 h-6 text-[#f8f3d9]" />
                  </div>
                  <span>artesa@gmail.com</span>
                </div>
                <p className="mt-4">Estamos disponibles de lunes a viernes de 9:00 a 18:00 hs.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Envíanos un mensaje</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="nombre" className="block mb-1 font-medium">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      className="w-full px-3 py-2 border border-[#b9b28a] rounded-md bg-[#f8f3d9] focus:outline-none focus:ring-2 focus:ring-[#00e558]"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-1 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-[#b9b28a] rounded-md bg-[#f8f3d9] focus:outline-none focus:ring-2 focus:ring-[#00e558]"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="mensaje" className="block mb-1 font-medium">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      rows={4}
                      className="w-full px-3 py-2 border border-[#b9b28a] rounded-md bg-[#f8f3d9] focus:outline-none focus:ring-2 focus:ring-[#00e558]"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#00e558] text-white rounded-md font-medium hover:bg-[#0b8600] transition-colors w-full"
                  >
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Preguntas frecuentes</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">¿Realizan envíos a todo el país?</h4>
                  <p className="text-sm mt-1">
                    Sí, realizamos envíos a todo el país a través de correo o empresas de logística.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">¿Cuánto demora la entrega?</h4>
                  <p className="text-sm mt-1">
                    El tiempo de entrega varía según la ubicación, generalmente entre 3 a 7 días hábiles.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">¿Hacen productos personalizados?</h4>
                  <p className="text-sm mt-1">
                    Sí, podemos crear piezas personalizadas según tus necesidades y preferencias. Contáctanos para
                    discutir los detalles.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">¿Cuáles son los métodos de pago aceptados?</h4>
                  <p className="text-sm mt-1">
                    Aceptamos transferencias bancarias, tarjetas de crédito/débito y efectivo en caso de retiro en
                    persona.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
