// 7.Create a functional component called Notification.
// Use the useState hook to manage a state variable named message initialized to an empty string.
// Use the useEffect hook to show a notification message for 5 seconds whenever the message state changes.
// Render the notification message in a <div> element.
// After 5 seconds, clear the message to hide the notification.

import Notification from "@/Components/Day2Components/Notification";

export default function Question7(){
    return (
        <>
        <h4>Question7</h4>
        <Notification/> 
        </>
        
    )
}