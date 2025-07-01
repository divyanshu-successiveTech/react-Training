// 14.create a component that displays a list of tasks.
// Each task has a "Complete" button.
// Implement a feature where clicking the "Complete" button marks the task as completed.
// Use the useCallback hook to create dynamic callback functions for each task.
// Ensure that clicking the "Complete" button for one task doesn't trigger unnecessary re-renders for other tasks.

import CompleteTasks from "@/Components/Day2Components/CompleteTasks";

export default function Question14(){
    return (
        <>
        <h4>Question14</h4>
        <CompleteTasks/> 
        </>
        
    )
}