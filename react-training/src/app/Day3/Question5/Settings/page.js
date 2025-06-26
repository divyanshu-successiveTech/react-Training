"use client"
import { ValidationContext } from "@/Components/Day3Components/ValidationContext";
import { useContext, useEffect } from "react"
import { redirect } from "next/navigation";


function Settings() {
    const {flag} = useContext(ValidationContext);

     useEffect(()=>{
            if(!flag){
                redirect('/Day3/Question5/Login')
            }
    
    
        },[flag])

    return (
        <>
        This is the information from Settings
        </>
    )

}

export default Settings