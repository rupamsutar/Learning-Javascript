'use strict';


const openingHours = {
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
};

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

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours,

  orderDelivery({starterIndex, mainIndex, time, address}) {
    console.log(`Order Recieved of ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time} on the address : ${address}`);
  },

  orderMaggie(ing1, ing2, ing3) {
    console.log(`Here is your maggie with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderBurger(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(...otherIngredients);
  },

  numGuests: 45,
  
  
};

//The optional Chaining: 

if(Restaurant.openingHours && Restaurant.openingHours.mon) {
  console.log(Restaurant.openingHours.mon);
}

console.log(Restaurant.openingHours?.mon?.open)
console.log(Restaurant.openingHours?.sat?.open)

const days = ["mon", "tue","wed", "thu", "fri", "sat"];

for (const day of days) {
  const open = Restaurant.openingHours[day]?.open ?? "Closed";
  console.log(`On ${day} we open at ${open}`);
}

//Methods:

console.log(Restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(Restaurant.orderCoffe?.(0, 1) ?? "Method does not exist");

//Arrays
const users = [{
  name: "Rupam",
  surname: "Sutar",
  enrollmentNumber: 1516120162
}];

const shelby = [];

console.log(users[0]?.name ?? "No found user");
console.log(shelby[0]?.name ?? "No found user");























/*

//Enhanced Object Literals:
console.log(Restaurant)



//The for-of Loop

const menu = [...Restaurant.starterMenu, ...Restaurant.mainMenu];

for (const [i, el] of menu.entries()) console.log(`${i + 1} : ${el}`);


//challenge 1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
}


const [player1, player2] = game.players;

console.log(player1);
console.log(player2);

const [gk, ...fieldPlayers] = player1;

console.log(gk);
console.log(fieldPlayers);

const allPlayers = [...player1, ...player2];
console.log(allPlayers);

const player1Final = [...player1, "tiago", "continho", "perisic"];
console.log(player1Final);

const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

function printGoals()



// Logical Assignment Operators: 

const rest1 = {
  name: "La Piazza",
  numGuests: 20,
  tables:30
}

const rest2 = {
  name: "Hotel Torna",
  owner: "Shinde Mama"
}

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests =  rest2.numGuests || 10;

console.log(rest1);
console.log(rest2);

//OR Equal operator:
// this works same as the above but in a more modern way:

rest1.tables ||= 10;
rest2.tables ||= 10;

console.log(rest1);
console.log(rest2);

// the same goes for and equal operator

rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1.owner);
console.log(rest2.owner);

// the same goes for nullish equal operator:

rest1.tables = 0;

rest1.tables ??= 10;
rest2.tables ??= 10;

console.log(rest1.tables);
console.log(rest2.tables);



//  The Nullish Coalescing Operator (??):

Restaurant.numGuests = 0;

const guests = Restaurant.numGuests ?? 10;

console.log(guests);




// Short circuiting (&& and ||) :

//shortcircuiting
console.log(3 || "Rupam") // logs 3 as 3 is a truthy value
console.log(0 || "Rupam") // logs "Rupam" as 0 is a falsy value
console.log(true || undefined) // logs true as true is a truthy value 
console.log(0 || null) // logs null as it is the last falsy value

console.log(null || undefined || 0 || "Rupam Sutar" || "" || 0); // logs Rupam sutar

let noOfGuests = Restaurant.numGuests ? Restaurant.numGuests : 10; 

//the above statement can be completely replaced by shortcircuiting.

noOfGuests = Restaurant.numGuests || 10;

console.log(noOfGuests)

console.log("--------- AND ---------");

//And operator is complete opposite of Or operator, it shortcircuits at falsy values
console.log(0 && "Rupam") // logs 0 as it is the first falsy value.
console.log(17 && "Rupam") // logs "rupam " as there is no falsy value and "RUpam" is the last truthy value.
console.log("Rupam" && "sutar" && 17 && null && 45);




//Rest pattern and Parameter: 
const arr = [1, 2, 3, 4, 5, 6,];

//Spread operator is on the right side of equal symbol:
const newArr = [...arr, 7, 8, 9, 10];

// Rest patter is on the left side of the equal symbol:
const [a, b, c, ...newRestArr] = newArr;

console.log(a, b, c, newRestArr);

const [qwe, ,asd, ...otherFood]=[...Restaurant.starterMenu, ...Restaurant.mainMenu]

console.log(qwe, asd, otherFood);

//RestPattern on objects:

const {sat, ...weekDays} = Restaurant.openingHours;
console.log(weekDays);
const {fri: friday, thu: thursday} = weekDays;
console.log(friday, thursday);


//Rest Pattern for Functions:

function add(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2,3,4,1,323,45);
add(3,45,23,3);
add(89,47,37);


Restaurant.orderBurger("Tikki", "Onion", "Tomatoes", "Ketchup", "Mayonese");











// Spread Operator:

const arr = [1, 2, 3, 4, 5];

const newarr = [...arr, 6, 7, 8, 9, 10];

console.log(newarr);

const fullMenuOfRestaurant = [...Restaurant.starterMenu, ...Restaurant.mainMenu, "VadaPav", "Maggie", "French-Fries"];
console.log(fullMenuOfRestaurant);

// Iterablaes: Arrays, Strings, maps, sets
// and the spread operator is applicable to the Iterables:

const myName = "Rupam Jaywant Sutar"
console.log([...myName]);

const maggieIngredients = [
  prompt("Please mention your ingredient 1 for the maggie"),
  prompt("Please mention your ingredient 2 for the maggie"),
  prompt("Please mention your ingredient 3 for the maggie")
];

Restaurant.orderMaggie(...maggieIngredients);


// Destructuring Objects:

Restaurant.orderDelivery({
  time: "22:30",
  address: "Rajneegandha Housing society",
  mainIndex: 2,
  starterIndex: 1,
});




const {name, categories, openingHours} = Restaurant;
console.log(name, categories, openingHours);
console.log(" ");
console.log("88888888888888888888888888888888888888888888888888888888")

const {name: restaurantName, starterMenu: starters, mainMenu: mainCourse} = Restaurant;
console.log(restaurantName, starters, mainCourse );

//Default values:
const {amenu=[], name: hotel, location: locations = []} = Restaurant;
console.log(amenu, hotel, locations);

//Mutating Values:
let a = 999;
let b = 888;

const obj = {
  a: 15,
  b: 30,
  c: 45
};

({a, b} = obj);
console.log(a,b)

const {fri: {open:aa ,close:bb}} = openingHours;
console.log(aa, bb);


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

*/

