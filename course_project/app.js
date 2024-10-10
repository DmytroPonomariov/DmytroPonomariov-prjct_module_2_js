'use strick'

const form = document.querySelector('.date_range_form')
const futureDateInput = document.getElementById('future_date');
const todayDateInput = document.getElementById('today_date');
console.log(todayDateInput)
const selectedRadioButtonsDaysType = document.querySelectorAll('.input-daysType');
const selectedRadioButtonsMeasure = document.querySelectorAll('.input-measure');
const selectedRadioButtonsPreset = document.querySelectorAll('.input-preset');
const dataRangeOutputList = document.querySelector('.data_range_output_list');
const DeleteHistoryButton = document.querySelector('.clear_dates')


const DATES_STORAGE_KEY = 'DATES';

document.addEventListener('DOMContentLoaded', renderDates);
form.addEventListener('submit', calculate);
DeleteHistoryButton.addEventListener('click', removeDates);

function renderDates() {

  if(getDatesFromLocalStorage()) {
    const dates = JSON.parse(getDatesFromLocalStorage());

    dates.forEach((results, todayDateInputValue, futureDateValue) => {
      const li = document.createElement('li');
      li.innerHTML = results;
      li.classList.add('results');
    
      const pToday = document.createElement('p');
      pToday.innerHTML = todayDateInputValue;
      pToday.classList.add('pTodayDate');
    
      const pFuture = document.createElement('p');
      pFuture.innerHTML = futureDateValue;
      pFuture.classList.add('pFutureDate');
    
      dataRangeOutputList.append(li);
      li.append(pToday);
      li.append(pFuture);
    });
  }

}


const todayDateInputValue = toDateInputValue(new Date());

function toDateInputValue(todayDateInput){
  const local = new Date(todayDateInput);
  local.setMinutes(todayDateInput.getMinutes() - todayDateInput.getTimezoneOffset());
  return local.toJSON().slice(0,10);
};


todayDateInput.innerHTML = todayDateInputValue

console.log(todayDateInputValue)

// Я псотавити сьогднішню дату. todayDateInputValue засетився в інпут та в todayDateValue саме сьогоднішній дату В консолі видно. Але не відобрається саме на сторінці. 



function calculate(event) {
  event.preventDefault();
  const todayDateValue = todayDateInputValue
  const futureDateValue = event.target.future_date.value
  console.log(futureDateValue);
  const todayDate = new Date (todayDateValue);
  const futureDate = new Date (futureDateValue);
  let daysTypeElement = [...selectedRadioButtonsDaysType].find(button => button.checked);
  const daysType = daysTypeElement.getAttribute('id')
  let measureElement= [...selectedRadioButtonsMeasure].find(button => button.checked);
  const measure = measureElement.getAttribute('id')

  // console.log(futureDate)
  // console.log(todayDate)
  // console.log(daysType)
  // console.log(measure)

  const dateMs = getDurationInMsByDate(todayDate, futureDate, daysType);

  // console.log(dateMs)

  const results = covertMsToDate(dateMs, measure);

  console.log(results)

  createDate(results, todayDateInputValue, futureDateValue); // Створюємо нову задачу
  setDateToLocalStorage(results, todayDateInputValue, futureDateValue); 

  form.reset();
}



function setDateToLocalStorage(results, todayDateInputValue, futureDateValue) {

  let dates = [];

  if (getDatesFromLocalStorage()) {
    dates = JSON.parse(getDatesFromLocalStorage());
  }  

  dates.push(results, todayDateInputValue, futureDateValue);

  localStorage.setItem(DATES_STORAGE_KEY, JSON.stringify(dates));
}


function getDatesFromLocalStorage() {
  return localStorage.getItem(DATES_STORAGE_KEY)
}

function clearDatesFromLocalStorage() {
  localStorage.removeItem(DATES_STORAGE_KEY);
}


function removeDates() {
    dataRangeOutputList.innerHTML = '';
    clearDatesFromLocalStorage();
}


selectedRadioButtonsPreset.forEach((radio) => {
  radio.addEventListener('click', (event) => {
    const selectedRadioButtonsPresetValue = event.target.value;
    switch (selectedRadioButtonsPresetValue) {
      case 'week':
        let week = new Date();
        let weekMs = week.setTime(week.getTime() + (7 * 24 * 60 * 60 * 1000));
        week = new Date(weekMs);
        console.log(week)
        const weekFormatted = week.toISOString().split('T')[0];
        console.log(weekFormatted);
        const futureDateInputWeek = futureDateInput.value = weekFormatted
        console.log(futureDateInputWeek)
        return futureDateInputWeek
      case 'month':
        let month = new Date();
        let monthMs = month.setTime(month.getTime() + (30 * 24 * 60 * 60 * 1000));
        month = new Date(monthMs);
        console.log(month)
        const monthFormatted = month.toISOString().split('T')[0];
        console.log(monthFormatted);
        const futureDateInputMonth = futureDateInput.value = monthFormatted
        console.log(futureDateInputMonth)
        return futureDateInputMonth
    }
  });
});




function getDurationInMsByDate(todayDate, futureDate, daysType) {
  switch (daysType) {
    case "all_days":
        let all_days = (futureDate.getTime() - todayDate.getTime());
        all_days = Math.abs(Math.round(all_days))
        return all_days
    case "weekdays":
        let weekdays = Math.abs(futureDate - todayDate);
        weekdays = Math.ceil(weekdays - (2 * 24 * 60 * 60 * 1000));
        return weekdays
    case "weekends":
        let weekends = (futureDate.getTime() - todayDate.getTime());
        weekends = Math.abs(Math.round(weekends - (5 * 24 * 60 * 60 * 1000)))
        return weekends
}
}

function covertMsToDate(dateMs, measure) {
  switch (measure) {
      case "days":
          let days = (dateMs) / 1000;
          days = Math.abs(Math.round(days / (60 * 60 * 24)))
          return days + ' days'
      case "hours":
          let hours = (dateMs) / 1000;
          hours = Math.abs(Math.round(hours / (60 * 60)))
          return hours + ' hours'
      case "minutes":
          let minutes = (dateMs) / 1000;
          minutes = Math.abs(Math.round(minutes / (60)))
          return minutes + ' minutes'
      case "seconds":
          let seconds = (dateMs) / 1000;
          seconds = Math.abs(Math.round(seconds))
          return seconds + ' seconds'
  }
}


function createDate(results, todayDateInputValue, futureDateValue) {
  const li = document.createElement('li');
  li.innerHTML = results;
  li.classList.add('results');

  const pToday = document.createElement('p');
  pToday.innerHTML = todayDateInputValue;
  pToday.classList.add('pTodayDate');

  const pFuture = document.createElement('p');
  pFuture.innerHTML = futureDateValue;
  pFuture.classList.add('pFutureDate');

  dataRangeOutputList.append(li);
  li.append(pToday);
  li.append(pFuture);
}
































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