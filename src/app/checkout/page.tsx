import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#F6F5FF] bg-opacity-50 py-8 mb-[326px]">
      <div className="container px-4 mx-auto">
        <h1 className="text-2xl font-josefin text-[#1D3178] mb-2">Hekto Demo</h1>
        <p className="text-sm text-[#1D3178] mb-8">Cart/ Information/ Shipping/ Payment</p>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2">
            <Card className="bg-[#F8F8FD] p-6">
              <div className="space-y-8">
                {/* Contact Information */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-josefin text-[#1D3178]">Contact Information</h2>
                    <p className="text-sm text-[#C1C8E1]">
                      Already have an account? <a href="#" className="text-[#C1C8E1]">Log in</a>
                    </p>
                  </div>
                  <Input 
                    type="email" 
                    placeholder="Email or mobile phone number"
                    className="border-[#BFC6E0] border-b-2 border-t-0 border-x-0 rounded-none bg-transparent"
                  />
                  <div className="flex items-center space-x-2 mt-4">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter" className="text-sm text-[#8A91AB]">
                      Keep me up to date on news and exclusive offers
                    </Label>
                  </div>
                </div>

                {/* Shipping Address */}
                <div>
                  <h2 className="text-lg font-josefin text-[#1D3178] mb-4">Shipping address</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <Input 
                      placeholder="First name (optional)"
                      className="border-[#BFC6E0] border-b-2 border-t-0 border-x-0 rounded-none bg-transparent"
                    />
                    <Input 
                      placeholder="Last name"
                      className="border-[#BFC6E0] border-b-2 border-t-0 border-x-0 rounded-none bg-transparent"
                    />
                    <Input 
                      placeholder="Address"
                      className="col-span-2 border-[#BFC6E0] border-b-2 border-t-0 border-x-0 rounded-none bg-transparent"
                    />
                    <Input 
                      placeholder="Apartment, suite, etc. (optional)"
                      className="col-span-2 border-[#BFC6E0] border-b-2 border-t-0 border-x-0 rounded-none bg-transparent"
                    />
                    <Input 
                      placeholder="City"
                      className="col-span-2 border-[#BFC6E0] border-b-2 border-t-0 border-x-0 rounded-none bg-transparent"
                    />
                    <Input 
                      placeholder="Country"
                      defaultValue="Bangladesh"
                      className="border-[#BFC6E0] border-b-2 border-t-0 border-x-0 rounded-none bg-transparent"
                    />
                    <Input 
                      placeholder="Postal code"
                      className="border-[#BFC6E0] border-b-2 border-t-0 border-x-0 rounded-none bg-transparent"
                    />
                  </div>
                </div>

                <Button className="bg-[#FB2E86] hover:bg-[#FB2E86]/90 text-white">
                  Continue Shipping
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Column - Cart Summary */}
          <div className="space-y-4">
            {/* Cart Items */}
            {Array.from({length: 5}).map((_, i: any ) => (
              <div key={i} className="flex gap-4 pb-4 border-b border-[#E1E1E4]">
                <div className="relative w-20 h-20 bg-gray-100 rounded-md">
                  <Image
                    src="/checkout1.png"
                    alt="Product image"
                    className="object-cover rounded-md"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-josefin text-sm">Ut diam consequat</h3>
                  <p className="text-xs text-[#A1A8C1]">Color: <span>Brown</span></p>
                  <p className="text-xs text-[#A1A8C1]">Size: <span>XL</span></p>
                </div>
                <p className="font-josefin text-sm text-[#15245E]">$32.00</p>
              </div>
            ))}

            {/* Order Summary */}
            <Card className="bg-[#F4F4FC] p-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p className="font-semibold text-[#1D3178]">Subtotals:</p>
                  <p className="text-[#15245E]">£219.00</p>
                </div>
                <Separator className="bg-[#E8E6F1]" />
                <div className="flex justify-between">
                  <p className="font-medium text-[#1D3178]">Totals:</p>
                  <p className="text-[#15245E]">£325.00</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#8A91AB]">
                  <Checkbox />
                  <span>Shipping & taxes calculated at checkout</span>
                </div>
                <Button className="w-full bg-[#19D16F] hover:bg-[#19D16F]/90">
                  Proceed To Checkout
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

