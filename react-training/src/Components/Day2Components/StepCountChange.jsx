'use client'

import { useState } from "react";

export default function StepCountChange(){

    let [count,setCount] = useState(0);
    let [step,setstep] = useState(0);
    

    return (

        <><p>{count}</p>

        <input type="number" id = "count" placeholder="Entere the step for change" onChange={(e)=>{setstep(e.target.value)}}/>
        
        <button onClick={()=>{setCount(count + parseFloat(step))}}>Increment</button>
        <button onClick={()=>{setCount(count - step )}}>Decrement</button>
        </>  
    )

}