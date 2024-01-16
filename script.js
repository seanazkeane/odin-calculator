let prevNumDisplay = document.querySelector(".previous-num-display");
let currentNumDisplay = document.querySelector(".current-num-display");
let clearButton = document.querySelector(".clear-button");
let numberButton = document.querySelectorAll(".number-button");
let operatorButton = document.querySelectorAll(".operator-button");
let deleteButton = document.querySelector(".delete-button");
let equalsButton = document.querySelector('.equals-button');
let decimalButton = document.querySelector('.decimal-button');


let prevNum = "";
let operator = "";
let currentNum = "";

/*function operate(previousNum, operator, currentNum){
    if (operator == "+") {
        return previousNum + currentNum;
    } else if (operator == "-") {
        return previousNum - currentNum;
    } else if (operator == "*"){
        return previousNum * currentNum;
    } else if (operator =="%") {
        return previousNum / currentNum;
    }
};*/

deleteButton.addEventListener("click", function(){
    currentNum = currentNum.slice(0,-1);
    currentNumDisplay.textContent = currentNum;
});

clearButton.addEventListener("click", function(){
    prevNum = "";
    operator = "";
    currentNum = "";
    prevNumDisplay.textContent = prevNum;
    currentNumDisplay.textContent = currentNum;
});

numberButton.forEach(function(button){
    button.addEventListener("click", function() {
        addNum(button.innerText);
        currentNumDisplay.textContent = currentNum;
    })
});

operatorButton.forEach(function(button){
    button.addEventListener("click", function(){
        addOp(button.innerText);
        prevNumDisplay.textContent = prevNum + " " + operator;
        currentNumDisplay.textContent = currentNum;
    })
});

decimalButton.addEventListener('click', function(){
    addDecimal()
});

function addNum(num) {
    if (currentNum.length <= 10) {
        currentNum += num;
    }
}

function addDecimal() {
    if(!currentNum.includes(".")){
        currentNum += decimalButton.innerText;
        currentNumDisplay.textContent = currentNum;
    }
};

function addOp(op) {
    operator = op;
    prevNum = currentNum;
    currentNum = "";
};

equalsButton.addEventListener('click', function(){
    calculate()
    prevNumDisplay.textContent = "";
    currentNumDisplay.textContent = currentNum;

});

function roundNum(num) {
    return Math.round(num * 1000) / 1000;
};

function calculate(){
    prevNum = Number(prevNum);
    currentNum = Number(currentNum);

    if (operator === "+") {
        prevNum += currentNum;
    } else if (operator === "-") {
        prevNum -= currentNum;
    } else if (operator === "x"){
        prevNum *= currentNum;
    } else if (operator ==="%") {
        prevNum /= currentNum;
    }
    prevNum = roundNum(prevNum);
    prevNum = prevNum.toString();
    currentNum = prevNum.toString();
};
