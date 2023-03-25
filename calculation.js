let mathArray = [];
let displayValue;
let display = document.querySelector("#display #dispContent");
let btns = document.querySelectorAll(".number");


//A function that takes an operator, two numbers and evaluates them
function operate(firstNumber, secondNumber, operator){
    let sum=`${firstNumber}${operator}${secondNumber}`;
    return eval(sum);
}

//A function that lets the user put the number on the display using numeric buttons
function getNumber(){
    btns.forEach((btn) =>{
        btn.addEventListener("click", () =>{         
            display.textContent += btn.textContent;
            displayValue = Array(display.textContent);
            for(var i = 0; i < displayValue.length; ++i)
            displayValue[i] = displayValue[i].replace(/(\r\n|\n|\r|\s)/gm,"")
            displayValue = Number(displayValue);
            number = displayValue;
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


function typeing(){
    let ops = document.querySelectorAll(".operators");

    getNumber();
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
                }else if(op.id==="-"){
                    checkAndOperate(op.id);
                }else if(op.id==="*"){
                    checkAndOperate(op.id);
                }else if(op.id==="/"){
                    checkAndOperate(op.id);
                }else if(op.id ==="="){
                    fn=mathArray[0];
                    o=mathArray[1];
                    sn=mathArray[2];      
                    display.textContent = operate(fn,sn,o);  
                }else if(op.id==="del"){
                    display.textContent ="";
                    let clearedArray = mathArray.splice(0,0);
                    mathArray = clearedArray;                  
                }     
            }
        })
    })

}


typeing();

