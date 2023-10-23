// Assignment Code
var generateBtn = document.querySelector("#generate");

/**
 * 
 * 
 * 
 */

function getRandomNumber(max) {
  var randomNumber=Math.random() * (max+1);
  return Math.floor(randomNumber); 
}
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
/**
 * - Version 1: generatePassword returns a random password with, only one kind of characters, and a pre-fixed length.
 * a. Create an array with the charactres you want to used
 * b. create an empty variable that will store the password
 * c. loop form 0 to the legnth you choose and at every step:
 *    - Get a random element from the array
 *    - Append the element to the password variable
 * 
 * - Version 2: generatePassword returns a random password with, only one kind of characters, and asks the user what lenght the user wants
 * the password to have.
 * a. Create an array with the charactres you want to used
 * b. ask the user what should be the lenght (use prompt)
 * c. create an empty variable that will store the password
 * d. loop form 0 to the legnth you choose and at every step:
 *    - Get a random element from the array
 *    - Append the element to the password variable
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
