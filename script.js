let display = document.getElementById('display');
let currentInput = '';
let firstOperand = null;
let operation = null;

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendDot() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        display.value = currentInput;
    }
}

function setOperation(op) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else {
        calculate();
    }
    operation = op;
    currentInput = '';
}

function calculate() {
    if (operation === null || currentInput === '') return;
    let secondOperand = parseFloat(currentInput);
    switch (operation) {
        case '+':
            firstOperand += secondOperand;
            break;
        case '-':
            firstOperand -= secondOperand;
            break;
        case '*':
            firstOperand *= secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                alert('Error: División por cero');
                clearDisplay();
                return;
            }
            firstOperand /= secondOperand;
            break;
    }
    display.value = firstOperand;
    currentInput = '';
    operation = null;
}

function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    operation = null;
    display.value = '';
}

