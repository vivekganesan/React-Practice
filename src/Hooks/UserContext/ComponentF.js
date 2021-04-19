import React from 'react';
import {UserContaxt, ChennalContext} from '../../App';
// import User from ../../App;

function ComponentF() {
    return (
        <div>
            <UserContaxt.Consumer>
                {
                    user => {
                        return (
                        <ChennalContext.Consumer>
                            {
                                chennal => {
                                    return(<div>User contaxt value {user} and channel is {chennal}</div>);
                                }
                            }
                        </ChennalContext.Consumer>)
                    }
                }

            </UserContaxt.Consumer>
        </div>
    )
}

export default ComponentF
