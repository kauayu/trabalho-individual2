const quizData = [
  {
    question: "1. Qual a função do óleo do motor?",
    options: [
      { text: "Lubrificar as peças do motor", correct: true },
      { text: "Desempenhar a função de combustível", correct: false },
      { text: "Servir como substituto do freio", correct: false },
    ],
  },
  {
    question: "2. Quando devemos trocar os pneus de um carro?",
    options: [
      { text: "A cada 2 anos, independente da quilometragem", correct: false },
      { text: "Quando a borracha do pneu está desgastada", correct: true },
      { text: "Nunca, os pneus não precisam de troca", correct: false },
    ],
  },
  {
    question: "3. O que é alinhamento de rodas?",
    options: [
      { text: "Ajuste na suspensão para melhorar o desempenho do motor", correct: false },
      { text: "Ajuste das rodas para garantir que o carro ande reto e sem puxar para um lado", correct: true },
      { text: "Troca de peças do carro que ficam danificadas com o tempo", correct: false },
    ],
  },
];

const quizContainer = document.getElementById("quiz-container");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");
const restartBtn = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

function loadQuestion() {
  answered = false;
  nextBtn.disabled = true;

  const currentQuestion = quizData[currentQuestionIndex];
  
  // Limpa o container
  quizContainer.innerHTML = "";

  // Cria a pergunta
  const questionEl = document.createElement("div");
  questionEl.classList.add("question");
  questionEl.innerText = currentQuestion.question;
  quizContainer.appendChild(questionEl);

  // Cria a lista de opções
  const optionsList = document.createElement("ul");
  optionsList.classList.add("options");

  currentQuestion.options.forEach((option, index) => {
    const optionItem = document.createElement("li");
    const optionBtn = document.createElement("button");
    optionBtn.innerText = option.text;
    optionBtn.addEventListener("click", () => selectOption(optionBtn, option.correct));
    optionItem.appendChild(optionBtn);
    optionsList.appendChild(optionItem);
  });

  quizContainer.appendChild(optionsList);
}

function selectOption(button, correct) {
  if (answered) return; // Não permite mudar após selecionar
  
  answered = true;
  nextBtn.disabled = false;

  // Marcar a opção selecionada
  const allOptions = document.querySelectorAll(".options button");
  allOptions.forEach(btn => btn.classList.remove("selected"));

  button.classList.add("selected");

  // Atualiza o score
  if (correct) {
    score++;
  }
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

restartBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  resultContainer.classList.add("hide");
  quizContainer.classList.remove("hide");
  nextBtn.classList.remove("hide");
  loadQuestion();
});

function showResult() {
  quizContainer.classList.add("hide");
  nextBtn.classList.add("hide");
  resultContainer.classList.remove("hide");

  resultText.innerText = `Você acertou ${score} de ${quizData.length} perguntas!`;
}
