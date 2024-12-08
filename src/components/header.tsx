import { Mail, Phone, ChevronDown, User, Heart, ShoppingCart, Search } from 'lucide-react'
import Link from "next/link"

export function Header() {
  return (
    <header>
      <div className="w-full bg-[#7E33E0] text-white">
        <div className="container mx-auto px-4 h-11 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>mhhasanul@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(12345)67890</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              English
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2">
              USD
              <ChevronDown className="h-4 w-4" />
            </div>
            <Link href="/login" className="flex items-center gap-2">
              Login
              <User className="h-4 w-4" />
            </Link>
            <Link href="/wishlist" className="flex items-center gap-2">
              Wishlist
              <Heart className="h-4 w-4" />
            </Link>
            <Link href="/cart">
              <ShoppingCart className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-[#0D0E43] text-3xl font-bold">
            Hekto
          </Link>
          <nav className="flex items-center gap-8">
            <Link href="/" className="text-[#FB2E86]">
              Home
            </Link>
            <Link href="/pages" className="text-[#0D0E43]">
              Pages
            </Link>
            <Link href="/products" className="text-[#0D0E43]">
              Products
            </Link>
            <Link href="/blog" className="text-[#0D0E43]">
              Blog
            </Link>
            <Link href="/shop" className="text-[#0D0E43]">
              Shop
            </Link>
            <Link href="/contact" className="text-[#0D0E43]">
              Contact
            </Link>
          </nav>
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="pl-4 pr-10 py-2 border-2 border-[#E7E6EF] rounded"
            />
            <button className="absolute right-0 top-0 bottom-0 px-3 bg-[#FB2E86] rounded-r">
              <Search className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

