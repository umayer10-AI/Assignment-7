import Banner from '@/component/Banner';
import Boxes from '@/component/Boxes';
import Cart from '@/component/Cart';
import React from 'react';

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <Boxes></Boxes>
      <hr className='text-gray-300 max-w-[80%] mx-auto my-10'></hr>
      <Cart></Cart>
    </div>
  );
};

export default page;