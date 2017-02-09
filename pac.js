function randomfunction(randomnumber){
	var upper = Math.floor(Math.random() * randomnumber)+1;
	return upper;
}
document.write(randomfunction(20));
