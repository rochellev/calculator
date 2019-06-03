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
}

var results;

var number1 = prompt("Enter a number:"); // result is a sting
var numberInt1 = parseInt(number1); //convert to integer for adding

var number2 = parseInt(prompt("Enter a second number:"));
//results = subtract(numberInt1, number2);
//results = add(numberInt1, number2);
results = divide(number1,number2);
alert(results);
