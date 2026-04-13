import CartDetails from '@/component/CartDetails';
import React from 'react';

const page = async ({params}) => {

    const {id} = await params
    const res = await fetch("https://assignment-7-iota.vercel.app/data.json")
    const data = await res.json()
    const f = data.find(v => v.id === Number(id))
    console.log(f)

    return (
        <div>
            <CartDetails p={f}></CartDetails>
        </div>
    );
};

export default page;