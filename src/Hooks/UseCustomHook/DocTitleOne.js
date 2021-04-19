import React, {useState, useEffect} from 'react'
import useDocTitle from './useDocTitle';

function DocTitleOne() {

    const [count, setCount] = useState(0);

    useDocTitle(count)

    // useEffect(() => {
    //     document.title = `Count - ${count}`;
    // }, [count]);

    return (
        <div>
            <button onClick={() => {setCount(count + 1)}}>Counter</button> {count}
        </div>
    )
}

export default DocTitleOne
