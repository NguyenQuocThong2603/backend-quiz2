import moment from 'moment-timezone';
// // input: Date
// // timezone:
// // find start date and end date of the month 
function findStartEndOfMonth(input, timezone) {
    // Use momentjs
    // get start and end date without timezone
    let startDate = new Date(moment(input).startOf('month'));
    let endDate = new Date(moment(input).endOf('month'));
    if (timezone) {
        // get start and end date with timezone
        startDate = new Date(moment(input).tz(timezone).startOf('month'));
        endDate = new Date(moment(input).tz(timezone).endOf('month'));
    }
    return {startDate, endDate};

    // Manual
    // const utcOffset = moment.tz(timezone).utcOffset()*60*1000;
    // const utcDate = new Date(input.getTime() + utcOffset);

    // const year = utcDate.getUTCFullYear();
    // const month = utcDate.getUTCMonth();

    // const startDateTimeStamp = new Date(Date.UTC(year,month,1)).getTime() - utcOffset;
    // const startDate = new Date(startDateTimeStamp);
    
    // const endDateTimeStamp = new Date(Date.UTC(year,month+1,1)).getTime() - 1 - utcOffset;
    // const endDate = new Date(endDateTimeStamp);
    // return {startDate, endDate}
}

console.log(findStartEndOfMonth(new Date('2020-03-01'),'America/New_York'));

// find start date of month and end date of input
function findMtdPeriod(input, timezone) {
    // get start and end date without timezone
    let startDate = new Date(moment(input).startOf('month'));
    let endDate = new Date(moment(input).endOf('date'));

    if (timezone) {
        // get start and end date with timezone
        startDate = new Date(moment(input).tz(timezone).startOf('month'));
        endDate = new Date(moment(input).tz(timezone).endOf('date'));
    }
    return {startDate, endDate};

    // Manual
    // const utcOffset = moment.tz(timezone).utcOffset()*60*1000;
    // const utcDate = new Date(input.getTime() + utcOffset);

    // const year = utcDate.getUTCFullYear();
    // const month = utcDate.getUTCMonth();
    // const startDateTimeStamp = new Date(Date.UTC(year,month,1)).getTime() - utcOffset;
    // const startDate = new Date(startDateTimeStamp);
    
    // const endDateTimeStamp = new Date(Date.UTC(year,month,utcDate.getUTCDate()+1)).getTime()-1 - utcOffset;
    // const endDate = new Date(endDateTimeStamp);
    // return {startDate, endDate}
}

console.log(findMtdPeriod(new Date('2020-02-01'),'America/New_York'));

// find start date and end date of last week of
function findLastWeekPeriod(input, timezone) {
    // get start and end date without timezone
    let startDateLastWeek = new Date(moment(input).subtract(7,'d').startOf('isoWeek'));
    let lastDateLastWeek = new Date(moment(input).subtract(7,'d').endOf('isoWeek'));

    if (timezone) {
        // get start and end date with timezone
        startDateLastWeek = new Date(moment(input).subtract(7,'d').tz(timezone).startOf('isoWeek'));
        lastDateLastWeek = new Date(moment(input).subtract(7,'d').tz(timezone).endOf('isoWeek'));
    }
    return {startDateLastWeek, lastDateLastWeek};
}

console.log(findLastWeekPeriod(new Date('2022-10-24'),'America/New_York'))

