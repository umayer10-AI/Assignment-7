import Image from 'next/image';
import React from 'react';
import call from '../../assets/call.png'
import { MdKeyboardArrowDown } from 'react-icons/md';

const page = () => {
    return (
        <div className='max-w-[80%] mx-auto w-full'>

            <h2 className='text-4xl font-bold mt-10 mb-5'>Timeline </h2>

            <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn m-1">Filter timeline <MdKeyboardArrowDown className='text-2xl' /></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>



            <div className='flex items-center gap-4 p-4 rounded-2xl bg-white shadow-xl'>
                <Image src={call} alt='logo'></Image>
                <div className='text-gray-400 font-semibold'>
                    <h2><span className='text-black font-bold'>Meetup</span> with Tom Baker</h2>
                    <h2>March 28, 2026</h2>
                </div>
            </div>
        </div>
    );
};

export default page;