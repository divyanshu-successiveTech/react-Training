'use client'

import { useState } from "react"


const CounterOne=()=>{
    let [count,setCount]=useState(0);
    
    return(
        <div>
            <p>{count}</p>
        <p>
            <button onClick={()=>{setCount(count +=1)}}>Increment</button>
            <button onClick={()=>{setCount(count -=1)}}>Decrement</button>  
        </p>
        </div>
    )   
}

export default CounterOne;