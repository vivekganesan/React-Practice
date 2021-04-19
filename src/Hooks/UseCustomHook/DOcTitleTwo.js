import React, {useState, useEffect} from 'react'
import useDocTitle from './useDocTitle';

function DocTitleTwo() {

    const [count, setCount] = useState(0);

    useDocTitle(count)

    return (
        <div>
            <button onClick={() => {setCount(count + 1)}}>Counter</button> {count}
        </div>
    )
}

export default DocTitleTwo
