


import { useState } from "react"

export const HandleCount =({change})=>{

    const [count,setCount]=useState(0);

    return(
    <>
    {count}<br></br>
    <button onClick={()=>{setCount(change(count))}}>Increase</button>
    </>
    )

}
