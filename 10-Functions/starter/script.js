'use strict';

//Default Parameters: 

const bookings = [];
 
const createBooking = function(flightNumber, numPassengers = 1, price = numPassengers * 1000) {

    // numPassengers = numPassengers || 1;
    // price = price || 1000;


    const booking = {
        flightNumber,
        numPassengers,
        price
    }

    console.log(booking);
    bookings.push(booking);
}

createBooking(5);
createBooking("A320", 4);
createBooking("A330", 5, 2999);
createBooking("B737", undefined, 4545);