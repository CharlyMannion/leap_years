function LeapArray() {
    this.list = [];
}

LeapArray.prototype.evaluateYears = function(startYear, endYear) {
    for (var i = startYear; i <= endYear; i++) {
        this.list.push(i);
}
    return this.list;
}
