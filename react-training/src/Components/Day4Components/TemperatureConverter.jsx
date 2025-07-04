"use client"

import { useEffect, useState } from "react";

function TemperatureConverter(){
    const [celcius,setCelcius] = useState(0)
    const [farhenite,setFarhenite] = useState(0)

    function changefarhenite(e){
        
        const {value}=e.target;
        setCelcius(value);
        setFarhenite((value*(9/5))+32)
    }

    function changecelcius(e){
        
        const {value}=e.target;
        setFarhenite(value);
        setCelcius((value-32)*(5/9))    
    }


    return(
        <>Farhenite
        <input value={farhenite} placeholder={farhenite} onChange={(e)=>{ changecelcius(e)}}></input><br/><br/> 

        Celcius

        <input value={celcius} placeholder={celcius} onChange={(e)=>{changefarhenite(e)}} />
        
        
        </>


    )
}

export default TemperatureConverter;