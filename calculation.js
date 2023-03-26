let mathArray = [];
let displayValue;
let display = document.querySelector("#display #dispContent");
let btns = document.querySelectorAll(".number");
let sum=0;
let equalIsClicked = false;
let functionIsClicked= false;


//A function that takes an operator, two numbers and evaluates them
function operate(firstNumber, secondNumber, operator){
    let sum=`${firstNumber}${operator}${secondNumber}`;
    if(operator==="/" && secondNumber === 0){
        clearArray(); 
        alert("How dare you?!");
    }else return eval(sum);
    
}

function writeNumberWithoutClearing(element){
    display.textContent += element.textContent;
    displayValue = Array(display.textContent);
    for(var i = 0; i < displayValue.length; ++i)
    displayValue[i] = displayValue[i].replace(/(\r\n|\n|\r|\s)/gm,"")
    displayValue = Number(displayValue);
    number = displayValue;  
}

function writeNumberWithClearing(element){
    clearArray();
    equalIsClicked = false;
    functionIsClicked = true;
    display.textContent += element.textContent;
    displayValue = Array(display.textContent);
    for(var i = 0; i < displayValue.length; ++i)
    displayValue[i] = displayValue[i].replace(/(\r\n|\n|\r|\s)/gm,"")
    displayValue = Number(displayValue);
    number = displayValue;
}

//A function that lets the user put the number on the display using numeric buttons
function getNumber(){
    btns.forEach((btn) =>{
        btn.addEventListener("click", () =>{     
            if(equalIsClicked === false){
                    writeNumberWithoutClearing(btn)
            } else if(equalIsClicked === true){
                if(functionIsClicked === false){
                    writeNumberWithClearing(btn);  
                }else{
                    writeNumberWithoutClearing(btn);
                }
                
            }
        })     
    })
}

//A function I created for refactoring purposes, checks if the used array has any element on a given number.
function checkIfExist(arrayNum,equalto){
    if(!mathArray[arrayNum]){
        mathArray.push(equalto);
    }else{
        mathArray[arrayNum] = equalto;
    }
}

function checkAndOperate(id){
    if(!mathArray[1]){
        mathArray.push(id);
    }else{
        fn=mathArray[0]
        o=mathArray[1];
        sn=mathArray[2]; 
        mathArray[0] = operate(fn,sn,o);
        mathArray[1] = id;       
    }
}

function getCalcFunction(){
    let ops = document.querySelectorAll(".operators");
    ops.forEach((op) =>{
        op.addEventListener("click", () =>{    
              
            if(!mathArray.length){
                mathArray.push(number);
            }else {
                checkIfExist(2,number)
            }   
            console.log(mathArray);

            display.textContent ="";

            if(mathArray[0]){
                if(op.id==="+"){
                   checkAndOperate(op.id);
                   functionIsClicked = true;
                }else if(op.id==="-"){
                    checkAndOperate(op.id);
                    functionIsClicked = true;
                }else if(op.id==="*"){
                    checkAndOperate(op.id);
                    functionIsClicked = true;
                }else if(op.id==="/"){
                    checkAndOperate(op.id);
                    functionIsClicked = true;
                    
                }else if(op.id==="="){
                    fn=mathArray[0];
                    o=mathArray[1];
                    sn=mathArray[2];      
                    display.textContent = operate(fn,sn,o);
                    sum = display.textContent
                    equalIsClicked = true;
                    functionIsClicked = false;
     
                }else if(op.id==="del"){
                    clearArray();                 
                }     
            }
            
        })
    })
}
function typeing(){
    getNumber();
    getCalcFunction();

}

function clearArray(){
    display.textContent ="";
    let clearedArray = mathArray.splice(0,0);
    mathArray = clearedArray; 
}

typeing();

