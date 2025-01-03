import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Calendar, Clock, Mail, Settings } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function ContactUs() {
  return (
    <>
    
    <section>
        <div className='w-[1920px] h-[286] bg-[#F6F5FF] flex justify-center items-center'> 
            <h1 className='pt-[97px] pl-[375px] pr-[1355px] pb-[153px] text-[#101750] text-[36px] font-[Josefin Sans] from-neutral-300'>Contact Us

            <div className="text-center mt-2 gap-[10px] flex justify-start">
            <Link href="/" className="text-black text-base font-['Lato']">
              Home . 
            </Link>
            <Link href="/" className="text-black text-base font-['Lato']">
              Page .
            </Link>
            <Link href="#" className="text-[#FB2E86] text-base font-['Lato']">
            Contact Us
            </Link>
          </div>
            </h1>

        </div>


        <div className="bg-white min-h-screen pt-[110px]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-semibold text-[#151875] mb-4 ">Information About us</h2>
              <p className="text-[#8A8FB9] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-[#151875] mb-4">Contact Way</h2>
              <div className="grid sm:grid-cols-2 gap-6 ">
                {[
                  { icon: Mail, text: "Tel: 877-67-88-99" },
                  { icon: Settings, text: "E-Mail: shop@store.com" },
                  { icon: Calendar, text: "Support Forum" },
                  { icon: Clock, text: "20 Margaret st, London" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-full bg-blue-100">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="text-[#8A8FB9]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-[#151875] mb-4">Get In Touch</h2>
              <p className="text-[#8A8FB9] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name*" />
                <Input placeholder="Your E-mail" />
              </div>
              <Input placeholder="Subject*" />
              <Textarea placeholder="Type Your Message*" className="min-h-[200px]" />
              <Button className="bg-[#FB2E86] hover:bg-[#e01b73] text-white px-8">
                Send Mail
              </Button>
            </form>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0">
              {/* Decorative Circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[600px] h-[600px] border border-[#8A8FB9] rounded-full opacity-40" />
                <div className="absolute w-[575px] h-[575px] border border-[#8A8FB9] rounded-full opacity-40" />
                <div className="absolute w-[506px] h-[506px] border border-[#CBD5FC] rounded-full opacity-75" />
                <div className="absolute w-[399px] h-[399px] border border-[#CBD5FC] rounded-full opacity-75" />
              </div>

              {/* Decorative Dots */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-[#819FDE] rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            {/* Main Illustration */}
            <div className="relative flex items-center justify-center h-full">
              <Image
                src="/contactUs (2).png"
                alt="Customer service illustration"
                width={506}
                height={506}
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    </section>
    
    </>
  )
}

export default ContactUs