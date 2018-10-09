describe("LeapArray", function() {
    var leapArray;

    beforeEach(function() {
        leapArray = new LeapArray();
    });

    describe("list of years", function() {
        it("has an empty array of years", function() {
            expect(leapArray.listOfYears).toEqual([]);
        });
    });

    describe("A function which returns an array of years", function() {
        it("adds them to the listOfYears", function() {
            leapArray.createArray(2000, 2005);
            expect(leapArray.listOfYears).toEqual([2000, 2001, 2002, 2003, 2004, 2005]);
        })
    });

    describe("A function which returns an array of assessed years", function() {
        it("assesses the list of years and returns a new array of true or false values", function() {
            var yearsArray = [2000, 2001, 2002, 2003, 2004, 2005];
            expect(leapArray.evaluate(yearsArray)).toEqual([true, false, false, false, true, false]);
        })
    });

    describe("private evaluate leap year function", function() {
        it("returns true for 400", function() {
            expect(leapArray._isLeap(400)).toEqual(true);
        });
    });

})