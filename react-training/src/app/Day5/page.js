"use client"
import { useRouter } from "next/navigation";

function Day5(){

    const router = useRouter()
    return(
        <>
        <button onClick={()=>router.push('/Day5/Question1')}>To Question1</button><br/><br/>
        </>
    )
}

export default Day5;