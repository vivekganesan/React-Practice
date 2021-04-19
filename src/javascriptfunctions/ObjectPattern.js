import { object } from 'prop-types';
import React from 'react'

function ObjectPattern() {

    //Pattern 1:
    const peopleFactory = (name,age,city) => {
        // var temp = {};
        var temp = new Object;
        temp.name = name;
        temp.age = age;
        // temp.peopleConsole = function() {
        //     console.log(`${name} - ${age} - ${city}`)
        // }
        temp.peopleConsole = () => {
            console.log(`${name} - ${age} - ${city}`)
        }
        return temp;
    }

    let person1 = peopleFactory('vivek',28,'CBE');
    let person2 = peopleFactory('Tarunika', 22, 'CHE')
    person1.peopleConsole();
    person2.peopleConsole();
    // Constructor patter
    const peopleConstructorPatter = function(name,age,state) {
        this.name = name;
        this.age=age;
        this.state=state;
        this.printPerson = () => {
            console.log(`${name} - ${age} - ${state}`)
        }
    }

    let person3 = new peopleConstructorPatter('vijay' , 45, 'USA');
    let person4 = new peopleConstructorPatter('ajith' , 50, 'UK');

    person3.printPerson();
    person4.printPerson();

    //Prototype pattern
    var protoPattern = function() {

    }

    protoPattern.prototype.name = 'no name';
    protoPattern.prototype.age = 0;
    protoPattern.prototype.state = 'no state';
    protoPattern.prototype.print = function() {
        console.log(this.name + " " + this.age + " " + this.state)
    }
    var people1 = new protoPattern();
    people1.name = 'sujay'
    people1.age = 3;
    people1.state = 'Ganesapuram';
    console.log('name' in people1);
    console.log(people1.hasOwnProperty('name'));

    // people1.print();
    // console.dir(protoPattern)


    // Dynamic proptype pattern

    var dynamicProtoPattern = function(name,age,state) {

        this.name = name;
        this.age = age;
        this.state = state;
        if( typeof this.print !== 'function'){
            dynamicProtoPattern.prototype.print = function() {
                console.log(this.name + " " + this.age + " " + this.state)
            }
        }
    }
    let dynPerson1 = new dynamicProtoPattern('ganesan', 58, 'SMC');
    dynPerson1.print();

    

    return (
        <div>
            
        </div>
    )
}

export default ObjectPattern
