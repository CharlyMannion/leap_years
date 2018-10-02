describe("LeapArray", function() {
    var leapArray;

    beforeEach(function() {
        leapArray = new LeapArray();
    });

    describe("leap array", function() {
        it("has an empty array of years", function() {
            expect(leapArray.listOfYears).toEqual([]);
        });
        it("has an emoty array of checked years", function() {
            expect(leapArray.evaluatedList).toEqual([]);
        })
    });

    describe("A function which returns an array of years", function() {
        it("returns all the years between startDate and endDate", function() {
            expect(leapArray.createArray(2000, 2005)).toEqual([2000, 2001, 2002, 2003, 2004, 2005]);
        });
    });

    describe("A function that determines if each year is a leap year", function() {
        it("takes listOfYears as an argument", function() {
            leapArray.createArray(2000, 2005);
            expect(leapArray.evaluateYears(this.listOfYears)).toEqual([2000, 2001, 2002, 2003, 2004, 2005])
        })
        // it("returns each listed year", function() {
        //     expect(leapArray.evaluateYears(2000, 2005)).toEqual([true, false, false, false, true, false]);
        // });
    })

})