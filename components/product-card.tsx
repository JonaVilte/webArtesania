import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  id: string
  name: string
  description: string
  price: number
  imageSrc: string
}

export function ProductCard({ id, name, description, price, imageSrc }: ProductCardProps) {
  return (
    <div className="bg-[#ebe5c2] rounded-md overflow-hidden shadow-md">
      <div className="p-4">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          width={300}
          height={300}
          className="w-full h-auto object-cover rounded-md"
        />
        <h3 className="mt-4 font-semibold text-lg">{name}</h3>
        <p className="text-sm mt-1 line-clamp-2">{description}</p>
        <div className="mt-3 flex justify-between items-center">
          <p className="font-bold">${price.toLocaleString()}</p>
          <Link
            href={`/productos/${id}`}
            className="px-3 py-1 bg-[#00e558] text-white rounded-md text-sm hover:bg-[#0b8600] transition-colors"
          >
            Ver más
          </Link>
        </div>
      </div>
    </div>
  )
}
