function calculatePayment(startTime, endTime, bedTime){

	var PRE_BEDTIME_PAY = 12, POST_BEDTIME_PAY = 8, AFTER_MIDNIGHT_PAY = 16, FIVE_PM = 17;

	var hoursBeforeBedtime = 0;
	var hoursAfterBedtime = 0;
	var hoursAfterMidnight = 0;

	//Babysitting shift ends after midnight
	if(endTime < FIVE_PM)
	{
		if(startTime > FIVE_PM)
		{
			hoursAfterMidnight = endTime;
		}
		else
		{
			hoursAfterMidnight = (endTime - startTime);
		}
	}

	if(endTime > bedTime)
	{
		if(startTime > bedTime)
		{
			hoursAfterBedtime =  (endTime - startTime);
		}
		else
		{
			hoursBeforeBedtime =  (bedTime - startTime);
			hoursAfterBedtime =  (endTime - bedTime);
		}
	}
	else if(startTime >= FIVE_PM)
	{
			hoursBeforeBedtime =  (endTime - startTime);
			
	}

	return ((hoursBeforeBedtime * PRE_BEDTIME_PAY) + 
			(hoursAfterBedtime * POST_BEDTIME_PAY) +
			(hoursAfterMidnight * AFTER_MIDNIGHT_PAY));	
	
}