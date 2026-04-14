import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AllCarts = async () => {

    const res = await fetch("https://assignment-7-iota.vercel.app/data.json")
    const data = await res.json()

    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
            {
                data.map(v => (
                    <Link href={`/home/${v.id}`} key={v.id} className='text-center shadow py-5 rounded-2xl bg-base-100 space-y-2'>
                        <Image height={70} width={70} className='rounded-full mx-auto' src={v.picture} alt='logo'></Image>
                        <h2 className='font-bold'>{v.name}</h2>
                        <p className='text-gray-400'>{v.days_since_contact}d ago</p>
                        <div className='flex justify-center gap-2 items-center'>
                            {
                                v.tags.map((x,i) => <p key={i} className='px-3 py-0.5 bg-green-200 rounded-full text-black'>{x}</p>)
                            }
                        </div>
                        <div className='flex justify-center items-center'>
                            <h2 className={`px-3 py-0.5 ${v.status==="on-track" && "bg-[#244D3F] text-white" || v.status==="overdue" && "bg-[#EF4444] text-white" || v.status==="almost due" && "bg-[#EFAD44] text-black"} rounded-full`}>{v.status}</h2>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default AllCarts;