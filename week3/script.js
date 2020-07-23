// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * max) + min
}

function generatePassword(password_length) {
  var passwordLength = prompt("Make Sure it is 8 characters and no more than 128 characters");
  var passwordLower = confirm("Need to have one uppercase character");
  var passwordUpper = confirm("Need to have one lowercase character");
  var passwordNumbers= confirm("Need to have one numeric selection");
  var passwordSpecial = confirm("Need to have one special character");
  
  if (passwordLength <8 || passwordLength > 128) {
    alert("please change password between 8 and 128 characters")
  }
   if (passwordLower===false && passwordUpper===false && passwordNumbers===false && passwordSpecial===false) {
      alert("please try again")
  }
  
  //global variables
  //let length = 8 //number variable
  let lower = ["a", "b","c","d","e"]
  let upper = ["A","B","C","D","E"]
  //let letters = ["a", "b", "c", "d", "e"] //array variable
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  let special = ["!", "%", "@", "#"]
  
  let options = [lower, upper, numbers, special]

  let password = ""
  //length = password_length

  //create password
  while (passwordLength > 0) {
      let random_option = getRandomNumber(0, options.length)
      let random_index = getRandomNumber(0, options[random_option].length)
      password += options[random_option][random_index]
      passwordLength = passwordLength - 1
          }
         
  return password

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
