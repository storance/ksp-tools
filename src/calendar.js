export default class Calendar {
    constructor(dayLengthSeconds, yearLengthSeconds) {
        this.dayLengthSeconds = dayLengthSeconds;
        this.yearLengthSeconds = yearLengthSeconds;
    }

    formatDuration(ut) {
        let years = 0,
            days = 0,
            hours = 0,
            minutes = 0,
            seconds = ut;

        if (seconds >= this.yearLengthSeconds) {
            years = Math.floor(seconds / this.yearLengthSeconds);
            seconds = (seconds % this.yearLengthSeconds).toFixed(3);
        }

        if (seconds >= this.dayLengthSeconds) {
            days = Math.floor(seconds / this.dayLengthSeconds);
            seconds = seconds % this.dayLengthSeconds;
        }

        if (seconds >= 60) {
            minutes = Math.floor(seconds / 60);
            seconds = (seconds % 60).toFixed(3);
        }

        if (minutes >= 60) {
            hours = Math.floor(minutes / 60);
            minutes = minutes % 60;
        }

        var humanizedText = seconds + "s";
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
}