function calculatePayment(startTime, endTime, bedTime){

	var PRE_BEDTIME_PAY = 12, POST_BEDTIME_PAY = 8, AFTER_MIDNIGHT_PAY = 16, FIVE_PM = 17;

	var hoursBeforeBedtime = 0;
	var hoursAfterBedtime = 0;
	var hoursAfterMidnight = 0;

	//Babysitting shift ends after midnight
	if(endTime < FIVE_PM)
	{
		//if startTime is after 5, we know endTime is the amount of hours worked after midnight
		if(startTime >= FIVE_PM)
		{
			hoursAfterMidnight = endTime;
		}
		//Otherwise, get the amount of hours between start and end time
		else
		{
			hoursAfterMidnight = (endTime - startTime);
		}
	}

	//If endTime is after bedtime(but not after midnight) we know we'll have some hours between bedtime
	//and midnight to account for.  Take care of hours before bedtime for these scenarios here as well.
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
	//if endTime is either before bedtime or after midnight we'll want to calculate the hours before bedtime
	//and if endTime is after midnight, we'll need to caulcate the hours between bedtime and midnight using
	//midnight as the anchor.
	else if(startTime >= FIVE_PM)
	{
		if(endTime >= FIVE_PM)
		{
			hoursBeforeBedtime =  (endTime - startTime);
		}
		else
		{
			if(startTime < bedTime)
			{
				hoursBeforeBedtime = (bedTime - startTime);
			}
			hoursAfterBedtime = 24 - Math.max(bedTime, startTime);
		}
			
	}

	return ((hoursBeforeBedtime * PRE_BEDTIME_PAY) + 
			(hoursAfterBedtime * POST_BEDTIME_PAY) +
			(hoursAfterMidnight * AFTER_MIDNIGHT_PAY));	
	
}