import React from 'react'

function Title() {
    console.log('Title');
    return (
        <div>
            <h2>Use Call Back Hook</h2>
        </div>
    )
}

export default React.memo(Title)
