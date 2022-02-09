//password prompts:
//password length - 8-128 chars
//character types - lowercase, uppercase, numeric, special
function generatePassword () {
  var passLength = parseInt(window.prompt("Enter password length: "));
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    return "Please enter a valid number between 8 and 128";
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
