QUnit.module("Harness Integration Tests");
QUnit.test( "TestHarnessIntegrationSuccessful", function(assert) {
	assert.equal(1, 1, "Text harness properly configured!" );
});

QUnit.module("Zero Cases");
QUnit.test( "BabysitterWorksZeroHoursAndReceives0Dollars_BeforeBedtime", function(assert) {
	var startTime = 17;   //5:00 PM
	var endTime = 17;     //5:00 PM
	var bedTime = 21;     //9:00 PM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), 0);
});

QUnit.test( "BabysitterWorksZeroHoursAndReceives0Dollars_AfterBedtimeBeforeMidnight", function(assert) {
	var startTime = 22;   //10:00 PM
	var endTime = 22;     //10:00 PM
	var bedTime = 21;     //9:00 PM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), 0);
});

QUnit.test( "BabysitterWorksZeroHoursAndReceives0Dollars_AfterMidnight", function(assert) {
	var startTime = 1;   //1:00 AM
	var endTime = 1;     //1:00 AM
	var bedTime = 21;    //9:00 PM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), 0);
});

QUnit.module("Before Bedtime Tests");
QUnit.test( "BabysitterWorksOneHourBeforeBedtimeAndReceives12Dollars", function(assert) {
	var startTime = 17;  //5:00 PM
	var endTime = 18;    //6:00 PM
	var bedTime = 21;    //9:00 PM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), 12);
});

QUnit.test( "BabysitterWorksTwoHoursBeforeBedtimeAndReceives24Dollars", function(assert) {
	var startTime = 17;  //5:00 PM
	var endTime = 19;    //7:00 PM
	var bedTime = 21;    //9:00 PM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), 24);
});

QUnit.module("Bedtime->Midnight Tests");
QUnit.test( "BabysitterWorksOneHourAfterBedtimeAndBeforeMidnightAndReceives8Dollars", function(assert) {
	var startTime = 21;  //9:00 PM
	var endTime = 22;    //10:00 PM
	var bedTime = 21;    //9:00 PM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), 8);
});

QUnit.test( "BabysitterWorksTwoHoursAfterBedtimeAndBeforeMidnightAndReceives16Dollars", function(assert) {
	var startTime = 21;  //9:00 PM
	var endTime = 23;    //11:00 PM
	var bedTime = 21;    //9:00 PM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), 16);
});

QUnit.module("After Midnight Tests");
QUnit.test( "BabysitterWorksOneHourAfterMidnightAndReceives16Dollars", function(assert) {
	var startTime = 24;   //12:00 AM
	var endTime = 1;     //1:00 AM
	var bedTime = 21;    //9:00 PM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), 16);
});

QUnit.test( "BabysitterWorksTwoHoursAfterMidnightAndReceives32Dollars", function(assert) {
	var startTime = 24;   //12:00 AM
	var endTime = 2;     //2:00 AM
	var bedTime = 21;    //9:00 PM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), 32);
});

QUnit.module("Before and After Bedtime Tests");
QUnit.test( "BabysitterWorksOneHourBeforeBedtimeAndOneHourAfterAndReceives20Dollars", function(assert) {
	var startTime = 20;   //8:00 PM
	var endTime = 22;     //10:00 PM
	var bedTime = 21;     //9:00 PM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), 20);
});

QUnit.test( "BabysitterWorksTwoHoursBeforeBedtimeAndTwoHoursAfterAndReceives40Dollars", function(assert) {
	var startTime = 19;   //7:00 PM
	var endTime = 23;     //11:00 PM
	var bedTime = 21;     //9:00 PM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), 40);
});

QUnit.module("Maximum Shift Test");
QUnit.test( "BabysitterWorksMaximumShiftFromFiveToFourWithNinePMBedtimeAndReceives136Dollars", function(assert) {
	var startTime = 17;   //5:00 PM
	var endTime = 4;      //4:00 AM
	var bedTime = 21;     //9:00 PM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), 136);
});

QUnit.test( "BabysitterWorksMaximumShiftFromFiveToFourWithTenPMBedtimeAndReceives140Dollars", function(assert) {
	var startTime = 17;   //5:00 PM
	var endTime = 4;      //4:00 AM
	var bedTime = 22;     //10:00 PM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), 140);
});

QUnit.test( "BabysitterWorksMaximumShiftFromFiveToFourWithFivePMBedtimeAndReceives120Dollars", function(assert) {
	var startTime = 17;   //5:00 PM
	var endTime = 4;      //4:00 AM
	var bedTime = 17;     //5:00 PM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), 120);
});

