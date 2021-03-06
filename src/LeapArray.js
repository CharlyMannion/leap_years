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
    yearsArray.forEach(function(yearToAssess) {
        // if (_isLeap(yearToAssess))
        // assessedList.push(yearToAssess);
        if (yearToAssess % 4 === 0 && yearToAssess % 100 !== 0) {
             assessedList.push(true);
            } else if (yearToAssess % 400 === 0) {
            assessedList.push(true);
        } else {
            assessedList.push(false);
        };
    });
    return assessedList;
}

LeapArray.prototype._isLeap = function(singleYear) {
    if (singleYear % 4 === 0 && singleYear % 100 !== 0) {
        return true;
       } else if (singleYear % 400 === 0) {
       return true;
   } else {
       return false;
   };
}
