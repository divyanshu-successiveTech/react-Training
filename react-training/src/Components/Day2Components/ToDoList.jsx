'use client'

import { useState } from "react";

function AddToList({curr}){
    return(<li>{curr}</li>)
}

export default function ToDoList(){

    let [Todo,setTodo] = useState([]);

    let item = document.getElementById("ele");

    // let arr = Todo.map((ele)=> < AddToList curr = {ele} />)

    return(
    <>        
       
        <input type="text" id="ele" placeholder="Enter element for todos"></input>
        <button onClick={()=>{
            setTodo([...Todo,< AddToList curr = {item.value} />]);
        }}>Add Todos</button>


        <div><ol>{Todo}</ol></div>
         
    
    </> )



    

    
}