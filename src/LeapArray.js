function LeapArray() {
    this.listOfYears = [];
}

LeapArray.prototype.createArray = function(startYear, endYear) {
    for (var year = startYear; year <= endYear; year++) {
        if (year % 4 === 0 && year % 100 !== 0) {
            this.listOfYears.push(true);
        } else if (year % 400 === 0) {
            this.listOfYears.push(true);
        } else {
            this.listOfYears.push(false);
        };
}
    return this.listOfYears;
}

// LeapArray.prototype.evaluate = function(year) {
//     if (year % 4 === 0 && year % 100 !== 0) {
//         this.listOfYears.push(true);
//     } else if (year % 400 === 0) {
//         this.listOfYears.push(true);
//     } else {
//         this.listOfYears.push(false);
//     };
// }
