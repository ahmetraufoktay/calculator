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
let operationtext = ''
const operations = document.getElementById('operations');
operations.innerHTML = operationtext;

const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click',()=>
    {
        if (button.className!='operator') {
            operationtext += button.value;
        }
        else {
            operationtext += ` ${button.value} `;
        }
        operations.innerHTML = operationtext;
    });
});