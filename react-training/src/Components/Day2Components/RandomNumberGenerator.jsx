'use client'

import { useState } from "react";

const RandomNumberGenerator = ()=>{
    let [number,SetNumber]=useState(generate());

    function generate(){
        return Math.round(Math.random()*100);
    }
    return(
        <>
        {number}<br/>
        <button onClick={()=>{SetNumber(generate())}}>Generate</button>
        </>
        
    )
    
}


export default RandomNumberGenerator;