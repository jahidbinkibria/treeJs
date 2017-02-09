
var randomNumber = getrandomnumber(10);
var guess;
var guessCount = 0; 
var correctGuess = false;
function getrandomnumber(upper){
	var num =  Math.floor(Math.random() * upper)+1;
	return num;
}
do{
	guess = prompt('i am thinking of a number betwwen 1 and 10. what is it? ');
	guessCount++
	if(parseInt(guess) ===randomNumber){
		correctGuess = true;
	}
}
while(!correctGuess);
document.write("<p> you guessed the number! </p>");
document.write("its took you " + guessCount + " tires to guess the number " + randomNumber);
