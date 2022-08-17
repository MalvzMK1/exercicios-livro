const submitButton = document.getElementById('submitButton');

const organizeNumbers = function () {
    const number1 = +document.getElementById('number1').value;
    const number2 = +document.getElementById('number2').value;
    const number3 = +document.getElementById('number3').value;
    const displayArea = document.getElementById('displayArea');

    let numbers = [number1, number2, number3];
    numbers.sort((a, b) => a - b);

    displayArea.textContent = numbers;
}

submitButton.addEventListener('click', organizeNumbers);