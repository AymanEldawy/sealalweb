import Image from 'next/image'
import React from 'react'
import { FlashSaleTimer } from './FlashSaleTimer/FlashSaleTimer'

export const FlashSaleBanner = () => {
  return (
    <div className="-translate-y-32">
      <div className='relative h-[350px] rounded-xl overflow-hidden'>
        <Image src="/images/flash-banner.png" alt="Flash sale" height={300} width={1200} className='absolute top-0 left-0 h-full w-full object-cover z-[1]' />
        <div className='bg-[#094E9950] absolute top-0 left-0 h-full w-full z-[2]' />
        <FlashSaleTimer />
      </div>

    </div>
  )
}
