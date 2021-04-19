import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 10
};

const reducer = (currState, action) => {
    switch (action.type) {
        case 'increment':
            return { ...currState, firstCounter: currState.firstCounter + action.value };
        case 'decrement':
            return { ...currState, firstCounter: currState.firstCounter - action.value };
        case 'reset':
            return initialState;
        case 'secondincrement':
            return { ...currState, secondCounter: currState.secondCounter + action.value };
        case 'seconddecrement':
            return { ...currState, secondCounter: currState.secondCounter - action.value }
        default:
            return { firstCounter: currState.firstCounter };
    }

}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            Counter - {count.firstCounter}
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement5</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            Counter - {count.secondCounter}
            <button onClick={() => dispatch({ type: 'secondincrement', value: 1 })}>SecondIncrement</button>
            <button onClick={() => dispatch({ type: 'seconddecrement', value: 1 })}>SecondDecrement</button>
        </div>
    )
}

export default CounterTwo;
