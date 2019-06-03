function add(number1,number2){
	return number1 + number2;
};

var sum;
//sum = add(10,5);
//alert(sum);

var number1 = prompt("Enter a number:"); // result is a sting
var numberInt1 = parseInt(number1); //convert to integer for adding

var number2 = parseInt(prompt("Enter a second number:"));




sum = add(numberInt1, number2);
alert(sum);
