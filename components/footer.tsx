import { Instagram, Mail, MessageSquare } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#504B38] text-[#f8f3d9] border-t border-[#504B38] mt-12 py-6 text-sm">

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <a
              href="https://www.instagram.com/labuenaArtesanas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-2 hover:text-[#0b8600] transition-colors"
            >
              <Instagram className="w-5 h-5 mr-2" />
              <span>labuenaArtesanas</span>
            </a>
            <a
              href="https://wa.me/5491199999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-2 hover:text-[#0b8600] transition-colors"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              <span>11 9999-9999</span>
            </a>
            <a href="mailto:artesa@gmail.com" className="flex items-center mb-2 hover:text-[#0b8600] transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              <span>artesa@gmail.com</span>
            </a>
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
