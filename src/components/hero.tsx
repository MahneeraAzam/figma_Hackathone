import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center mt-[122px] pl-[70px]">
            <Image
            src="/blacklamp.png"
            alt="Pink Shell Chair"
            width={387}
            height={387}
            className="relative z-10"
            />
           
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <span className="text-[#FB2E86] font-bold ">Best Furniture For Your Castle....</span>
          <h1 className="text-5xl font-bold leading-tight">
            New Furniture Collection Trends in 2020
          </h1>
          <p className="text-[#8A8FB9]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
          </p>
          <Button className="bg-[#FB2E86] hover:bg-[#FB2E86]/90">
            Shop Now
          </Button>
        </div>
        
        <div className="relative">
          <div className="absolute top-0 right-0 w-[651px] h-[651px] rounded-full bg-[#ECD2FA]/35" />
          <div className="absolute top-10 -left-14 w-[648px] h-[648px] rounded-full bg-[#ECD2FA]/35" />
          <div className="relative">
            <Image
              src="/pinksofa.png"
              alt="Pink Shell Chair"
              width={629}
              height={629}
              className="relative z-10"
            />
            </div>
            <div className="absolute top-8 right-0 bg-[#00C1FE] text-white p-4 rounded-lg transform rotate-12">
              <span className="text-3xl font-bold">50% off</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

