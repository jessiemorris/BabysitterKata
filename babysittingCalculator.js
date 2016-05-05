function calculatePayment(startTime, endTime, bedTime){

	var PRE_BEDTIME_PAY = 12, POST_BEDTIME_PAY = 8, AFTER_MIDNIGHT_PAY = 16;

	//Babysitting shift ends after midnight
	if(endTime < 17)
	{
		if(startTime > 17)
		{
			return endTime * AFTER_MIDNIGHT_PAY;
		}
		else
		{
			return (endTime - startTime) * AFTER_MIDNIGHT_PAY
		}
	}
	if(startTime >= bedTime)
	{
		return (endTime - startTime) * POST_BEDTIME_PAY;
	}
	return (endTime - startTime) * PRE_BEDTIME_PAY;
}
