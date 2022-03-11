const button = <HTMLButtonElement>document.getElementById('submit');
const inputOne = <HTMLInputElement>document.getElementById('num1');
const inputTwo = <HTMLInputElement>document.getElementById('num2');
const sign = <HTMLSelectElement>document.getElementById('sign');
const output = document.getElementById('output');
const reset = <HTMLButtonElement>document.getElementById('reset');
const zero = <HTMLElement>document.getElementById('zero');
var remain = 0;

const clearFields = function () {
	if (inputOne.value || inputTwo.value || sign.value) {
		inputOne.value = '';
		inputTwo.value = '';
		sign.value = '';
	}
}

reset?.addEventListener('click', e => {
	remain = 0;
	zero.innerText = `${remain}`;
	clearFields();
	e.preventDefault();
})

button?.addEventListener('click', e => {
	let numOne = parseInt(inputOne.value);
	let numTwo = parseInt(inputTwo.value);
	let result: number;
	console.log(zero.textContent)
	if (remain) {
		clearFields();
		inputOne.value = `${remain}`
	}
	switch (sign.value) {
		case '+':
			result = numOne + numTwo;
			break;
		case '-':
			result = numOne - numTwo;
			break;
		case 'x':
			result = numOne * numTwo;
			break;
		case '/':
			result = numOne / numTwo;
			break;
		default:
			result = 0;
	}
	if (result.toString() !== 'NaN') {
		output!.firstElementChild!.innerHTML = `${result}`
		remain = result;
	}
	e.preventDefault();
})