QUnit.test( "BabysitterWorksMaximumShiftFromFiveToFourWithMidnightBedtimeAndReceives148Dollars", function(assert) {
	var startTime = 17;   //5:00 PM
	var endTime = 4;      //4:00 AM
	var bedTime = 24;     //12:00 AM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), 148);
});

QUnit.module("After Bedtime To After Midnight Tests");
QUnit.test( "BabysitterWorksOneHourBetweenBedtimeAndMidnightAndOneHourAfterMidnightAndReceives24Dollars", function(assert) {
	var startTime = 23;  //11:00 PM
	var endTime = 1;     //1:00 AM
	var bedTime = 22;    //10:00 PM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), 24);
});

QUnit.test( "BabysitterWorksTwoHoursBetweenBedtimeAndMidnightAndTwoHoursAfterMidnightAndReceives48Dollars", function(assert) {
	var startTime = 22;  //10:00 PM
	var endTime = 2;     //2:00 AM
	var bedTime = 22;    //10:00 PM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), 48);
});

QUnit.module("Midnight Start and End Times Tests");
QUnit.test( "BabysitterWorksFromMidnightToTwoAMAndReceives32Dollars", function(assert) {
	var startTime = 24;  //12:00 AM
	var endTime = 2;     //2:00 AM
	var bedTime = 22;    //10:00 PM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), 32);
});

QUnit.test( "BabysitterWorksUntilMidnightFromTenPmAndReceives16Dollars_AfterBedTime", function(assert) {
	var startTime = 22;  //10:00 PM
	var endTime = 24;    //12:00 AM
	var bedTime = 22;    //10:00 PM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), 16);
});

QUnit.test( "BabysitterWorksUntilMidnightFromTenPmAndReceives20Dollars_MidpointBedtime", function(assert) {
	var startTime = 22;  //10:00 PM
	var endTime = 24;    //12:00 AM
	var bedTime = 23;    //11:00 PM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), 20);
});

QUnit.module("Out Of Bounds Tests");
QUnit.test( "BabysitterPassesInInvalidStartTimeReceivesNegativeOne", function(assert) {
	var startTime = 6;   //6:00 AM
	var endTime = 24;    //12:00 AM
	var bedTime = 23;    //11:00 PM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), -1);
});

QUnit.test( "BabysitterPassesInInvalidStartTimeReceivesNegativeOne_Over24", function(assert) {
	var startTime = 25;   
	var endTime = 24;    //12:00 AM
	var bedTime = 23;    //11:00 PM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), -1);
});

QUnit.test( "BabysitterPassesInInvalidStartTimeReceivesNegativeOne_BelowZero", function(assert) {
	var startTime = -1;   
	var endTime = 24;    //12:00 AM
	var bedTime = 23;    //11:00 PM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), -1);
});

QUnit.test( "BabysitterPassesInInvalidEndTimeReceivesNegativeOne", function(assert) {
	var startTime = 17;   //5:00 PM
	var endTime = 6;      //6:00 AM
	var bedTime = 23;     //11:00 PM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), -1);
});

QUnit.test( "BabysitterPassesInInvalidEndTimeReceivesNegativeOne_Over24", function(assert) {
	var startTime = 17;   //5:00 PM
	var endTime = 25;     
	var bedTime = 23;     //11:00 PM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), -1);
});

QUnit.test( "BabysitterPassesInInvalidEndTimeReceivesNegativeOne_BelowZero", function(assert) {
	var startTime = 17;   //5:00 PM
	var endTime = -1;      
	var bedTime = 23;     //11:00 PM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), -1);
});

QUnit.test( "BabysitterPassesInInvalidBedTimeReceivesNegativeOne_AfterMidnight", function(assert) {
	var startTime = 17;   //5:00 PM
	var endTime = 24;     //12:00 AM
	var bedTime = 1;      //1:00 AM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), -1);
});

QUnit.test( "BabysitterPassesInInvalidBedTimeReceivesNegativeOne_BeforeFivePM", function(assert) {
	var startTime = 17;   //5:00 PM
	var endTime = 24;     //12:00 AM
	var bedTime = 16;     //4:00 PM

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), -1);
});

QUnit.test( "BabysitterPassesInInvalidBedTimeReceivesNegativeOne_Over24", function(assert) {
	var startTime = 17;   //5:00 PM
	var endTime = 24;     //12:00 AM
	var bedTime = 25;     

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), -1);
});

QUnit.test( "BabysitterPassesInInvalidBedTimeReceivesNegativeOne_BelowZero", function(assert) {
	var startTime = 17;   //6:00 AM
	var endTime = 24;    //12:00 AM
	var bedTime = -1;    

	assert.equal(BabysittingCalculator.calculatePayment(startTime, endTime, bedTime), -1);
});
