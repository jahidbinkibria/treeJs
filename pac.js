// start with git
var input = prompt("enter a number");
var topNumber = parseInt(input);
var randomNumber = Math.floor(Math.random() * topNumber)+1;
var message = "<p>" + randomNumber + " is number between 1 and " + topNumber + "</p>"
document.write(message);