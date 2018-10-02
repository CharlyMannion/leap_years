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

    describe("A function which takes a year as an end date", function() {
        it("returns the given end date", function() {
            expect(leapArray.evaluateYears(2000, 2010)).toEqual([2000, 2010]);
        });
    });

})