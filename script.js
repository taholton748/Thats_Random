// Assignment Code
var generateBtn = document.querySelector("#generate");

// error logging

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices = [];

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "'",
  "?",
];

/*
  Prompt user for the following info
    - character length
    - symbol
    - lowercase
    - upperCase
    - numbers
    - etc
  Check if the character meets one of the following
    - must be greater then or equal to 8
    - must not exceed 128 characters
  If user selects symbol, numbers, upperCase, lowercase
  Then one of them must include in the password
  While respecting the amount of characters that user chose

  Once complete, then display the password to the page
*/

//Start function to generate password
function generatePassword() {
  
  //Prompt for password length requiring user input
  passwordLength = prompt("How many characters do you desire between 8 and 128?");
  // Conditional for password length
  if (passwordLength >= 8 && passwordLength <= 128)  {
    console.log("Yayyy it works... password Length is: ", passwordLength);
  } else {
    alert("Must choose a number between 8 and 128 characters");
    passwordLength = prompt("How many characters do you desire between 8 and 128?");
  }
  
  // Prompts for confirmation
  var confirmLower = confirm("Do you want to include lowercase letters?");
  var confirmUpper = confirm("Do you want to include uppercase letters?");
  var confirmNumber = confirm("Do you want to include numbers?");
  var confirmSpecial = confirm("Do you want to include symbols?");

  // Conditional for selection of all 4
  if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = userChoices.concat(lowerCase, upperCase, numbers, special);
  }
  
  // Conditional for no lowercase letters
  else if (confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = userChoices.concat(upperCase, numbers, special);
  }

  // Conditional for no uppercase letters
  else if (confirmLower && confirmNumber && confirmSpecial) {
    userChoices = userChoices.concat(lowerCase, numbers, special);
  }

  // Conditional for no numbers
  else if (confirmLower && confirmUpper && confirmSpecial) {
    userChoices = userChoices.concat(lowerCase, upperCase, special);
  }

  // Conditional for no special characters
  else if (cofirmLower && confirmUpper & confirmNumber) {
    userChoices = userChoices.concat(lowerCase, upperCase, numbers);
  }

  // Upper and lower case selected
  else if (confirmLower && confirmUpper) {
    userChoices = userChoices.concat(lowerCase, upperCase);
  }

  // Upper case and numbers selected
  else if (confirmUpper && confirmNumber) {
    userChoices = userChoices.concat(upperCase, numbers);
  }

  // Upper case and symbols selected
  else if (confirmUpper && confirmSpecial) {
    userChoices = userChoices.concat(upperCase, special);
  }

  //Lower case and numbers selected
  else if (confirmLower && confirmNumber) {
    userChoices = userChoices.concat(lowerCase, numbers);
  }

  //Lower case and special characters selected
  else if (confirmLower && confirmSpecial) {
    userChoices = userChoices.concat(lowerCase, special);
  }

  // Numbers and special characters selected
  else if (confirmNumber && confirmSpecial) {
    userChoices = userChoices.concat(numbers, special);
  }

  // Only lowercase
  else if (confirmLower) {
    userChoices = userChoices.concat(lowerCase);
  }

  //Only uppercase
  else if (confirmUpper) {
    userChoices = userChoices.concat(upperCase);
  }

  //Only numbers
  else if (confirmNumber) {
    userChoices = userChoices.concat(numbers);
  }

  //Only special characters
  else if (confirmSpecial) {
    userChoices = userChoices.concat(special);
  }
}
  var randomPassword ='';

  for (var i = 0; i < passwordLength; i++) {
    var randomPassword = userChoices[Math.floor(Math.random() * userChoices.length)];
  }
// Create password and display in the page
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
