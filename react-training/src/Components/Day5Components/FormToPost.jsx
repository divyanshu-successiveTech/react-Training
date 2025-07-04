"use client"
import axios from "axios";
import { useState } from "react"

export default function FormComponent(){

    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');
    
    const [status,setstatus]=useState('')

    const handlclick =async(e)=>{
        e.preventDefault();
        const datasend= await axios.post('https://jsonplaceholder.typicode.com/posts',{
            title,content
        });

        if(datasend.status){
            console.log(datasend.status)
            setstatus(datasend.status)
        }
    }

    return(
        <div>
            <form>
                <input type="text" placeholder="Enter the Title" onChange={(e)=>setTitle(e.target.value)}/>
                <input type="text" placeholder="Enter the Content" onChange={(e)=>setContent(e.target.value)}/>
                <button onClick={handlclick}>Submit</button>
            </form>
            <div>
                {status}
            </div>
        </div>
    )
}