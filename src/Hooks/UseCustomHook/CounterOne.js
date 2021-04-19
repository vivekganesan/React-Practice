import React, {useState} from 'react'
import UseCounter from './UseCounter';


function CounterOne() {
    // const [count, setCount] = useState(0);

    // const Increment = () => {
    //     setCount(prevCount => prevCount +1)
    // }

    // const Decrement = () => {
    //     setCount(prevCount => prevCount - 1)
    // }

    // const Reset = () => {
    //     setCount(0)
    // }
    const [count, Increment, Decrement, Reset] = UseCounter();
    
    return (
        <div>
            Counter - {count}
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default CounterOne
