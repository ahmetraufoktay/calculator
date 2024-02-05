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

//
if (equalSign == '') {
    if (button.className == 'operator'){
        numOne = resultText;
        operand = button.value;
    } else if (button.className != 'terminator') {
        if (operand == '' && button.value != '=') {
            if (resultText == '0') {
                resultText = button.value;
            } else {
                resultText += button.value;
            }
        } else if(button.value != '='){
            if (resultTwo == '') {
                resultTwo = button.value;
            } else {
                resultTwo += button.value;
            }
            resultText = resultTwo;
        }
    } 
}