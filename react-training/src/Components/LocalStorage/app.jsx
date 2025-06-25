'use client'
import useLocalStorage from "./LocalStorage";
import { useState } from "react";

export const Local=()=>{

    const [val,setVal]= useState('');
    const [key,setKey]=useState('');

    const {setter,getter,remove}=useLocalStorage();


    return(

        <>
        <input value={key} onChange={(e)=>{setKey(e.target.value)}} placeholder="Enter Key"></input>

        <input value={val} onChange={(e)=>{setVal(e.target.value)}} placeholder="Enter value"></input>

        <button onClick={()=>{
            
            setter(key,val)
            setKey('')
            setVal('')
            
            
        }}>Set value</button>

        <button onClick={()=>{setVal(getter(key))}}>Get</button>
        
        <button onClick={()=>{remove(key)}}>Remove value</button>
        
        
        
        
        </>


    )

}