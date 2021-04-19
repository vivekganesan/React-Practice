import React, {useContext} from 'react'
import {CounterContext } from '../../App';

function ComponentD() {
    const countContext =  useContext(CounterContext);
    return (
        <div>
            Component A - {countContext.CounterState}
            <button onClick={() => {countContext.counterDispatch('increment')}}>Increment</button>
            <button onClick={() => {countContext.counterDispatch('decrement')}}>Decrement</button>
            <button onClick={() => {countContext.counterDispatch('reset')}}>Reset</button>
        </div>
    )
}

export default ComponentD
