"use client"
import { useContext, useEffect } from "react"
import { ValidationContext } from "@/Components/Day3Components/ValidationContext"
import { redirect } from "next/navigation";


function DashBoard  () {

    const {flag} = useContext(ValidationContext);

     useEffect(()=>{
            if(!flag){
                redirect('/Day3/Question5/Login')
            }
    
    
        },[flag])

    return (
        <>
        This is the information from DashBoard
        </>
    )

}

export default DashBoard