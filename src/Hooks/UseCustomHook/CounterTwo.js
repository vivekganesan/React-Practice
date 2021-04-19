import React, {useState} from 'react'

function CounterTwo() {
    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(prevCount => prevCount +1)
    }

    const Decrement = () => {
        setCount(prevCount => prevCount - 1)
    }

    const Reset = () => {
        setCount(0)
    }
    
    return (
        <div>
            Counter - {count}
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default CounterTwo
