'use client';

import React from 'react'
import Image from 'next/image'
import { techLinks } from '@/contants'
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className='md:mx-36 mx-2 md:mt-0 mt-7 md:flex items-center justify-between gap-8 h-screen'>
        <div>
            <p className='text-sm font-light text-iblack'>Hi, I'am Mohamed Ibrahim 👋</p>
            <h1 className='text-5xl font-bold leading-relaxed text-iblack'>Building <span className='text-iblue'>digital</span> products, brands and experiences</h1>
            <p className='text-sm font-normal text-iblack py-4 text-opacity-60 leading-relaxed'>I'm a digital product developer focusing on crafting software development and design systems for software, web, and mobile products.</p>
            <div className='md:flex items-center gap-8 mt-8 hidden'>
                {techLinks.map((link) => (
                    <Link href={link.href} key={link.key}><Image src={link.icon} alt={link.key} height={40} width={40} className='hover:bg-iblack hover:bg-opacity-5 hover:border-2 hover:border-iblack hover:border-opacity-5 rounded-full'/></Link>
                ))}
            </div>
        </div>
        <div className='md:pt-0 pt-5'>
            <iframe src="https://www.youtube.com/embed/PPh-DSrCj4Q?si=woqFvj8SgBrREHRp" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='md:h-[315px] h-[220px] md:w-[560px] w-full'/>
        </div>
    </div>
  )
}

export default HeroSection