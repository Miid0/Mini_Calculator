const button = <HTMLButtonElement>document.getElementById('submit');
const inputOne = <HTMLInputElement>document.getElementById('num1');
const inputTwo = <HTMLInputElement>document.getElementById('num2');
const sign = <HTMLSelectElement>document.getElementById('sign');
const output = document.getElementById('output');
const reset = <HTMLButtonElement>document.getElementById('reset');
const zero = <HTMLElement>document.getElementById('zero');
const errormsg = <HTMLElement>document.getElementById('errormsg');
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
	let numOne = parseFloat(inputOne.value);
	let numTwo = parseFloat(inputTwo.value);
	let result: number;
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
	if (result.toString() !== 'NaN' && result !== Infinity) {
		output!.firstElementChild!.innerHTML = `${result}`
		remain = result;
	}
	if (result === Infinity) {
		inputTwo.classList.add('error');
		errormsg.innerHTML += `
		<h3 class="errormsg">You Can't dived by 0!</h3>
		`
		setTimeout(() => {
			inputTwo.classList.remove('error');
			errormsg.innerHTML = ''
		}, 3000);
	}
	e.preventDefault();
})