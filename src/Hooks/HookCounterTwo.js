import React, {useState} from 'react';

function HookCounterTwo() {
    const initialCounter = 0;
    const [counter,setcounter] = useState(initialCounter);



    const IncrementByFive = () => {
        for (let i=0; i<5;i++){
            setcounter(preCounter => preCounter + 1)
        }
    }

    return (
        <div>
            <div>Count: {counter}</div>
            <button onClick={() => setcounter(initialCounter)}>Reset </button>
            <button onClick={() => setcounter(preCounter => preCounter + 1)}>Increment </button>
            <button onClick={() => setcounter(preCounter => preCounter - 1)}>Increment </button>
            <button onClick={IncrementByFive}>IncrementByFive</button>
        </div>
    )
}

export default HookCounterTwo
