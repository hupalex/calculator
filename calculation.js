let firstNumber;
let operator;
let secondNumber;

let displayValue

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

function typeing(){
    let btns = document.querySelectorAll("button");
    let display = document.querySelector("#display #dispContent");

    btns.forEach((btn) =>{

        btn.addEventListener("click", () =>{
                 
            display.textContent += btn.textContent;
            displayValue = Array(display.textContent);
            for(var i = 0; i < displayValue.length; ++i)
            displayValue[i] = displayValue[i].replace(/(\r\n|\n|\r|\s)/gm,"")
            displayValue = Number(displayValue);

            console.log(displayValue);

        })
    })
}

typeing();
operate(3,3,"/",add);
