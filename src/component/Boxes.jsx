import React from 'react';

const Boxes = () => {
    return (
        <div className='max-w-[80%] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5'>
            <div className='text-center bg-base-100 py-7 rounded-2xl shadow-xl'>
                <h2 className='text-2xl font-bold'>10</h2>
                <h2 className='font-semibold text-gray-400'>Total Friends</h2>
            </div>
            <div className='text-center bg-base-100 py-7 rounded-2xl shadow-xl'>
                <h2 className='text-2xl font-bold'>3</h2>
                <h2 className='font-semibold text-gray-400'>On Track</h2>
            </div>
            <div className='text-center bg-base-100 py-7 rounded-2xl shadow-xl'>
                <h2 className='text-2xl font-bold'>6</h2>
                <h2 className='font-semibold text-gray-400'>Need Attention</h2>
            </div>
            <div className='text-center bg-base-100 py-7 rounded-2xl shadow-xl'>
                <h2 className='text-2xl font-bold'>12</h2>
                <h2 className='font-semibold text-gray-400'>Interactions This Month</h2>
            </div>
        </div>
    );
};

export default Boxes;