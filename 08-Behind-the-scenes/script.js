'use strict';
 
/*
console.log(this);

function calcAge(birthYear) {
    console.log(2022-birthYear);
    console.log(this);
};

calcAge(1998);

const calcAgePranali = birthYear => {
    console.log(2022-birthYear);
    console.log(this);
} 
calcAgePranali(1999);

const Rupam = {
    birthYear: 1998,
    profession: "WebDeveloper",
    calcAge: function() {
        console.log(this);
    }
};
Rupam.calcAge();

*/

const Rupam = {
    firstName: "Rupam",
    birthYear: 1998,
    profession: "WebDeveloper",
    calcAge: function() {
        console.log(this);
    },

    

    
};


