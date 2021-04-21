import React from 'react'

function EventProperity() {

    // document.querySelector('.name').addEventListener('click', clickEvent);

    let clickEvent = (e) => {
        // const value = e.target.innerText = 'Hello there';
        // const value = e.code;
        const value = e.target.value;
         console.log(value);
    }
    return (
        <form>
            <h>This is header!</h>
            <div>
                <label>Name:</label>
                <input className='name' type="text" name="name" onKeyUp={clickEvent}/>
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email"/>
            </div>
            <div>
                <label>TextMessage:</label>
                <textarea name="textMessage">Enter text here....</textarea>
            </div>
            
        </form>
    )
}

export default EventProperity
