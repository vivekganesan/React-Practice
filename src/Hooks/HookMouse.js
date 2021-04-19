import React, {useState,useEffect} from 'react'

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logCoordinate = e => {
        console.log('Mouse moved');
        setX(e.clientX);
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove',logCoordinate);
        return () => {
            console.log('unmounting');
            window.removeEventListener('mousemove', logCoordinate)
        }
    }, []);
    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default HookMouse
