var upper = 1000;
var randomNumber = getrandomnumber(upper);
var guess;
var attempts = 0; 
function getrandomnumber(upper){
	return Math.floor(Math.random() * upper)+1;
}

while(guess !== randomNumber){
	guess = getrandomnumber(upper);
	attempts++
}
document.write("<p> the random number is " + randomNumber + "</p>");
document.write("<p> it took the coumputer " + attempts + " attemps to get it right </p>");
