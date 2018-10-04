function LeapArray() {
    this.listOfYears = [];
}

LeapArray.prototype.createArray = function(startYear, endYear) {
    for (var year = startYear; year <= endYear; year++) {
        this.listOfYears.push(year);
    }
    return this.listOfYears;
}

LeapArray.prototype.evaluate = function(yearsArray) {
    var assessedList = [];
    yearsArray.forEach(function(assessedYear){
        if (assessedYear % 4 === 0 && assessedYear % 100 !== 0) {
             assessedList.push(true);
            } else if (assessedYear % 400 === 0) {
            assessedList.push(true);
        } else {
            assessedList.push(false);
        };
    })
    console.log(assessedList);
    return assessedList;
}
