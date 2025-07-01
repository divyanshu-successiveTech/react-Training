"use client"
import axios from "axios"
import { useEffect, useState } from "react"

export default function AxiosValidation(){
    const [data,setData]=useState([]);
    const [error,seterror]=useState(null);

    async function fetchdata(){
        try {
            const fetchdata = await axios.get('https://jsonplaceholder.typicode.com/users')
            setData(fetchdata.data);
            seterror(false)
        } catch (error) {
            console.log("error")
            seterror(true)
        }
    }

    useEffect(()=>{
        fetchdata();
    },[]);

    if(error){
        return(
        <div>
            <button onClick={fetchdata}>Retry</button>
        </div>
        )

    }

    return(
        <div>
            
            {data.map((item,index)=>{
                return <div>{item.name}</div>
            })}
        </div>
    )
}