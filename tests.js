QUnit.module("Harness Integration Tests");
QUnit.test( "TestHarnessIntegrationSuccessful", function(assert) {
	assert.equal(1, 1, "Text harness properly configured!" );
});

QUnit.module("Zero Cases");
QUnit.test( "BabysitterWorksZeroHoursAndReceives0Dollars_BeforeBedtime", function(assert) {
	var startTime = 17;   //5:00 PM
	var endTime = 17;     //5:00 PM
	var bedTime = 21;     //9:00 PM

	assert.equal(calculatePayment(startTime, endTime, bedTime), 0);
});

QUnit.test( "BabysitterWorksZeroHoursAndReceives0Dollars_AfterBedtimeBeforeMidnight", function(assert) {
	var startTime = 22;   //10:00 PM
	var endTime = 22;     //10:00 PM
	var bedTime = 21;     //9:00 PM

	assert.equal(calculatePayment(startTime, endTime, bedTime), 0);
});

QUnit.test( "BabysitterWorksZeroHoursAndReceives0Dollars_AfterMidnight", function(assert) {
	var startTime = 1;   //1:00 AM
	var endTime = 1;     //1:00 AM
	var bedTime = 21;    //9:00 PM

	assert.equal(calculatePayment(startTime, endTime, bedTime), 0);
});

QUnit.module("Before Bedtime Tests");
QUnit.test( "BabysitterWorksOneHourBeforeBedtimeAndReceives12Dollars", function(assert) {
	var startTime = 17;  //5:00 PM
	var endTime = 18;    //6:00 PM
	var bedTime = 21;    //9:00 PM

	assert.equal(calculatePayment(startTime, endTime, bedTime), 12);
});

QUnit.test( "BabysitterWorksTwoHoursBeforeBedtimeAndReceives24Dollars", function(assert) {
	var startTime = 17;  //5:00 PM
	var endTime = 19;    //7:00 PM
	var bedTime = 21;    //9:00 PM

	assert.equal(calculatePayment(startTime, endTime, bedTime), 24);
});

QUnit.module("Bedtime->Midnight Tests");
QUnit.test( "BabysitterWorksOneHourAfterBedtimeAndBeforeMidnightAndReceives8Dollars", function(assert) {
	var startTime = 21;  //9:00 PM
	var endTime = 22;    //10:00 PM
	var bedTime = 21;    //9:00 PM

	assert.equal(calculatePayment(startTime, endTime, bedTime), 8);
});

QUnit.test( "BabysitterWorksTwoHoursAfterBedtimeAndBeforeMidnightAndReceives16Dollars", function(assert) {
	var startTime = 21;  //9:00 PM
	var endTime = 23;    //11:00 PM
	var bedTime = 21;    //9:00 PM

	assert.equal(calculatePayment(startTime, endTime, bedTime), 16);
});

QUnit.module("After Midnight Tests");
QUnit.test( "BabysitterWorksOneHourAfterMidnightAndReceives16Dollars", function(assert) {
	var startTime = 0;   //12:00 AM
	var endTime = 1;     //1:00 AM
	var bedTime = 21;    //9:00 PM

	assert.equal(calculatePayment(startTime, endTime, bedTime), 16);
});

QUnit.test( "BabysitterWorksTwoHoursAfterMidnightAndReceives32Dollars", function(assert) {
	var startTime = 0;   //12:00 AM
	var endTime = 2;     //2:00 AM
	var bedTime = 21;    //9:00 PM

	assert.equal(calculatePayment(startTime, endTime, bedTime), 32);
});

QUnit.module("Before and After Bedtime Tests");
QUnit.test( "BabysitterWorksOneHourBeforeBedtimeAndOneHourAfterAndReceives20Dollars", function(assert) {
	var startTime = 20;   //8:00 PM
	var endTime = 22;     //10:00 PM
	var bedTime = 21;     //9:00 PM

	assert.equal(calculatePayment(startTime, endTime, bedTime), 20);
});

QUnit.test( "BabysitterWorksTwoHoursBeforeBedtimeAndTwoHoursAfterAndReceives40Dollars", function(assert) {
	var startTime = 19;   //7:00 PM
	var endTime = 23;     //11:00 PM
	var bedTime = 21;     //9:00 PM

	assert.equal(calculatePayment(startTime, endTime, bedTime), 40);
});

QUnit.module("Maximum Shift Test");
QUnit.test( "BabysitterWorksMaximumShiftFromFiveToFourWithNinePMBedtimeAndReceives136Dollars", function(assert) {
	var startTime = 17;   //5:00 PM
	var endTime = 4;      //4:00 AM
	var bedTime = 21;     //9:00 PM

	assert.equal(calculatePayment(startTime, endTime, bedTime), 136);
});

QUnit.test( "BabysitterWorksMaximumShiftFromFiveToFourWithTenPMBedtimeAndReceives140Dollars", function(assert) {
	var startTime = 17;   //5:00 PM
	var endTime = 4;      //4:00 AM
	var bedTime = 22;     //10:00 PM

	assert.equal(calculatePayment(startTime, endTime, bedTime), 140);
});

QUnit.test( "BabysitterWorksMaximumShiftFromFiveToFourWithFivePMBedtimeAndReceives120Dollars", function(assert) {
	var startTime = 17;   //7:00 PM
	var endTime = 4;      //11:00 PM
	var bedTime = 17;     //9:00 PM

	assert.equal(calculatePayment(startTime, endTime, bedTime), 120);
});

QUnit.test( "BabysitterWorksMaximumShiftFromFiveToFourWithMidnightBedtimeAndReceives148Dollars", function(assert) {
	var startTime = 17;   //7:00 PM
	var endTime = 4;      //11:00 PM
	var bedTime = 24;     //9:00 PM

	assert.equal(calculatePayment(startTime, endTime, bedTime), 148);
});


