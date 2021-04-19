import React, { useState } from 'react';

function HookCounterFour() {
    const [items, setitems] = useState([]);
    const addItem = () => {
        setitems([...items, {key: items.length,result: Math.floor(Math.random() * 100) + 1}
        ])
    }
    return (
        <div>
            <h1>UseState with Array</h1>
            <button onClick={addItem}>Add Item</button>
            <ul>{
                items.map(item => (
                    <li id={item.key}>{item.result}</li>
                    ))
            }
            </ul>
        </div>
    )
}

export default HookCounterFour
