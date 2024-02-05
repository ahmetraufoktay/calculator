function add(a,b) {
    return Math.floor(a+b);
}
function subtract(a,b) {
    return Math.floor(a-b);
}
function multiply(a,b) {
    return Math.floor(a*b);
}
function divide(a,b) {
    return Math.floor((a/b)*100)/100;
}
function mod(a,b) {
    return Math.floor(a%b);
}

function operator(a,b,operator) {
    switch (operator) {
        case "plus" :
            return add(a,b);
        case "minus":
            return subtract(a,b);
        case "multiply":
            return multiply(a,b);
        case "divide":
            return divide(a,b);
        case "mod":
            return mod(a,b);
    }   
}

//division symbol ÷
let operationtext = '';
let operand = '';
const operations = document.getElementById('operations');
const result = document.getElementById('result');
operations.innerHTML = operationtext;

const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click',()=>
    {
        if (button.className!='operator' && button.className !='terminator') {
            operationtext += button.value;
        }
        else if(button.value != '=' && button.className !='terminator' && 
                operationtext.includes('%') == false && 
                operationtext.includes('÷') == false &&
                operationtext.includes('x') == false &&
                operationtext.includes('-') == false &&
                operationtext.includes('+') == false &&
                operationtext.includes('=') == false ) {
            operand = button.value;
            operationtext += ` ${operand} `;
        }
        if (button.value == '=') {
            if (operand == '') {
                result.innerHTML = operationtext.replace('=','');
                operationtext = '';
            } 
        }
        operations.innerHTML = operationtext;
    });
});