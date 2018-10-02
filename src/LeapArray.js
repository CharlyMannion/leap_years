function LeapArray() {
    this.listOfYears = [];
    this.evaluatedList = [];
}

LeapArray.prototype.createArray = function(startYear, endYear) {
    for (var i = startYear; i <= endYear; i++) {
        this.listOfYears.push(i);
}
    return this.listOfYears;
}
