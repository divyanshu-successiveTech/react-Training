"use client"

import { ShowDetails } from "@/Components/Day3Components/showDetails";
import { useRouter } from "next/navigation";

function id({params}){

    const router = useRouter()

    
    const{id}= params;

    return(

        <>
        <ShowDetails id = {id}/><br/>
        <button onClick={()=>router.push('/Day3/Question6')}>Back</button>
        
        </>
        
        
    )




}
export default id;