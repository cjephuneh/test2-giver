import React from 'react'
import Hero from '@/components/hero'
import Products from '@/components/products'
import Download from '@/components/download'
import Featured from '@/components/category'
import Partners from '@/components/partners'
import Cta from '@/components/cta'



function page() {
  return (
    <div className=' h-full bg-gray-900'>
      <Hero/>
      <Products/>
      <Featured/>
      <Partners/>
      <Download/>
      <Cta/>

    </div>
  )
}

export default page
