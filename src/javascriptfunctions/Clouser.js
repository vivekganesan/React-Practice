import React from 'react'

// What is clouser?

// JavaScript variables can belong to the local or global scope.

// Global variables can be made local (private) with closures.

// A function preserve a data is called clouser

function Clouser() {
    // let passed = 3;
    // let addTO = function() {
    //     let i = 2;
    //     return passed + i;
    // }

    // console.dir(addTO)

    let addTo = function(passed) {
        let add = function(inner){
            return passed + inner;
        }
        return add
    }

    // console.dir(addTo(3));
    let addFour = addTo(3);
    console.log(addFour(4));

    return (
        <div>
            Coming
        </div>
    )
}

export default Clouser
