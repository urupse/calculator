const numberBtns = document.querySelectorAll(".num");
const opBtns = document.querySelectorAll(".op");
const decimalBtn = document.querySelector(".decimal");
const ACBtn = document.querySelector(".ac");
const delBtn = document.querySelector(".del");
const equalBtn = document.querySelector(".equal");
const prevDisplay = document.querySelector(".prev");
const curDisplay = document.querySelector(".cur");

let operator = '+';
let prev = '0';
let cur = '';

function addNumber(num) {
    cur += num;
}

numberBtns.forEach((num) => num.addEventListener("click", function(e) {
    addNumber(e.target.textContent);
    curDisplay.textContent = cur;
}));

function addDecimal() {
    if (!cur.includes(".")) {
        cur += ".";
    }
}

decimalBtn.addEventListener("click", function() {
    addDecimal();
    curDisplay.textContent = cur;
})

function addOp(op) {
    calculate();
    operator = op;
    prev = cur;
    cur = '';
}

opBtns.forEach((op) => op.addEventListener("click", function(e) {
    addOp(e.target.textContent);
    prevDisplay.textContent = prev + " " + operator;
    curDisplay.textContent = cur;
}))

ACBtn.addEventListener("click", function() {
    prev = '';
    cur = '';
    operator = '';
    prevDisplay.textContent = cur;
    curDisplay.textContent = cur;
})

delBtn.addEventListener("click", function() {
    cur = cur.slice(0, -1);
    curDisplay.textContent = cur;
})

function calculate() {
    prev = Number(prev);
    cur = Number(cur);
    if (operator === '+') {
        prev += cur;
    } else if (operator === '-') {
        prev -= cur;
    } else if (operator === '×') {
        prev *= cur;
    } else {
        prev /= cur;
    }
    prev = Math.round(prev * 1000000000000) / 1000000000000;
    prev = prev.toString();
    cur = prev.toString();
}

equalBtn.addEventListener("click", function() {
    if (cur != '' && prev != '') {
        calculate();
        prevDisplay.textContent = '';
        curDisplay.textContent = prev;
    }
})
