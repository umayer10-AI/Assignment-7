"use client"
import { Data } from '@/Context/Context';
import Image from 'next/image';
import React, { useContext } from 'react';

const AllBtnSelector = () => {

    const {info} = useContext(Data)

    return (
        <div className='flex flex-col gap-4'>
            {
                info.map((v,i) => (
                    <div key={i} className='flex items-center gap-4 p-4 rounded-2xl bg-white shadow-xl'>
                        <Image width={40} height={40} src={v.img.src} alt='logo'></Image>
                        <div className='text-gray-400 font-semibold'>
                            <h2><span className='text-black font-bold'>{v.type}</span> with {v.name}</h2>
                            <h2>{v.today}</h2>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AllBtnSelector;