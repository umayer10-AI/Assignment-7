"use client"
import React, { useContext } from 'react';
import AllBtnSelector from './AllBtnSelector';
import { Data } from '@/Context/Context';

const EmtyCheck = () => {

    const {info} = useContext(Data)

    return (
        <div>
            <AllBtnSelector></AllBtnSelector>
            {
                info.length === 0 && <div className="flex flex-col items-center justify-center text-center">
            
                    <h2 className="text-6xl mb-4">🛒</h2>
                    <h2 className="text-3xl font-bold mb-2">Your Cart is Empty</h2>

                    <p className="text-gray-500 mb-6">
                        Looks like you have not added anything to your cart yet.
                    </p>
                    <button className="btn btn-success">Continue Shopping</button>
                </div>
            }
        </div>
    );
};

export default EmtyCheck;