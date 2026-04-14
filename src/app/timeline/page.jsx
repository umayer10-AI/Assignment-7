import DropDownPage from '@/component/DropDownPage';
import EmtyCheck from '@/component/EmtyCheck';
import Searching from '@/component/Searching';
import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

const page = () => {

    return (
        <div className='max-w-[80%] mx-auto w-full'>

            <h2 className='text-4xl font-bold mt-10 mb-5'>Timeline </h2>

            <div className='flex justify-between flex-col lg:flex-row'>
                <div className="dropdown dropdown-start mb-5">
                    <div tabIndex={0} role="button" className="btn m-1 bg-green-700 text-white">Filter timeline <MdKeyboardArrowDown className='text-2xl' /></div>
                    <DropDownPage></DropDownPage>
                </div>
                <div>
                    <Searching></Searching>
                </div>
            </div>


            <EmtyCheck></EmtyCheck>
        </div>
    );
};

export default page;