// 13.create two components: Parent and Child.
// In the Parent component, maintain a count state.
// Pass a callback function from the Parent to the Child that increments the count.
// Use the useCallback hook in the Parent to memoize the callback function with a dependency on the count state.
// Display the count in the Child component.
// Implement a button in the Child component that resets the count to zero when clicked.

import ChangeCount from "@/Components/Day2Components/ChangeCount";

export default function Question13(){
    return (
        <>
        <h4>Question13</h4>
        <ChangeCount/> 
        </>
        
    )
}