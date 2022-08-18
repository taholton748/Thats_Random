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

// Create password and display in the page
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

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
  
  // Prompt for lower case confirmation
  var confirmLower = confirm("Do you want to include lowercase letters?");
  
  // Conditional for lower case selection
  if (confirmLower) {
    userChoices = userChoices.concat(lowerCase);
    console.log('it worked');
  }
  

  // //Prompt for upper case confirmation
  var confirmUpper = confirm("Do you want to include uppercase letters?");
  // Conditional for upper case selection
  if (confirmUpper) {
    userChoices = userChoices.concat(upperCase);
    console.log(userChoices);
  }

  // //Prompt for numbers confirmation
  let confirmNumber = confirm("Do you want to include numbers?");
  // Conditional for numbers selection
  if (confirmNumber) {
    userChoices = userChoices.concat(numbers);
    console.log(userChoices);
  }

  // //Prompt or special characters confirmation
  let confirmSpecial = confirm("Do you want to include symbols?");
  // Conditional for special characters selection
  if (confirmSpecial) {
    userChoices = userChoices.concat(special);
    console.log(userChoices, 'still working')
  }
}
  var randomPassword ='';
  //10
  //UC = true ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  //LC = true ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  // SC = false
  // Num = true [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  for (var i = 0; i < passwordLength; i++) {
    var randomPassword = userChoices[Math.floor(Math.random() * userChoices.length)];
  }
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
