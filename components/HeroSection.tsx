'use client';

import React from 'react'
import Image from 'next/image'
import { techLinks } from '@/contants'
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className='md:mx-36 mx-2 md:flex items-center justify-between h-screen'>
        <div>
            <p className='text-sm font-light text-iblack'>Hi, I'am Mohamed Ibrahim 👋</p>
            <h1 className='text-5xl font-bold leading-relaxed text-iblack'>Building <span className='text-iblue'>digital</span> <br/> products, brands <br/> and experiences</h1>
            <div className='md:flex items-center gap-8 mt-6 hidden'>
                {techLinks.map((link) => (
                    <Link href={link.href} key={link.key}><Image src={link.icon} alt={link.key} height={50} width={50} className='hover:bg-iblack hover:bg-opacity-5 hover:border-2 hover:border-iblack hover:border-opacity-5 rounded-full'/></Link>
                ))}
            </div>
        </div>
        <div>
            <Image src='/images/tv.png' alt='hero' height={658} width={460} className='md:pt-0 pt-5' />
        </div>
    </div>
  )
}

export default HeroSection