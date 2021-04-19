import React,{useState, useMemo} from 'react'

function CounterMemo() {
    const [countOne, setCountOne] = useState(1);
    const [countTwo, setcountTwo] = useState(1);


    const incrementByOne = () => {

        setCountOne(countOne + 1)
    }
    const incrementByTwo = () => {
        setcountTwo(countTwo + 1)
    }

    const isEven = useMemo(() => {
        let i=0;
        while(i <200000000) i++

       return  countOne % 2 === 0
    }, [countOne])

    // const isEven = () => {
    //     let i=0;
    //     while(i <200000000) i++

    //    return  countOne % 2 === 0
    // }

    return (
        <div>
            <div><button onClick={incrementByOne}>Counter One</button> - {countOne} <span>{isEven ? 'Even' : 'Odd'} </span></div>
            <button onClick={incrementByTwo}>Count Two</button> - {countTwo}
        </div>
    )
}

export default CounterMemo
