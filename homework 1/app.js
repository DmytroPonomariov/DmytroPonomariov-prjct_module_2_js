// homework1

"use strict";

// Assignment 1

const standartRate = 10
const overtimeRate = 12

console.log(standartRate + overtimeRate)
console.log(standartRate - overtimeRate)
console.log(standartRate * overtimeRate)
console.log(standartRate / overtimeRate)
console.log(standartRate ** 2)
console.log(Math. sqrt(standartRate))


// Assignment 2

// З рядка в число і булове
const year1 = "2023";

const date = Number(year1);
const date2 = +year1;
const date3 = Boolean(year1)

console.log(date);
console.log(date2);
console.log(!!date2);
console.log(date3)


const sum = "200euro";

const parsedSum = parseFloat(sum);

console.log(parsedSum);

const sum1 = "0euro";

const parsedSum1 = parseFloat(sum1);
const BooleanSum2 = Boolean(sum1)

console.log(parsedSum1);
console.log(!!parsedSum1);
console.log(typeof !!parsedSum1);
console.log(BooleanSum2);
console.log(typeof BooleanSum2);




// З числа в рядок і булове 

const currency = 100;
const convertedToString = currency.toString();
const convertedToBoolean = Boolean(currency)

console.log(convertedToString);
console.log(typeof convertedToString);
console.log(!!convertedToString);
console.log(typeof !!convertedToString);
console.log(convertedToBoolean);
console.log(typeof convertedToBoolean);

const currency2 = 200; 
const convertedToString2 = currency2 + "";

console.log(convertedToString2);
console.log(typeof convertedToString2)






