//password prompts:
//password length - 8-128 chars
//character types - lowercase, uppercase, numeric, special, all
function generatePassword () {
  var passLength = parseInt(window.prompt("Enter password length: "));
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    return "Please enter a valid number between 8 and 128";
  }
  var lcase = window.confirm("Do you want lowercase characters?");
  var ucase = window.confirm("Do you want uppercase characters?");
  var numeric = window.confirm("Do you want numeric characters?");
  var special = window.confirm("Do you want special characters?");
  
  var characters = [];
  if (lcase){
    characters+="abcdefghijklmnopqrstuvwxyz";
  }
  if (ucase){
    characters+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numeric){
    characters+="1234567890";
  }
  if (special){
    characters+="!@#$%^&*()?/-_";
  }

  if (characters.length === 0) {
    return "Please choose at least one option.";
  }

  var password = "";
  for (var i = 0; i < passLength; i++){
    var index = Math.floor(Math.random()*characters.length);
    password+=characters[index];
  }
  return password;
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
