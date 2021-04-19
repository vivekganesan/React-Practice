import React from 'react'
// import Promise from 'react-promise';

function Promises1() {

    var Promise = require('promise');

    let cleanRoom = function() {
        console.log('ccccc');
        return new Promise(function(resolve,reject){
            resolve("Room Cleaned");
        })
    }

    let removeCarbage = function(resolve, reject) {
        return new Promise(function(resolve, reject){
            resolve("Carbage cleaned");
        })
    }

    let winIceCream = function(resolve, reject) {
        return new Promise(function() {
            resolve("Win Ice Cream");
        })
    }

    cleanRoom().then(function(){
        return removeCarbage();
    }).then(function(p){
        return winIceCream()
    }).then(function(p){
        console.log("Finished");
    });
    return (
        <div>
            
        </div>
    )
}

export default Promises1
