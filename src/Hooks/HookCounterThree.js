import React, { useState } from 'react';

function HookCounterThree() {
    const [Name, setName] = useState({ firstName: '', lastName: '' });
    return (
        <form>

            <div><input type="text" value={Name.firstName}
                onChange={(e) => setName({ ...Name, firstName: e.target.value })} />
                <span>First Name is: {Name.firstName}</span>
            </div>
            <div><input type="text" value={Name.lastName} 
                onChange={e => setName({...Name, lastName: e.target.value})}/>
                <span>Last Name is: {Name.lastName}</span>
            </div>
            <h2>{JSON.stringify(Name)}</h2>


        </form>
    )
}

export default HookCounterThree
