function calculatePayment(startTime, endTime, bedTime){

	if(endTime < 17)
	{
		return 16;
	}
	if(startTime >= bedTime)
	{
		return (endTime - startTime) * 8;
	}
	return (endTime - startTime) * 12;
}
