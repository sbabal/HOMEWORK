
//global variables

let length = 3 //number variable
let letters = ["a", "b", "c", "d", "e"] //array variable
let numbers = [1, 2, 3]
let password = "" //string variable
​let options = [letters, numbers]
​
//create password
while (length > 0) {
    let random_option = Math.floor(Math.random() * options.length)
    let random_index = Math.floor(Math.random() * options[random_option].length)
    password += options[random_option][random_index]
    length = length - 1
}
​
//show password
console.log(password)













// //local variables

// ---For loop


// --While loop

// // Creates a prompt box which takes in text input.
// var passwordLength = prompt("Make Sure it is 8 characters and no more than 128 characters");
// var passwordUpper = prompt("Need to have one uppercase character");
// var passwordLower = prompt("Need to have one lowercase character");
// var passwordNumeric= prompt("Need to have one numeric selection");
// var passwordCharacter = prompt("Need to have one special character");

// // Creates a confirm box which takes in true or false.
// var confirmSushi = confirm("Do you like sushi?");


// // Alerts the output from our prompt box.
// alert("Your new password " + passwordLength + passwordUpper + passwordLower + passwordNumeric + passwordCharacter +" is generated!");



