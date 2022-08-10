'use strict'

const calculateResult = function () {
    const firstNumber = +document.querySelector('#firstNumber').value;
    const secondNumber = +document.querySelector('#secondNumber').value;
    const form = document.querySelector('#form');
    const resultArea = document.querySelector('#result');

    if (form.reportValidity()) {
        if (firstNumber > secondNumber) {
            resultArea.textContent = firstNumber - secondNumber;
        } else {
            resultArea.textContent = secondNumber - firstNumber;
        }
    }
}

document.querySelector('#calculateButton').addEventListener('click', calculateResult);