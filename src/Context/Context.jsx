"use client"
import React, { createContext, useState } from 'react';

export const Data = createContext()

const Context = ({children}) => {

    const [info, setI] = useState([])
    const [callChart, setC] = useState([])
    const [textChart, setT] = useState([])
    const [videoChart, setV] = useState([])

    return (
        <Data.Provider value={{info,setI,callChart,setC,textChart,setT,videoChart,setV}}>
            {children}
        </Data.Provider>
    );
};

export default Context;