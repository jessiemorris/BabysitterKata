function calculatePayment(startTime, endTime, bedTime){

	if(startTime >= bedTime)
	{
		return 8;
	}
	return (endTime - startTime) * 12;
}
