import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'

export const CartBar = ({ subtotal, total }) => {
  const { lang } = useContext(LanguageContext);
  console.log(subtotal)
  return (
    <div className='flex flex-wrap gap-4 justify-center items-center my-4'>
      <div className='flex items-center justify-center min-w-[200px] font-medium text-[#3D3D3D] border border-[#ECECEC] p-4 rounded-md gap-12'>
        <span>{fetchWord('Discount', lang)}</span>
        <span>${(+subtotal - total)?.toFixed(2)}</span>
      </div>
      <div className='flex items-center justify-center min-w-[200px] font-medium text-[#3D3D3D] border border-[#ECECEC] p-4 rounded-md gap-12'>
        <span>{fetchWord('Delivery', lang)}</span>
        <span>${20}</span>
      </div>
      <div className='flex items-center justify-center min-w-[200px] font-medium text-[#3D3D3D] border border-[#ECECEC] p-4 rounded-md gap-12'>
        <span>{fetchWord('Subtotal', lang)}</span>
        <span>${(+subtotal + 20)?.toFixed(2)}</span>
      </div>
      <div className='flex items-center justify-center min-w-[200px] font-medium text-[#3D3D3D] border border-[#ECECEC] p-4 rounded-md gap-12'>
        <span>{fetchWord('Total', lang)}</span>
        <span>${(+total + 20)?.toFixed(2)}</span>
      </div>
    </div>
  )
}
