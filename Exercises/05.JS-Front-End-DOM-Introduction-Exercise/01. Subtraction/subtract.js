function subtract() {
    const firstNum = Number(document.getElementById('firstNumber').value);
    const secondNum = Number(document.getElementById('secondNumber').value);

    const resultElement = document.getElementById('result');

    resultElement.textContent = firstNum - secondNum;
} 