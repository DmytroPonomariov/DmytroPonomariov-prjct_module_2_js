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