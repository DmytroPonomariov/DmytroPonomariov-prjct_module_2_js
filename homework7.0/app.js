"use strict";

// Homework7

// Assignment 1

// Variant 1

function detonatorTimer(delay) {
	if (delay > 0) {
	  console.log(delay);
	  delay --;
	  setTimeout(detonatorTimer, 1000, delay);
	} else if (delay === 0) {
	  console.log('Boom');
	}
}

detonatorTimer(3);

// Variant 2

function detonatorTimer2(delay2) {
	if (delay2 > 0) {
	  console.log(delay2);
      setTimeout(() => detonatorTimer2(delay2 - 1), 1000)
	} else if (delay2 === 0) {
	  console.log('Boom');
	}
}

detonatorTimer2(3);

// Assignment 2


function detonatorTimer(delay) {
	const timerId = setInterval(function(){
		if ((delay) > 0) {
			console.log(delay)
			delay --
		}
		else {
			console.log('Boom')
			clearInterval(timerId)
		}
	}, 1000)
}

detonatorTimer(4)


// Assignment 3

let me = {
	name: 'Dmytro',
	residency: 'Carlow',
	gender: 'male',
	age: 26,
	hobby: 'analog photography',
	analogCamera: 'Nikon, Minolta, Fujifilm',
	introduce() {
		console.log(`My name is ${this.name} I live in ${this.residency} and I ${this.age} years old`);
	},
	freetimeHobby() {
		console.log(`I have a lot of hobby but one of my favorite ${this.hobby} `);
	},
	freetimeHobbyDescrtion: function(favoriteCamera) {
		console.log(`I have a few cameras such as ${this.analogCamera} but my favorite is ${favoriteCamera}`);
	}
}

me.introduce();
me.freetimeHobby();
me.freetimeHobbyDescrtion("Fujifilm ST608");

// Assignment 4

let securedSelfIntroduce = me.introduce.bind(me)
let securedSelfFreetimeHobby= me.freetimeHobby.bind(me)
let securedSelfFreetimeHobbyDescrtion = me.freetimeHobbyDescrtion.bind(me, "Fujifilm ST608");

setTimeout(securedSelfIntroduce, 1000); 
setTimeout(securedSelfFreetimeHobby, 2000); 
setTimeout(securedSelfFreetimeHobbyDescrtion, 3000); 


// Assignment 5


function sayHello(name) {
    console.log('Hello ' + name);
    }


function slower(func, seconds) {
    return function (...args) {
      console.log(`Chill out, you will get your result in ${seconds} seconds`);
      setTimeout(function(){
        func(...args)
      }, seconds * 1000);
    };
  }

  let slowedSomeFunction = slower(sayHello, 5);
  
  slowedSomeFunction("Dmytro");


