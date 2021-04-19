import React, {useState,useEffect} from 'react';

function IntervalHookCounter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const doSomething = (someProps) =>{
            console.log("dosomething ", someProps);
        }
        doSomething(1)
        const interval1 = setInterval(tick1, 1000)// setCount(tick, 1000);
    }, []);

    const tick1 = () => {
        setCount(preCount => preCount + 1 );
    }
    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
