// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//global variables

//local variables

---For loop


--While loop

// Creates a prompt box which takes in text input.
var passwordLength = prompt("Make Sure it is 8 characters and no more than 128 characters");
var passwordUpper = prompt("Need to have one uppercase character");
var passwordLower = prompt("Need to have one lowercase character");
var passwordNumeric= prompt("Need to have one numeric selection");
var passwordCharacter = prompt("Need to have one special character");

// Creates a confirm box which takes in true or false.
var confirmSushi = confirm("Do you like sushi?");


// Alerts the output from our prompt box.
alert("Your new password " + passwordLength + passwordUpper + passwordLower + passwordNumeric + passwordCharacter +" is generated!");



