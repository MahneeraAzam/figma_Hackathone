import React from 'react';
import Image from 'next/image';


const FeatureCard = () => {
  return (
    <div className="relative w-full h-[579px] bg-[#F1F0FF] flex items-center justify-center">
      {/* Left Section */}
      <div className="relative w-[30%] flex justify-center">
        <div className="absolute w-[80%] h-[80%] bg-[#F5E1FC] rounded-full"></div>
        <Image
          src="/bluesofa.png"
          alt="Sofa"
          className="relative z-10 w-[80%]"
          width={509}
          height={550}
        />
      </div>

      {/* Right Section */}
      <div className="relative w-[50%]">
        <h2 className="text-[35px] leading-[1.32] font-semibold text-[#151875] font-[Josefin Sans]">
          Unique Features Of Latest & Trending Products
        </h2>

        <ul className="mt-6 space-y-4">
          <li className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-[#F52B70] mr-4"></div>
            <p className="text-[#ACABC3] text-[16px] font-medium leading-[1.32] font-[Lato]">
              All frames constructed with hardwood solids and laminates
            </p>
          </li>
          <li className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-[#2B2BF5] mr-4"></div>
            <p className="text-[#ACABC3] text-[16px] font-medium leading-[1.32] font-[Lato]">
              Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
            </p>
          </li>
          <li className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-[#2BF5CC] mr-4"></div>
            <p className="text-[#ACABC3] text-[16px] font-medium leading-[1.32] font-[Lato]">
              Arms, backs and seats are structurally reinforced
            </p>
          </li>
        </ul>

        <div className="mt-10">
          <h3 className="text-[#151875] text-[14px] font-semibold font-[Josefin Sans]">
            B&B Italian Sofa
          </h3>
          <p className="text-[#151875] text-[14px] font-normal font-[Lato]">
            $32.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
