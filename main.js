document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o envio do formulário (recarregamento da página)
    
    let score = 0;
    const totalQuestions = 3;

    // Pergunta 1
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === 'correto') {
        score++;
    }

    // Pergunta 2
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === 'correto') {
        score++;
    }

    // Pergunta 3
    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === 'correto') {
        score++;
    }

    // Exibe o resultado
    const resultText = `Você acertou ${score} de ${totalQuestions} perguntas!`;
    document.getElementById('score').innerText = resultText;
    document.getElementById('result').style.display = 'block';
});
