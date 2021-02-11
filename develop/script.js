// Assignment Code

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "@", "#", "$", "%", "&", "*"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function passwordChoice(){

    var passLength = window.prompt("how many characters would you like your password to be")
    if (passLength <8) {
        alert("password length must be at least 8 characters long")
        return;
    }
    if (passLength >128) {

    alert("password length must be less than 128 characters")
        return;
    }
    var hasNumbers = confirm("click okay if you would like numbers in your password")

    var hasSpecialCharacters = confirm("click okay if you would like special characters")

    var hasUpperCase = confirm("click okay if you would like upper case letters")

    var hasLowerCase = confirm("click okay if you would like lower case letters")

    var passWordOpts = {
        passLength:passLength,
        hasNumbers:hasNumbers,
        hasSpecialCharacters:hasSpecialCharacters,
        hasUpperCase:hasUpperCase,
        hasLowerCase:hasLowerCase

    }
    return passWordOpts
}

function randomChoice(array){
    var randomIndex = Math.floor(Math.random()* array.length);
    var randomElement = array[randomIndex]
    return randomElement
}

function generatePassword(){
    var options = passwordChoice()
    var result = []
    var possibleChar = []
    var guaranteedChar = []
    if (options.hasNumbers){
        possibleChar = possibleChar.concat(numbers)
        guaranteedChar.push(randomChoice(numbers))
    }
    if (options.hasSpecialCharacters){
        possibleChar = possibleChar.concat(specialCharacters)
        guaranteedChar.push(randomChoice(specialCharacters))
    }
    if (options.hasUpperCase){
        possibleChar = possibleChar.concat(upper)
        guaranteedChar.push(randomChoice(upper))
    }
    if (options.hasLowerCase){
        possibleChar = possibleChar.concat(lower)
        guaranteedChar.push(randomChoice(lower))
    }

    for (var i = 0; i < options.passLength; i++){
        var possibleCharacter = randomChoice(possibleChar);
        result.push(possibleCharacter)
    }

    // for (var i = 0; i < guaranteedChar.length; i++){
    //     result[i]=guaranteedChar[i]
    // }
    return result.join("")
}

var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



