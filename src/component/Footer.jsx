import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] mt-20'>
            <div className='text-center max-w-[80%] mx-auto space-y-4 pt-10'>
                <h2 className='text-3xl lg:text-5xl font-bold text-white'>KeenKeeper</h2>
                <p className='font-semibold text-white'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <h2 className='text-2xl font-bold text-white'>Social Links</h2>
                <ul className='flex justify-center items-center gap-3 mb-10'>
                    <li className='p-2 rounded-full bg-white'><RiInstagramFill /></li>
                    <li className='p-2 rounded-full bg-white'><FaFacebookSquare /></li>
                    <li className='p-2 rounded-full bg-white'><FaXTwitter /></li>
                </ul>
                <div className='font-semibold py-5 text-gray-400 flex flex-col lg:flex-row gap-4 lg:gap-0 border-t border-t-gray-500 justify-between items-center'>
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <ul className='flex items-center gap-5'>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookies</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;