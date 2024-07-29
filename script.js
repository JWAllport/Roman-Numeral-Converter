const numInput = document.getElementById("number");

const submitButton = document.getElementById("convert-btn");


 submitButton.addEventListener("click", convert);


function convert() {

  let input = numInput.value;
  const romanNumerals = document.getElementById("romanNumerals");
  const resultBox = document.getElementById("output");
  romanNumerals.innerText="";

  if (!input) {
    romanNumerals.innerText += "Please enter a valid number";
  } else if (input > 3999 ) {

     console.log(input);
     romanNumerals.innerText += "Please enter a number less than or equal to 3999";
  } else if (parseInt(input) < 0) {
    romanNumerals.innerText += "Please enter a number greater than or equal to 1";
  } else {
    let romanNum = execute(input, "");
    console.log(romanNum);
  
    romanNumerals.innerText += romanNum;
  
  }
  
  resultBox.classList.remove("hidden");

 

}
function execute(input, romanNum) {
  console.log(input);
  if (input >= 1000) {
    romanNum += "M"; 
    input -= 1000;    
    romanNum=execute(input, romanNum)
  } else if (input >= 900) {
    romanNum += "CM"; 
    input -= 900;
    romanNum=execute(input, romanNum)
  } else if (input >= 500) {
     romanNum += "D"; 
     input -= 500;
     romanNum=execute(input, romanNum)
  } else if (input >= 400) {
    romanNum+= "CD";
    input -= 400;
    romanNum=execute(input, romanNum)
  } else if (input >= 100) {
      romanNum+= "C";
      input -= 100;
      romanNum=execute(input, romanNum)
  } else if (input >= 90) {
      romanNum+= "XC";
      input -= 90;
      romanNum=execute(input, romanNum)
  } else if (input >= 50) {
      romanNum+= "L";
      input -= 50;
      romanNum=execute(input, romanNum)
  } else if (input >= 40) {
      romanNum+= "XL";
      input -= 40;
      romanNum=execute(input, romanNum)
  } else if (input >= 10) {
      romanNum += "X";
      input -= 10;
      romanNum=execute(input, romanNum)
  } else if (input >= 9) {
      romanNum+= "IX";
      input -= 9;
      romanNum=execute(input, romanNum)
  } else if (input >= 5) {
      romanNum+= "V";
      input -= 5;
      romanNum=execute(input, romanNum)
  } else if (input >= 4) {
      romanNum+= "IV";
      input -= 4;
      romanNum=execute(input, romanNum)
  } else if (input >= 1) {
      romanNum+= "I";
      input -= 1;
      romanNum=execute(input, romanNum)
  }
  
  return romanNum;
}
