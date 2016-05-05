function calculatePayment(startTime, endTime, bedTime){

	if(startTime >= bedTime)
	{
		return (endTime - startTime) * 8;
	}
	return (endTime - startTime) * 12;
}
