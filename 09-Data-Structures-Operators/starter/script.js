'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
 
// Data needed for first part of the section
const Restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Practice Started Here:

const arr = [6,7,8,9]; 

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

console.log(a ,b, c, x, y, z);

let [first, second] = Restaurant.categories;
console.log(first, second);

const temp = first;
first = second;
second = temp;

console.log(first, second);
[first, second] = [second, first];
console.log(first, second);
console.log("88888888888888888888888888888888888888888888888888888888888888888888");

const[starterCourse, mainCourse] = Restaurant.order(2, 0);
console.log(starterCourse + " & " + mainCourse);

//Nested Destructuring :

const nested = [1, 2, 3, [4, 5, 6]];

// const [i,j,,l] = nested;
// console.log(i, j, l);

const [i, j, k, [l, m, n]] = nested;
console.log(i, j, k, l, m, n);



