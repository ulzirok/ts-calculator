enum Operation {
  Plus = 'plus',
  Minus = 'minus',
  Multiply = 'multiply',
  Divide = 'divide'
}

const num1 = document.getElementById('num1') as HTMLInputElement;
const num2 = document.getElementById('num2') as HTMLInputElement;
const result = document.getElementById('result') as HTMLHeadingElement;
const buttons = document.querySelectorAll('button');

function calculate(a:number, b:number, operator: Operation): number {
  switch(operator) {
    case Operation.Plus:
      return a + b;
    case Operation.Minus:
      return a -b;
    case Operation.Multiply:
      return a * b;
    case Operation.Divide:
      return b !== 0 ? a / b : NaN;
    default:
      return NaN;
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const firstNum = Number(num1.value)
    const secondNum = Number(num2.value)
    const op = (button as HTMLButtonElement).dataset.op as Operation
    
    if(isNaN(firstNum) || isNaN(secondNum)) {
      result.textContent = 'Введите 2 числа!'
      return
    }
    
    const res = calculate(firstNum, secondNum, op)
    result.textContent = `Результат: ${res}`
  })
})