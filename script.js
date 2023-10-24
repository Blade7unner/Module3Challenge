// Assignment Code //
var generateBtn = document.querySelector("#generate");


// Function to generate a random password with a fixed length and only lowercase characters //
function generatePassword() {
  var password = "";
  
  // Define character sets for lowercase and uppercase letters //
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Ask the user for the desired password length //
  var lenght = prompt("Enter the password length (between 8 and 128 characters");
  
  // Validate the user's input for password length //
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return "Invalid Password";
  }

  // Random lowercase character to the password //
  password += getRandomCharacter(lowercaseChars);

  // Random uppercase character to the password //
  password += getRandomCharacter(uppercaseChars);

// Remaining characters of the password //
for (var i = 2; i < length; i++) {
  var randomChar = getRandomCharacter(lowercaseChars + uppercaseChars);
  password += randomChar;
}
  

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
