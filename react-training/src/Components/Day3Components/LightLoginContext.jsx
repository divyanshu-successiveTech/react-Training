'use client'

import { createContext,useState } from "react";

export const LightLoginContext = createContext();

export const LightLoginProvider = ({children}) =>{

    const [userName,setUserName] = useState("ABC");
    const [password,setPassword] = useState('111');
    const [currstatus,setCurrStatus] = useState('Logged out')
    const [currtheme,setCurrtheme] = useState('light');

    const change =()=>{
        setCurrtheme(currtheme == 'light' ? 'dark' : 'light');
    }


    const validate =(user,pass)=>{

        if(user == userName && pass == password){
            setCurrStatus("Logged in");
            
        }

    }

    return (
        <LightLoginContext.Provider value = {{currtheme,currstatus,validate,change}}>
        {children}
        </LightLoginContext.Provider>
    )

}
