function calculatePayment(startTime, endTime, bedTime){

	var PRE_BEDTIME_PAY = 12, POST_BEDTIME_PAY = 8, AFTER_MIDNIGHT_PAY = 16;

	var hoursBeforeBedtime = 0;
	var hoursAfterBedtime = 0;
	var hoursAfterMidnight = 0;

	//Babysitting shift ends after midnight
	if(endTime < 17)
	{
		if(startTime > 17)
		{
			hoursAfterMidnight = endTime;
		}
		else
		{
			hoursAfterMidnight = (endTime - startTime);
		}
	}

	// if(startTime >= bedTime)
	// {
	// 	totalPay += (endTime - startTime) * POST_BEDTIME_PAY;
	// }

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
	else if(startTime >= 17)
	{
			hoursBeforeBedtime =  (endTime - startTime);
			
	}

	return ((hoursBeforeBedtime * PRE_BEDTIME_PAY) + 
			(hoursAfterBedtime * POST_BEDTIME_PAY) +
			(hoursAfterMidnight * AFTER_MIDNIGHT_PAY));	
	
}