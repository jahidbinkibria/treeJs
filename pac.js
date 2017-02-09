function randomfunction(lower,upper){
	if(isNaN(lower) || isNaN(upper) ){
		throw new Error('Both arguments must be numbers');
	}
	return Math.floor(Math.random()*(upper - lower +1))+lower;
}
document.write(randomfunction(2,76));
document.write("<br>");
document.write(randomfunction(500,5687));
document.write("<br>");
document.write(randomfunction('hello',76));
document.write("<br>");
document.write(randomfunction(60,567));
document.write("<br>");
document.write(randomfunction(20,276));	
