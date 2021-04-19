import React, {useContext} from 'react';
import {CounterContext } from '../../App';

function ComponentA() {
   const countContect =  useContext(CounterContext);
    return (
        <div>
            Component A - {countContect.CounterState}
            <button onClick={() => {countContect.counterDispatch('increment')}}>Increment</button>
            <button onClick={() => {countContect.counterDispatch('decrement')}}>Decrement</button>
            <button onClick={() => {countContect.counterDispatch('reset')}}>Reset</button>
        </div>
    )
}

export default ComponentA
