export class CalendarDefinition{
    constructor({
    useHomeDay=false,
    useHomeYear=false,
    useLeapYears=false,
    customYear=null,
    customDay=null}) {
        this.useHomeDay = useHomeDay;
        this.useHomeYear = useHomeYear;
        this.useLeapYears = useLeapYears;
        this.customYear = customYear;
        this.customDay = customDay;
    }
}

const HOUR_IN_SECONDS = 3600.0;
const MINUTE_IN_SECONDS = 60.0;

export class Calendar {
    constructor(dayLengthSeconds, yearLengthSeconds, useLeapYears=false) {
        this.dayLengthSeconds = dayLengthSeconds;
        this.yearLengthSeconds = yearLengthSeconds;
        this.useLeapYears = useLeapYears;
    }

    formatDuration(ut) {
        let years = 0,
            days = 0,
            hours = 0,
            minutes = 0,
            seconds = ut;
        years = Math.floor(seconds / this.yearLengthSeconds);
        seconds -= years * this.yearLengthSeconds;

        days = Math.floor(seconds / this.dayLengthSeconds);
        seconds -= days * this.dayLengthSeconds;

        seconds = seconds.toFixed(3);

        hours = Math.floor(seconds / HOUR_IN_SECONDS);
        seconds -= hours * HOUR_IN_SECONDS;

        minutes = Math.floor(seconds / MINUTE_IN_SECONDS);
        seconds -= minutes * MINUTE_IN_SECONDS;

        seconds = seconds.toFixed(3);

        let humanizedText = seconds + "s";
        if (minutes > 0 || hours > 0 || days > 0 || years > 0) {
            humanizedText = minutes + "m " + humanizedText;
        }

        if (hours > 0 || days > 0 || years > 0) {
            humanizedText = hours + "h " + humanizedText;
        }

        if (days > 0 || years > 0) {
            humanizedText = days + "d " + humanizedText;
        }

        if (years > 0) {
            humanizedText = years + "y " + humanizedText;
        }

        return humanizedText;
    }

    formatDate(ut) {
        let years = 0,
            days = 0,
            hours = 0,
            minutes = 0,
            seconds = 0;

        // TODO: Implement leap year logic

        years = Math.floor(ut / this.yearLengthSeconds);
        let startOfYear = years * this.yearLengthSeconds;

        days = Math.floor(ut / this.dayLengthSeconds) - Math.floor(startOfYear / this.dayLengthSeconds);

        let left = ut % this.dayLengthSeconds;

        hours = Math.floor(left / HOUR_IN_SECONDS);
        left -= hours * HOUR_IN_SECONDS;

        minutes = Math.floor(left / MINUTE_IN_SECONDS);
        seconds = left - minutes * MINUTE_IN_SECONDS;

        years += 1;
        days += 1;

        seconds = seconds.toFixed(3);

        return  years + "y " + days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    }
}