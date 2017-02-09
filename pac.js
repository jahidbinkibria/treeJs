function randomfunction(upper){

	return Math.floor(Math.random() * upper)+1;

}

var count = 0;
while(count<100){
	var ramcount = randomfunction(100);
	document.write(ramcount + ' ');
	count++
}
