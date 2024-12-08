import { Heart, Search, ShoppingCart } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import Image from 'next/image'

const products = [
  { name: "Velvet Accent Chair", price: 42.00, originalPrice: 65.00, image: "/listingcard3.png" },
  { name: "Modern Yellow Chair", price: 69.00, originalPrice: 88.00, image: "/listingcard2.png", sale: true },
  { name: "White Shell Chair", price: 54.00, originalPrice: 79.00, image: "/cart1..png" },
  { name: "Minimalist Armchair", price: 37.00, originalPrice: 59.00, image: "/listingcard4.png" },
  { name: "Futuristic Black Chair", price: 85.00, originalPrice: 120.00, image: "/trendingpro4.png" },
  { name: "Beige Lounge Chair", price: 63.00, originalPrice: 95.00, image: "/listingcard6.png" }
]

export default function ProductListing() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Latest Products Section */}
      <div className="space-y-8">
        <h2 className="text-4xl font-josefin text-center text-[#151875]">Latest Products</h2>
        
        <Tabs defaultValue="new" className="w-full">
          <TabsList className="flex justify-center gap-8 border-none bg-transparent">
            <TabsTrigger 
              value="new" 
              className="text-lg data-[state=active]:text-[#FB2E86] data-[state=active]:border-b-2 data-[state=active]:border-[#FB2E86] bg-transparent"
            >
              New Arrival
            </TabsTrigger>
            <TabsTrigger 
              value="best" 
              className="text-lg data-[state=active]:text-[#FB2E86] data-[state=active]:border-b-2 data-[state=active]:border-[#FB2E86] bg-transparent"
            >
              Best Seller
            </TabsTrigger>
            <TabsTrigger 
              value="featured" 
              className="text-lg data-[state=active]:text-[#FB2E86] data-[state=active]:border-b-2 data-[state=active]:border-[#FB2E86] bg-transparent"
            >
              Featured
            </TabsTrigger>
            <TabsTrigger 
              value="special" 
              className="text-lg data-[state=active]:text-[#FB2E86] data-[state=active]:border-b-2 data-[state=active]:border-[#FB2E86] bg-transparent"
            >
              Special Offer
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product Cards */}
          {products.map((product, index) => (
            <Card key={index} className="group relative border-none">
              <div className="relative bg-[#F7F7F7] p-4 h-[350px] flex items-center justify-center">
                {product.sale && (
                  <div className="absolute top-4 left-4 bg-[#3F509E] text-white px-3 py-1 rotate-[-18deg] text-sm">
                    Sale
                  </div>
                )}
                <Image
                  src={product.image}
                  alt={product.name}
                  className="max-h-[250px] w-auto object-contain"
                  width={223}
                  height={229}
                />
                {/* Hover Actions */}
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-white rounded-full hover:bg-[#2F1AC4] hover:text-white transition-colors">
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                  <button className="p-2 bg-white rounded-full hover:bg-[#2F1AC4] hover:text-white transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="p-2 bg-white rounded-full hover:bg-[#2F1AC4] hover:text-white transition-colors">
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-[#151875] font-josefin text-lg">{product.name}</h3>
                <div className="flex gap-2 mt-1">
                  <span className="text-[#151875] font-josefin">${product.price.toFixed(2)}</span>
                  <span className="text-[#FB2448] line-through text-sm">${product.originalPrice.toFixed(2)}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* What Shopex Offer Section */}
      <div className="mt-20 space-y-8">
        <h2 className="text-4xl font-josefin text-center text-[#151875]">What Shopex Offer!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="p-6 text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-[#F5F6F8] rounded-full flex items-center justify-center">
                <ShoppingCart className="h-8 w-8 text-[#151875]" />
              </div>
              <h3 className="text-[#151875] font-josefin text-xl">24/7 Support</h3>
              <p className="text-[#1A0B5B] opacity-30 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

