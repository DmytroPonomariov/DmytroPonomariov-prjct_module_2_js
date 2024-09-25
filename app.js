"use strict";

// Homework7

// Assignment 1

// detonatorTimer(delay) {
// 	return function (delay){
// 		for (let i = 0, i < 4; += 1) {
// 			console.log
// 		}
// 	}
// }



// console.log(detonatorTimer(3))


// function sayHi(delay) {
// 	return function (delay){
// 		for (let i = 0, i < 4; i++) {
// 			console.log(i)
// 		}
// 	}
// }

// const timerId = setTimeout(sayHi, 1000)
// console.log(timerId);
// clearTimeout(timerId);

const timerId = setInterval(detonatorTimer, 1000)

function detonatorTimer(delay) {
	for (let i = delay; i>= 0; i--) {
		
		console.log(i);
		// if (i = 0){
		// 	console.log("Boom")
		// }
	}

	
	
}


console.log(detonatorTimer(3))


// const timerId = stInterval(SayNum, 1000)

// function SayNum(){
// 	const delay = 3


// for (let i = delay; i>= 0; i--) {
// 	console.log(i);
// 	// if (i = 0){
// 	// 	console.log("Boom")
// 	// }
// }

// }

// const delay = 3


// for (let i = delay; i>= 0; i--) {
// 	console.log(i);
// 	// if (i = 0){
// 	// 	console.log("Boom")
// 	// }
// }


// Assignment 3

let me = {
	name: 'Dmytro',
	residency: 'Lviv',
	gender: 'male',
	age: 31,
	hobby: 'crafting',
	defaultMood: 'focused',
	currentMood: 'sleepy',
	introduce() {
		console.log(`My name is ${this.name} and I live in ${this.residency}`);
	},
	prognose() {
		console.log(`I hope that next year I'm gonna be ${this.age+1}`);
	},
	describeMyMood(){
		console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
	}
}

me.introduce();
me.prognose();
me.describeMyMood();