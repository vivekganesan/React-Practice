import React, {useEffect} from 'react'

function ObjectOrentedJavascript() {
    const x = Object();
    //Example1:
    // let pizza = {
    //     crust: 'thin',
    //     toppings: 3,
    //     hasBacon: true,
    //     howManytoppings: function() {
    //         return this.toppings;
    //     }

    // }
    // pizza.price = '12$'
    // console.log(pizza);

    //Example2: Public variable
    // let pizza = function() {
    //     this.crust= 'thin';
    //     this.toppings = 3;
    //     this.hasBecon = true;
    // };

    // const pizzaA = new pizza();
    // const pizzaB = new pizza();
    // pizzaA.crust = 'thick'
    // // console.log(pizzaA instanceof pizza);
    // console.log(pizzaA.constructor);
    // console.log(pizza.crust);

    //Example3: Private variable
    
    let pizza = function() {
        var crust = 'thin';
        this.hasBecon = true;
        var prize = '12$'
        this.getHasBecon = function() {
            return this.hasBecon;
        }

        this.getCrust = function() {
            return crust;
        }
        var getPrize = function() {
            return prize;
        }
        var temp = {};
        temp.getPrize = getPrize;
        return temp;

    }

    useEffect(() => {
        var pizzaA = new pizza()
        // console.log(pizzaA.getPrize());
        // console.dir(pizzaA.getCrust());
    });

    
    return (
        <div>
            
        </div>
    )
}

export default ObjectOrentedJavascript
