//need to add:
//see note under compute function

var output = document.getElementById("output");
var firstNum = document.getElementById("num1");
var secondNum = document.getElementById("num2");
let num = '';
let num2 = '';
let operand = '';
var invalidMessage = "Sorry, that operation is not valid";

//BUTTONS
var addBtn = document.getElementById("add");
var subBtn = document.getElementById("subtract");
var multBtn = document.getElementById("multiply");
var divBtn = document.getElementById("divide");
var expBtn = document.getElementById("exponent");
var numBtns = document.getElementsByClassName("number");
let equalBtn = document.getElementById("equals");
let clearBtn = document.getElementById("clear");

//EVENT LISTENERS
// addBtn.addEventListener("click", addBy);
// subBtn.addEventListener("click", subBy);
// multBtn.addEventListener("click", multBy);
// divBtn.addEventListener("click", divBy);
// expBtn.addEventListener("click", expBy);
addBtn.addEventListener("click", captureOp);
subBtn.addEventListener("click", captureOp);
multBtn.addEventListener("click", captureOp);
divBtn.addEventListener("click", captureOp);
expBtn.addEventListener("click", captureOp);
equalBtn.addEventListener("click", compute);
clearBtn.addEventListener("click", reset);

for(var i = 0; i < numBtns.length; i++) {
	numBtns[i].addEventListener("click", captureNums);
}

//RESET ALL
function reset() {
	//clear all numbers and operands and displays
	num = '';
	num2 = '';
	operand = '';
	output.innerHTML = '';
	console.log(num + " " + num2 + "  " + operand + " " + output)
}

//ADD, SUB, MULT, DIV, EXPONENTIATE FUNCTIONS

function resetOpAndNum() {
	operand = ''; //reset this and num2
	num2 = '';
}

function compute() {
	switch(operand) {
		case "+": 
			let sum = addBy(+num, +num2)
			output.innerHTML = `${num} ${operand} ${num2} = ${sum}`;
			num = sum.toString(); //so it shows as string in UI
			resetOpAndNum();
			break;

		case "-": 
			let diff = subBy(+num, +num2)
			output.innerHTML = `${num} ${operand} ${num2} = ${diff}`;
			num = diff.toString(); //so it shows as string in UI
			resetOpAndNum();
			break;

		case "*": 
			let product = multBy(+num, +num2)
			output.innerHTML = `${num} ${operand} ${num2} = ${product}`;
			num = product.toString(); //so it shows as string in UI
			resetOpAndNum();
			break;

		case "/": 
			let quotient = divBy(+num, +num2)
			output.innerHTML = `${num} ${operand} ${num2} = ${quotient}`;
			num = quotient.toString(); //so it shows as string in UI
			resetOpAndNum();
			break;

		case "^": 
			let power = expBy(+num, +num2)
			output.innerHTML = `${num} ${operand} ${num2} = ${power}`;
			num = power.toString(); //so it shows as string in UI
			resetOpAndNum();
			break;

		default:
			output.innerHTML = invalidMessage;

	}
}
	// if(operand === "+") {
	// 	//check to see if num1 and num2they exist&&&&&&&&&&&&&&
	// 	let sum = addBy(+num, +num2)
	// 	output.innerHTML = `${num} ${operand} ${num2} = ${sum}`;
	// 	num = sum.toString(); //so it shows as string in UI
	// 	operand = ''; //reset this and num2
	// 	num2 = '';
	// }

function addBy(a,b) {
	return a+b;
	// var a = +firstNum.value;
	// var b = +secondNum.value;
	// var c = a+b;
	// printOut(a,b,"+",c);
}

function subBy(a,b) {
	return a-b;
	// var a = +firstNum.value;
	// var b = +secondNum.value;
	// var c = a-b;
	// printOut(a,b,"-",c);
}

function multBy(a,b) {
	return a*b;
	// var a = +firstNum.value;
	// var b = +secondNum.value;
	// var c = a*b;
	// printOut(a,b,"*",c);
}

function divBy(a,b) {
	return a/b;
	// var a = +firstNum.value;
	// var b = +secondNum.value;
	// var c = a/b;
	// printOut(a,b,"/",c);
}

function expBy(a,b) {
	return a**b;
	// var a = +firstNum.value;
	// var b = +secondNum.value;
	// var c = a**b;
	// printOut(a,b,"^",c);
}

//write updateOutput to not use += so can't type multiple +'s
function captureOp() {
	if(num) {
		operand = this.value;
		output.innerHTML = `${num} ${operand} ${num2}`;
	}
	
}

function captureNums() {
	//if an operand is already defined
	if (operand) {
		num2 += this.value;
		output.innerHTML = `${num} ${operand} ${num2}`;
	} else {
		num += this.value;
		output.innerHTML = `${num}`;
	}
}

function printOut(firstNumber, secondNumber, operation, result) {
	output.innerHTML = `${firstNumber} ${operation} ${secondNumber} = ${result}`;
}

