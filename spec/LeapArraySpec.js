describe("LeapArray", function() {
    var leapArray;

    beforeEach(function() {
        leapArray = new LeapArray();
    });

    describe("leap array", function() {
        it("has an empty array", function() {
            expect(leapArray.list).toEqual([]);
        });
    });

    describe("A function which returns an array of years", function() {
        it("returns all the years between startDate and endDate", function() {
            expect(leapArray.evaluateYears(2000, 2005)).toEqual([2000, 2001, 2002, 2003, 2004, 2005]);
        });
    });

})