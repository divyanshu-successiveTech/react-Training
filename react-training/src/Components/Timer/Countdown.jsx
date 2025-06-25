'use client'
import useTimer from "./Timer"

export const Countdown =()=>{

    const {timeleft,startTimer,pauseTimer,reset} = useTimer(5);


    return(
        <>
        Timeleft : {timeleft}
        <button onClick={()=>startTimer()}>Start</button>
        <button onClick={()=>pauseTimer()}>Pause</button>

        <button onClick={()=>reset()}>Reset</button>
        
        </>
    )

}