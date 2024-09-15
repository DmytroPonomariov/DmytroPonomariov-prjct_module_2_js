// Homework6

// Assignment 1

console.log(addThemAll(2,4)); // 6
console.log(addThemAll(1,2,3,4)); // 10
console.log(addThemAll(5,5,10)); // 20

function addThemAll(...args) {
    let addThemAll = 0;
    for (let arg of args) addThemAll += arg;
    return addThemAll;
}

// Assignment 3

multiply(a)(b)  // a * b

console.log(multiply(5)(5))		// 25
console.log(multiply(2)(-2))	        // -4
console.log(multiply(4)(3))		// 12

function multiply(a) {
    return function(b) {
        return a * b
    }
}

// Assignment 3

// const numbers2 = [1, 2, 25, 15];

// numbers2.sort(() => a - b);

const movies = [
	{
		movieName: 'The Thing',
		releaseYear: 1982,
		directedBy: 'Carpenter',
		runningTimeInMinutes: 109,
	},
	{
		movieName: 'Aliens',
		releaseYear: 1986,
		directedBy: 'Cameron',
		runningTimeInMinutes: 137,
	},
	{
		movieName: 'Men in Black',
		releaseYear: 1997,
		directedBy: 'Sonnenfeld',
		runningTimeInMinutes: 98,
	},
	{
		movieName: 'Predator',
		releaseYear: 1987,
		directedBy: 'McTiernan',
		runningTimeInMinutes: 107,
	},
];



function byProperty(property, direction){
    return function(movieA, movieB){
        if (movieA[property] > movieB[property]){
            return direction === '<'? 1 : -1
        }
        if (movieA[property] < movieB[property]){
            return direction === '<'? -1 : 1
        }
        return 0
    }
}

console.log(movies.sort(byProperty('releaseYear', '>'))); 





// Assignment 4

const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

function someName() {
    return [...new Set(userNames)]
}

const userNamesUnique = someName()

console.log(userNamesUnique); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена']


