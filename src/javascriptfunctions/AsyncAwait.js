import React from 'react'

function AsyncAwait() {
    // Promise example1:
    // console.log('Person1: Ticket');
    // console.log('Person2: Ticket');

    // const PromiseWifeBringTicket = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve('ticket');
    //     }, 3000);        
    // });

    // PromiseWifeBringTicket.then((t) => {
    //     console.log(`Person3: ${t}`)
    // });

    // console.log('Person4: ticket');
    // console.log('Person5: ticket');

    // Async example1:
    // console.log('Person1: Shows Ticket');
    // console.log('Person2: Shows Ticket');
    // const preMovie = async () => {
    //     const promiseWifeBringTicket = new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             resolve('ticket');
    //         }, 3000) 
    //     });

    //     const getPopcorn = new Promise((resolve,reject) => resolve('Popcorn'));
    //     const addButter = new Promise((resolve,reject) => resolve('Butter'));


    //     const ticket = await promiseWifeBringTicket;
    //     console.log(`Wife: I got ${ticket}`);
    //     console.log(`Hudband: Let's go in`);
    //     console.log(`I want popcorn`);
    //     const popcorn = await getPopcorn;
    //     console.log(`Husband: I bought ${popcorn}`);
    //     console.log(`Wife: Can you please add some butter in it please!`);
    //     const butter = await addButter;
    //     console.log(`husband:  Honey! I added ${butter} in popcorn`);
    //     console.log('Let\'s Go honey');
    //     return `${ticket} - ${popcorn} - ${butter}`;
    // };

    // preMovie().then((t) => console.log(t))

    // console.log('Person4: Shows Ticket');
    // console.log('Person5: Shows Ticket');

    // Async Example2:
    // console.log('Person1: Shows Ticket');
    // console.log('Person2: Shows Ticket');
    // const preMovie = async () => {
    //     const promiseWifeBringTicket = new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             resolve('ticket');
    //         }, 3000) 
    //     });

    //     const getPopcorn = new Promise((resolve,reject) => resolve('Popcorn'));
    //     const addButter = new Promise((resolve,reject) => resolve('Butter'));


    //     const ticket = await promiseWifeBringTicket;

    //     let [popcorn,butter] = await Promise.all([getPopcorn, addButter])
        
    //     // const popcorn = await getPopcorn;
        
    //     // const butter = await addButter;

    //     console.log(`${ticket} - ${popcorn} - ${butter}`)
        
    //     return ticket;
    // };

    // preMovie().then((t) => console.log(`Person3: shows ${t}`))

    // console.log('Person4: Shows Ticket');
    // console.log('Person5: Shows Ticket');

    // Aysnc Await example4:
    console.log('Person1: Shows Ticket');
    console.log('Person2: Shows Ticket');
    const preMovie = async () => {
        const promiseWifeBringTicket = new Promise((resolve,reject) => {
            setTimeout(() => {
                reject('ticket');
            }, 3000) 
        });
        let ticket;
        try{
            ticket = await promiseWifeBringTicket;
        }catch(e) {
            ticket = 'Sad face'
        }

        
        
        return ticket;
    };

    preMovie().then((t) => console.log(`Person3: shows ${t}`))

    console.log('Person4: Shows Ticket');
    console.log('Person5: Shows Ticket');


    return (
        <div>
            
        </div>
    )
}

export default AsyncAwait
