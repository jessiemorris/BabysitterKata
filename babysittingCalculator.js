function calculatePayment(startTime, endTime, bedTime){

	if(!isValidBabysittingHour(startTime) || !isValidBabysittingHour(endTime) || !isValidBedTime(bedTime))
	{
		return -1;
	}

	var PRE_BEDTIME_PAY = 12, POST_BEDTIME_PAY = 8, AFTER_MIDNIGHT_PAY = 16, 
		FIVE_PM = 17, MIDNIGHT = 24;

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
			//ensure we never get a negative hours before bedtime
			if(startTime < bedTime)
			{
				hoursBeforeBedtime = (bedTime - startTime);
			}
			hoursAfterBedtime = MIDNIGHT - Math.max(bedTime, startTime);
		}
			
	}

	return ((hoursBeforeBedtime * PRE_BEDTIME_PAY) + 
			(hoursAfterBedtime * POST_BEDTIME_PAY) +
			(hoursAfterMidnight * AFTER_MIDNIGHT_PAY));	
	
}

function isValidBabysittingHour(inputHour)
{
	//Check for times which are between 4am and 5am
	if(!isValidTime(inputHour))
	{
		return false;
	}
	//Check for times which are between 4am and 5am
	if(inputHour > 4 && inputHour < 17)
	{
		return false;
	}

	return true;
}
function isValidBedTime(bedTime)
{
	//Check for times which do not exist in a 24 hour clock
	if(!isValidTime(bedTime))
	{
		return false;
	}
	//Bedtime cannot be before 5PM or after midnight
	if(bedTime < 17)
	{
		return false;
	}
	return true;
}
function isValidTime(inputHour)
{
	//Check for times which do not exist in a 24 hour clock
	if(inputHour < 0 || inputHour > 24)
	{
		return false;
	}
	return true;
}
