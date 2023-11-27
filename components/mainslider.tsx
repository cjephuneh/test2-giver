import React from 'react';
import Image from 'next/image';
import Image4 from '@/public/4.png';

function MainSlider() {
  return (
    <div className="mx-auto max-w-[540px] xl:max-w-[1410px] h-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  flex items-center justify-center overflow-hidden">
      <div className='flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12 space-x-4'>
        <div className='lg:w-1/2 text-left space-y-4'>
          <span className='text-gray-300 text-sm font-semibold'>SPECIAL OFFER</span>
          <h2 className='text-white uppercase mb-2 text-4xl font-bold'>
            Save 20% on your first order
          </h2>
          <button className='bg-blue-700 text-black py-3 px-6 rounded-lg uppercase font-semibold hover:bg-yellow-500 transition-colors'>
            Shop Now
          </button>
        </div>
        <div className='mt-4 lg:mt-0'>
          <Image src={Image4} alt='Accessory' width={200} height={200} />
        </div>
      </div>
    </div>
  )
}

export default MainSlider;
