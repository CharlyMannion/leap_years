function LeapArray() {

}

LeapArray.prototype.evaluateYears = function(startYear, endYear) {
    var list = [];
    for (var i = startYear; i <= endYear; i++) {
        list.push(i);
}
    return list;
}
