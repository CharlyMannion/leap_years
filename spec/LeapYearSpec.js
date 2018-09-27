describe("LeapYear", function(){
    var leapYear;

    beforeEach(function() {
        leapYear = new LeapYear();
    });

    describe("when a year is divisible by 400", function() {
        it("returns true for 400", function() {
            expect(leapYear.evaluate(400)).toEqual(true);
        });
        it("returns true for multiples of 400", function() {
            expect(leapYear.evaluate(2000)).toEqual(true);
        });
        it("returns false if the year is not divisible by 400", function() {
            expect(leapYear.evaluate(2001)).toEqual(false);
        });
    });
})