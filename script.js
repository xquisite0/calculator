function add(int1, int2) { return int1 + int2; }

function subtract(int1, int2) { return int1 - int2; }

function multiply(int1, int2) { return int1 * int2; }

function divide(int1, int2) { return int1 / int2; }

function operate(int1, int2, operator) {
    if (operator === 'add') {
        return add(+int1, +int2);
    }
    if (operator === 'subtract') {
        return subtract(int1, int2);
    }
    if (operator === 'multiply') {
        return multiply(int1, int2);
    }
    if (operator === 'divide') {
        return divide(int1, int2);
    } 
}

let digits = document.querySelectorAll('.digit');
let display = document.querySelector('#display');
digits.forEach(digit => {
    digit.addEventListener('click', evt => {
        display.textContent += evt.target.textContent;
    })
})

let operators = document.querySelectorAll('.operator');
let operand1 = 0;
let currentOperator;
let operations = 0;
operators.forEach(operator => {
    operator.addEventListener('click', evt => {
        if (operations === 0) {
            operand1 = display.textContent;
            currentOperator = evt.target.dataset.type;
            operations++;
        } else {
            operand1 = operate(operand1, display.textContent, currentOperator);
            currentOperator = evt.target.dataset.type;
        }
        display.textContent = '';
    })
})

let equal = document.querySelector('#equal');
equal.addEventListener('click', evt => {
    let answer = operate(operand1, display.textContent, currentOperator);
    console.log(answer);
    display.textContent = answer;
    operations = 0;
})

let clear = document.querySelector('#clear');
clear.addEventListener('click', evt => {
    display.textContent = '';
    currentOperator = null;
    operations = 0;
})