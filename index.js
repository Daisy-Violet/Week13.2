let a = prompt('Введите первую переменную', 'a');
let b = prompt('Введите вторую переменную', 'b');

function sum(a, b) {
    return + a + + b;
}
let result1 = sum(a, b);
function showSumResult() {
    alert(result1);
}

function subtraction(a, b) {
    return a - b;
}
let result2 = subtraction(a, b);
function showSubtractionResult() {
    alert(result2);
}

function multiplication(a, b) {
    return a * b;
}

let result3 = multiplication(a, b);
function showMultiplicationResult() {
    alert(result3);
}

function division(a, b) {
    return a / b;
}
let result4 = division(a, b);
function showDivisionResult() {
    alert(result4);
}