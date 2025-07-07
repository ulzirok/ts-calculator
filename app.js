var Operation;
(function (Operation) {
    Operation["Plus"] = "plus";
    Operation["Minus"] = "minus";
    Operation["Multiply"] = "multiply";
    Operation["Divide"] = "divide";
})(Operation || (Operation = {}));
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var result = document.getElementById('result');
var buttons = document.querySelectorAll('button');
function calculate(a, b, operator) {
    switch (operator) {
        case Operation.Plus:
            return a + b;
        case Operation.Minus:
            return a - b;
        case Operation.Multiply:
            return a * b;
        case Operation.Divide:
            return b !== 0 ? a / b : NaN;
        default:
            return NaN;
    }
}
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        var firstNum = Number(num1.value);
        var secondNum = Number(num2.value);
        var op = button.dataset.op;
        if (isNaN(firstNum) || isNaN(secondNum)) {
            result.textContent = 'Введите 2 числа!';
            return;
        }
        var res = calculate(firstNum, secondNum, op);
        result.textContent = "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(res);
    });
});
