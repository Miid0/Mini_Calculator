const button = document.getElementById('submit');
const inputOne = <HTMLInputElement>document.getElementById('num1');
const inputTwo = <HTMLInputElement>document.getElementById('num2');
const sign = <HTMLInputElement>document.getElementById('sign');
const output = document.getElementById('output');
const reset = document.getElementById('reset');
var remain: number | number[];

const clearFields = function () {
	if (inputOne.value || inputTwo.value || sign.value) {
		inputOne.value = '';
		inputTwo.value = '';
		sign.value = '';
	}
}

reset?.addEventListener('click', e => {

	clearFields();
	e.preventDefault();
})

button?.addEventListener('click', e => {
	let numOne = parseInt(inputOne.value);
	let numTwo = parseInt(inputTwo.value);
	let result;
	if (sign.value === '+') {
		result = numOne + numTwo;
	} else if (sign.value === '-') {
		result = numOne - numTwo;
	} else if (sign.value === 'x') {
		result = numOne * numTwo;
	} else if (sign.value === '/') {
		result = numOne / numTwo;
	}
	if (result !== undefined)
		output!.innerHTML = `<p class="p-16 items-center text-second">${result}</p>`
	e.preventDefault();
})