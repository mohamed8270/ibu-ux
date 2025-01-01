'use client';

import { navLinks } from '@/contants'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  return (
    <header className='w-full sticky top-0 md:fixed bg-iwhite'>
        <nav className='py-4 md:px-12 px-2 flex items-center justify-between'>
            <div className='flex items-center gap-20'>
                <h1 className='text-md font-bold text-iblack hover:text-opacity-100 cursor-pointer tracking-wider'>ibu <span className='text-iblue'>ux</span></h1>
                <div className='md:flex hidden items-center gap-16'>
                {navLinks.map((link) => (
                    <Link href={link.href} key={link.key} className='flex text-iblack items-center font-normal text-xs hover:text-iblue'>
                        {link.label}
                    </Link>
                ))}
                </div>
            </div>
            <div className='flex items-center gap-8'>
                <Link href='/'><Image src='./icons/light-theme-icon.svg' alt='githut_icon' className='hidden md:block' height={20} width={20} /></Link>
                <Link href='/'><Image src='./icons/github-icon.svg' alt='githut_icon' className='hidden md:block' height={20} width={20} /></Link>
                <button className='h-12 w-32 bg-iblue text-sm font-medium text-iwhite hover:bg-opacity-90 hover:border-[2px] hover:border-iblue'>Latest Courses</button>
            </div>
        </nav>
    </header>
  )
}

export default NavBar