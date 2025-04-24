function add(num1, num2){
    return num1 + num2;
}
function sub(num1,num2){
    return num1 - num2;
}
function mul(num1, num2){   
    return num1 * num2;
}
function div(num1, num2){
    return Math.round((num1 / num2) * 10000000) / 10000000;
}
let firstNum = '';
let secondNum = '';
let operator = '';
let currentVal = '';
let display = document.querySelector("#display");
function operate(num1, num2, op){
    switch(op){
        case "+":
            return add(num1,num2);
        case "-":
            return sub(num1,num2);
        case "x":
            return mul(num1,num2);
        case "/":
            if (num2 == 0) return 'ERROR';
            return div(num1,num2);    
    }
}
const dgts = document.querySelectorAll(".digit");
dgts.forEach((dgt) => {
    dgt.addEventListener("click", () => {
        if (currentVal.indexOf('.') != -1 && dgt.textContent == '.') return;
        currentVal += dgt.textContent;
        display.textContent = currentVal;
    });
});
const ops = document.querySelectorAll(".operator");
ops.forEach((opBtn) => {
    opBtn.addEventListener("click", () => {
        if (currentVal == '') return;
        
        if (firstNum == '') {
            firstNum = currentVal;
            operator = opBtn.textContent;
            currentVal = '';
        } else if (operator !== '' && currentVal !== '') {
            secondNum = currentVal;
            let result = operate(Number(firstNum), Number(secondNum), operator);
            display.textContent = result;
            firstNum = result;
            operator = opBtn.textContent;
            currentVal = '';
        }
    });
});
const equal = document.querySelector("#equals");
equal.addEventListener("click", () => {
    if (firstNum === '' || operator === '' || currentVal === '') return;

    secondNum = currentVal;
    let result = operate(Number(firstNum), Number(secondNum), operator);
    display.textContent = result;
    firstNum = '';
    operator = '';
    currentVal = '';
});
const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    firstNum = '';
    secondNum = '';
    operator = '';
    currentVal = '';
    display.textContent = "0";
});