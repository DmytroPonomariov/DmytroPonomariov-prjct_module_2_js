'Strict mode'

const button = document.querySelector('#theme-switch');
const lastUpdate = document.querySelector('#last-update')
const lastUpdateValue = new Date()

// setUpdate()

// function setUpdate {
//     lastUpdate.innerHTML = localStorage.getItem('lastUpdate')
// }


button.addEventListener('click', themeToggle);

function themeToggle() {
    if (localStorage.getItem('theme') === 'light' || !localStorage.getItem('theme')) {
        turnOff();
    } else {
        turnOn();
    }
    localStorage.setItem('lastUpdate', lastUpdateValue)
    lastUpdate.innerHTML = localStorage.getItem('lastUpdate')
}

function turnOff() {
    document.body.classList.add('darkmode')
    localStorage.setItem('theme', 'dark')
    button.innerHTML = "TURN OFF"
    // lastUpdate.classList.remove('text-color')
}

function turnOn() {
    document.body.classList.remove('darkmode')
    localStorage.setItem('theme', 'light')
    // button.innerHTML = "TURN ON"
    // lastUpdate.classList.add('text-color')
}








// let darkmode = localStorage.getItem('darkmode')
// const themeSwitch = document.getElementById('theme-switch')

// const enableDarkmode = () => {
//     document.body.classList.add('darkmode')
//     localStorage.setItem('darkmode', 'active')
// }

// const disableDarkmode = () => {
//     document.body.classList.remove('darkmode')
//     localStorage.setItem('darkmode', null)
// }

// if(darkmode ==='active') enableDarkmode()

// themeSwitch.addEventListener('click', () => {
//     darkmode = localStorage.getItem('darkmode')
//     darkmode !== 'active' ? enableDarkmode() : disableDarkmode()
// })
