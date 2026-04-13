import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='text-center py-10 space-y-5 max-w-[80%] mx-auto'>
            <h2 className='text-3xl lg:text-4xl font-bold'>Friends to keep close in your life</h2>
            <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.</p>
            <div className='flex justify-center items-center'>
                <button className='btn bg-[#244D3F] text-white'><FaPlus />Add a Friend</button>
            </div>
        </div>
    );
};

export default Banner;