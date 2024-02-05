function add(a, b) {
    return Math.floor(a + b);
}

function subtract(a, b) {
    return Math.floor(a - b);
}

function multiply(a, b) {
    return Math.floor(a * b);
}

function divide(a, b) {
    if (b === 0) {
        return "ERR";
    }
    return Math.floor((a / b) * 100) / 100;
}

function mod(a, b) {
    if (b === 0) {
        return "ERR";
    }
    return Math.floor(a % b);
}

function operator(a, b, operator) {
    if (isNaN(a) || isNaN(b)) {
        return ''; 
    }
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "x":
            return multiply(a, b);
        case "÷":
            return divide(a, b);
        case "%":
            return mod(a, b);
    }
}

let operationText = '';
let operand = '';
let buttonPress = false;
const operations = document.getElementById('operations');
const resultDiv = document.getElementById('result');
let resultText = resultDiv.innerHTML;
operations.innerHTML = operationText;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        function calculator() {
            if (button.className !== 'operator' && button.className !== 'terminator') {
                operationText += button.value;
            } else if (
                button.value !== '=' &&
                button.className !== 'terminator' &&
                !operationText.includes('%') &&
                !operationText.includes('÷') &&
                !operationText.includes('x') &&
                !operationText.includes('-') &&
                !operationText.includes('+') &&
                !operationText.includes('=')
            ) {
                operand = button.value;
                operationText += ` ${operand} `;
            }
            if (button.value === '=') {
                operationText = operationText.replace('=', '');
                let myValues = operationText.split(" ");
                if (myValues.length <= 2) {
                    resultText = '';
                } else {
                    let a = parseFloat(myValues[0]);
                    let b = parseFloat(myValues[2]);
                    let result = operator(a, b, operand);
                    if (result !== undefined) {
                        resultText = result;
                    }
                }
            }
            operations.innerHTML = operationText;
            resultDiv.innerHTML = resultText;
        }

        if (resultText !== '') {
            if (resultText !='ERR') operationText = resultText;
            else if(resultText == 'ERR') {
                operationText = '';
            }
            resultText = '';
            calculator();
        } else {
            calculator();
        }
    });
});