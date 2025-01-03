import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { client } from "@/sanity/lib/client"

const trendingProducts = [
  { id: 1, name: "Cantilever chair", price: 26, oldPrice: 42, image: "/trendingpro1.png" },
  { id: 2, name: "Cantilever chair", price: 26, oldPrice: 42, image: "/trendingpro2.png" },
  { id: 3, name: "Cantilever chair", price: 26, oldPrice: 42, image: "/trendingpro3.png" },
  { id: 4, name: "Cantilever chair", price: 26, oldPrice: 42, image: "/trendingpro4.png" },
]

const promotionalItems = [
  { id: 1, title: "23% off in all products", buttonText: "Shop Now", image: "/trendingpro5.png", bgColor: "bg-[#FFF6FB]" },
  { id: 2, title: "23% off in all products", buttonText: "View Collection", image: "/trendingpro6.png", bgColor: "bg-[#EEEFFB]" },
]

const topCategories = [
  { id: 1, name: "Mini LCW Chair", price: 56, image: "/card1.png" },
  { id: 2, name: "Mini LCW Chair", price: 56, image: "/cart1..png" },
  { id: 3, name: "Mini LCW Chair", price: 56, image: "/trendingpro1.png" },
  { id: 4, name: "Mini LCW Chair", price: 56, image: "/card1.png" },
]


export default async function FurnitureStore() {

const res = await client.fetch(`*[_type == 'landingPage'][0].sections[4]{
  'trendingProductsCards': trendingProductsCards[]{
    'trendingProductsImage': trendingProductsImage.asset->url,
    'trendingProductsOriginalPrice': trendingProductsOriginalPrice,
    'trendingProductsPrice': trendingProductsPrice,
    'trendingProductsName': trendingProductsName
  }
}`);

const res1 = await client.fetch(`*[_type == 'landingPage'][0].sections[5]{
  'topCategoriesCards': topCategoriesCards[]{
    'topCategoriesPrice': topCategoriesPrice,
    'topCategoriesName': topCategoriesName,
    'topCategoriesImage': topCategoriesImage.asset->url
  }
}`);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Trending Products Section */}
      <h2 className="text-center text-4xl font-josefin text-[#151875] mb-8">Trending Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {(res.trendingProductsCards).map((product: any , index: any ) => (
          <Card key={index} className="bg-white shadow-lg">
            <div className="p-4">
              <div className="bg-[#F5F6F8] rounded-lg p-4 mb-4">
                <Image
                  src={product.trendingProductsImage}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
              <div className="text-center">
                <h3 className="text-[#151875] font-bold mb-2">{product.trendingProductsName}</h3>
                <div className="flex justify-center gap-4">
                  <span className="text-[#151875]">${product.trendingProductsPrice}.00</span>
                  <span className="text-[#151875] opacity-30 line-through">${product.trendingProductsOriginalPrice}.00</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Promotional Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {promotionalItems.map((item) => (
          <Card key={item.id} className={`${item.bgColor} p-8`}>
            <div>
              <h3 className="text-2xl font-semibold text-[#151875] mb-4">{item.title}</h3>
              <Button variant="link" className="text-[#FB2E86] p-0">
                {item.buttonText}
              </Button>
            </div>
            <Image src={item.image} alt="Promotional item" width={200} height={200} className="ml-auto" />
          </Card>
        ))}
      </div>

      {/* Discount Item Section */}
      <h2 className="text-center text-4xl font-josefin text-[#151875] mb-8">Discount Item</h2>
      <div className="flex items-center justify-center gap-8 mt-[33px]">
           
           <Link href="/pages" className="text-[#FB2E86] underline border-#FB2E86 ">
           Wood Chair
           </Link>
           <Link href="/products" className="text-[#0D0E43]">
           Plastic Chair
           </Link>
           <Link href="/blog" className="text-[#0D0E43]">
           Sofa Colletion
           </Link>
        
         </div>
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="md:w-1/2">
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold text-[#151875]">20% Discount Of All Products</h3>
            <h4 className="text-xl text-[#FB2E86]">Eams Sofa Compact</h4>
            <p className="text-[#B7BACB]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum
              condimentum.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#7569B2]" />
                <span className="text-[#B8B8DC]">Material expose like metals</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#7569B2]" />
                <span className="text-[#B8B8DC]">Clear lines and geomatric figures</span>
              </div>
            </div>
            <Button className="bg-[#FB2E86] text-white hover:bg-[#FB2E86]/90">Shop Now</Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-[#FCECF1] rounded-full" />
            <Image
              src="/discountsofa.png"
              alt="Discount sofa"
              width={699}
              height={597}
              className="relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Top Categories */}
      <h2 className="text-center text-4xl font-josefin text-[#151875] mb-8">Top Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {(res1.topCategoriesCards).map((category: any, index: any) => (
          <Card key={index}>
            <div className="p-4">
              <div className="bg-[#F6F7FB] rounded-full p-4 mb-4">
                <Image
                  src={category.topCategoriesImage}
                  alt={category.name}
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
              <div className="text-center space-y-2">
                <Button variant="secondary" className="bg-[#08D15F] text-white hover:bg-[#08D15F]/90">
                  View Shop
                </Button>
                <div className="flex justify-center gap-4 text-[#151875]">
              <span>
              {category.topCategoriesName}
              </span>
                </div>
                <p className="text-[#151875]">${category.topCategoriesPrice}.00</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2">
        {[1, 2, 3].map((dot) => (
          <div
            key={dot}
            className={`w-2.5 h-2.5 transform rotate-45 ${
              dot === 1 ? "bg-[#FB2E86]" : "border border-[#FB2E86]"
            }`}
          />
        ))}
      </div>
    </div>
  )
}



