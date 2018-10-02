describe("LeapArray", function() {
    var leapArray;

    beforeEach(function() {
        leapArray = new LeapArray();
    });

    // describe("A function which takes a year as a start date", function() {
    //     it("returns the given start date", function() {
    //         expect(leapArray.evaluateYears(2000)).toEqual(2000);
    //     });
    // });

    describe("A function which accepts a startDate and endDate", function() {
        it("returns the given dates as an Array", function() {
            expect(leapArray.evaluateYears(2000, 2010)).toEqual([2000, 2010]);
        });
    });

})