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

function CounterThree() {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)
    return (
        <>
            <div>
                <div>Counter - {count}</div>
                <button onClick={() => dispatch('increment')}>Increment</button>
                <button onClick={() => dispatch('decrement')}>Decrement</button>
                <button onClick={() => dispatch('reset')}>Reset</button>
            </div>
            <div>
                <div>Counter - {countTwo}</div>
                <button onClick={() => dispatchTwo('increment')}>Increment</button>
                <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
                <button onClick={() => dispatchTwo('reset')}>Reset</button>
            </div>
        </>
    )
}

export default CounterThree
