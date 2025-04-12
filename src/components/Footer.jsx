import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='flex items-center  justify-between gap-4 py-10 mt-20'>
      <img src={ assets.logo} width={150} alt="" />
      <p className='flex-1 border-l border-gray-500 pl-4 text-sm text-gray-500 hidden md:block'>Copyright @BinaryDigit.dev | All rihgts reserverd</p>
      <div className='flex gap-2.5'>
        <img src={assets.facebook_icon} width={35} alt="" />
        <img src={assets.twitter_icon} width={35} alt="" />
        <img src={assets.instagram_icon} width={35} alt="" />
      </div>
    </div>
  )
}

export default Footer
