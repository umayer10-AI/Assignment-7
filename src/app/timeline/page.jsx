import AllBtnSelector from '@/component/AllBtnSelector';
import React from 'react';
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



            <AllBtnSelector></AllBtnSelector>
        </div>
    );
};

export default page;