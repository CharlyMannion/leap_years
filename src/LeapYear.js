function LeapYear() {
}

LeapYear.prototype.evaluate = function(year) {
    if (year % 400 === 0) {
        return true;
    } else {
        return false;
    };
}