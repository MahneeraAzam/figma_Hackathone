import Image from "next/image"
import { Heart, Search, ShoppingCart } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

interface Product {
  id: number
  name: string
  code: string
  price: number
  image: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Cantilever chair",
    code: "Y523201",
    price: 42.00,
    image: "/cart1..png"
  },
  {
    id: 2,
    name: "Cantilever chair",
    code: "Y523201",
    price: 42.00,
    image: "/cart2.png"
  },
  {
    id: 3,
    name: "Cantilever chair",
    code: "Y523201",
    price: 42.00,
    image: "/cart3.png"
  },
  {
    id: 4,
    name: "Cantilever chair",
    code: "Y523201",
    price: 42.00,
    image: "/cart4.png"
  },
  // Add more products as needed
]

export function FeaturedProducts() {
  return (
    <section className="container mx-auto px-4 py-16 ">
      <h2 className="text-4xl font-bold text-center text-[#1A0B5B] mb-12">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="group relative">
            <CardContent className="p-0">
              <div className="bg-[#F6F7FB] p-8">
                <div className="absolute top-4 left-4 space-y-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-white rounded-full hover:bg-[#2F1AC4] hover:text-white">
                    <ShoppingCart className="h-4 w-4" />
                  </button>
                  <button className="p-2 bg-white rounded-full hover:bg-[#2F1AC4] hover:text-white">
                    <Heart className="h-4 w-4" />
                  </button>
                  <button className="p-2 bg-white rounded-full hover:bg-[#2F1AC4] hover:text-white">
                    <Search className="h-4 w-4" />
                  </button>
                </div>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-[#151875]">{product.name}</h3>
                <div className="flex justify-center gap-2 mt-2">
                  <span className="w-3 h-3 rounded-full bg-[#05E6B7]" />
                  <span className="w-3 h-3 rounded-full bg-[#F701A8]" />
                  <span className="w-3 h-3 rounded-full bg-[#00009D]" />
                </div>
                <div className="mt-2">
                  <span className="text-sm text-[#151875]">Code - {product.code}</span>
                </div>
                <div className="mt-1">
                  <span className="text-sm text-[#151875]">${product.price.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}



