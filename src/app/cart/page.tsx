import React from 'react';
import Image from 'next/image';

const OrderCompleted = () => {
  return (
    <div className="relative w-screen h-[890px] bg-white mb-[84px]">
      {/* Top Banner */}
      <div className="absolute w-full h-[286px] top-0 bg-[#F6F5FF]"></div>

      {/* Main Content */}
      <div className="absolute w-[625px] h-[326px] top-[467px] left-[648px] flex flex-col items-center text-center">
        {/* Checkmark Circle */}
        <div className="relative bg-white rounded-full w-[65px] h-[65px] shadow-md flex justify-center items-center mb-4">
          <div className=" w-[46.08px] h-[36.91px] rounded-md">
            <Image src="/right tick.png" alt="Right Tick" width={46} height={36}></Image>
          </div>
        </div>

        {/* Heading */}
        <h2 className="font-[Josefin Sans] text-[36px] leading-[42px] text-[#101750]">
          Your Order Is Completed!
        </h2>

        {/* Description */}
        <p className="font-[Lato] text-[16px] leading-[30px] text-[#8D92A7] mt-4">
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
      <div className="absolute left-[415px] top-[505px] w-[94px] h-[94px] bg-[#395093] rounded-full">
      <Image src="/clock 1.png" alt="Decorative Element" width={94} height={94}></Image>
      </div>
      <div className="absolute right-[415px] bottom-[70px] w-[70px] h-[70px] rounded-full"> 
        <Image src="/calender.png" alt="Decorative Element" width={60} height={70}></Image>
      </div>
      
    
            {/* Brand Logos */}
     
  {/* <div className=" container mx-auto px-4 py-8">
  <div className="flex justify-center items-center gap-8 opacity-50">
    <Image src="/brandlogo.png" alt="Brand Logo" width={904} height={93} className="grayscale layout='fill" />
  </div>
</div> */}
  
    </div>

    
  );
};

export default OrderCompleted;



 
