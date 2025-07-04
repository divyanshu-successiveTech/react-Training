'use client';

import { OrbitProgress } from "react-loading-indicators";
import { useState } from "react"; 
import LoadingData from "./LoadingData";



export default function Loading(){
    let [loading,setLoading] = useState(false);
    return (
        <>
        <LoadingData loading={loading} setLoading={setLoading}/>
        {
            loading == false ? <OrbitProgress color="#32cd32" size="medium" text="" textColor="" /> : <></>
        }
        <br/>
        <br/>
        <button onClick={()=>{
            setData(false);
            }}> Retry </button>
        </>
    );
}