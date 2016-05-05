QUnit.test( "TestHarnessIntegrationSuccessful", function(assert) {
	assert.equal(1, 1, "Text harness properly configured!" );
});

QUnit.test( "BabysitterWorksOneHourBeforeBedtimeAndReceives12Dollars", function(assert) {
	var startTime = 17;  //5:00 PM
	var endTime = 18;    //6:00 PM
	var bedTime = 21;    //9:00 PM

	assert.equal(calculatePayment(startTime, endTime, bedTime), 12);
});