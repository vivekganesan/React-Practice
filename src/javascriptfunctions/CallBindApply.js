import React from 'react'

function CallBindApply() {

    let obj = {num: 5};

    let applyToThis = function(a,b,c) {
        return this.num + a + b + c;
    }

    let arr = [1,2,3];

    // console.log(applyToThis.call(obj, 6, 7, 8 ));
    // console.log(applyToThis.apply(obj, arr));
    let bound = applyToThis.bind(obj);
    console.log(bound(6,7,8))
    return (
        <div>

        </div>
    )
}

export default CallBindApply
