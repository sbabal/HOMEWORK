//global variables
let length = 3 //number variable
let letters = ["a", "b", "c", "d", "e"] //array variable
let numbers = [1, 2, 3]

let options = [letters, numbers]

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min
}

function generate(password_length) {
    let password = ""
    let length = password_length

    //create password
    while (length > 0) {
        let random_option = getRandomNumber(0, options.length)
        let random_index = getRandomNumber(0, options[random_option].length)
        password += options[random_option][random_index]
        length = length - 1
    }
    return password
}
//show password
console.log(generate(length))
console.log(generate(length))
