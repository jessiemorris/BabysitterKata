# BabysitterKata
Babysitter Kata in javascript following TDD principles

Usage
----------

- Add  <script src="babysittingCalculator.js"></script> to any applications which desire to use the calculator
- Invoke calculatePayment(startTime, endTime, bedTime) with integer values (see below assumptions) e.g. calculatePayment(17, 19, 18)
- To view unit tests open index.html in any browser where this calculator has been consumed for testing
- Tested and implemented via Chrome Version 50.0.2661.86 (64-bit) on OS X

Background
----------
This kata simulates a babysitter working and getting paid for one night.  The rules are pretty straight forward:

The babysitter 
- starts no earlier than 5:00PM
- leaves no later than 4:00AM
- gets paid $12/hour from start-time to bedtime
- gets paid $8/hour from bedtime to midnight
- gets paid $16/hour from midnight to end of job
- gets paid for full hours (no fractional hours)


Feature:
As a babysitter
In order to get paid for 1 night of work
I want to calculate my nightly charge

Assumptions:

-The calculator will only be called with integer values.
-Times are represented by hours as integers in standard 24 hour format with the exception of midnight
-Midnight will be represented by 24
