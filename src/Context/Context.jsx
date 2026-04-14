"use client"
import React, { createContext, useState } from 'react';

export const Data = createContext()

const Context = ({children}) => {

    const [info, setI] = useState([])
    

    return (
        <Data.Provider value={{info,setI}}>
            {children}
        </Data.Provider>
    );
};

export default Context;