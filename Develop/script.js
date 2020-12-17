// List of User Inputs Variables
var userInput;
var useNumber;
var useSpecialCharacter;
var useUpperCase;
var useLowerCase;

var choices = [];

// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']
// Array of numeric characters to be included in password
var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']




/**
 * function getUserInput
 *  - check if number
 *  - if not run getUserInput again
 *  - if number move on
 */

function getUserInput() {
  userInput = prompt("How many characters would you like your password to be? Password must be at least 8 characters and no more than 128.");
  // If user input is not a number 
  if (isNaN(userInput)) {
    alert("Please enter a valid number.");
    getUserInput();
  }
  // If invalid number is selected "please input a number between 8 and 128."
  else if (userInput < 8 || userInput > 128) {
    userInput = prompt("Please input a number between 8 and 128.");
    getUserInput();
  }

  // Ask user for special, number, lower, and uppercase characters
  else {
    userChoice()
  }
};

// Create a function that ask user for special, number, lower, and uppercase characters. 
function userChoice() {
  useSpecialCharacter = confirm("Do you want a special character in your password?");
  useNumber = confirm("Do you want a number in your password?");
  useLowerCase = confirm("Do you want a lowercased character in you password?");
  useUpperCase = confirm("Do you want a uppercase character in you password?");
}

// Create a function called generatePassword for var password
function generatePassword() {
  
  // Gets button to ask user for userChoice.
  getUserInput();

  // If user declines special, number, lower, and uppercase characters "you must select one criteria"

  if (!useSpecialCharacter && !useNumber && !useUpperCase && !useLowerCase) {
    alert("You must select one criteria.");
    userChoice();
  }

  // First if statement that uses user input prompts to determine choices
  // Else if for 4 positive options
  else if (useSpecialCharacter && useNumber && useLowerCase && useUpperCase) {

    choices = specialCharacters.concat(numberCharacters, lowerCasedCharacters, upperCasedCharacters);
  }
  // Else if for 3 positive options
  else if (useSpecialCharacter && useNumber && useUpperCase) {
    choices = specialCharacters.concat(numberCharacters, upperCasedCharacters);
  }
  else if (useSpecialCharacter && useNumber && useLowerCase) {
    choices = specialCharacters.concat(numberCharacters, lowerCasedCharacters);
  }
  else if (useSpecialCharacter && useLowerCase && useUpperCase) {
    choices = specialCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
  }
  else if (useNumber && useLowerCase && useUpperCase) {
    choices = numberCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
  }

  // Else if for 2 positive options 
  else if (useSpecialCharacter && useNumber) {
    choices = specialCharacters.concat(numberCharacters);
  }
  else if (useSpecialCharacter && useLowerCase) {
    choices = specialCharacters.concat(lowerCasedCharacters);
  }
  else if (useSpecialCharacter && useUpperCase) {
    choices = specialCharacters.concat(upperCasedCharacters);
  }
  else if (useLowerCase && useNumber) {
    choices = lowerCasedCharacters.concat(numberCharacters);
  }
  else if (useLowerCase && useUpperCase) {
    choices = lowerCasedCharacters.concat(upperCasedCharacters);
  }
  else if (useNumber && useUpperCase) {
    choices = numberCharacters.concat(upperCasedCharacters);
  }

  // Else if for 1 positive option
  else if (useSpecialCharacter) {
    choices = specialCharacters;
  }
  else if (useNumber) {
    choices = numberCharacters;
  }
  else if (useLowerCase) {
    choices = lowerCasedCharacters;
  }
  else if (useUpperCase) {
    choices = upperCasedCharacters;
  }

  // Start random selection variables:
  // Random selection for all variables:
  var finalPassword = "";
  for (var i = 0; i < userInput; i++) {
    var character = choices[Math.floor(Math.random() * choices.length)];
    finalPassword += character;
  }

  return finalPassword;
};

// Selects Button In HTML
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};