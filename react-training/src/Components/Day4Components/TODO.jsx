'use client'

import { useState } from "react";

function TODO(){

    const [todos,settodos] = useState([]);
    const[curr,setCurr] = useState("")

    return(
        <>
        <input value={curr} placeholder="Enter task to add" onChange={(e)=>{setCurr(e.target.value)}}></input>

        <button onClick={()=>{settodos([...todos,{id:Date.now(),
            task : `${curr}`
        }])}}>ADD</button>
        <ul>
        {todos.length>0 && todos.map((item)=><li key={item.id}>{item.task}</li>)}


        </ul>
        
        
        
        
        </>
    )

}
export default TODO;