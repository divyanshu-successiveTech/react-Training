"use client"
import { useState } from "react";

function LoginFormSubmission(){
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");

    function handleSubmit(){
        console.log(userName,password);
        setUserName("");
        setPassword("")
    }
    return(
        <>
        <input type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}} placeholder="Enter UserName"></input>
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password"></input>

        <button onClick={()=>handleSubmit()}>Submit</button>
        
        </>
    )
}

export default LoginFormSubmission;