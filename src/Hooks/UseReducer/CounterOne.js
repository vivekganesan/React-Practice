import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (currState, action) => {
    switch (action) {
        case 'increment':
            return currState + 1;
        case 'decrement':
            return currState - 1;
        case 'reset':
            return initialState;
        default:
            return currState;
    }

}

function CounterOne() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            Counter - {count}
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterOne
