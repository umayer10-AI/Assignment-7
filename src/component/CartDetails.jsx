import Image from 'next/image';
import React from 'react';
import { FaBell } from 'react-icons/fa';
import { RiDeleteBin2Line, RiInboxArchiveFill } from 'react-icons/ri';
import BtnSelector from './BtnSelector';

const CartDetails = ({p}) => {
    console.log(p.picture)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 max-w-[80%] mx-auto'>
            <div className='flex flex-col gap-3'>
                <div className='text-center space-y-2 shadow bg-white rounded-xl py-5'>
                        <Image height={70} width={70} className='rounded-full mx-auto' src={p.picture} alt='logo'></Image>
                        <h2 className='font-bold'>{p.name}</h2>
                        <div className='flex justify-center items-center'>
                            <h2 className={`px-3 py-0.5 ${p.status==="on-track" && "bg-[#244D3F] text-white" || p.status==="overdue" && "bg-[#EF4444] text-white" || p.status==="almost due" && "bg-[#EFAD44] text-black"} rounded-full`}>{p.status}</h2>
                        </div>
                        <div className='flex justify-center gap-2 items-center'>
                            {
                                p.tags.map((x,i) => <p key={i} className='px-3 py-0.5 bg-green-200 rounded-full text-black'>{x}</p>)
                            }
                        </div>
                        <h2 className='text-gray-400 font-bold'>{p.bio}</h2>
                        <h2 className='font-semibold'>{p.email}</h2>
                    </div>
                    <button className='btn w-full shadow bg-white'><FaBell />Snooze 2 weeks</button>
                    <button className='btn w-full shadow bg-white'><RiInboxArchiveFill />Archive</button>
                    <button className='btn w-full shadow bg-white text-red-500'><RiDeleteBin2Line className='text-xl'/>Delete</button>
            </div>
            <div className='col-span-2 space-y-5'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    <div className='text-center py-5 shadow bg-white'>
                        <h2 className='text-2xl font-bold'>{p.days_since_contact}</h2>
                        <h2 className='font-semibold text-gray-500'>Days Since Contact</h2>
                    </div>
                    <div className='text-center py-5 shadow bg-white'>
                        <h2 className='text-2xl font-bold'>{p.goal}</h2>
                        <h2 className='font-semibold text-gray-500'>Goal (Days)</h2>
                    </div>
                    <div className='text-center py-5 shadow bg-white'>
                        <h2 className='text-2xl font-bold'>{p.next_due_date}</h2>
                        <h2 className='font-semibold text-gray-500'>Next Due</h2>
                    </div>
                </div>
                <div className='bg-white'>
                    <div className='shadow rounded-xl p-4'>
                        <div className='flex justify-between items-center'>
                            <h2 className='font-semibold'>Relationship Goal</h2>
                            <button className='btn'>Edit</button>
                        </div>
                        <h2 className='text-gray-500'>Connect every <span className='font-bold text-black'>{p.goal} days</span></h2>
                    </div>
                </div>
                <div className='p-5 rounded-2xl shadow bg-white'>
                    <h2 className='font-semibold mb-3'>Quick Check-In</h2>
                    <BtnSelector p={p}></BtnSelector>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default CartDetails;