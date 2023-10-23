// Assignment Code
var generateBtn = document.querySelector("#generate");

/**
 * 
 * 
 * 
 */

function getRandomNumber(max) {
  var randomNumber=Math.random() * (max+1);
  return randomNumber; 
}
console.log(getRandomNumber(10));
console.log(getRandomNumber(5));
console.log(getRandomNumber(3));

/**
 * 1-Have a list of valid letters
 * 2- Randomly choose one
 */



var letters=['a', 'b', 'c', 'd'];


function generatePassword () {
  var password="Test Password!";
/**
 * 
 * 
 */
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
