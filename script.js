// Assignment Code
var generateBtn = document.querySelector("#generate");


function getRandomNumber(max) {
  var randomNumber = Math.floor(Math.random() * max);
  return randomNumber; 
}

// Function to generate a random password with letters





console.log(getRandomNumber(10));
console.log(getRandomNumber(5));
console.log(getRandomNumber(3));

/**
 * 1-Have a list of valid letters
 * 2- Randomly choose one
 */

function getRandomElementFromArray (array) {
  var randomPosition=getRandomNumber(array.length-1)
  return array [randomPosition];
}
var letters=['a', 'b', 'c', 'd'];
console.log (getRandomElementFromArray(letters));
console.log (getRandomElementFromArray( [1,2,7,9,10]))
console.log (getRandomElementFromArray( ['?','/','$']))

var randomLetter=letters [ randomPosition];
console.log (randomLetter)



function generatePassword () {
  var password="Test Password!";

return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
