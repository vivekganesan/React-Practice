import react,{ useState, useEffect } from 'react';

const Counter = () => {
    const [countVal, setcountVal] = useState(0);
    const [name,setname] = useState('');

    useEffect(() => {
        console.log("document render");
        document.title = `You clicked ${countVal} times`;
    }, [countVal]);
    return (
        <div>
            HI from Use state Hook here is the counter value {countVal}
            <input type="text" value={name} onChange={e => setname(e.target.value)}/>
            <div><button onClick={()=>setcountVal(countVal+1)}>Increment</button></div>
        </div>
    );
};


export default Counter;