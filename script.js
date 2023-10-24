// Assignment Code //
var generateBtn = document.querySelector("#generate");


// Function to generate a random password with a fixed length and only lowercase characters //
function generatePassword() {
  var password = "";
  var length = 10; // change to desired password length //

  for (var i = 0; i < length; i++) {
    var randomChar = getRandomLowercaseChar();
    password += randomChar;
  }

  return password;
}

// Function to get a random character from the lowercase character set
function getRandomLowercaseChar() {
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var randomIndex = Math.floor(Math.random() * lowercaseChars.length);
return lowercaseChars[randomIndex];

}

// Function to write the generated password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button //
generateBtn.addEventListener("click", writePassword);
