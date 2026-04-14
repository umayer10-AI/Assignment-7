import Chart from '@/component/Chart';
import React from 'react';

const page = () => {
    return (
        <div className='max-w-[80%] mx-auto'>
            <h2 className='text-3xl lg:text-4xl font-bold my-10'>Friendship Analytics</h2>
            <div className='bg-white p-5 rounded-2xl shadow'>
                <h2 className='text-2xl font-semibold'>By Interaction Type</h2>
                <Chart></Chart>
            </div>
        </div>
    );
};

export default page;