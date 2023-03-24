let firstNumber;
let operator;
let secondNumber;

function add(a,b){
    return a+b;
}

function substract(a,b){
    return a - b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

//A function that takes an operator, two numbers adn calls one of the math functions above
function operate(firstNumber, secondNumber, operator, mathFunc){
    operator = ["+","-","*","/"];
    mathFunc = add();

    console.log(add(firstNumber, secondNumber))
}

operate(3,3,"/",add);