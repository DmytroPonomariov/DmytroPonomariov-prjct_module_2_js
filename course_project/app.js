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





const countdownElement = document.getElementById('countdown');
const presetButtons = document.querySelectorAll('.preset-button');
const customDateInput = document.getElementById('custom-date-input');

// Set the default preset to 2 weeks
let targetDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);

// Update the countdown display
function updateCountdown() {
  const now = new Date();
  const timeDiff = targetDate - now;
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  countdownElement.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Handle preset button clicks
presetButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const presetValue = e.target.dataset.preset;
    switch (presetValue) {
      case '2 weeks':
        targetDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);
        break;
      case '1 month':
        targetDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
        break;
    }
    updateCountdown();
  });
});

// Handle custom date input
customDateInput.addEventListener('input', (e) => {
  const customDate = new Date(e.target.value);
  targetDate = customDate;
  updateCountdown();
});



















// <!-- <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <div class="container">
//         <h1 class="app__title">Time determinator and pointer of holidays in countries apps</h1>
//         <section class="time_determinator__section">
//             <div class="container">
//                 <h2 class="time_determinator__title">Time determinator app</h2>
//                 <div class="time_determinator__input/parameters">
//                         <div class="time_determinator__input">
//                             <input type="text" placeholder="Start date">
//                             <input type="text" placeholder="End date">
//                             <button type="submit">SUBMIT</button>
//                         </div>
//                         <div class="time_determinator__parameters">
//                             <div class="container">
//                               <fieldset>
//                                 <legend>Select time interval presets</legend>
//                                 <div>
//                                     <input type="radio" id="week" name="preset" value="week" />
//                                     <label for="week">Week</label>
//                                 </div>
//                                 <div>
//                                     <input type="radio" id="month" name="preset" value="month" />
//                                     <label for="month">Month</label>
//                                 </div>
//                               </fieldset>
//                               <fieldset>
//                                 <legend>Select days frequency option</legend>
//                                 <div>
//                                     <input type="radio" id="all_days" name="option" value="all_days" checked />
//                                     <label for="all_days">All days</label>
//                                 </div>
//                                 <div>
//                                     <input type="radio" id="weekdays" name="option" value="weekdays" />
//                                     <label for="weekdays">Weekdays</label>
//                                 </div>
//                                 <div>
//                                   <input type="radio" id="weekends" name="option" value="weekends" />
//                                   <label for="weekends">Weekends</label>
//                                 </div>
//                               </fieldset>
//                               <fieldset>
//                                 <legend>Select measurement parameters</legend>
//                                 <div>
//                                     <input type="radio" id="days" name="parameter" value="days" checked/>
//                                     <label for="days">Calculate the number of days</label>
//                                 </div>
//                                 <div>
//                                   <input type="radio" id="hours" name="parameter" value="hours" />
//                                   <label for="hours">Calculate the number of hours</label>
//                                 </div>
//                                 <div>
//                                   <input type="radio" id="minutes" name="parameter" value="minutes" />
//                                   <label for="minutes">Calculate the number of minutes</label>
//                                 </div>
//                                 <div>
//                                   <input type="radio" id="seconds" name="parameter" value="seconds" />
//                                   <label for="seconds">Calculate the number of seconds</label>
//                                 </div>
//                               </fieldset>
//                             </div>
//                         </div>
//                       </div>
//                     </div>
//                 <div class="time_determinator__response-table">
//                     <div class="container">
                      
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </div>
//     <script src="./app.js"></script>
// </body>
// </html> --></head>