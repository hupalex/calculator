let mathArray = [];
let displayValue;
let display = document.querySelector("#display #dispContent");
let btns = document.querySelectorAll(".number");


//A function that takes an operator, two numbers adn calls one of the math functions above
function operate(firstNumber, secondNumber, operator){
    let sum=`${firstNumber}${operator}${secondNumber}`;
    return eval(sum);
}

function getFirstNumber(){
    
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

function checkIfExist(arrayNum,equalto){
    if(!mathArray[arrayNum]){
        mathArray.push(equalto);
    }else{
        mathArray[arrayNum] = equalto;
    }
}

function typeing(){
    let ops = document.querySelectorAll(".operators");
    
    getFirstNumber();

    ops.forEach((op) =>{
        op.addEventListener("click", () =>{       
            if(!mathArray.length){
                mathArray.push(number);
            }else {
                checkIfExist(2,number)
            }
            
            display.textContent ="";

            if(mathArray[0]){
                if(op.id==="+"){
                    checkIfExist(1,op.id)
                }else if(op.id==="-"){
                    checkIfExist(1,op.id)
                }else if(op.id==="*"){
                    checkIfExist(1,op.id)
                }else if(op.id==="/"){
                    checkIfExist(1,op.id)
                }else if(op.id ==="="){
                    fn=mathArray[0]
                    o=mathArray[1];
                    sn=mathArray[2];
                    
                    display.textContent = operate(fn,sn,o);
                    
                    mathArray[0] = operate(fn,sn,o);
                    
                }         
            }

        })
    })

}


typeing();

