// let buttonOff = document.querySelector(".glow-on-hover");
// let textButton = buttonOff.innerText === 'TURN OFF'

// buttonOff.addEventListener('click', () =>{
//     textButton !== 'TURN OFF' ? 'TURN ON' : 'TURN OFF'

// });


function toggle() {
    if (document.getElementById("unit").innerHTML === "TURN OFF") {
        document.getElementById("unit").innerHTML = "TURN ON";
    } else  {
        document.getElementById("unit").innerHTML = "TURN OFF";
    }
}





// function changeLabel() {
//     const buttonOff = 
//         document.querySelector('.glow-on-hover');
//     buttonOff.innerHTML = 'Button Clicked!';
// }

// function toggleText(event) {
//     const buttonOff = event.textContent || event.innerText;
//     if (text == 'TURN OFF') {
//         event.innerHTML = 'ON';
//     }
//     else {
//         event.innerHTML = 'TURN OFF';
//     }
// }

// eve