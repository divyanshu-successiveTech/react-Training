// 19.Build a custom hook named useTimer for creating countdown timers.
// Create a useTimer hook that takes a countdown duration as a parameter.
// Use setInterval to decrement the timer at regular intervals.
// Return the current timer value and methods to start, pause, and reset the timer.
// Develop a component that utilizes the useTimer hook to display and control a countdown.

import { Countdown } from "@/Components/Timer/Countdown";

export default function Question19(){
    return (
        <>
        <h4>Question19</h4>
        <Countdown/> 
        </>
        
    )
}