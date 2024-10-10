'use strick'

const form = document.querySelector('.date_range_form')
const futureDateInput = document.getElementById('future_date');
const selectedRadioButtonsDaysType = document.querySelectorAll('.input-daysType');
const selectedRadioButtonsMeasure = document.querySelectorAll('.input-measure');
const selectedRadioButtonsPreset = document.querySelectorAll('.input-preset');

// console.log(futureDateInput)


// console.log(selectedRadioButtonsDaysType)
form.addEventListener('submit', calculate)

function calculate(event) {
  event.preventDefault();
  const todayDateValue = event.target.today_date.value
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

  // console.log(results)

  // calculateOutPut = covertMsToDate()
  // endDateWeek = new Date (endDateWeek.setDate(date.getDate() + 7);)
  // console.log(endDateWeek)

}


selectedRadioButtonsPreset.forEach((radio) => {
  radio.addEventListener('click', (event) => {
    const selectedRadioButtonsPresetValue = event.target.value;
    console.log(selectedRadioButtonsPresetValue)
    switch (selectedRadioButtonsPresetValue) {
      case 'Week':
        let week = new Date();
        week = endDateWeek.setDate(date.getDate() + 7);
        const weekValueFutureDate = futureDateInput.value = week
        return weekValueFutureDate
        console.log(weekValueFutureDate)
      // case 'Month':
      //   endDateMonth = new Date(Date.now() + (30 * 24 * 60 * 60 / 1000));

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
          return days
      case "hours":
          let hours = (dateMs) / 1000;
          hours = Math.abs(Math.round(hours / (60 * 60)))
          return hours
      case "minutes":
          let minutes = (dateMs) / 1000;
          minutes = Math.abs(Math.round(minutes / (60)))
          return minutes
      case "seconds":
          let seconds = (dateMs) / 1000;
          seconds = Math.abs(Math.round(seconds))
          return seconds
  }
}


















// ______________



// // Handle preset button clicks
// radioPreset.forEach((radio) => {
//   radio.addEventListener('click', (event) => {
//     const radioPresetValue = event.target.preset.value;
//     switch (radioPresetValue) {
//       case 'Week':
//         endDateWeek = new Date(Date.now() + 7 * 24 * 60 * 60 / 1000);
//         break;
//       case 'Month':
//         endDateMonth = new Date(Date.now() + 30 * 24 * 60 * 60 / 1000);
//         break;
//     }
//     daysDurationBetweenDates();
//   });
// });

// // Функція конвертор часу з мілесекунд в дні, години, хвилини, секунди.
 

// function daysDurationBetweenDates(startDate, endDate, countdown_options) {
//     switch (type) {
//         case "days":
//             let days = (endDate.getTime() - startDate.getTime()) / 1000;
//             days = Math.abs(Math.round(days / (60 * 60 * 24)))
//             return days + ' days'
//         case "hours":
//             let hours = (endDate.getTime() - startDate.getTime()) / 1000;
//             hours = Math.abs(Math.round(hours / (60 * 60)))
//             return hours + ' hours'
//         case "minutes":
//             let minutes = (endDate.getTime() - startDate.getTime()) / 1000;
//             minutes = Math.abs(Math.round(minutes / (60)))
//             return minutes + ' minutes'
//         case "seconds":
//             let seconds = (endDate.getTime() - startDate.getTime()) / 1000;
//             seconds = Math.abs(Math.round(seconds))
//             return seconds + ' seconds'
//     }
// }

// console.log(daysDurationBetweenDates(startDate, endDate, "days"))



  // Я от як думаю. Я взяв значення фючер інпута. Засетив його значення в Ню дейт. І присвоїв ендДейт.
// Далі присвоїв сьогоднішню дату в сатрт дейт. 
// Далі є ці значення. Їх якщо відняти то отримаємо мілісекнди. ДАлі можна їх через світчкейс кновертувати для цього у нас є функція нижче. 
// До неї ще дойдем. Але перед цим. Треба поставити теж якийсь світч чи умову тру.фолс. Слухачі події на радіоботони. 
// А я не знаю як це робити. Типу через умову. 

// Перше це має бути умова якщо хтось натиснув прісет то добавляєтться тиждень або місяць. Я там добавляю просто в мілесукундах тиждень та місяць.
// І я хочу щоб це робились один раз тільки до дати в сьогодні + місяць чи тиждень. Щоб до будь-якої дати не можна було добавляти. 

// Key point
// Так, треба так зробити щоб було свободне поле. Але при кліку на прісет забивався прісет в поле фючер дейт Через світч якось. Якщо клікнув на фючер дейт. Щоб прісет віджимався сам.  



// Потім Він йде через умову які дні. Також там робимо якось дефолтний день. Можливо треба просто чек поставити на радіо. 
// Але чи буде це вважатись за клік. Далі. Йдем в останій по суті це -
//  конвертер мілісекунди в дні, години, хвилини. Які ще можуть бути сценарії. 
// Наприклад сценарій що не вибрали прісет. Тоді він пропускається. Питання чи знімати прісет з кліка
// через // Handle preset button clicks як зробив через фор іч. Чи треба кожному радіо робити квері селектор і івент?
// Приклад який брав за основу

// const countdownElement = document.getElementById('countdown');
// const presetButtons = document.querySelectorAll('.preset-button');
// const customDateInput = document.getElementById('custom-date-input');

// // Set the default preset to 2 weeks
// let targetDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);

// // Update the countdown display
// function updateCountdown() {
//   const now = new Date();
//   const timeDiff = targetDate - now;
//   const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

//   countdownElement.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
// }

// // Update the countdown every second
// setInterval(updateCountdown, 1000);

// // Handle preset button clicks
// presetButtons.forEach((button) => {
//   button.addEventListener('click', (e) => {
//     const presetValue = e.target.dataset.preset;
//     switch (presetValue) {
//       case '2 weeks':
//         targetDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);
//         break;
//       case '1 month':
//         targetDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
//         break;
//     }
//     updateCountdown();
//   });
// });

// // Handle custom date input
// customDateInput.addEventListener('input', (e) => {
//   const customDate = new Date(e.target.value);
//   targetDate = customDate;
//   updateCountdown();
// });



















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