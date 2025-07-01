// 15.Create a functional component named StudentList that displays a list of student names..
// Define an array of student names as a constant within the component.
// Use the useMemo hook to memoize the list of student names.
// Render the list of student names on the screen.
// Include a button that, when clicked, appends a new student name to the list.

import { StudentList } from "@/Components/Day2Components/StudentList";

export default function Question15(){
    return (
        <>
        <h4>Question15</h4>
        <StudentList/> 
        </>
        
    )
}