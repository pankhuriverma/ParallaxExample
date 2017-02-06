function disp(){


	if(window.pageYOffset>600)
	{
		document.pic.src="wall2.jpg";
	}
	else if(window.pageYOffset>1690){
		document.pic.src="wall1.jpg";

	}
	else
	{
		document.pic.src="wall1.jpg";
	}

}