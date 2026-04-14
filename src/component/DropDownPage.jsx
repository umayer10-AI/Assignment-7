"use client"
import { Data } from '@/Context/Context';
import React, { useContext } from 'react';

const DropDownPage = () => {

    const {setI,Allinfo} = useContext(Data)

    const a = (show) => {
        const information = Allinfo.filter(v => v.type === show)
        setI(information)
    }

    return (
        <ul tabIndex="-1" className="dropdown-content menu bg-sky-300 rounded-box z-1 w-52 p-2 shadow-sm">
            <li><button onClick={() => a('Call')}>Call</button></li>
            <li><button onClick={() => a('Text')}>Text</button></li>
            <li><button onClick={() => a('Meetup')}>Video</button></li>
        </ul>
    );
};

export default DropDownPage;