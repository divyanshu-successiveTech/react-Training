'use client'

import { useState } from "react";

function AddToList({curr}){
    return(<li>{curr}</li>)
}

export default function ToDoList(){

    let [Todo,setTodo] = useState([
    { id: 1, task: "task1", complete: false },
    { id: 2, task: "task2", complete: false },
    { id: 3, task: "task3", complete: false }
  ]);
    let [inputVal,setInputVal] = useState('');

    const handleTodo=()=>{
       const newTodo={    
            id : Date.now(),
            task : inputVal,
            complete : false,
        }
        setTodo([...Todo,newTodo]);
        
    }

    const deleteTask =(id)=>{
        const arr = Todo.filter((curr)=>{return id !== curr.id});
        setTodo([...arr])

    }

    return(
    <>        
       
        <input type="text"  placeholder="Enter element for todos" onChange={(e)=>{setInputVal(e.target.value)}} />
        
        <button onClick={handleTodo}>Add</button>

        <ul>
        {Todo.map((current)=><li key={current.id}><input type="checkbox" onChange={()=>{current.complete=true}} ></input>{current.task}
        <button onClick={()=>{deleteTask(current.id)}}>Delete</button>
        </li>)}
        
        </ul>


    </>
    

    )



    

    
}