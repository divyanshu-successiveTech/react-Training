"use client"
import { useContext, useState } from "react"
import { LightLoginContext } from "./LightLoginContext"

function ConsumerWithTheme(){
    const {currtheme,currstatus,validate,change} = useContext(LightLoginContext)
    const [user,setUser] = useState('')
    const [pass,setPass] = useState('')

    const check = () =>{
        validate(user,pass);
        
        
    }

    document.body.className=currtheme;
    const themeChanger = () =>{
        change();
        
    }


    return(
        <>

        <input value = {user} onChange={(e)=>{setUser(e.target.value)}} placeholder="Enter username"></input>
        <input value = {pass} onChange={(e)=>{setPass(e.target.value)}} placeholder="Enter password"></input>
        
        <button onClick={()=>{check()
            
        }}>Submit</button>
        <button onClick={()=>{themeChanger()}}>{currtheme}</button>
        
        <br></br>
        {currstatus == "Logged in" ? `Welcome, ${user}!` :"Please log in"}
        
        

        </>
    )
}


export default ConsumerWithTheme;