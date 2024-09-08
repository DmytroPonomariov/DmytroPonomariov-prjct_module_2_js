// Homework 3

"use strict";

// // Assignment 1

// function recursiveOddSumTo(number){

//     if (number === 1) {
//         return number;
//     }

//     if (number % 2 !== 0){
//         return number + recursiveOddSumTo(number -1);
//     }
//     return recursiveOddSumTo(number -1);
// };

// console.log(recursiveOddSumTo(10))

// // Assignment 2

// function iterativeOddSumTo(number) {
//     let result = 0

//     for (let i = 0; i < number; i++) {
//         if (i % 2 !== 0) {
//             result = result + i
//         }
//     }

//     return result;
// };

// console.log(iterativeOddSumTo(10))

// userNames1
//   .map((name) => {
//     return (name.split(' ').map((part) => part[0]))
//     })


// Homework4

// Assignment 1

const userNames = [
    "Петрик Ольга Іванівна", 
    "Гнатюк Петро Антонович", 
    "Рудко Андрій Опанасович"
];
let initials = userNames.map(function (name) {
    return name.split(' ').map(function (letter) {
        return letter[0]
    }).join('.');
})
initials.sort();

console.log(initials);


// Assignment 2

// Variant 1

const userNames2 = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
let filteredNames2 = userNames2.filter(function(name) {
    if (['А', 'Е', 'Є', 'И', 'І', 'Ї', 'О', 'У', 'Ю', 'Я'].includes(name[0])){
        return true
    }
})

console.log(filteredNames2);


// Variant 2
 

const userNames3 = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];

const userNames3vowels = [];

for (let i = 0; i < userNames3.length; i++) {
    if (['А', 'Е', 'Є', 'И', 'І', 'Ї', 'О', 'У', 'Ю', 'Я'].includes(userNames3[0])){
        userNames3vowels.push()
        }
  }
  console.log(userNames3vowels);


// Assignment 3


let reverseMaxValue = 0
const currentMaxValue = 4589;

reverseMaxValue = Number(String(currentMaxValue).split('').reverse().join(''));
console.log((reverseMaxValue));
console.log(typeof reverseMaxValue);


// Assignment 4

const resultsArray = [1, 2, [3, [4]]];

const expression = resultsArray.flat(Infinity)
.reduce(function(accumulator, currentValue) {
    return accumulator * currentValue
});

console.log(expression);


// Homework 5

// Assignment 1
// Math.abs(Math.round(days))

// const startDate = new Date("07/15/2015");  
// const endDate = new Date("11/28/2016");  

// function daysDurationBetweenDates(startDate, endDate, type) {
//     switch (type) {
//         case "days":
//         let days = (endDate.getTime() - startDate.getTime()) / 1000;
//         days /= (60 * 60 * 24);
//         return days + 'days'
//     }

// }

// console.log(daysDurationBetweenDates(startDate, endDate, "days"))


// Assignment 2

// const resultsArray = [1, 2, [3, [4]]];

// const expression = resultsArray.flat(Infinity)
// .reduce(function(accumulator, currentValue) {
//     return accumulator * currentValue
// });

// console.log(expression);

// приклад об'єкту
// const priceData = {
//     Apples: '23.4',
//     BANANAS: '48',
//     oRAngGEs: '48.7584',
//     };

// let entries = Object.entries(priceData);
// let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
// let capsPriceData = Object.fromEntries(capsEntries);

// console.log(capsPriceData);


// function LowerCase {
//     let entries = 
// }obj =>
//   Object.keys(obj).reduce((acc, k) => {
//     acc[k.toLowerCase()] = obj[k];
//     return acc;
//   }, {});

// lowerize({ Name: 'John', Age: 22 });

// console.log(lowerize)



    
    // function optimizer(data) {
    //     // тут ваш код
    // };

    new Object
