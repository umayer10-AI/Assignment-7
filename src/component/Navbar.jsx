"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { ImStatsDots } from 'react-icons/im';
import { RiTimeLine } from 'react-icons/ri';

const Navbar = () => {
    const p = usePathname()
    return (
        <div className='flex justify-between flex-col bg-white lg:flex-row border-b border-b-gray-300 gap-3 lg:gap-0 items-center px-10 py-4'>
            <h2 className='text-2xl font-bold'>Keen<span className='text-[#244D3F]'>Keeper</span></h2>
            <div className='flex gap-3 items-center'>
                <Link href={'/'} className={p==='/' ? "btn bg-[#244D3F] text-white" : "btn"}><AiOutlineHome />Home</Link>
                <Link href={'/timeline'} className={p==='/timeline' ? "btn bg-[#244D3F] text-white" : "btn"}><RiTimeLine />Timeline</Link>
                <Link href={'/stats'} className={p==='/stats' ? "btn bg-[#244D3F] text-white" : "btn"}><ImStatsDots />Stats</Link>
            </div>
        </div>
    );
};

export default Navbar;