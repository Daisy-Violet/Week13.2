const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');

function clearInput() {
    num1.value = ''
    num2.value = ''
}

function sum() {
    const imputValueFirst = num1.value;
    const imputValueSecond = num2.value;
    const sumResult = +imputValueFirst + +imputValueSecond;
    result.innerHTML = sumResult;
    clearInput()
}
function subtraction() {
    const imputValueFirst = num1.value;
    const imputValueSecond = num2.value;
    const subResult = imputValueFirst - imputValueSecond;
    result.innerHTML = subResult;
    clearInput()
}

function multiplication() {
    const imputValueFirst = num1.value;
    const imputValueSecond = num2.value;
    const multResult = imputValueFirst * imputValueSecond;
    result.innerHTML = multResult;
    clearInput()
}

function division() {
    const imputValueFirst = num1.value;
    const imputValueSecond = num2.value;
    const divResult = imputValueFirst / imputValueSecond;
    result.innerHTML = divResult;
    clearInput()
}