import moment from 'moment-timezone';

const NUMBER_OF_MILISECONDS_IN_MINUTE = 60*1000;
const NUMBER_OF_MILISECONDS_IN_WEEK = 7*24*60*60*1000;
const NUMBER_OF_MILISECONDS_IN_DAY = 24*60*60*1000;
const MONDAY = 1;

function findStartEndOfMonthWithoutMomentJs(input, timezone) {
    // Change the date input to local timezone
    const utcOffset = moment.tz(timezone).utcOffset()*NUMBER_OF_MILISECONDS_IN_MINUTE;
    const utcDate = new Date(input.getTime() + utcOffset);

    // get year and month of local timezone
    const year = utcDate.getUTCFullYear();
    const month = utcDate.getUTCMonth();

    // get start date of month in UTC +0 version
    const startDateTimeStamp = new Date(Date.UTC(year,month,1)).getTime() - utcOffset;
    const startDate = new Date(startDateTimeStamp);
    
    // get end date of month in UTC +0 version
    const endDateTimeStamp = new Date(Date.UTC(year,month+1,1)).getTime() - 1 - utcOffset;
    const endDate = new Date(endDateTimeStamp);

    return { startDate, endDate };
}

console.log(findStartEndOfMonthWithoutMomentJs(new Date('2020-03-01'),'America/New_York'));

function findMtdPeriodWithoutMomentJs(input, timezone) {
    // Change the date input to local timezone
    const utcOffset = moment.tz(timezone).utcOffset()*60*1000;
    const utcDate = new Date(input.getTime() + utcOffset);

    // get year and month of local timezone
    const year = utcDate.getUTCFullYear();
    const month = utcDate.getUTCMonth();

    // get start date of month in UTC +0 version
    const startDateTimeStamp = new Date(Date.UTC(year,month,1)).getTime() - utcOffset;
    const startDate = new Date(startDateTimeStamp);
    
    // get end date of month in UTC +0 version
    const endDateTimeStamp = new Date(Date.UTC(year,month,utcDate.getUTCDate()+1)).getTime()-1 - utcOffset;
    const endDate = new Date(endDateTimeStamp);
    return {startDate, endDate};
}

console.log(findMtdPeriodWithoutMomentJs(new Date('2020-02-01'),'America/New_York'));

function findLastWeekPeriodWithoutMomentJs(input, timezone) {
    // Change the date input to local timezone
    const utcOffset = moment.tz(timezone).utcOffset() * NUMBER_OF_MILISECONDS_IN_MINUTE;

    // get year, month, date of the local timezone
    const utcDayInLastWeek = new Date(input.getTime() + utcOffset);
    const year = utcDayInLastWeek.getUTCFullYear();
    const month = utcDayInLastWeek.getUTCMonth();
    const date = utcDayInLastWeek.getUTCDate();

    // check if the date input is Monday or not, if not calculate the number of gap days between input date and Monday
    let dayInWeek = utcDayInLastWeek.getUTCDay() || 7;
    if(dayInWeek!==MONDAY) {
        dayInWeek = dayInWeek - MONDAY;
    }
    else {
        dayInWeek = 0;
    }
    // get the first date of last week in UTC +0 version
    const startDateLastWeekTimeStamp = new Date(Date.UTC(year,month,date)).getTime() - (dayInWeek * NUMBER_OF_MILISECONDS_IN_DAY) - NUMBER_OF_MILISECONDS_IN_WEEK - utcOffset;
    const startDateLastWeek = new Date(startDateLastWeekTimeStamp);

    // get the last date of last week in UTC +0 version
    const endDateLastWeekTimeStamp = new Date(Date.UTC(year,month,startDateLastWeek.getDate()+7)).getTime() - 1 - utcOffset;
    const endDateLastWeek = new Date(endDateLastWeekTimeStamp);

    return { startDateLastWeek, endDateLastWeek };
}

console.log(findLastWeekPeriodWithoutMomentJs(new Date('2022-10-24'),'Asia/Ho_Chi_Minh'));