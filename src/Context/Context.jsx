"use client"
import React, { createContext, useState } from 'react';

export const Data = createContext()

const Context = ({children}) => {

    const [info, setI] = useState([])
    const [Allinfo, setAll] = useState([])
    const [callChart, setC] = useState([])
    const [textChart, setT] = useState([])
    const [videoChart, setV] = useState([])
    const [inputValue, setInput] = useState('')

    return (
        <Data.Provider value={{info,setI,callChart,setC,
        textChart,setT,videoChart,setV,Allinfo,setAll,inputValue,setInput}}>
            {children}
        </Data.Provider>
    );
};

export default Context;