import React from 'react'

function CallbackFunctins() {

    // Example 1:
    // let x = function() {
    //     console.log('Item is called inside a function');
    // }

    // let y = function(callback) {
    //     console.log('Function Y is called');
    //     callback();
    // }

    // y(x);

    // Example 2:
    // const add = (num1, num2,) => {
    //     return num1 + num2;
    // }
    // const multiply = (num1, num2,) => {
    //     return num1 * num2;
    // }
    // const cal = (num1, num2, callBack) => {
    //     return callBack(num1, num2)
    //     // if(calcType == 'add'){
    //     //     return num1 + num2;
    //     // }else if(calcType == 'multiply'){
    //     //     return num1 * num2;
    //     // }
    // }

    // console.log(cal(4,3, multiply))

    //Example 3:
    const myArr = [{
        num: 3,
        str: 'apple'
    },
    {
        num: 6,
        str: 'cheppal'
    },
    {
        num: 4,
        str: 'bannana'
    }];

    myArr.sort(function(num1,num2){
        console.log('coimg'+ num1);
        if(num1.str> num2.str){
            return -1
        }
        else{
            return 1;
        }
    });
    console.log(myArr)

    return (
        <div>
            
        </div>
    )
}

export default CallbackFunctins
