
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const OrderCompleted = () => {
  return (
    <div className="relative w-full min-h-screen bg-white mb-20 flex flex-col items-center">
      {/* Top Banner */}
      <div className='w-full bg-[#F6F5FF] flex flex-col justify-center items-start  py-12 px-6 text-center pl-[375px]'> 
        <h1 className='text-[#101750] text-[28px] md:text-[36px] font-[Josefin Sans] mb-2'>Order Completed</h1>
        <div className="flex justify-center items-center space-x-2 text-base font-[Lato]">
          <Link href="/" className="text-black">
            Home
          </Link>
          <span className="text-black">.</span>
          <Link href="/" className="text-black">
            Page
          </Link>
          <span className="text-black">.</span>
          <Link href="#" className="text-[#FB2E86]">
            Order Completed
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[625px] px-4 flex flex-col items-center text-center mt-20">
        {/* Checkmark Circle */}
        <div className="relative bg-white rounded-full w-16 h-16 shadow-md flex justify-center items-center mb-4">
          <Image src="/right tick.png" alt="Right Tick" width={46} height={36} />
        </div>

        {/* Heading */}
        <h2 className="font-[Josefin Sans] text-[28px] md:text-[36px] leading-[42px] text-[#101750]">
          Your Order Is Completed!
        </h2>

        {/* Description */}
        <p className="font-[Lato] text-[16px] leading-[30px] text-[#8D92A7] mt-4 px-4">
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. You will receive an email confirmation
          when your order is completed.
        </p>

        {/* Continue Shopping Button */}
        <button className="mt-6 bg-[#FF1788] text-white font-[Lato] text-[16px] font-semibold px-6 py-3 rounded">
          Continue Shopping
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-10 md:left-[415px] top-[70%] md:top-[505px] w-16 h-16 md:w-24 md:h-24 bg-[#395093] rounded-full flex items-center justify-center">
        <Image src="/clock 1.png" alt="Decorative Element" width={64} height={64} />
      </div>
      <div className="absolute right-10 md:right-[415px] bottom-10 md:bottom-[70px] w-14 h-14 md:w-20 md:h-20 flex items-center justify-center"> 
        <Image src="/calender.png" alt="Decorative Element" width={56} height={64} />
      </div>
    </div>
  );
};

export default OrderCompleted;


 
