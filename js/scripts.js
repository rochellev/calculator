function add(number1,number2){
	return number1 + number2;
};

function subtract(number1,number2){
  return number1 - number2;
};

function multiply(number1,number2){
 return number1 * number2;
};

function divide(number1,number2){
  return number1 / number2;
};

// BMI = 703 * weight/ (height*height)
function bmi (weight,height){
  return 703*(weight)/(height*height);
};



function convertFtoC(number) {
  return (number - 32)/ 1.8;
}
var results;

var number1 = prompt("Enter your weight:"); // result is a sting
var numberInt1 = parseInt(number1); //convert to integer for adding

var number2 = parseInt(prompt("Enter your height in inches:"));
//results = subtract(numberInt1, number2);
//results = add(numberInt1, number2);
results = convertFtoC(number1);
alert(results);
