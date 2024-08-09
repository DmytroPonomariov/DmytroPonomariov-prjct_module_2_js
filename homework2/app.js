// // homework1

// "use strict";

// // const name = "Anna";

// // console.log("Hello, " + name);
// // console.log(`Hello, ${name}`);

// // Assignment 1

// const standartRate = 10
// const overtimeRate = 12

// console.log(standartRate + overtimeRate)
// console.log(standartRate - overtimeRate)
// console.log(standartRate * overtimeRate)
// console.log(standartRate / overtimeRate)
// console.log(standartRate ** 2)
// console.log(Math. sqrt(standartRate))


// // Assignment 2
// // Typeof написав для самоперевірки. 
// // З числа в рядок і булове
// let age = 18 
// age = "18"

// console.log(typeof age)
// console.log(typeof !!age)

// // З рядка в число і булове
// let year = "2024" 
// year = 2025

// console.log(typeof year)
// console.log(typeof !!year)

// // З буловго в число і рядок
// let isActive = true
// isActive = 3
// isActive = "3"

// console.log(typeof isActive)

// // можливо це все що я зробив це не пертворення, а перепризначення(перепрописання)
// // А перетворення нижче 

// // З рядка в число і булове
// const year1 = "2023";

// const date = Number(year1);
// const date2 = +year1;
// const date3 = Boolean(year1)

// console.log(date);
// console.log(date2);
// console.log(!!date2);
// console.log(date3)


// const sum = "200euro";

// const parsedSum = parseFloat(sum);

// console.log(parsedSum);

// const sum1 = "0euro";

// const parsedSum1 = parseFloat(sum1);
// const BooleanSum2 = Boolean(sum1)

// console.log(parsedSum1);
// console.log(!!parsedSum1);
// console.log(typeof !!parsedSum1);
// console.log(BooleanSum2);
// console.log(typeof BooleanSum2);




// // З числа в рядок і булове 

// const currency = 100;
// const convertedToString = currency.toString();
// const convertedToBoolean = Boolean(currency)

// console.log(convertedToString);
// console.log(typeof convertedToString);
// console.log(!!convertedToString);
// console.log(typeof !!convertedToString);
// console.log(convertedToBoolean);
// console.log(typeof convertedToBoolean);

// const currency2 = 200; 
// const convertedToString2 = currency2 + "";

// console.log(convertedToString2);
// console.log(typeof convertedToString2)






// Homework 2

"use strict";

// Assignment 1


for (let number = 1; number < 101; number = number + 1) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("lolkek")
        continue;
    }
    if (number % 3 === 0) {
        console.log("lol")
        continue;
    }
    if (number % 5 === 0) {
        console.log("kek")
        continue;
    }
    console.log(number);
}

// Assignment 2

// let value = 2;

// while (value < 10) {
//     console.log(value);
//     value = value + 2;
// }

const value = 10

for (let number = 0; number < 10; number = number + 1) {
    if (typeof value !== "number") {
        console.log('Таке чуство шо Бог десь наказує нас за шось')
        continue;
    }
    if (number % 2 !== 0) {
        continue;
    }
    console.log(number);
}

// for (let value2 = 2; value2 < 10; value2 = value2 + 2) {
//     if (value2 = !+ = 'Таке чуство шо Бог десь наказує нас за шось')
//     console.log(value2)
// }

// for (let value2 = 2; value2 < 10; value2 = value2 + 2) {
//     if (value2 = )
//     console.log(value2)
// }
