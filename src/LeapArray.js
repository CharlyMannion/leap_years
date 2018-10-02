function LeapArray() {
    this.listOfYears = [];
}

LeapArray.prototype.evaluateYears = function(startYear, endYear) {
    for (var i = startYear; i <= endYear; i++) {
        this.listOfYears.push(i);
}
    return this.listOfYears;
}
