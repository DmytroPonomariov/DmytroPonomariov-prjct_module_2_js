'use strick'

const tabButtons  = document.querySelectorAll('.tab-nav input[type="radio"]');
const tabContents = document.querySelectorAll('.tab-content');

document.addEventListener('DOMContentLoaded', () => { 
    setupTabListeners(); 
    initializeTabContents(); 
});

function setupTabListeners() {
    tabButtons.forEach(tab => handleTabChange(tab));
}

function handleTabChange(tab) {
    tab.addEventListener('change', () => {

        hideAllTabContents();
        
        if (tab.checked) {
            showActiveTabContent(tab);
        }
    });
}

function hideAllTabContents() { 
    tabContents.forEach(content => content.style.display = 'none');
}

function showActiveTabContent(tab) {
    const activeTabContent = document.getElementById(`content-${tab.id.split('-')[2]}`);
    if (activeTabContent) {
        activeTabContent.style.display = 'block';
      switch (tab.id) {
        case 'tab-btn-1':
            renderDates(); 
            break;
        case 'tab-btn-2':
            fetchCountries();
            break;      
        default:
            break;
      }  
    }
}

function initializeTabContents() {
    tabButtons.forEach(tab => {
        if (tab.checked) {
            showActiveTabContent(tab);
        }
    });
}









const form = document.querySelector('.date_range_form')
const futureDateInput = document.getElementById('future_date');
const todayDateInput = document.getElementById('today_date');
const selectedRadioButtonsDaysType = document.querySelectorAll('.input-daysType');
const selectedRadioButtonsMeasure = document.querySelectorAll('.input-measure');
const selectedRadioButtonsPreset = document.querySelectorAll('.input-preset');
const dataRangeOutputList = document.querySelector('.data_range_output_list');
const DeleteHistoryButton = document.querySelector('.clear_dates')


const DATES_STORAGE_KEY = 'DATES';

document.addEventListener('DOMContentLoaded', renderDates);
form.addEventListener('submit', calculate);
DeleteHistoryButton.addEventListener('click', removeDates);



const todayDateInputValue = toDateInputValue(new Date());

function toDateInputValue(todayDateInput){
  const local = new Date(todayDateInput);
  local.setMinutes(todayDateInput.getMinutes() - todayDateInput.getTimezoneOffset());
  return local.toJSON().slice(0,10);
};


todayDateInput.innerHTML = todayDateInputValue

// console.log(todayDateInputValue)

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

  console.log(dates)

  dates.push(`From: ${todayDateInputValue} To: ${futureDateValue} | ${results}`);
  
  if (dates.length > 10) {
    dates.shift()
  }
  localStorage.setItem(DATES_STORAGE_KEY, JSON.stringify(dates));
}


function renderDates() {
  dataRangeOutputList.innerHTML = '';

  if(getDatesFromLocalStorage()) {
    const dates = JSON.parse(getDatesFromLocalStorage());

    dates.forEach(date => {
      const listItem = document.createElement('li');
      listItem.innerText = date;
      dataRangeOutputList.appendChild(listItem);    });
  }
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
};


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
};


function createDate(results, todayDateInputValue, futureDateValue) {
  const li = document.createElement('li');
  li.innerHTML = (`From: ${todayDateInputValue} To: ${futureDateValue} | ${results}`)
  li.classList.add('results');

  dataRangeOutputList.append(li);
};








const apiToken      = 'bRhSp75zNJYqrYlhWThMvINrqnpXHi9q';
const countrySelect = document.querySelector('#country');
const year          = document.querySelector('#year');
const holidaysList  = document.querySelector('#holidays-list');
const fetchButton   = document.querySelector('#fetchHolidays');

const holidayFilter  = document.querySelector('#holidayFilter');
const sortAscButton  = document.querySelector('#sortAsc');
const sortDescButton = document.querySelector('#sortDesc');

sortAscButton.addEventListener('click', () => sortHolidays('asc'));
sortDescButton.addEventListener('click', () => sortHolidays('desc'));
holidayFilter.addEventListener('input', filterHolidays);

let holidays = [];
    
fetchButton.addEventListener('click', () => {
  const selectedYear = year.value;
  const selectedCountry = countrySelect.value;

    if (selectedCountry && selectedYear) {
            fetchHolidays(selectedCountry, selectedYear);
          
    } else {
        alert('Choose country');
    }
});

countrySelect.addEventListener('change', () => {
    yearInput.disabled = countrySelect.value === '';
});

let filteredHolidays = [];

function filterHolidays() {
    console.log ('filter', holidays);
    const filterText = holidayFilter.value.toLowerCase();
    const holidaysToFilter = holidaysList.querySelectorAll('.holidayItem'); // Отримуємо всі показані свята
    console.log ('filter 2', holidaysToFilter);
    filteredHolidays = holidays.filter(holiday => 
        holiday.name.toLowerCase().includes(filterText)
    );

    renderHolidays(filteredHolidays);
}

function sortHolidays(order = 'asc') {
    console.log ('sort', holidays);
    const holidaysToSort = filteredHolidays.length > 0 ? filteredHolidays : holidays; // Sort filtered holidays if any

    holidaysToSort.sort((a, b) => {
        const dateA = new Date(a.date.iso);
        const dateB = new Date(b.date.iso);
        return order === 'asc' ? dateA - dateB : dateB - dateA;
    });

    renderHolidays(holidaysToSort);
}



function renderHolidays(holidaysToRender) {
    holidaysList.innerHTML = '';
    holidaysToRender.forEach(holiday => {

        const row = document.createElement('tr');

        const dateCell = document.createElement('td');
        dateCell.textContent = holiday.date.iso;

        const nameCell = document.createElement('td');
        nameCell.textContent = holiday.name;

        row.appendChild(dateCell);
        row.appendChild(nameCell);

        holidaysList.appendChild(row);       
    });
}


async function fetchCountries() {
    try {
        const response = await fetch(`https://calendarific.com/api/v2/countries?api_key=${apiToken}`);

        if (!response.ok) {
            throw new Error(`ERROR`);
        }

        const data = await response.json();
        const countries = data.response.countries;

        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country['iso-3166'];
            option.textContent = country.country_name;
            countrySelect.appendChild(option);
        });

    } catch (error) {
        console.error('Error getting data from the site:', error); 
        alert('Failed to get list of countries. Try again later.');
    }
}

async function fetchHolidays(countryCode, year) {
    holidaysList.innerHTML = '';
    const url = `https://calendarific.com/api/v2/holidays?api_key=${apiToken}&country=${countryCode}&year=${year}&language=uk`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`ERROR`);
        }

        const data = await response.json();
        holidays = data.response.holidays;
       renderHolidays(holidays);

    } catch (error) {
        console.error("Error:", error);
    }
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