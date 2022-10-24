import moment from 'moment-timezone';
// input: Date
// timezone:
// find start date and end date of the month  
function findStartEndOfMonth(input, timezone) {
    // get start and end date without timezone
    let startDate = new Date(moment(input).startOf('month'));
    let endDate = new Date(moment(input).endOf('month'));
    if (timezone) {
        // get start and end date with timezone
        startDate = new Date(moment(input).tz(timezone).startOf('month'));
        endDate = new Date(moment(input).tz(timezone).endOf('month'));
    }
    return {startDate, endDate}
}

console.log(findStartEndOfMonth(new Date('2020-03-01'),'America/New_York'))

// find start date of month and end date of input
function findMtdPeriod(input, timezone) {
    // get start and end date without timezone
    let startDate = new Date(moment(input).startOf('month'))
    let endDate = new Date(moment(input).endOf('date'))

    if (timezone) {
        // get start and end date with timezone
        startDate = new Date(moment(input).tz(timezone).startOf('month'));
        endDate = new Date(moment(input).tz(timezone).endOf('date'));
    }
    return {startDate, endDate}
}

console.log(findMtdPeriod(new Date('2020-02-09'),'Asia/Ho_Chi_Minh'))

// find start date and end date of last week of
function findLastWeekPeriod(input, timezone) {
    // get start and end date without timezone
    let startDateLastWeek = new Date(moment(input).subtract(7,'d').startOf('isoWeek'))
    let lastDateLastWeek = new Date(moment(input).subtract(7,'d').endOf('isoWeek'))

    if (timezone) {
        // get start and end date with timezone
        startDateLastWeek = new Date(moment(input).subtract(7,'d').tz(timezone).startOf('isoWeek'))
        lastDateLastWeek = new Date(moment(input).subtract(7,'d').tz(timezone).endOf('isoWeek'))
    }
    return {startDateLastWeek, lastDateLastWeek}
}

console.log(findLastWeekPeriod(new Date('2022-10-24'),'Asia/Ho_Chi_Minh'))