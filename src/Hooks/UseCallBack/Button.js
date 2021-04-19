import React from 'react'

function Button({handleClick, title}) {
    console.log('Button - title');
    return (
        <div>
            <button onClick={handleClick}>{title}</button>
        </div>
    )
}

export default React.memo(Button)
