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

    describe("when a year is divisible by 100 but not 400", function() {
        it("returns false if a year is divisible by 100 but not by 400", function() {
            expect(leapYear.evaluate(1700)).toEqual(false);
        });
        it("returns false when evaluating 1800", function() {
            expect(leapYear.evaluate(1800)).toEqual(false);
        });
        it("returns false when evaluating 1900", function() {
            expect(leapYear.evaluate(1900)).toEqual(false);
        });
    });

    describe("when a year is divisible by 4 and not by 100", function() {
        it("returns true when a year is divisible by 4 and not by 100", function() {
            expect(leapYear.evaluate(2004)).toEqual(true);
        });
        it("returns true for 2008", function() {
            expect(leapYear.evaluate(2008)).toEqual(true);
        });
        it("returns true for 2012", function() {
            expect(leapYear.evaluate(2012)).toEqual(true);
        });
        it("returns false when a year is not divisible by 4", function() {
            expect(leapYear.evaluate(1750)).toEqual(false);
        });
    });
})