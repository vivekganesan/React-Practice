import React, {useContext} from 'react';
import App from '../../App';
import ComponentF from './ComponentF';
import {UserContaxt,ChennalContext} from '../../App';

function ComponentD() {
    const user = useContext(UserContaxt);
    const channel = useContext(ChennalContext);
    return (
        <div>
            {user} - {channel}
            {/* <ComponentF /> */}
        </div>
    )
}

export default ComponentD
