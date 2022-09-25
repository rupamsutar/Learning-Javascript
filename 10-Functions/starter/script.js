'use strict';

const flight = "A343V";

const rupam = {
    name: "Rupam Sutar",
    passportNo: 25548569
}

const checkIn = function (flightNo, passenger) {
    flightNo = "LH999";
    passenger.name = "Mr. " + passenger.name;

    if (passenger.passportNo === 25548569) {
        alert("Checked In");
    } else {
        alert("Wrong Passport !")
    }
}

checkIn(flight, rupam)

console.log(flight);
console.log(rupam);

function newPassport(passenger) {
    passenger.passportNo = Math.trunc(Math.random() * 10000000000)
};

newPassport(rupam);
checkIn(flight, rupam);


























/*

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

*/ 