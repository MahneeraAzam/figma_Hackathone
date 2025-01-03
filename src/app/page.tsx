import { FeaturedProducts } from "@/components/feature-product"
import FurnitureStore from "@/components/furniturestore"
import FutureCard from "@/components/futurecard"
import { Hero } from "@/components/hero"
import NewsletterAndBlog from "@/components/latestBlog"
import ProductListing from "@/components/productlisting"


export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <main>
        <Hero />
        <FeaturedProducts />
        <ProductListing/>
        <FutureCard/>
        <FurnitureStore/>
        <NewsletterAndBlog/>
      </main>
    </div>
  )
}