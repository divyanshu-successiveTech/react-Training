'use client'

import { useRouter } from "next/navigation";

function Day3(){

    const router=useRouter();

    return(
        <>
        
        <button onClick={()=>{router.push('/Day3/Question1')}}>Question1</button><br/><br/>
        <button onClick={()=>{router.push('/Day3/Question2')}}>Question2</button><br/><br/>
        <button onClick={()=>{router.push('/Day3/Question3')}}>Question3</button><br/><br/>
        <button onClick={()=>{router.push('/Day3/Question4')}}>Question4</button><br/><br/>
        <button onClick={()=>{router.push('/Day3/Question5/Login')}}>Question5</button><br/><br/>
        <button onClick={()=>{router.push('/Day3/Question6')}}>Question6</button><br/><br/>
        
        </>
    )

}

export default Day3;