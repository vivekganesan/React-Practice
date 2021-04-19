import React,{useState, useEffect, useRef} from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0);
    const IntervalRef = useRef();

    useEffect(() => {
        IntervalRef.current = setInterval(() => {
            setTimer( preTimer => preTimer + 1);
        }, 1000);
        return () => {
            clearInterval(IntervalRef.current);
        }
    }, []);
    return (
        <div>
            Hook Timer - {timer} <button onClick={() => clearInterval(IntervalRef.current)}>Clear Timer</button>
        </div>
    )
}

export default HookTimer
