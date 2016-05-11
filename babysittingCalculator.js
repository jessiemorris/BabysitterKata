var CONSTANTS = {
	PRE_BEDTIME_PAY : 12, 
	POST_BEDTIME_PAY : 8, 
	AFTER_MIDNIGHT_PAY : 16, 
	FIVE_PM : 17, 
	MIDNIGHT : 24,
	FOUR_AM : 4
};

function calculatePayment(startTime, endTime, bedTime){

	if(!isValidBabysittingHour(startTime) || !isValidBabysittingHour(endTime) || !isValidBedTime(bedTime))
	{
		return -1;
	}

	var hoursBeforeBedtime = calculateHoursBeforeBedtime(startTime, endTime, bedTime);
	var hoursAfterBedtime = calculateHoursAfterBedtime(startTime, endTime, bedTime);
	var hoursAfterMidnight = calculateHoursAfterMidnight(startTime, endTime);

	return ((hoursBeforeBedtime * CONSTANTS.PRE_BEDTIME_PAY) + 
			(hoursAfterBedtime * CONSTANTS.POST_BEDTIME_PAY) +
			(hoursAfterMidnight * CONSTANTS.AFTER_MIDNIGHT_PAY));	
	
}

function isValidBabysittingHour(inputHour)
{
	//Check for times which are between 4am and 5am
	if(!isValidTime(inputHour))
	{
		return false;
	}
	//Check for times which are between 4am and 5am
	if(inputHour > 4 && inputHour < CONSTANTS.FIVE_PM)
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
	if(inputHour <= 0 || inputHour > 24)
	{
		return false;
	}
	return true;
}

function isAfterMidnight(inputHour)
{
	return inputHour <= CONSTANTS.FOUR_AM;
}

function calculateHoursAfterMidnight(startTime, endTime)
{
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
		return CONSTANTS.MIDNIGHT - Math.max(bedTime, startTime);
	}
	else
	{
		return 0;
	}
	
}


