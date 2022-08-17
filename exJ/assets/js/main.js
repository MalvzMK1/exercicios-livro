const validateOddEven = function () {
    const number = +document.getElementById('number').value;
    const displayArea = document.getElementById('displayArea');

    if (number % 2 == 0) {
        displayArea.textContent = 'Par';
    } else {
        displayArea.textContent = 'Ímpar';
    }
}

document.getElementById('submit').addEventListener('click', validateOddEven);