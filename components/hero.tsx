import React from 'react'

import Image from 'next/image'

import Category from '@/components/categorynav'
import MainSlider from '@/components/mainslider'
import Image1 from '@/public/1.png'
import Image2 from '@/public/2.png'
import Link from 'next/link'

function hero() {
  return (
    <section className='mb-[30px] bg-gray-900 px-20 pt-36 lg:pt-4'>
        <div className='container mx-auto'>
            <div className=' flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]'>
                {/* sidebar */}
                <div className=''>
                    <Category/>
                </div>

                {/* mainslider */}
                <div className=' w-full max-w-lg  lg:max-w-[734px] mx-auto'>
                    <MainSlider/>
                </div>

                {/* promo images */}
                <div className=' flex flex-col gap-y-[20px] w-3/5 max-w-lg max-auto h-[400px] '>
                    {/* promo 1 */}
                    <div className='grad bg-gray-900 border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700  flex-1 h-[100px] rounded-lg overflow-hidden relative p-6'>
                        <div className='flex flex-col max-w-[144px] h-full justify-center'>
                            <div className='text-[20px] uppercase font-medium leading-tight mb-4'>
                                save 35% all dslr cameras
                            </div>
                            <Link href='#' className=' uppercase text-accent'>
                                shop now!
                            </Link>
                        </div>
                        <Image
                            src={Image1}
                            alt='Picture of the author'
                            className=' absolute z-20 -top-2 -right-4'
                            width={150}
                            height={150}
                        />
                    </div>
                    {/* promo 2 */}
                    <div className='grad border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  flex-1 h-[250px]  overflow-hidden relative p-6'>
                        <div className='flex flex-col max-w-[144px] h-full justify-center'>
                            <div className='text-[20px] uppercase font-medium leading-tight mb-4'>
                                save 35% all dslr cameras
                            </div>
                            <Link href='#' className=' uppercase '>
                                shop now!
                            </Link>
                        </div>
                        <Image
                            src={Image2}
                            alt='Picture of the author'
                            className=' absolute z-20 -top-2 -right-4'
                            width={150}
                            height={150}
                        />
                    </div> 
                </div>
            </div>

        </div>


    </section>

  )
}

export default hero
