const calculateNumbers = function () {
    const number1 = +document.getElementById('number1').value;
    const number2 = +document.getElementById('number2').value;
    const number3 = +document.getElementById('number3').value;
    const result = document.getElementById('displayArea');

    let addition = number1 + number2 + number3;

    if (addition >= 100) {
        result.textContent = addition;
    } else {
        result.textContent = 'Menor que 100';
    }
}

document.getElementById('submit').addEventListener('click', calculateNumbers);