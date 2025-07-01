'use client'

import { useState ,createContext } from "react";


export const Languagecontext= createContext();

export const LanguageProvider =({children})=>{
    const [language,setLanguage] = useState('english');


    const changeLang =()=>{
        setLanguage((prev)=>( prev ==='spanish' ? 'english':'spanish'))
    }


    return (
        <Languagecontext.Provider value ={{language,changeLang}}>
            {children}
        </Languagecontext.Provider>
    )
}