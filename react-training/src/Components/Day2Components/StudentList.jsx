'use client'

import { useMemo, useState } from "react";

export const StudentList=()=>{

    const [names,setNames] = useState(['a','b','c','d']);

    const display = useMemo(()=>names.map((item)=>item),[names]);


    const addStudent = (val)=>{
        setNames(names.push(val));
    }

    // let input = document.getElementById('curr').value
    const [student,setStudent] = useState("")



    return (
        <>
        {display}<br></br>
        Enter name<br></br>
        <input type="text" id ='curr' placeholder="Enter a name" ></input>
        
        <button onClick={(input)=>addStudent(input)}>Add</button>
        </>
    )

}