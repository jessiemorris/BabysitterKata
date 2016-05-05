QUnit.test( "TestHarnessIntegrationSuccessful", function(assert) {
	assert.equal(1, 1, "Text harness properly configured!" );
});

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

QUnit.test( "BabysitterWorksOneHourAfterMidnightAndReceives16Dollars", function(assert) {
	var startTime = 0;   //12:00 AM
	var endTime = 1;     //1:00 AM
	var bedTime = 21;    //9:00 PM

	assert.equal(calculatePayment(startTime, endTime, bedTime), 16);
});



