describe("LeapArray", function() {
    var leapArray;

    beforeEach(function() {
        leapArray = new LeapArray();
    });

    describe("leap array", function() {
        it("has an empty array of years", function() {
            expect(leapArray.listOfYears).toEqual([]);
        });
    });

    describe("A function which returns an array of years", function() {
   
        it("adds them to the listOfYears", function() {
            leapArray.createArray(2000, 2005);
            expect(leapArray.listOfYears).toEqual([true, false, false, false, true, false]);
        })
    });

})