# leap_years


A simple tool that will tell you whether a year is a leap year, according to the following rules:

- All years divisible by 400 ARE leap years (e.g. 2000 was a leap year)
- All years divisible by 100 but not by 400 are NOT leap years (e.g. 1700, 1800 and 1900 were not leap years)
- All years divisible by 4 and not by 100 ARE leap years (e.g. 2004, 2008 and 2012 were leap years)
- All years not divisible by 4 are NOT leap years (e.g. 2009, 2010 and 2011 were not leap years)

To run the programme in the console (Cmd-Opt-j)

```
var leapYear = new LeapYear();

leapYear.evaluate(2000)
true

leapYear.evaluate(1999)
false
```
## Extension

This programme will also return an array of all the leap years between two given values

e.g. when given 2000 and 2005, the programme will return a new array of true or false values

```
var leapArray = new LeapArray();

leapArray.createArray(2000, 2005)
[true, false, false, false, true, false]
```



