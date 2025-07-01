"use client"
import { useRouter } from "next/navigation"

function Day6(){

    const router = useRouter()
    return(
        <>
            <button onClick={()=>router.push('/Day6/Question1')}>To Question1</button><br/><br/>
        
        </>
    )
}

export default Day6
