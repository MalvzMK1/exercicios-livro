const submitButton = document.getElementById('submitButton');

const showResult = function () {
    const number = +document.getElementById('number').value;
    const resultArea = document.getElementById('result');

    if (number >= 0){
        resultArea.textContent = number;
    } else {
        resultArea.textContent = number * -1;
    }
}

submitButton.addEventListener('click', showResult);