"use client"

import { useEffect } from "react"

function withLogger(Comp){
    function working(){

        useEffect(()=>{

            console.log("Mounted")

            return ()=>console.log('unmounted')

        },[])

        useEffect(()=>{
            console.log("updated")
        },[])

        return(<Comp/>)
    }




    return working
    
}

export default withLogger