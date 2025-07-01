"use client"

import { useContext,useState,useEffect} from "react";
import { ValidationContext } from "./ValidationContext";
import { useRouter } from "next/navigation";


export const ApplicationLogin=()=>{

    const router= useRouter();
    const {flag,setFlag,validate} = useContext(ValidationContext);

    const [currUser,setCurrUser] = useState("")
    const [currPass,setCurrPass] = useState("");
    
    
    useEffect(()=>{
        if(flag){
            router.push("/Day3/Question3/Home")
        }
    },[flag])

    function check(currUser,currPass){
        
        validate(currUser,currPass);

    }

    return(


        <>
        <input value={currUser} onChange={(e)=>{setCurrUser(e.target.value)}} placeholder="Enter username"></input>
        <input value={currPass} onChange={(e)=>{setCurrPass(e.target.value)}} placeholder="Enter password"></input>
        <br/>

        
        <button  onClick={(e)=>{check(currUser,currPass)}}>Submit</button>
        </>
    )





}
