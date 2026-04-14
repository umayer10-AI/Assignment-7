"use client"
import { Data } from '@/Context/Context';
import React, { useContext } from 'react';
import { FiVideo } from 'react-icons/fi';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';
import call from '../assets/call.png'
import text from '../assets/text.png'
import video from '../assets/video.png'
import { Slide, toast } from 'react-toastify';

const BtnSelector = ({p}) => {

    const {info,setI,setC,setT,setV} = useContext(Data)

    const a = (t,i) => {
        const obj = {
            ...p,
            type: t,
            img: i
        }
        const f = info.find(v => v.type === obj.type && v.name === obj.name)
        if(!f){
            setI(c => [...c,obj])
            toast.success(`${t} with ${obj.name}`, {
                position: "top-center",
                autoClose: 498,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        }
        else{
            toast.warning(`Already ${t} with ${obj.name}`, {
                position: "top-center",
                autoClose: 498,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        }
        if(t === "Call"){
            setC(c => [...c,t])
        }
        else if(t === "Text"){
            setT(c => [...c,t])
        }
        else if(t === "Meetup"){
            setV(c => [...c,t])
        }
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                        <div onClick={() => a("Call",call)} className='text-center py-3 space-y-2 rounded-xl bg-base-300 hover:bg-gray-200 cursor-pointer active:scale-95'>
                            <h2 className='flex justify-center text-2xl'><LuPhoneCall /></h2>
                            <h2 className='text-2xl font-semibold'>Call</h2>
                        </div>
                        <div onClick={() => a("Text",text)} className='text-center py-3 space-y-2 rounded-xl bg-base-300 hover:bg-gray-200 cursor-pointer active:scale-95'>
                            <h2 className='flex justify-center text-2xl'><MdOutlineTextsms /></h2>
                            <h2 className='text-2xl font-semibold'>Text</h2>
                        </div>
                        <div onClick={() => a("Meetup",video)} className='text-center py-3 space-y-2 rounded-xl bg-base-300 hover:bg-gray-200 cursor-pointer active:scale-95'>
                            <h2 className='flex justify-center text-2xl'><FiVideo /></h2>
                            <h2 className='text-2xl font-semibold'>Video</h2>
                        </div>
                    </div>
    );
};

export default BtnSelector;