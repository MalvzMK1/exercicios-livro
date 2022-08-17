const submitButton = document.getElementById('submitButton');

const calculateScoresMedia = function () {
    const score1 = +document.getElementById('score1').value;
    const score2 = +document.getElementById('score2').value;
    const score3 = +document.getElementById('score3').value;
    const score4 = +document.getElementById('score4').value;
    const resultArea = document.getElementById('resultArea');
    let status;

    if (score1 == '' || score2 == '' || score3 == '' || score4 == '') {
        alert('Insira as notas.');
    } else {
        let arithmeticMedia = (score1 + score2 + score3 + score4) / 4;
        if (arithmeticMedia < 50) {
            status = 'reprovado';
        } else {
            status = 'aprovado';
        }
    
        resultArea.innerHTML = `O(a) aluno(a) está ${status}. <br/> Média: ${arithmeticMedia.toFixed(2)}`;
    }
}

submitButton.addEventListener('click', calculateScoresMedia);