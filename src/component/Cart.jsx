import React from 'react';
import AllCarts from './AllCarts';

const Cart = () => {
    return (
        <div className='max-w-[80%] mx-auto'>
            <h2 className='text-2xl font-bold mb-5'>Your Friends</h2>
            <AllCarts></AllCarts>
        </div>
    );
};

export default Cart;