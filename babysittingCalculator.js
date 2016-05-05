function calculatePayment(startTime, endTime, bedTime){

	var PRE_BEDTIME_PAY = 12, POST_BEDTIME_PAY = 8, AFTER_MIDNIGHT_PAY = 16;

	if(endTime < 17)
	{
		return endTime * AFTER_MIDNIGHT_PAY;
	}
	if(startTime >= bedTime)
	{
		return (endTime - startTime) * POST_BEDTIME_PAY;
	}
	return (endTime - startTime) * PRE_BEDTIME_PAY;
}
