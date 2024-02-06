function add(a, b) {
    return Math.floor((+a + +b)*100)/100;
}

function subtract(a, b) {
    return Math.floor((a - b)*100)/100;
}

function multiply(a, b) {
    return Math.floor((a * b)*100)/100;
}

function divide(a, b) {
    if (b == 0) {
        return "ERR";
    }
    return Math.floor((a / b) * 100) / 100;
}

function mod(a, b) {
    if (b == 0) {
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

//calculator part
let numOne='',operand = '',numTwo='',equalSign = '';
let operationText = ``; 
let operatorState = 0;
let resultText = '0';
const operationDiv = document.getElementById('operations');
const resultDiv = document.getElementById('result');
resultDiv.innerHTML = resultText;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.className == 'operator') {
            operand = button.value;
            if (operatorState>0) {
                numOne = resultText;
                numTwo = '';
            }
            operationText = `${numOne} ${operand} ${numTwo} ${equalSign}`;
            operatorState++;
        } else if (button.className != 'terminator') {
            if (operand == '' && button.value != '=') {
                numOne += button.value;
                resultText = numOne;
            } else if (button.value != '=') {
                numTwo += button.value;
                resultText = numTwo;
                if (numTwo != '') {
                    let result = operator(numOne,numTwo,operand);
                    resultText = result;
                }
                operationText = `${numOne} ${operand} ${numTwo} ${equalSign}`;
            }
        } else if(button.className == 'terminator') {
            if (button.value == 'CE') {
                myArray = [resultText,equalSign,numTwo,operand,numOne];
                if (resultText != '') {
                    resultText = '';
                    numTwo = numTwo.substring(0,numTwo.length-1);
                } else if (numTwo != '') {
                    numTwo = numTwo.substring(0,numTwo.length-1);
                } else if (operand != '') {
                    operand = '';
                } else if (numOne != '') {
                    numOne = numOne.substring(0,numOne.length-1);
                }
            } else if (button.value == 'AC') {
                resultText = '0'; equalSign = ''; numTwo = '';operand = ''; numOne = '';
            }
            operatorState = 0;
            operationText = `${numOne} ${operand} ${numTwo} ${equalSign}`;
        }
        if(button.value == '=') {
            equalSign = button.value;
            if (numTwo != '' && operand != '') {
                let result = operator(numOne,numTwo,operand);
                resultText = result;
            }
        }
        if (button.value != '=') {
            equalSign = '';
        }
        operationText = `${numOne} ${operand} ${numTwo} ${equalSign}`;
        operationDiv.innerHTML = operationText;
        resultDiv.innerHTML = resultText;
    });
});

//connecting keyboard with calculator
window.addEventListener('keydown',(e)=> {
    let keyPressed = e.key;
    if (keyPressed == 'Escape') {
        let targetButton = document.querySelector('.terminator[value="AC"]');
        targetButton.click();
    } else if (keyPressed == 'Backspace') {
        let targetButton = document.querySelector('.terminator[value="CE"]');
        targetButton.click();
    } else if (keyPressed == '/') {
        let targetButton = document.querySelector('.operator[value="÷"]');
        targetButton.click();
    }else if (keyPressed == '*') {
        let targetButton = document.querySelector('.operator[value="x"]');
        targetButton.click();
    }else if (keyPressed == 'Enter') {
        let targetButton = document.querySelector('button[value="="]');
        targetButton.click();
    }else if (/[\d\+\%\-\.]/.test(keyPressed)) {
        let targetButton = document.querySelector('button[value="' + keyPressed + '"]');
        targetButton.click();
    }
    console.log(e.key);
}); 