// 3.Create a functional component called ToDoList.
// Use the useState hook to manage a state variable named todos, initialized as an empty array.
// Render a list of todos using the map function.
// Each todo should have a checkbox to mark it as completed and a delete button to remove it from the list.
// Use the useState hook to manage the state of each todo item (completed or not).

import ToDoList from "@/Components/Day2Components/ToDoList";

export default function Question3(){
    return (
        <>
        <h4>Question3</h4>
        <ToDoList/> 
        </>
        
    )
}