describe("LeapYear", function(){
    var leapYear;

    beforeEach(function() {
        leapYear = new LeapYear();
    });

    describe("when a year is divisible by 400", function() {
        it("returns true", function() {
            expect(leapYear.evaluate(400)).toEqual(true);
        });
    });
})