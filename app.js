// Homework 5

// Assignment 1

// Math.abs(Math.round(days))

const startDate = new Date("09/01/1939");  
const endDate = new Date("05/08/1945");  

function daysDurationBetweenDates(startDate, endDate, type) {
    switch (type) {
        case "days":
            let days = (endDate.getTime() - startDate.getTime()) / 1000;
            days = Math.abs(Math.round(days / (60 * 60 * 24)))
            return days + ' days'
        case "hours":
            let hours = (endDate.getTime() - startDate.getTime()) / 1000;
            hours = Math.abs(Math.round(hours / (60 * 60)))
            return hours + ' hours'
        case "minutes":
            let minutes = (endDate.getTime() - startDate.getTime()) / 1000;
            minutes = Math.abs(Math.round(minutes / (60)))
            return minutes + ' minutes'
        case "seconds":
            let seconds = (endDate.getTime() - startDate.getTime()) / 1000;
            seconds = Math.abs(Math.round(seconds))
            return seconds + ' seconds'
    }
}

console.log(daysDurationBetweenDates(startDate, endDate, "days"))


// Assignment 2

// const rounded = number.toFixed(2)


const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
    };

const priceDataNew = {}

for (const [key, value] of Object.entries(priceData)){
    const keyUpperCase = [key].toUpperCase();
    priceDataNew.push([key])
    const valueRound = (Number([value]).toFixed(2)).toString;
    priceDataNew.push([value])
}

console.log(priceDataNew)



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
