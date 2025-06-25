
const { useState, useRef, useEffect } = require("react")

const useTimer = (duration)=>{

    const [timeleft,setTimeLeft] = useState(duration);
    const [isRunning,setIsRunning] = useState(false);
    const time = useRef(null);

    const startTimer=()=>{
        if(!isRunning){
            setIsRunning(true);
        }
    }


    const pauseTimer = ()=>{
        if(isRunning){
            setIsRunning(false);
        }
    }


    const reset = ()=>{
        setIsRunning(false);
        setTimeLeft(duration);

    }


    useEffect(()=>{
        if(isRunning){
            time.current = setInterval(()=>{
                setTimeLeft((prev)=>{
                    if(prev <= 1){
                        clearInterval(time.current);
                        setIsRunning(false);
                        return 0;
                    }
                    return prev-1;
                })
            },1000);
        }
        return ()=> clearInterval(time.current)
    },[isRunning])

    return {timeleft,startTimer,pauseTimer,reset}

}

export default useTimer;