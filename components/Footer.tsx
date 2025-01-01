import React from 'react'
import Link from 'next/link'
import { socialLinks } from '@/contants'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='w-full py-6 md:px-12 px-2 bottom-0 fixed bg-iblack'>
        <div className='md:flex  items-center md:justify-between'>
            <h1 className='font-light text-xs text-iwhite hidden md:block'>Created by <Link href='/'><span className='text-iblue'>Mohamed Ibrahim</span></Link> || 2024 All rights reserved</h1>
            <div className='flex items-center md:gap-8 justify-evenly'>
                {socialLinks.map((link) => (
                    <Link href={link.href} key={link.key}><Image src={link.icon} alt={link.key} height={20} width={20}/></Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Footer