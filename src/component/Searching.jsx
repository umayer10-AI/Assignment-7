"use client"
import { Data } from '@/Context/Context';
import React, { useContext } from 'react';

const Searching = () => {

    const {inputValue,setInput,setI,Allinfo} = useContext(Data)

    const a = (e) => {
        e.preventDefault()
        if(inputValue !== ''){
            const check = Allinfo.filter(v => v.name.toLowerCase().includes(inputValue.toLowerCase()) ||
            v.type.toLowerCase().includes(inputValue.toLowerCase()))
            setI(check)
        }
        else{
            setI(Allinfo)
        }
    }

    const b = (e) => {
        const val = e.target.value
        setInput(val)
        // if(val !== ''){
        //     const check = Allinfo.filter(v => v.name.toLowerCase().includes(val.toLowerCase()))
        //     setI(check)
        // }
        // else{
        //     setI(Allinfo)
        // }
    }

    return (
        <form onSubmit={a} className='flex'>
            <input onChange={b} type="text" value={inputValue} placeholder="Search" className="input input-success" />
            <input name='name' type="submit" value="Search" className='btn btn-success' />
        </form>
    );
};

export default Searching;