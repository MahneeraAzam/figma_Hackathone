'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import Image from 'next/image'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your login logic here
  }

  return (
    <div className="min-h-screen bg-[#F6F5FF]">
      <div className="container mx-auto px-4">
        <div className="pt-8 pb-6">
          <h1 className="text-[36px] text-[#101750] text-center flex justify-start font-['Josefin_Sans']">My Account</h1>
          <div className="text-center mt-2 gap-[10px] flex justify-start">
            <Link href="/" className="text-black text-base font-['Lato']">
              Home . 
            </Link>
            <Link href="/" className="text-black text-base font-['Lato']">
              Page .
            </Link>
            <Link href="#" className="text-[#FB2E86] text-base font-['Lato']">
              My Account
            </Link>
          </div>
        </div>

        <div className="max-w-[544px] mx-auto">
          <Card className="shadow-[0px_0px_25px_10px_#F8F8FB] border-none">
            <CardHeader>
              <CardTitle className="text-[32px] text-center font-['Josefin_Sans']">
                Login
              </CardTitle>
              <p className="text-[#9096B2] text-center text-[17px] font-['Lato']">
                Please login using account detail bellow.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-[52px] border-[#C2C5E1] text-[#9096B2] font-['Lato'] text-base"
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-[52px] border-[#C2C5E1] text-[#9096B2] font-['Lato'] text-base"
                  />
                </div>

                <div className="text-right">
                  <Link 
                    href="/forgot-password"
                    className="text-[#9096B2] text-[17px] font-['Lato'] hover:text-[#FB2E86]"
                  >
                    Forgot your password?
                  </Link>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-[47px] bg-[#FB2E86] hover:bg-[#FB2E86]/90 font-['Lato'] font-bold text-[17px]"
                >
                  Sign In
                </Button>

                <div className="text-center">
                  <p className="text-[#9096B2] text-[17px] font-['Lato']">
                    Don&apos;t have an Account?
                    <Link href="/register" className="hover:text-[#FB2E86] ml-1">
                      Create account
                    </Link>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-16">
            <div className="grid grid-cols-5 gap-4 items-center justify-items-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="opacity-50 hover:opacity-100 transition-opacity">
                  <Image
                    src={`/placeholder.svg?height=50&width=120`}
                    alt={`Brand logo ${i}`}
                    width={120}
                    height={50}
                    className="h-[50px] w-[120px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

