let displayValue = '0';
let currentOperator = null;
let firstOperand = null;
let waitingForSecondOperand = false;

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    currentOperator = null;
    firstOperand = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

function appendNumber(number) {
    if (waitingForSecondOperand) {
        displayValue = number;
        waitingForSecondOperand = false;
    } else {
        displayValue === '0' ? displayValue = number : displayValue += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (currentOperator !== null) {
        calculate();
    }
    firstOperand = parseFloat(displayValue);
    currentOperator = operator;
    waitingForSecondOperand = true;
}

function calculate() {
    if (currentOperator === null) return;

    const secondOperand = parseFloat(displayValue);
    let result = 0;

    switch (currentOperator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                alert("Error: Division by zero!");
                clearDisplay();
                return;
            }
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }

    displayValue = result.toString();
    currentOperator = null;
    waitingForSecondOperand = true;
    updateDisplay();
}

updateDisplay();
function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
    if (displayValue === '69') {
        display.textContent += ' 😏';
    }
}