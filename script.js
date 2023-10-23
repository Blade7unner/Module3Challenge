// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Click!")

  return "Input Generated Password Here!"
}

// Define the character set (in this case, lowercase letters)
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";

// Function to generate a random character from the lowercase character set
function getRandomLowercaseChar() {
  var randomIndex = Math.floor(Math.random() * lowercaseChars.length);
  return lowercaseChars[randomIndex];
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
