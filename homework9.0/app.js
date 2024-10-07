'Strict mode'

const button = document.querySelector('#theme-switch');
const lastUpdate = document.querySelector('#last-update')
const lastUpdateValue = new Date()
const lastUpdateText = document.querySelector('.last-update_text')


button.addEventListener('click', themeToggle);
document.addEventListener('DOMContentLoaded', init);

function init() {
    if ( localStorage.getItem('theme')) {
        if ( localStorage.getItem('theme') === 'dark' ) {
            turnOff();
        } else {
            turnOn()
        }
    }
}

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
    button.innerHTML = "TURN ON"
    lastUpdate.innerHTML = localStorage.getItem('lastUpdate')
    lastUpdate.classList.add('text-color')
    lastUpdateText.classList.add('text-color')
}

function turnOn() {
    document.body.classList.remove('darkmode')
    localStorage.setItem('theme', 'light')
    button.innerHTML = "TURN OFF"
    lastUpdate.innerHTML = localStorage.getItem('lastUpdate')
    lastUpdate.classList.remove('text-color')
    lastUpdateText.classList.remove('text-color')

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
