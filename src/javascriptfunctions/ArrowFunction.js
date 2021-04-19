import React, {useEffect} from 'react'

function ArrowFunction() {
    // Normal function
    let x = function(){
        this.val = 1;
        // setTimeout(function() {
        //     this.val++;
        //     console.log(this.val);
        // },1)
        setTimeout(() => {
            this.val++;
            console.log(this.val);
        },1);
    }

    // const x1 = function() {
    //     console.log(arguments[0]);
    // }

    const x1 = (...n)  => {
     console.log(n[0]);
    }

    useEffect(() => {
        x1(5,2,8);

        var xx = new x();
    });
    
   
    return (
        <div>
            
        </div>
    )
}

export default ArrowFunction
