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
        userNames3vowels.push(userNames3)
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