import React from 'react'
import { Button } from './ui/button'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Input } from './ui/input'

function footer() {
  return (
    <>
     {/* Footer */}
     <footer className="bg-[#EEEFFB] pt-16 pb-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {/* Column 1 */}
            <div>
              <h3 className="text-4xl font-josefin mb-6">Hekto</h3>
              <div className="flex gap-2 mb-4">
                <Input 
                  placeholder="Enter Email Address"
                  className="bg-white/45"
                />
                <Button className="bg-[#FB2E86] hover:bg-[#FB2E86]/90">
                  Sign Up
                </Button>
              </div>
              <p className="text-[#8A8FB9]">Contact Info</p>
              <p className="text-[#8A8FB9]">17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-xl font-josefin mb-4">Categories</h4>
              <ul className="space-y-2 text-[#8A8FB9]">
                <li>Laptops & Computers</li>
                <li>Cameras & Photography</li>
                <li>Smart Phones & Tablets</li>
                <li>Video Games & Consoles</li>
                <li>Waterproof Headphones</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-xl font-josefin mb-4">Customer Care</h4>
              <ul className="space-y-2 text-[#8A8FB9]">
                <li>My Account</li>
                <li>Discount</li>
                <li>Returns</li>
                <li>Orders History</li>
                <li>Order Tracking</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="text-xl font-josefin mb-4">Pages</h4>
              <ul className="space-y-2 text-[#8A8FB9]">
                <li>Blog</li>
                <li>Browse the Shop</li>
                <li>Category</li>
                <li>Pre-Built Pages</li>
                <li>Visual Composer Elements</li>
                <li>WooCommerce Pages</li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="bg-[#E7E4F8] py-4 mt-8 -mx-4 px-4">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
              <p className="text-[#9DA0AE]">©Webecy - All Rights Reserved</p>
              <div className="flex gap-4">
                <Button size="icon" variant="ghost" className="bg-[#151875] text-white hover:bg-[#151875]/90">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="ghost" className="bg-[#151875] text-white hover:bg-[#151875]/90">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="ghost" className="bg-[#151875] text-white hover:bg-[#151875]/90">
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default footer