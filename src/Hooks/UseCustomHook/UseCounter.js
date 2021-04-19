import {useState} from 'react'

function UseCounter() {
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

    return [count,Increment, Decrement, Reset ];
}

export default UseCounter
