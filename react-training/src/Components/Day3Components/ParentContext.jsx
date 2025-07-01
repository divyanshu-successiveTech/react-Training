'use client'

import { createContext,useState } from "react";

export const ParentContext = createContext();

export const ParentProvider = ({children}) =>{

    const [userName,setUserName] = useState("ABC");
    const [password,setPassword] = useState('111');
    const [currstatus,setCurrStatus] = useState('Logged out')


    const validate =(user,pass)=>{

        if(user == userName && pass == password){
            setCurrStatus("Logged in");
            
        }

    }

    return (
        <ParentContext.Provider value = {{currstatus,validate}}>
        {children}
        </ParentContext.Provider>
    )

}
