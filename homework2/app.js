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

// З while чому не працюю. НЕ розумію що не правилно зробив. Думаю умову з иф не там може.

let value = 1;

while (value < 10) {

    if (typeof value !== "number") {
        console.log('Таке чуство шо Бог десь наказує нас за шось')
        continue;
    }
    if (value % 2 !== 0) {
        continue;
    }

    value = value + 1;
}

console.log(value);



for (let value2 = 0; value2 < 10; value2 = value2 + 1) {
    if (typeof value2 !== "number") {
        console.log('Таке чуство шо Бог десь наказує нас за шось')
        continue;
    }
    if (value2 % 2 !== 0) {
        continue;
    }
    console.log(value2);
}
