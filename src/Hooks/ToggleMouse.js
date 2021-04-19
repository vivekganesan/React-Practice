import React, {useState} from 'react';
import HookMouse from './HookMouse';

function ToggleMouse() {

    const  [display, setDisplay] = useState(true);

    const ToggleButton = () => {
        setDisplay(!display);
    }

    return (
        <div>
            <button onClick={ToggleButton}>Toogle Mouse Button</button>
           {display && <HookMouse />} 
        </div>
    )
}

export default ToggleMouse
