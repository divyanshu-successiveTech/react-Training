'use client'

import { useRouter } from "next/navigation";

function Day3(){

    const router=useRouter();

    return(
        <>
        
        <button onClick={()=>{router.push('/Day3/Question1')}}>Question1</button>
        <button onClick={()=>{router.push('/Day3/Question2')}}>Question2</button>
        <button onClick={()=>{router.push('/Day3/Question3')}}>Question3</button>
        <button onClick={()=>{router.push('/Day3/Question4')}}>Question4</button>
        <button onClick={()=>{router.push('/Day3/Question5/Login')}}>Question5</button>
        <button onClick={()=>{router.push('/Day3/Question6')}}>Question6</button>
        
        </>
    )

}

export default Day3;