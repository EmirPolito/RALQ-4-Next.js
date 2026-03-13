'use client'

import React from 'react'
import {HeroHeader} from '@/components/header'
import EarbudShowcase from '@/components/spatial-product-showcase'
import  Footer  from "@/components/footer";


const demo = () => {
  return (
    <div>
        <HeroHeader/>
        <EarbudShowcase/>
        {/* <Footer/> */}
    </div>
  )
}

export default demo