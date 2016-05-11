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


	hoursAfterMidnight = calculateHoursAfterMidnight(startTime, endTime);
	hoursBeforeBedtime = calculateHoursBeforeBedtime(startTime, endTime, bedTime);
	hoursAfterBedtime = calculateHoursAfterBedtime(startTime, endTime, bedTime);


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

function calculateHoursAfterMidnight(startTime, endTime)
{
	//If endtime > 4, there are no after midnight hours.
	if(!isAfterMidnight(endTime))
	{
		return 0;
	}
	if(!isAfterMidnight(startTime))
	{
		return endTime
	}
	else
	{
		return (endTime - startTime);
	}
}

function calculateHoursBeforeBedtime(startTime, endTime, bedTime)
{
	if(isAfterMidnight(startTime) || startTime > bedTime)
	{
		return 0;
	}
	if(!isAfterMidnight(endTime) && endTime < bedTime)
	{
		return endTime - startTime;
	}
	else
	{
		return bedTime - startTime;
	}
}

function calculateHoursAfterBedtime(startTime, endTime, bedTime)
{
	if(isAfterMidnight(startTime))
	{
		return 0;
	}
	if(endTime > bedTime)
	{
		if(startTime > bedTime)
		{
			return (endTime - startTime);
		}
		else
		{
			return (endTime - bedTime);
		}
	}
	else if(isAfterMidnight(endTime))
	{
		return 24 - Math.max(bedTime, startTime);
	}
	else
	{
		return 0;
	}
	
}

function isAfterMidnight(inputHour)
{
	return inputHour <= 4;
}
