// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Click!")

  return "Input Generated Password Here!"
}

// Define the character set (in this case, lowercase letters)
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
