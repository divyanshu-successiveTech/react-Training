'use client'

import { Languagecontext } from "./LanguageContext"
import { useContext } from "react";


export const LanguageButton=({text})=>{

    const {language,changeLang} = useContext(Languagecontext);

    let curr =text;

    {curr = language === 'spanish'?"This is sample text" : "Este es un texto de muestra"}

    return(
        <>
        {curr}<br></br>
        <button onClick={changeLang}>
            Click for {language}
        </button>
        </>
        
        
    )
}