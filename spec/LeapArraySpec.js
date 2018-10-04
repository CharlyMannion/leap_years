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

    // describe("private evaluate leap year function", function() {
    //     it("returns true for 400", function() {
    //         console.log(leapArray._evaluate(400));
    //         expect(leapArray.listOfYears).toEqual([true]);
    //     });
    // });

    // describe("A function which evaluates the list of years", function() {
    //     it("returns an array of true and false values", function() {
    //         leapArray.createArray(2000, 20005);
    //         expect(leapArray.listofYears).toEqual([true, false, false, false, true, false]);
    //     })
    // })

})