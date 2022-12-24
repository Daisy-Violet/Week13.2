const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');

function clearInput() {
    num1.value = ''
    num2.value = ''
}

function sum() {
    result.innerHTML = +num1.value + +num2.value;
    clearInput()
}
function subtraction() {
    result.innerHTML = num1.value - num2.value;
    clearInput()
}

function multiplication() {
    result.innerHTML = num1.value * num2.value;
    clearInput()
}

function division() {
    if (num2.value == 0) {
        result.innerHTML = "На ноль делить нельзя!";
    }
    else {
        result.innerHTML = num1.value / num2.value;
    }
    clearInput()
}