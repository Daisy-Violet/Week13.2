let a = prompt('Введите первую переменную', 'a');
let b = prompt('Введите вторую переменную', 'b');

function sum(a, b) {
    return + a + + b;
}
let result1 = sum(a, b);
alert(result1);

function subtraction(a, b) {
    return a - b;
}
let result2 = subtraction(a, b);
alert(result2);

function multiplication(a, b) {
    return a * b;
}

let result3 = multiplication(a, b);
alert(result3);

function division(a, b) {
    return a / b;
}
let result4 = division(a, b);
alert(result4);