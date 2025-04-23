import { Instagram, Mail, MessageSquare } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-[#b9b28a] mt-12 py-6 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <div className="flex items-center mb-2">
              <Instagram className="w-5 h-5 mr-2" />
              <span>labuenaArtesanas</span>
            </div>
            <div className="flex items-center mb-2">
              <MessageSquare className="w-5 h-5 mr-2" />
              <span>11 9999-9999</span>
            </div>
            <div className="flex items-center mb-2">
              <Mail className="w-5 h-5 mr-2" />
              <span>artesa@gmail.com</span>
            </div>
          </div>
          <div className="text-right md:text-right">
            <p className="mb-1">© 2025 Artesanías - Artesanía</p>
            <p className="mb-1">
              <a href="#" className="underline hover:text-[#0b8600]">
                Términos y condiciones
              </a>{" "}
              |
              <a href="#" className="underline hover:text-[#0b8600]">
                {" "}
                Políticas de envío
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
