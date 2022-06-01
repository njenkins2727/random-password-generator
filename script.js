// Assignment Code
const generateBtn = document.querySelector("#generate");

const upperCaseList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] 

const lowerCaseList = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const numericList = [0, 1 , 2, 3, 4, 5, 6, 7, 8, 9]

const specialCharactersList = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',]

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  console.log("you clicked the button");

 // Please edit your password criteria (confirm)
const firstPopup = confirm("Please edit your password criteria");
if (firstPopup === false){
  return "";
}

 //how many characters in your password. 8-128 characters only(prompt)
 const charLength = parseInt(prompt("How many characters in your password. 8-128 characters only"));

 //validate 8>128
 if (charLength<8 || charLength>128 || isNaN(charLength) ){
   alert("invalid");
   return "please try again"
 } 

//ask what 'charType' to include in password (confirm) : lowercase, uppercase, numeric, and/or special characters
const lowerCaseType = confirm("Do you want 'lowercase' characters in your password");

const upperCaseType = confirm("Do you want 'uppercase' characters in your password");

const numericType = confirm("Do you want 'numeric' characters in your password");

const specialCharType = confirm("Do you want 'special' characters in your password");

//validate input (min one selected)

let allChoices = []

if (lowerCaseType === true){
  allChoices = allChoices.concat(lowerCaseList);
}

if (upperCaseType === true){
  allChoices = allChoices.concat(upperCaseList)
} 

if (numericType === true){
  allChoices = allChoices.concat(numericList)
 }

if (specialCharType === true){
  allChoices = allChoices.concat(specialCharactersList)
} 
console.log(allChoices); // testing allChoices

//generate password with validated criteria 
  

 

  for (let index = 0; index < charLength; index++) {
    console.log(allChoices[Math.floor(Math.random()*allChoices.length)]);  
    }




//  for (let index = 0; index < charLength; index++) {
//   console.log(allChoices[Math.floor(Math.random()*allChoices.length)]);  
//   }



//display password as alert or in writePassword function 


  return "you password here";
}










